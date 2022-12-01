

let state = {};

function buildInitialState() {
    state.board = [null, null, null, null, null, null, null, null, null];
    state.players = [null, null];
    state.score = [0,0];
}

//********************** DOM Selectors *****************************

const boardElem = document.querySelector('.board'); 
const playersBoxElem = document.querySelector('.players-box');
const scoreBoxElem = document.querySelector('.score-box');


//********************** Render DOM Initial State *****************************
let count = 0;

function renderBoard() {
    boardElem.innerText = '';
    for(let i=0; i < state.board.length; i++) {
        const squareElem = document.createElement('div');
        squareElem.classList.add('box');
        boardElem.append(squareElem); 
    }
}

function scoreBox() {
     scoreBoxElem.innerText = ('Score');
}

function renderPlayers() {
    let text = null;
    if (state.players[0] === null && state.players[1] === null){
        text = `<input name="player1" placeholder="Enter Player 1"/>
        <input name="player2" placeholder="Enter Player 2"/>
        <input type="button" class="start" value="Start Game"/>`;
    }
    else {
        text = `It is ${state.players[0]}'s turn.`
    }    
    playersBoxElem.innerHTML = text;
}

function renderScoreNames() {
    for(let i=0; i < state.players.length; i++){
        const plyrName = state.players[i];
        const score = state.score[0];
        const plyrNameScore = document.createElement('h3');
        plyrNameScore.setAttribute('id','player-name-score'); 
        plyrNameScore.innerText = (plyrName + ': ' + score); 
        scoreBoxElem.appendChild(plyrNameScore); 
    }
     // Didn't get a chance to work on rendering the score since I wasn't able to get the winning conditions to work. I would have ran a function that referenced state.score and displayed the values during every round. 
}

function restartButton() {
    let reset = null;
        reset = `<input type="button" class="reset" value="Reset"/>`
        const resetButton = document.createElement('div'); 
        playersBoxElem.appendChild(resetButton); 
        resetButton.innerHTML = reset;
}


buildInitialState();
renderBoard();
renderPlayers();



const boxes = document.getElementsByClassName('box');
const divs = document.getElementsByTagName('div');


// //****************** LISTENERS ********************************

// Allows input of player names and renders some game elements after click.
playersBoxElem.addEventListener('click', (event) => {
    if (event.target.className === 'start') {
        const player1Input = document.querySelector('input[name=player1]'); 
        const player1Value = player1Input.value;
        state.players[0] = player1Value;
    
        const player2Input = document.querySelector('input[name=player2]'); 
        const player2Value = player2Input.value;
        state.players[1] = player2Value;
        
        scoreBox();
        renderScoreNames();
    }
});

//  Add "X" and "O" each click
boardElem.addEventListener('click', (event) => {
    if (event.target.innerText === "" && state.players[0] !== null){
        if (count % 2 === 0){
        event.target.innerText = "X";
        }
        else{
        event.target.innerText = "O";
        }
        count++

        // This should be a loop function but wasn't able to get it to work
        state.board[0] = (boxes[0].innerText)
        state.board[1] = (boxes[1].innerText)
        state.board[2] = (boxes[2].innerText)
        state.board[3] = (boxes[3].innerText)
        state.board[4] = (boxes[4].innerText)
        state.board[5] = (boxes[5].innerText)
        state.board[6] = (boxes[6].innerText)
        state.board[7] = (boxes[7].innerText)
        state.board[8] = (boxes[8].innerText)
    }   

    if (count % 2 === 0 && count > 0){
        playersBoxElem.innerHTML = `It is ${state.players[0]}'s turn.`;
        }
    else if (count % 2 !== 0 && count !== 0) {
        playersBoxElem.innerHTML = `It is ${state.players[1]}'s turn.`
    }
    
    // Not sure why this isn't working. If I enter it into the console, these values appear to be equal when the board is equal. I would have repeated this for all 16 winning conditions. Probably not the most efficient way to go about this, but it was the only thing I could come up with. I would have also have the console.log as a text display with the winner's name shown. 
    if (state.board.slice(0,3) === ['X', 'X', 'X'] || state.board.slice(0,3) === ['O', 'O', 'O'] ) {
        console.log("Winner");
    }

    // This reset/restart button is working relatively well but it does have a few bugs that I ran out of time to fix. One bug is with a newly rendered board: If you click anywhere on the board, the button continues to propogate itself. Figured I needed to maybe do something with stop.propogation, but I couldn't get it to work. The other bug is after the reset button is clicked and the board is clicked immediately afterwards without any player names being entered. 
    restartButton()
});

// Reset Board
playersBoxElem.addEventListener('click', (event) => {
    if(event.target.className === 'reset'){
        boardElem.innerText = null;
        buildInitialState();
        renderBoard();
        renderPlayers();
    }

})



