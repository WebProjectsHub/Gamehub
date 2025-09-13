    const board = document.getElementById("board");
    const moveList = document.getElementById("moveList");
    const moves = []; // store moves for saving

    // Unicode chess pieces
    const initialPosition = [
      ["♜","♞","♝","♛","♚","♝","♞","♜"],
      ["♟","♟","♟","♟","♟","♟","♟","♟"],
      ["","","","","","","",""],
      ["","","","","","","",""],
      ["","","","","","","",""],
      ["","","","","","","",""],
      ["♙","♙","♙","♙","♙","♙","♙","♙"],
      ["♖","♘","♗","♕","♔","♗","♘","♖"]
    ];

    let selected = null;

    function renderBoard() {
      board.innerHTML = "";
      for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
          const square = document.createElement("div");
          square.className = "square " + ((row+col)%2 === 0 ? "light" : "dark");
          square.dataset.row = row;
          square.dataset.col = col;
          square.textContent = initialPosition[row][col];
          square.addEventListener("click", onSquareClick);
          board.appendChild(square);
        }
      }
    }

    function onSquareClick(e) {
      const row = e.target.dataset.row;
      const col = e.target.dataset.col;
      if (!selected && initialPosition[row][col] !== "") {
        selected = {row, col, piece: initialPosition[row][col]};
        e.target.style.outline = "3px solid red";
      } else if (selected) {
        // Move piece
        if (row != selected.row || col != selected.col) {
          initialPosition[row][col] = selected.piece;
          initialPosition[selected.row][selected.col] = "";
          logMove(selected, {row, col});
        }
        selected = null;
        renderBoard();
      }
    }

    function logMove(from, to) {
      const notation = `${from.piece} ${String.fromCharCode(97+parseInt(from.col))}${8-from.row} → ${String.fromCharCode(97+parseInt(to.col))}${8-to.row}`;
      moves.push(notation);
      const li = document.createElement("li");
      li.textContent = notation;
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
