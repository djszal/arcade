let state = {};

//********************** DOM Selectors and Create Elements *****************************
const body = document.body

const title = document.createElement('h1');
title.setAttribute('class', 'title');

const boardBox = document.createElement('div');
boardBox.setAttribute('class', 'board-box');



function buildInitialState(){
    state.ends = [0,0]
    state.board = [
        [{index:1, value:4},
        {index:2, value:4},
        {index:3, value:4},
        {index:4, value:4},
        {index:5, value:4},
        {index:6, value:4}],
        [{index:7, value:4},
        {index:8, value:4},
        {index:9, value:4},
        {index:10, value:4},
        {index:11, value:4},
        {index:12, value:4}]]

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

    const playerOneInput = document.createElement('input')
    playerOneInput.setAttribute('type', 'text');
    playerOneInput.setAttribute('placeholder', 'Enter Player One Name');
    playerBox.appendChild(playerOneInput);

    const playerTwo = document.createElement('h3');
    playerTwo.setAttribute('class', 'players');
    playerTwo.textContent = 'Player Two:';
    playerBox.appendChild(playerTwo);

    const playerTwoInput = document.createElement('input')
    playerTwoInput.setAttribute('type', 'text');
    playerTwoInput.setAttribute('placeholder', 'Enter Player Two Name');
    playerBox.appendChild(playerTwoInput);

}
function renderBoard(){
    body.appendChild(boardBox)

    const endCapOne = document.createElement('div')
    endCapOne.setAttribute('class', 'endCaps');
    endCapOne.innerText = state.ends[0]
    endCapOne.value = 0
    boardBox.appendChild(endCapOne)
    
    const boxesBox = document.createElement('div')
    boxesBox.setAttribute('class', 'boxes-box');
    boardBox.appendChild(boxesBox)

    let k = 1
    for (let i=0; i<state.board.length; i++){
        for (let j=0; j<state.board[i].length; j++){
        const box = document.createElement('div')
        box.setAttribute('class', 'box');
        box.idx = k
        k++
        box.innerText= state.board[i][j].value
        boxesBox.appendChild(box)
        // console.log(box[1])
    }
}
    const endCapTwo = document.createElement('div')
    endCapTwo.setAttribute('class', 'endCaps');
    endCapTwo.innerText = state.ends[1]
    endCapOne.value = 13
    boardBox.appendChild(endCapTwo)

}


buildInitialState()
renderPlayerBox()
renderBoard()

const mancalaBoard = document.querySelector(".board-box")
const allPlayerBoxes = document.querySelectorAll(".box");
console.log(allPlayerBoxes)


const winConditions =() =>{
    
}

const playerClick = (e) => {
    if (e.target.className !== "endCaps"){
        console.log("IDX",e.target.innerText)
        let clickedValue = e.target.innerText
        console.log(typeof clickedValue)
        for(let i = 0; i<state.board.length; i++){
            for (let j=0; j<state.board[i].length; j++){
                if(state.board[i][j].index===e.target.idx){
                    state.board[i][j].value=0
                    e.target.innerText = 0
                    // boardBox.remove();
                    // renderBoard();
                    console.log(state.board[i][j].value)
                    
                    
                }
            }
        }  
    }
}

mancalaBoard.addEventListener("click", playerClick)

