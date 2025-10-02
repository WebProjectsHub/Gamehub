// room.js
// Handles creation/joining/deleting of chess game rooms using Firebase

let gameRef = null;     // global so ChessGame_v4.js can access it
let playerColor = null; // "w" or "b"

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

// 🔹 Create a new room
function createRoom() {
  const roomName = document.getElementById("roomSelect").value;
  const colorChoice = document.getElementById("colorSelect").value;

  const newRef = db.ref("games/" + roomName);

  newRef.set({
    history: [],
    players: { [colorChoice]: true }
  });

  playerColor = colorChoice;
  attachGameRef(newRef);
  alert(`Room ${roomName} created! You are ${colorChoice === "w" ? "White" : "Black"}.`);
}

// 🔹 Join/rejoin a room
function joinRoom() {
  const roomName = document.getElementById("roomSelect").value;
  const colorChoice = document.getElementById("colorSelect").value;

  const newRef = db.ref("games/" + roomName);

  newRef.once("value").then(snapshot => {
    if (!snapshot.exists()) {
      alert("Room does not exist. Please create it first.");
      return;
    }

    const data = snapshot.val();

    // ✅ If chosen color is free → join as new
    if (!data.players || !data.players[colorChoice]) {
      newRef.child("players/" + colorChoice).set(true);
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

// 🔹 Delete a room
function deleteRoom() {
  const roomName = document.getElementById("roomSelect").value;
  db.ref("games/" + roomName).remove()
    .then(() => {
      alert(`Room ${roomName} deleted.`);
    })
    .catch(err => {
      console.error("Error deleting room:", err);
    });
}

// 🔹 Run on page load
document.addEventListener("DOMContentLoaded", populateRoomDropdown);
