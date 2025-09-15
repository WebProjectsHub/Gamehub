// Include chess.js in your HTML before this script:
// <script src="https://cdnjs.cloudflare.com/ajax/libs/chess.js/1.0.0/chess.min.js"></script>

const board = document.getElementById("board");
const moveList = document.getElementById("moveList");
const game = new Chess(); // chess.js object

let selectedSquare = null;

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

            const piece = game.get(squareId);
            if(piece) {
                const pieceEl = document.createElement("span");
                pieceEl.className = "piece " + (piece.color === "w" ? "white-piece" : "black-piece");

                // Use explicit glyph mapping by color and type
                pieceEl.textContent = getPieceSymbol(piece);

                // Force black pieces to visibly render in black text color
                // (this ensures glyphs show as black even if some global CSS changes text color)
                if (piece.color === "b") {
                    pieceEl.style.color = "#000";
                } else {
                    // optional: ensure white-piece glyphs use default color (do not force white)
                    pieceEl.style.color = ""; 
                }

                square.appendChild(pieceEl);
            }

            square.addEventListener("click", () => onSquareClick(squareId));
            board.appendChild(square);
        }
    }

    updateTurnDisplay(); // update whose turn it is
}

/**
 * Return the correct glyph for a piece object returned by chess.js.
 * piece: { type: 'p'|'r'|'n'|'b'|'q'|'k', color: 'w'|'b' }
 */
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
            selectedSquare = null; // deselect after move
        } else {
            selectedSquare = null; // deselect on illegal move
        }
        renderBoard(); // redraw board to update selection
    } else if(piece && piece.color === game.turn()) {
        selectedSquare = square; // select piece
        renderBoard();           // redraw board to highlight selection
    }
}

function addMoveToList(move) {
    const pieceObj = { type: move.piece, color: move.color };
    const symbol = getPieceSymbol(pieceObj);

    // If the move captures a piece, chess.js sets move.captured
    const captureSymbol = move.captured ? "×" : "→";

    // Convert coordinates to uppercase
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
    const move = game.undo(); // undo last move
    if(move) {
        if(moveList.lastChild) moveList.removeChild(moveList.lastChild);
        renderBoard();
        updateTurnDisplay(); // update turn after undo
    } else {
        alert("No moves to undo!");
    }
}

function highlightSelected(squareId) {
    document.querySelectorAll('.square').forEach(sq => sq.classList.remove('selected'));
    if(squareId) document.getElementById(squareId).classList.add('selected');
}

renderBoard();
