let state = {};

function buildInitialState() {
  state.board = [null, null, null, null, null, null, null, null, null];
}
function dynamicState() {
  state.score = [0, 0];
  state.players = [null, null];
  state.gameOver = false;
}
dynamicState();
//********************** DOM Selectors *****************************

const boardElem = document.querySelector(".board");
const playersBoxElem = document.querySelector(".players-box");
const scoreBoxElem = document.querySelector(".score-box");

//********************** Render DOM Initial State *****************************
let count = 0;
let randomNumber = Math.floor(Math.random() * 100) + 1;


function renderBoard() {
  boardElem.innerText = "";
  for (let i = 0; i < state.board.length; i++) {
    const squareElem = document.createElement("div");
    squareElem.classList.add("box");
    boardElem.append(squareElem);
  }
}

function renderPlayers() {
  let text = null;
  if (state.players[0] === null && state.players[1] === null) {
    text = `<input name="player1" placeholder="Enter Player 1"/>
        <input name="player2" placeholder="Enter Player 2"/>
        <input type="button" class="start" value="Start Game"/>`;
  }
  playersBoxElem.innerHTML = text;
}

function renderScoreNames() {
  scoreBoxElem.innerHTML = `
  <h3>Score</h3>
  <div>${state.players[0]} : ${state.score[0]}</div>
  <div>${state.players[1]} : ${state.score[1]}</div>
  `;
}

function resetButton() {
  let reset = `<input type="button" class="reset" value="Reset"/>`;
  const resetButton = document.createElement("div");
  playersBoxElem.append(resetButton);
  resetButton.innerHTML = reset;
}

function placeMarks(event) {
  if (
    event.target.innerText === "" &&
    state.players[0] !== null &&
    playersBoxElem.innerText !== `${state.players[0]} Wins!!` &&
    playersBoxElem.innerText !== `${state.players[1]} Wins!!`
  ) {
    if (count % 2 === 0) {
      event.target.innerText = "X";
    } else {
      event.target.innerText = "O";
    }
    count++;
    
  }
}

function winner() {
  if (
    state.board[0] === "X" &&
    state.board[1] === "X" &&
    state.board[2] === "X"
  ) {
    if (randomNumber % 2 === 0) {
      playersBoxElem.innerHTML = `${state.players[0]} Wins!!`;
      state.score[0] += 1;
    } else {
      playersBoxElem.innerHTML = `${state.players[1]} Wins!!`;
      state.score[1]++;
    }
    state.gameOver=true;
    resetButton();
  } else if (
    state.board[3] === "X" &&
    state.board[4] === "X" &&
    state.board[5] === "X"
  ) {
    if (randomNumber % 2 === 0) {
      playersBoxElem.innerHTML = `${state.players[0]} Wins!!`;
      state.score[0]++;
    } else {
      playersBoxElem.innerHTML = `${state.players[1]} Wins!!`;
      state.score[1]++;
    }
    state.gameOver=true;
    resetButton();
  } else if (
    state.board[6] === "X" &&
    state.board[7] === "X" &&
    state.board[8] === "X"
  ) {
    if (randomNumber % 2 === 0) {
      playersBoxElem.innerHTML = `${state.players[0]} Wins!!`;
      state.score[0]++;
      
    } else {
      playersBoxElem.innerHTML = `${state.players[1]} Wins!!`;
      state.score[1]++;
      
    }
    state.gameOver=true;
    resetButton();
  } else if (
    state.board[0] === "X" &&
    state.board[3] === "X" &&
    state.board[6] === "X"
  ) {
    if (randomNumber % 2 === 0) {
      playersBoxElem.innerHTML = `${state.players[0]} Wins!!`;
      state.score[0]++;
      
    } else {
      playersBoxElem.innerHTML = `${state.players[1]} Wins!!`;
      state.score[1]++;
      
    }
    state.gameOver=true;
    resetButton();
  } else if (
    state.board[1] === "X" &&
    state.board[4] === "X" &&
    state.board[7] === "X"
  ) {
    if (randomNumber % 2 === 0) {
      playersBoxElem.innerHTML = `${state.players[0]} Wins!!`;
      state.score[0]++;
      
    } else {
      playersBoxElem.innerHTML = `${state.players[1]} Wins!!`;
      state.score[1]++;
      
    }
    state.gameOver=true;
    resetButton();
  } else if (
    state.board[2] === "X" &&
    state.board[5] === "X" &&
    state.board[8] === "X"
  ) {
    if (randomNumber % 2 === 0) {
      playersBoxElem.innerHTML = `${state.players[0]} Wins!!`;
      state.score[0]++;
      
    } else {
      playersBoxElem.innerHTML = `${state.players[1]} Wins!!`;
      state.score[1]++;
     
    }
    state.gameOver=true;
    resetButton();
  } else if (
    state.board[0] === "X" &&
    state.board[4] === "X" &&
    state.board[8] === "X"
  ) {
    if (randomNumber % 2 === 0) {
      playersBoxElem.innerHTML = `${state.players[0]} Wins!!`;
      state.score[0]++;
     
    } else {
      playersBoxElem.innerHTML = `${state.players[1]} Wins!!`;
      state.score[1]++;
      
    }
    state.gameOver=true;
    resetButton();
  } else if (
    state.board[2] === "X" &&
    state.board[4] === "X" &&
    state.board[6] === "X"
  ) {
    if (randomNumber % 2 === 0) {
      playersBoxElem.innerHTML = `${state.players[0]} Wins!!`;
      state.score[0]++;
      
    } else {
      playersBoxElem.innerHTML = `${state.players[1]} Wins!!`;
      state.score[1]++;
      
    }
    state.gameOver=true;
    resetButton();
  } else if (
    state.board[0] === "O" &&
    state.board[1] === "O" &&
    state.board[2] === "O"
  ) {
    if (randomNumber % 2 === 0) {
      playersBoxElem.innerHTML = `${state.players[1]} Wins!!`;
      state.score[1]++;
     
    } else {
      playersBoxElem.innerHTML = `${state.players[0]} Wins!!`;
      state.score[0]++;
     
    }
    state.gameOver=true;
    resetButton();
  } else if (
    state.board[3] === "O" &&
    state.board[4] === "O" &&
    state.board[5] === "O"
  ) {
    if (randomNumber % 2 === 0) {
      playersBoxElem.innerHTML = `${state.players[1]} Wins!!`;
      state.score[1]++;
      
    } else {
      playersBoxElem.innerHTML = `${state.players[0]} Wins!!`;
      state.score[0]++;
     
    }
    state.gameOver=true;
    resetButton();
  } else if (
    state.board[6] === "O" &&
    state.board[7] === "O" &&
    state.board[8] === "O"
  ) {
    if (randomNumber % 2 === 0) {
      playersBoxElem.innerHTML = `${state.players[1]} Wins!!`;
      state.score[1]++;
     
    } else {
      playersBoxElem.innerHTML = `${state.players[0]} Wins!!`;
      state.score[0]++;
     
    }
    state.gameOver=true;
    resetButton();
  } else if (
    state.board[0] === "O" &&
    state.board[3] === "O" &&
    state.board[6] === "O"
  ) {
    if (randomNumber % 2 === 0) {
      playersBoxElem.innerHTML = `${state.players[1]} Wins!!`;
      state.score[1]++;
      
    } else {
      playersBoxElem.innerHTML = `${state.players[0]} Wins!!`;
      state.score[0]++;
      
    }
    state.gameOver=true;
    resetButton();
  } else if (
    state.board[1] === "O" &&
    state.board[4] === "O" &&
    state.board[7] === "O"
  ) {
    if (randomNumber % 2 === 0) {
      playersBoxElem.innerHTML = `${state.players[1]} Wins!!`;
      state.score[1]++;
      
    } else {
      playersBoxElem.innerHTML = `${state.players[0]} Wins!!`;
      state.score[0]++;
      
    }
    state.gameOver=true;
    resetButton();
  } else if (
    state.board[2] === "O" &&
    state.board[5] === "O" &&
    state.board[8] === "O"
  ) {
    if (randomNumber % 2 === 0) {
      playersBoxElem.innerHTML = `${state.players[1]} Wins!!`;
      state.score[1]++;
      
    } else {
      playersBoxElem.innerHTML = `${state.players[0]} Wins!!`;
      state.score[0]++;
      
    }
    state.gameOver=true;
    resetButton();
  } else if (
    state.board[0] === "O" &&
    state.board[4] === "O" &&
    state.board[8] === "O"
  ) {
    if (randomNumber % 2 === 0) {
      playersBoxElem.innerHTML = `${state.players[1]} Wins!!`;
      state.score[1]++;
     
    } else {
      playersBoxElem.innerHTML = `${state.players[0]} Wins!!`;
      state.score[0]++;
      
    }
    state.gameOver=true;
    resetButton();
  } else if (
    state.board[2] === "O" &&
    state.board[4] === "O" &&
    state.board[6] === "O"
  ) {
    if (randomNumber % 2 === 0) {
      playersBoxElem.innerHTML = `${state.players[1]} Wins!!`;
      state.score[1]++;
     
    } else {
      playersBoxElem.innerHTML = `${state.players[0]} Wins!!`;
      state.score[0]++;
      
    }
    state.gameOver=true;
    resetButton();
  } else if (
    count === 9 &&
    playersBoxElem.innerHTML !== `${state.players[1]} Wins!!` &&
    playersBoxElem.innerHTML !== `${state.players[0]} Wins!!`
  ) {
    playersBoxElem.innerHTML = `DRAW!!`;
    resetButton();
    state.gameOver=true;
  }
}

function alertStart(){
  alert("Please enter player names and click 'Start Game'")
}

buildInitialState();
renderBoard();
renderPlayers();
alertStart();

const divs = document.getElementsByTagName("div");
const startButton = document.querySelector(".start");
const boxes = document.querySelectorAll(".box");
const resetButtonElem = document.querySelector(".reset");

// //****************** LISTENERS ********************************

startButton.addEventListener("click", (event) => {
  const player1Input = document.querySelector("input[name=player1]");
  const player1Value = player1Input.value;
  const player2Input = document.querySelector("input[name=player2]");
  const player2Value = player2Input.value;

  if (!player1Value || !player2Value) {
    return;
  }

  if (randomNumber % 2 === 0) {
    state.players[0] = player1Value;
    state.players[1] = player2Value;

    playersBoxElem.innerHTML = `It is ${state.players[0]}'s turn.`;

    renderScoreNames();
  } else if (randomNumber % 2 !== 0) {
    state.players[0] = player1Value;
    state.players[1] = player2Value;

    playersBoxElem.innerHTML = `It is ${state.players[1]}'s turn.`;

    renderScoreNames();
  }
});

boardElem.addEventListener("click", (event) => {
  if (event.target.innerText !== "X" && event.target.innerText !== "O") {
    placeMarks(event);

    for (i = 0; i < boxes.length; i++) {
      state.board[i] = boxes[i].innerText;
    }

    if (playersBoxElem.innerHTML === `It is ${state.players[0]}'s turn.`) {
      playersBoxElem.innerHTML = `It is ${state.players[1]}'s turn.`;
    } else if (
      playersBoxElem.innerHTML === `It is ${state.players[1]}'s turn.`
    ) {
      playersBoxElem.innerHTML = `It is ${state.players[0]}'s turn.`;
    }
    
    if(state.gameOver===true){
      return
    }
    winner();
  }
});

// Reset Board
playersBoxElem.addEventListener("click", (event) => {
  if (event.target.className === "reset") {
    buildInitialState();
    renderScoreNames();
    count = 0;
    state.gameOver=false;
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].innerText = "";
    }
    randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber % 2 === 0) {
      playersBoxElem.innerHTML = `It is ${state.players[0]}'s turn.`;
    } else {
      playersBoxElem.innerHTML = `It is ${state.players[1]}'s turn.`;
    }
  }
});


