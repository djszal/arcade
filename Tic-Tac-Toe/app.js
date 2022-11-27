

let state = {};

function buildInitialState() {
    state.board = [null, null, null, null, null, null, null, null, null];
    state.players = [null, null];
    state.score = [0,0];
}

//********************** DOM Styling *****************************

//********************** DOM Selectors *****************************

const body = document.body;
const boardElem = document.querySelector('.board'); 
const playersBoxElem = document.querySelector('.players-box');
const scoreBoxElem = document.querySelector('.score-box');
const playerScoreElem = document.querySelector('.player-name-score');
const divs = document.getElementsByTagName('div');





//********************** Render DOM Initial State *****************************
let count = 0;

function renderBoard() {
    for(let i=0; i < state.board.length; i++) {
        const squareElem = document.createElement('div');
        squareElem.classList.add('box');
        boardElem.append(squareElem); 
    }
}




function renderCurrentPlayerDiv() {
    const currentPLayerDiv = document.createElement("div"); 
    currentPLayerDiv.classList.add('current-player');
    currentPLayerDiv.innerText = 'Enter Player Names Above and Press Start';
    body.append(currentPLayerDiv);

   
}


// divs[10].body.insertBefore(divs[10], divs[9]); trying to move the div element up one


function renderPlayers() {
    let text; 
    if (state.players[0] === null || state.players[1] === null){
        text = `<input name="player1" placeholder="Enter Player 1"/>
        <input name="player2" placeholder="Enter Player 2"/>
        <input type="button" class="start" value="Start Game"/> <input type="button" class="reset" value="Reset"/>`;
    
        playersBoxElem.innerHTML = text;
    }
    else {
        text = `its is ${state.players[0]}'s turn`;
    }
    
    }

function renderScoreTitle() {
    scoreBoxElem.innerText = ('Score');
}


function renderScoreNames() {
    for(let i=0; i < state.players.length; i++){
        const plyrName = state.players[i];
        const plyrNameScore = document.createElement('h3');
        plyrNameScore.setAttribute('id','player-name-score'); 
        plyrNameScore.innerText = (plyrName); 
        scoreBoxElem.appendChild(plyrNameScore); 
    }
}

function updateBoardIndex(){
    for(let i=0; i < state.board.length; i++) {
        if (boxes.innerText === "X"){
            state.board[i] = "X"
        }
    }
}


function resetBoardText() {

}


const render = () => {
    renderBoard();
    renderPlayers();
    renderScoreTitle();
    renderCurrentPlayerDiv();
}


const renderRestart = () => {
    renderScoreTitle();

}
buildInitialState();
render();
renderScoreNames();




function playGame(event) {
    if (event.target.innerText === "" && state.players[0] !== null){
        if (count % 2 === 0){
            event.target.innerText = "X";
        }
        else{
        event.target.innerText = "O";
        }
        count++
    }
   
}



//****************** LISTENERS ********************************
playersBoxElem.addEventListener('click', (event) => {
    if (event.target.className === 'start') {
        const player1Input = document.querySelector('input[name=player1]'); 
        const player1Value = player1Input.value;
        state.players[0] = player1Value;
        console.log('this is my value: ', player1Value);
    
        const player2Input = document.querySelector('input[name=player2]'); 
        const player2Value = player2Input.value;
        state.players[1] = player2Value;
        console.log('this is my value: ', player2Value);
    
    }
    if (event.target.className === 'reset') { //this is close. It has reset the names to null. just need to be able to delete the board
        buildInitialState();
        renderRestart();
    }
    renderScoreNames();
});



 

boardElem.addEventListener('click', playGame);

// boardElem.addEventListener('click', showCurrentPlayer);




