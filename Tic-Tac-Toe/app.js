

let state = {};

function buildInitialState() {
    state.board = [null, null, null, null, null, null, null, null, null]
    state.players = ['', '']
}

//********************** DOM Styling *****************************



//********************** DOM Selectors *****************************
const boardElem = document.querySelector('#table'); 
const playerBoxElem = document.querySelector('#players-box')



//********************** DOM Manipulation Functions *****************************
function renderBoard() {
    for(let i=0; i < state.board.length; i++) {
        const box = state.board[i];
        const cellElem = document.createElement('div');
        cellElem.classList.add('box');
        cellElem.innerText = box; //check this. might not need since I wont have text to display
        console.log(box);
        boardElem.appendChild(cellElem); 
        // if (i % 2 === 0){
        //     cellElem.classList.add('boxes-right');
        // }
    }
}

function renderPlayers() {
    const playerElem = document.createElement('div')
    const playerBox = state.players


}

buildInitialState()
renderBoard()
// renderPlayers()


//********************** Render the Board *****************************
function renderState() {


}

// maybe a dozen or so helper functions for tiny pieces of the interface



//****************** LISTENERS ********************************
function onBoardClick() {
    // update state, maybe with another dozen or so helper functions...
  
    renderState() // show the user the new state
  }



//   const board = document.getElementById('board');
//   board.addEventListener('click', onBoardClick);