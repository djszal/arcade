let state = {};

//********************** DOM Selectors and Create Elements *****************************
const body = document.body

const title = document.createElement('h1');
title.setAttribute('class', 'title');

const boardBox = document.createElement('div');
boardBox.setAttribute('class', 'board-box');



function buildInitialState(){
    state.ends = [0,0]
    state.board = [4,4,4,4,4,4,4,4,4,4,4,4]

    title.textContent = 'Mancala'
    body.appendChild(title)

    

    
}

function renderPlayerBox(){
    const playerBox = document.createElement('div');
    playerBox.setAttribute("class", "player-box"); 
    body.appendChild(playerBox)

    const playerOne = document.createElement('h3');
    playerOne.setAttribute('class', 'players');
    playerOne.textContent = 'Player One:';
    playerBox.appendChild(playerOne);

    const playerTwo = document.createElement('h3');
    playerTwo.setAttribute('class', 'players');
    playerTwo.textContent = 'Player Two:';
    playerBox.appendChild(playerTwo);

}
function renderBoard(){
    body.appendChild(boardBox)
    for (let i=0; i<state.board.length; i++){
        
        const box = document.createElement('div')
        box.setAttribute('class', 'box');
        box.innerText= state.board[i]
        boardBox.appendChild(box)
        
    }
}

buildInitialState()
renderPlayerBox()
renderBoard()

const winConditions =() =>{

}


