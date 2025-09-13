	
const game = new Chess();      // chess.js object to handle rules
let selectedSquare = null;     // replaces your "selected" object
	


    const board = document.getElementById("board");
    const moveList = document.getElementById("moveList");
    const moves = []; // store moves for saving



	
function getPieceSymbol(piece) {
    const symbols = {
        p: "♟", r: "♜", n: "♞", b: "♝", q: "♛", k: "♚",
        P: "♙", R: "♖", N: "♘", B: "♗", Q: "♕", K: "♔"
    };
    return piece.color === "w" ? symbols[piece.type.toUpperCase()] : symbols[piece.type];
}



    let selected = null;




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





function addMoveToList(move) {
    const li = document.createElement("li");
    li.textContent = move;
    moveList.appendChild(li);
}


    function downloadMoves() {
      const blob = new Blob([moves.join("\n")], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "chess_moves.txt";
      a.click();
      URL.revokeObjectURL(url);
    }

    function copyMoves() {
      const text = moves.join("\n");
      navigator.clipboard.writeText(text).then(() => {
        alert("Moves copied to clipboard!");
      });
    }

    renderBoard();
