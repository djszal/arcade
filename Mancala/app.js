let state = {};

//********************** DOM Selectors *****************************
const body = document.body

function buildInitialState(){
    state.board = []

    const title = document.createElement('h1');
    title.setAttribute('class', 'title');
    title.textContent = 'Mancala'
    body.appendChild(title)
}
function renderBoard(){
    
}

buildInitialState()
