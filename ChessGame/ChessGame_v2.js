// Include chess.js in your HTML before this script:
// <script src="https://cdnjs.cloudflare.com/ajax/libs/chess.js/1.0.0/chess.min.js"></script>

const board = document.getElementById("board");
const moveList = document.getElementById("moveList");
const game = new Chess(); // chess.js object

let selectedSquare = null;

function renderBoard() {
    board.innerHTML = "";
    const files = ["a","b","c","d","e","f","g","h"];
    for (let row = 7; row >= 0; row--) {
        for (let col = 0; col < 8; col++) {
            const square = document.createElement("div");
            square.className = "square " + ((row+col)%2 === 0 ? "light" : "dark");
            const squareId = files[col] + (row+1);
            square.id = squareId;

            const piece = game.get(squareId);
            if(piece) {
                const pieceEl = document.createElement("span");
                pieceEl.textContent = getPieceSymbol(piece);
                square.appendChild(pieceEl);
            }

            square.addEventListener("click", () => onSquareClick(squareId));
            board.appendChild(square);
        }
    }
}

function getPieceSymbol(piece) {
    const symbols = {
        p: "♟", r: "♜", n: "♞", b: "♝", q: "♛", k: "♚",
        P: "♙", R: "♖", N: "♘", B: "♗", Q: "♕", K: "♔"
    };
    return piece.color === "w" ? symbols[piece.type.toUpperCase()] : symbols[piece.type];
}

function onSquareClick(square) {
    const piece = game.get(square);
    if(selectedSquare) {
        const move = game.move({ from: selectedSquare, to: square, promotion: "q" });
        if(move) {
            addMoveToList(move.san);
            selectedSquare = null;
            renderBoard();
        } else {
            alert("Illegal move!");
            selectedSquare = null;
        }
    } else if(piece && piece.color === game.turn()) {
        selectedSquare = square;
    }
}

function addMoveToList(move) {
    const li = document.createElement("li");
    li.textContent = move;
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
        // Remove last move from move list
        if(moveList.lastChild) moveList.removeChild(moveList.lastChild);
        renderBoard();
    } else {
        alert("No moves to undo!");
    }
}




renderBoard();
