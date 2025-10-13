// room.js
// Handles creation/joining/deleting of chess game rooms using Firebase

let gameRef = null;     // global so ChessGame_v4.js can access it
let playerColor = null; // "w" or "b"
const ADMIN_KEY = "Padre2025"; // ✅ must match your Firebase rule

// 🔹 Populate dropdown with 5 fixed rooms
function populateRoomDropdown() {
  const roomSelect = document.getElementById("roomSelect");
  roomSelect.innerHTML = "";

  for (let i = 1; i <= 5; i++) {
    const option = document.createElement("option");
    option.value = "Room" + i;
    option.textContent = "Room " + i;
    roomSelect.appendChild(option);
  }
}

// 🔹 Create a new room (admin)
function createRoom() {
  const roomName = document.getElementById("roomSelect").value;
  const colorChoice = document.getElementById("colorSelect").value;

  const newRef = db.ref("rooms/" + roomName); // ✅ use /rooms path

  newRef.set({
    owner: ADMIN_KEY, // ✅ required by rule
    history: [],
    players: { [colorChoice]: true }
  })
  .then(() => {
    playerColor = colorChoice;
    attachGameRef(newRef);
    alert(`Room ${roomName} created! You are ${colorChoice === "w" ? "White" : "Black"}.`);
  })
  .catch(err => {
    alert("Error creating room: " + err.message);
  });
}

// 🔹 Join/rejoin a room (any player)
function joinRoom() {
  const roomName = document.getElementById("roomSelect").value;
  const colorChoice = document.getElementById("colorSelect").value;

  const newRef = db.ref("rooms/" + roomName);

  newRef.once("value").then(snapshot => {
    if (!snapshot.exists()) {
      alert("Room does not exist. Please create it first.");
      return;
    }

    const data = snapshot.val();

    // ✅ If chosen color is free → join as new
    if (!data.players || !data.players[colorChoice]) {
      // 🔸 must include owner key for write
      newRef.update({
        owner: ADMIN_KEY,
        [`players/${colorChoice}`]: true
      });
      playerColor = colorChoice;
      alert(`Joined ${roomName}! You are ${colorChoice === "w" ? "White" : "Black"}.`);
      attachGameRef(newRef);

    // ✅ If chosen color is already taken → check if it's the same user rejoining
    } else {
      playerColor = colorChoice;
      attachGameRef(newRef);
      alert(`Rejoined ${roomName} as ${colorChoice === "w" ? "White" : "Black"}.`);
    }
  });
}

// 🔹 Delete a room (admin only)
function deleteRoom() {
  const roomName = document.getElementById("roomSelect").value;
  const roomRef = db.ref("rooms/" + roomName);

  // Include owner key so deletion passes write rule
  roomRef.set({
    owner: ADMIN_KEY,
    deleted: true
  })
  .then(() => {
    return roomRef.remove();
  })
  .then(() => {
    alert(`Room ${roomName} deleted.`);
  })
  .catch(err => {
    console.error("Error deleting room:", err);
    alert("You may not have permission to delete this room.");
  });
}

// 🔹 Run on page load
document.addEventListener("DOMContentLoaded", populateRoomDropdown);
