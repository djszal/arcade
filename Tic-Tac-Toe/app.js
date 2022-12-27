let state = {};

function buildInitialState() {
  state.board = [null, null, null, null, null, null, null, null, null];
  state.players = [null, null];
}
function dynamicState() {
  state.score = [0, 0];
}
dynamicState();
//********************** DOM Selectors *****************************

const boardElem = document.querySelector(".board");
const playersBoxElem = document.querySelector(".players-box");
const scoreBoxElem = document.querySelector(".score-box");

//********************** Render DOM Initial State *****************************
let count = 0;
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

// function checkGuess() {
//   alert("I am a placeholder");
// }
// checkGuess();

function renderBoard() {
  boardElem.innerText = "";
  for (let i = 0; i < state.board.length; i++) {
    const squareElem = document.createElement("div");
    squareElem.classList.add("box");
    boardElem.append(squareElem);
  }
}

function renderPlayers() {
  //   let text = null;
  if (state.players[0] === null && state.players[1] === null) {
    text = `<input name="player1" placeholder="Enter Player 1"/>
        <input name="player2" placeholder="Enter Player 2"/>
        <input type="button" class="start" value="Start Game"/>`;
  }
  playersBoxElem.innerHTML = text;
}

function scoreBox() {
  scoreBoxElem.innerText = "Score";
}

function renderScoreNames() {
  for (let i = 0; i < state.players.length; i++) {
    const plyrName = state.players[i];
    console.log(state.score);
    const score = state.score[0];
    const plyrNameScore = document.createElement("h3");
    plyrNameScore.setAttribute("id", "player-name-score");
    plyrNameScore.innerText = plyrName + ": " + score;
    scoreBoxElem.appendChild(plyrNameScore);
  }
}

function restartButton() {
  let reset = `<input type="button" class="reset" value="Reset"/>`;
  const resetButton = document.createElement("div");
  playersBoxElem.append(resetButton);
  resetButton.innerHTML = reset;
}

function placeMarks(event) {
  if (event.target.innerText === "" && state.players[0] !== null) {
    if (count % 2 === 0) {
      event.target.innerText = "X";
    } else {
      event.target.innerText = "O";
    }
    count++;
    console.log(count);
  }
}

function winner() {
  if (
    state.board[0] === "X" &&
    state.board[1] === "X" &&
    state.board[2] === "X"
  ) {
    playersBoxElem.innerHTML = `${state.players[0]} Wins!!`;
    state.score[0] = 1;
    restartButton();
  } else if (
    state.board[3] === "X" &&
    state.board[4] === "X" &&
    state.board[5] === "X"
  ) {
    playersBoxElem.innerHTML = `${state.players[0]} Wins!!`;
    restartButton();
  } else if (
    state.board[6] === "X" &&
    state.board[7] === "X" &&
    state.board[8] === "X"
  ) {
    playersBoxElem.innerHTML = `${state.players[0]} Wins!!`;
    restartButton();
  } else if (
    state.board[0] === "X" &&
    state.board[3] === "X" &&
    state.board[6] === "X"
  ) {
    playersBoxElem.innerHTML = `${state.players[0]} Wins!!`;
    restartButton();
  } else if (
    state.board[1] === "X" &&
    state.board[4] === "X" &&
    state.board[7] === "X"
  ) {
    playersBoxElem.innerHTML = `${state.players[0]} Wins!!`;
    restartButton();
  } else if (
    state.board[2] === "X" &&
    state.board[5] === "X" &&
    state.board[8] === "X"
  ) {
    playersBoxElem.innerHTML = `${state.players[0]} Wins!!`;
    restartButton();
  } else if (
    state.board[0] === "X" &&
    state.board[4] === "X" &&
    state.board[8] === "X"
  ) {
    playersBoxElem.innerHTML = `${state.players[0]} Wins!!`;
    restartButton();
  } else if (
    state.board[2] === "X" &&
    state.board[4] === "X" &&
    state.board[6] === "X"
  ) {
    playersBoxElem.innerHTML = `${state.players[0]} Wins!!`;
    restartButton();
  } else if (
    state.board[0] === "O" &&
    state.board[1] === "O" &&
    state.board[2] === "O"
  ) {
    playersBoxElem.innerHTML = `${state.players[1]} Wins!!`;
    restartButton();
  } else if (
    state.board[3] === "O" &&
    state.board[4] === "O" &&
    state.board[5] === "O"
  ) {
    playersBoxElem.innerHTML = `${state.players[1]} Wins!!`;
    restartButton();
  } else if (
    state.board[6] === "O" &&
    state.board[7] === "O" &&
    state.board[8] === "O"
  ) {
    playersBoxElem.innerHTML = `${state.players[1]} Wins!!`;
    restartButton();
  } else if (
    state.board[0] === "O" &&
    state.board[3] === "O" &&
    state.board[6] === "O"
  ) {
    playersBoxElem.innerHTML = `${state.players[1]} Wins!!`;
    restartButton();
  } else if (
    state.board[1] === "O" &&
    state.board[4] === "O" &&
    state.board[7] === "O"
  ) {
    playersBoxElem.innerHTML = `${state.players[1]} Wins!!`;
    restartButton();
  } else if (
    state.board[2] === "O" &&
    state.board[5] === "O" &&
    state.board[8] === "O"
  ) {
    playersBoxElem.innerHTML = `${state.players[1]} Wins!!`;
    restartButton();
  } else if (
    state.board[0] === "O" &&
    state.board[4] === "O" &&
    state.board[8] === "O"
  ) {
    playersBoxElem.innerHTML = `${state.players[1]} Wins!!`;
    restartButton();
  } else if (
    state.board[2] === "O" &&
    state.board[4] === "O" &&
    state.board[6] === "O"
  ) {
    playersBoxElem.innerHTML = `${state.players[1]} Wins!!`;
    restartButton();
  } else if (
    count === 9 &&
    playersBoxElem.innerHTML !== `${state.players[1]} Wins!!` &&
    playersBoxElem.innerHTML !== `${state.players[0]} Wins!!`
  ) {
    playersBoxElem.innerHTML = `Draw!!`;
    restartButton();
  }
}

buildInitialState();
renderBoard();
renderPlayers();
scoreBox();

// const boxes = document.getElementsByClassName("box");
const boxes = document.querySelectorAll(".box");
const divs = document.getElementsByTagName("div");
const startButton = document.querySelector(".start");
// console.log(boxes);
// console.log(boardElem);
// console.log(count);

// //****************** LISTENERS ********************************

// Allows input of player names and renders some game elements after click.
playersBoxElem.addEventListener("click", (event) => {
  console.log("Hello Start");
  if (event.target.className === "start" && randomNumber % 2 === 0) {
    const player1Input = document.querySelector("input[name=player1]");
    const player1Value = player1Input.value;
    state.players[0] = player1Value;

    const player2Input = document.querySelector("input[name=player2]");
    const player2Value = player2Input.value;
    state.players[1] = player2Value;

    playersBoxElem.innerHTML = `It is ${state.players[0]}'s turn.`;

    renderScoreNames();
  } else if (event.target.className === "start" && randomNumber % 2 !== 0) {
    const player1Input = document.querySelector("input[name=player1]");
    const player1Value = player1Input.value;
    state.players[0] = player1Value;

    const player2Input = document.querySelector("input[name=player2]");
    const player2Value = player2Input.value;
    state.players[1] = player2Value;

    playersBoxElem.innerHTML = `It is ${state.players[1]}'s turn.`;

    renderScoreNames();
  }
});

boardElem.addEventListener("click", (event) => {
  placeMarks(event);

  state.board[0] = boxes[0].innerText;
  state.board[1] = boxes[1].innerText;
  state.board[2] = boxes[2].innerText;
  state.board[3] = boxes[3].innerText;
  state.board[4] = boxes[4].innerText;
  state.board[5] = boxes[5].innerText;
  state.board[6] = boxes[6].innerText;
  state.board[7] = boxes[7].innerText;
  state.board[8] = boxes[8].innerText;

  if (playersBoxElem.innerHTML === `It is ${state.players[0]}'s turn.`) {
    playersBoxElem.innerHTML = `It is ${state.players[1]}'s turn.`;
  } else {
    playersBoxElem.innerHTML = `It is ${state.players[0]}'s turn.`;
  }
  winner();
});

// Reset Board
playersBoxElem.addEventListener("click", (event) => {
  if (event.target.className === "reset") {
    // boardElem.innerText = null;
    buildInitialState();
    renderBoard();
    renderPlayers();
    count = 0;
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].innerText = null;
    }
    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log("reset count", count);
    console.log("reset rando", randomNumber);
  }
});
