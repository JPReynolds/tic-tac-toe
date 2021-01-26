let board = ["", "", "", "", "", "", "", "", ""];

const boardContainer = document.querySelector(".board");

const renderBoard = () => {
    boardContainer.innerHTML = "";
    board.forEach((e, i) => {
        boardContainer.innerHTML += `<div id="square-${i}" class="square" onclick="addPlayerMove(${i})">${play_board[i]}</div>`;
        if (e == player || e == computer) {
            document.querySelector(`#square-${i}`).classList.add("occupied");
          }
    })
}

renderBoard();