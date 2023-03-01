let state = {};

//********************** DOM Selectors and Create Elements *****************************
const body = document.body

const title = document.createElement('h1');
title.setAttribute('class', 'title');

const boardBox = document.createElement('div');
boardBox.setAttribute('class', 'board-box');



function buildInitialState(){
    
    state.board = [
        {index:0, value:0, name:'Player One Store'},
        {index:1, value:4, name:'Player One Pit'},
        {index:2, value:4, name:'Player One Pit'},
        {index:3, value:4, name:'Player One Pit'},
        {index:4, value:4, name:'Player One Pit'},
        {index:5, value:4, name:'Player One Pit'},
        {index:6, value:6, name:'Player One Pit'},
        {index:7, value:4, name:'Player Two Pit'},
        {index:8, value:4, name:'Player Two Pit'},
        {index:9, value:4, name:'Player Two Pit'},
        {index:10, value:4, name:'Player Two Pit'},
        {index:11, value:4, name:'Player Two Pit'},
        {index:12, value:4, name:'Player Two Pit'}, 
        {index:13, value:0, name:'Player Two Store'}]

    state.stores = [state.board[0],state.board[13]]
    state.test= [state.board[0]]
    console.log(state.test)

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

    const playGameButton = document.createElement('button');
    playGameButton.setAttribute('type', 'button');
    playGameButton.textContent = 'Play Game';
    playerBox.appendChild(playGameButton);


}

function renderBoard(){
    body.appendChild(boardBox)

    const endCapOne = document.createElement('div')
    endCapOne.setAttribute('class', 'endCaps');
    endCapOne.innerText = state.stores[0].value
    endCapOne.value = 0
    boardBox.appendChild(endCapOne)
    
    const boxesBox = document.createElement('div')
    boxesBox.setAttribute('class', 'boxes-box');
    boardBox.appendChild(boxesBox)

    let k = 1
    for (let i=1; i<state.board.length-1; i++){
        
        const box = document.createElement('div')
        box.setAttribute('class', 'box');
        box.idx = k
        k++
        box.innerText= state.board[i].value
        boxesBox.appendChild(box)
        // console.log(box[1])
    
}
    const endCapTwo = document.createElement('div')
    endCapTwo.setAttribute('class', 'endCaps');
    endCapTwo.innerText = state.stores[1].value
    endCapOne.value = 13
    boardBox.appendChild(endCapTwo)

}


buildInitialState()
renderPlayerBox()
renderBoard()

const mancalaBoard = document.querySelector(".board-box")
const allPlayerBoxes = document.querySelectorAll(".box");
const allEndCaps = document.querySelectorAll(".endCaps");
console.log(allEndCaps)


const winConditions =() =>{
    
}

const playerClick = (e) => {
    if (e.target.className !== "endCaps"){
        console.log("IDX",e.target.idx)
        const clickedIdx = e.target.idx
        let clickedValue = parseInt(e.target.innerText)
        let valueChange = clickedValue
        console.log("CCCC",clickedValue)
        console.log("CCCC",clickedIdx)

        if(clickedIdx<=6){
            for(let i = clickedIdx; i>=0; i--){
                console.log(i)
                if(state.board[i].index===clickedIdx){
                    state.board[i].value=0
                    e.target.innerText = 0
                    console.log(e.target.innerText)
                        // for(let a=1; a<=clickedValue; a++){
                        //     if(i<4){
                        //     state.board[i+a].value+=1
                        // }
                        // }
                    // boardBox.remove();
                    continue
                }else if(valueChange === 0){
                    break
                }
                else{
                state.board[i].value+=1
                allPlayerBoxes[i-1].innerText=state.board[i].value
                valueChange-=1
                console.log(state.board)
                    // if(valueChange>=1 && i===0){
                    //     allEndCaps[0].innerText=1
                    //     valueChange-=1
                    // }
                }
                
            }
        }  
        // renderBoard();
    }
}

mancalaBoard.addEventListener("click", playerClick)

