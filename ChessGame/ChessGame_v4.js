// ChessGame_v4.js
// Include chess.js in your HTML before this script

const board = document.getElementById("board");
const moveList = document.getElementById("moveList");
const game = new Chess(); // chess.js object

let selectedSquare = null;
let isUpdatingFromFirebase = false; // flag to prevent loops

// piece glyph table (explicit by color + type)
const PIECE_GLYPHS = {
  w: { p: "♙", r: "♖", n: "♘", b: "♗", q: "♕", k: "♔" },
  b: { p: "♟", r: "♜", n: "♞", b: "♝", q: "♛", k: "♚" }
};

function updateTurnDisplay() {
  const turnDisplay = document.getElementById("turnDisplay");
  if (!turnDisplay) return;
  const turn = game.turn() === "w" ? "White" : "Black";
  turnDisplay.innerHTML = `<strong>Turn:</strong> ${turn}`;
}

function updateStatus() {
  const statusDiv = document.getElementById("status");
  if (!statusDiv) return;

  statusDiv.className = ""; // reset

  if (game.in_checkmate()) {
    statusDiv.textContent = "Checkmate!";
    statusDiv.classList.add("checkmate");
  } else if (game.in_stalemate()) {
    statusDiv.textContent = "Stalemate!";
    statusDiv.classList.add("stalemate");
  } else if (game.in_check()) {
    statusDiv.textContent = "Check!";
    statusDiv.classList.add("check");
  } else {
    statusDiv.textContent = "";
  }
}

function renderBoard() {
  board.innerHTML = "";
  const files = ["a","b","c","d","e","f","g","h"];
  for (let row = 7; row >= 0; row--) {
    for (let col = 0; col < 8; col++) {
      const square = document.createElement("div");
      square.className = "square " + ((row+col)%2 === 0 ? "light" : "dark");
      const squareId = files[col] + (row+1);
      square.id = squareId;

      // Highlight selected square
      if(squareId === selectedSquare) {
        square.classList.add("selected");
      }

      // 🔹 NEW: Highlight last move squares
      const lm = getLastMove(); // from highlight.js
      if (lm) {
        if (squareId === lm.from) {
          square.classList.add("highlight-from");
        }
        if (squareId === lm.to) {
          square.classList.add("highlight-to");
        }
      }

      const piece = game.get(squareId);
      if (piece) {
        const pieceEl = document.createElement("span");
        pieceEl.className = "piece " + (piece.color === "w" ? "white-piece" : "black-piece");
        pieceEl.textContent = getPieceSymbol(piece);
        pieceEl.style.color = piece.color === "b" ? "#000" : "";

        // Pulsate king symbol if in check or checkmate
        if (piece.type === "k") {
          if (game.in_checkmate() && piece.color === game.turn()) {
            square.classList.add("king-in-checkmate");
          } else if (game.in_check() && piece.color === game.turn()) {
            pieceEl.classList.add("king-in-check");
          }
        }

        square.appendChild(pieceEl);
      }

      square.addEventListener("click", () => onSquareClick(squareId));
      board.appendChild(square);
    }
  }
  updateTurnDisplay(); 
  updateStatus();
}

function getPieceSymbol(piece) {
  if (!piece || !piece.type || !piece.color) return "";
  return PIECE_GLYPHS[piece.color][piece.type] || "";
}

function onSquareClick(square) {
  const piece = game.get(square);

  if(selectedSquare) {
    const move = game.move({ from: selectedSquare, to: square, promotion: "q" });
    if(move) {
      addMoveToList(move);
      syncGameToFirebase();  
      setLastMove(move);   // 🔹 NEW: track last move in highlight.js
      selectedSquare = null;
    } else {
      selectedSquare = null;
    }
    renderBoard();
  } else if(piece && piece.color === game.turn()) {
    selectedSquare = square;
    renderBoard();
  }
}

function addMoveToList(move) {
  const pieceObj = { type: move.piece, color: move.color };
  const symbol = getPieceSymbol(pieceObj);
  const captureSymbol = move.captured ? "×" : "→";
  const from = move.from.toUpperCase();
  const to = move.to.toUpperCase();
  const notation = `${symbol} ${from} ${captureSymbol} ${to}`;

  const li = document.createElement("li");
  li.textContent = notation;
  moveList.appendChild(li);
}

function downloadMoves() {
  const moves = Array.from(moveList.children).map(li => li.textContent).join("\n");
  const blob = new Blob([moves], {type: "text/plain"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "chess_moves.txt";
  a.click();
  URL.revokeObjectURL(url);
}

function copyMoves() {
  const moves = Array.from(moveList.children).map(li => li.textContent).join("\n");
  navigator.clipboard.writeText(moves).then(() => alert("Moves copied!"));
}

function undoMove() {
  const move = game.undo();
  if(move) {
    if(moveList.lastChild) moveList.removeChild(moveList.lastChild);
    setLastMove(null);  // 🔹 NEW: clear highlight when undo
    renderBoard();
    updateTurnDisplay();
    syncGameToFirebase(); 
  } else {
    alert("No moves to undo!");
  }
}

function syncGameToFirebase() {
  if (typeof gameRef === "undefined") return; 
  const history = game.history({ verbose: true });
  isUpdatingFromFirebase = true;
  gameRef.set({ history });
  isUpdatingFromFirebase = false;
}

// Listen for Firebase updates
if (typeof gameRef !== "undefined") {
  gameRef.on("value", snapshot => {
    if (!snapshot.exists()) return;
    if (isUpdatingFromFirebase) return;

    const data = snapshot.val();
    if (data.history) {
      game.reset();
      moveList.innerHTML = "";
      data.history.forEach(move => {
        game.move(move);
        addMoveToList(move);
      });
      // 🔹 NEW: highlight last move from history
      setLastMove(data.history[data.history.length - 1] || null);
      renderBoard();
    }
  });
}

function resetGame() {
  game.reset();                 
  moveList.innerHTML = "";      
  setLastMove(null);   // 🔹 NEW: clear highlights
  renderBoard();                
  updateTurnDisplay();          
  syncGameToFirebase();         
}

renderBoard();
