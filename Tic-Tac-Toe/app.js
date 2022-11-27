

let state = {};

function buildInitialState() {
    state.board = [[null, null, null], [null, null, null], [null, null, null]];
    state.players = [null, null];
    state.score = [0,0];
    
}

//********************** DOM Styling *****************************



//********************** DOM Selectors *****************************

const boardElem = document.querySelector('.board'); 
const playersBoxElem = document.querySelector('.players-box');
const scoreBoxElem = document.querySelector('.score-box');
const playerScoreElem = document.querySelector('.player-name-score');
const divs = document.getElementsByTagName('div');
const body = document.body;
// const startButton = document.querySelector('.start');
let count = 0;
// const box2click = document.querySelector('.box');





//********************** Render DOM Initial State *****************************
function renderBoard() {
    for(let i=0; i < state.board.length; i++) {
        const box = state.board[i];
        console.log(box);
        for (let j=0; j < box.length; j++){
            const squareElem = document.createElement('div');
            squareElem.classList.add('box');
            // squareElem.innerText = 'box'; //check this. might not need since I wont have text to display@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
            boardElem.append(squareElem); 
        // if (i % 2 === 0){
        //     boxElem.classList.add('boxes-right');
        // }
    }
}}

// function renderCurrentPlayer() {
    const currentPLayerDiv = document.createElement("div"); 
    body.append(currentPLayerDiv);

    
   
// }

// renderCurrentPlayer();
// divs[10].body.insertBefore(divs[10], divs[9]); trying to move the div element up one


function renderPlayers() {
    let text = `<input name="player1" placeholder="Enter Player 1"/>
    <input name="player2" placeholder="Enter Player 2"/>
    <input type="button" class="start" value="Start Game"/> <input type="button" class="reset" value="Reset"/>`;
    
    playersBoxElem.innerHTML = text;
    
    }



function renderScoreTitle() {
    scoreBoxElem.innerText = ('Score');
}

function renderScoreNames() {
    for(let i=0; i < state.players.length; i++){
        const plyrName = state.players[i];
        console.log(plyrName)
        const plyrNameScore = document.createElement('h3');
        plyrNameScore.setAttribute('id','player-name-score'); 
        plyrNameScore.innerText = (plyrName); 
        scoreBoxElem.appendChild(plyrNameScore); 
        console.dir(plyrName);
    }
}


const render = () => {
    renderBoard();
    renderPlayers();
    renderScoreTitle();
}
buildInitialState();
render();
renderScoreNames();



const box2click = document.querySelectorAll('.box'); 

function playGame(event) {
    if (event.target.innerText === "" && state.players[0] !== null){
        if (count % 2 === 0){
            event.target.innerText = "X";
            // const player1Turn = document.createElement('h3'); 
            // player1Turn.setAttribute('id', 'player-1-turn');
            // player1Turn.innerText = (`${state.players[0]}'s Turn`);
            // currentPLayerDiv.append(player1Turn);
            // console.log(state.players[0]);
        }
        else{
        event.target.innerText = "O";
        // const player2Turn = document.createElement('h3'); 
        // player2Turn.setAttribute('id', 'player-2-turn');
        // player2Turn.innerText = (`${state.players[1]}'s Turn`);
        // currentPLayerDiv.append(player2Turn);
        // console.log(state.players[1]);
        }
        count++
    }
    }

function showCurrentPlayer(event) {
    
    if (count % 2 === 0) {
        const player1Turn = document.createElement('h3'); 
        player1Turn.setAttribute('id', 'player-1-turn');
        player1Turn.innerText = (`${state.players[0]}'s Turn`);
        playersBoxElem.append(player1Turn);
        console.log(state.players[0]);
    }
    else {
        const player2Turn = document.createElement('h3'); 
        player2Turn.setAttribute('id', 'player-2-turn');
        player2Turn.innerText = (`${state.players[1]}'s Turn`);
        playersBoxElem.append(player2Turn);
        console.log(state.players[1]);
        }
    count++

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
    if (event.target.className === 'reset') { //this is close. just need to be able to delete the board
        buildInitialState();
    }
});


 

boardElem.addEventListener('click', playGame);

boardElem.addEventListener('click', showCurrentPlayer);




