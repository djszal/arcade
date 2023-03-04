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
        {index:6, value:4, name:'Player One Pit'},
        {index:7, value:4, name:'Player Two Pit'},
        {index:8, value:4, name:'Player Two Pit'},
        {index:9, value:4, name:'Player Two Pit'},
        {index:10, value:4, name:'Player Two Pit'},
        {index:11, value:4, name:'Player Two Pit'},
        {index:12, value:4, name:'Player Two Pit'}, 
        {index:13, value:0, name:'Player Two Store'}]

    state.stores = [state.board[0],state.board[13]]
    state.players= [
        {name:null,score:0},
        {name:null,score:0}]
    console.log(state.players)

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



const winConditions =() =>{
    
}

const playerClick = (e) => {
    // Do noting if player clicks on the ends of the board, otherwise, run the following
    if (e.target.className !== "endCaps"){
        // Store the index number into the variable below
        const clickedIdx = e.target.idx
        // store the inner text value as an integer in the variable below. inner text value matches the state.board value
        let clickedValue = parseInt(e.target.innerText)
        // store the integer value above in a new variable that can be changed to let us know how many marbles were taken from the clicked pit.
        let valueChange = clickedValue
        // if the clicked idx number is less than or equal to 6, we need to iterate backwards since the game is played counter clockwise 
        if(clickedIdx<=6){
            for(let i = clickedIdx; i>=0; i--){
                // set the value of state.board at the clicked index to 0 and also set the innerText of that index to 0
                if(state.board[i].index===clickedIdx){
                    state.board[i].value=0
                    e.target.innerText = 0
                    continue
                // check to see if the valueChange variable is 0 so that we can stop the loop. 
                }else if(valueChange === 0){
                    break
                    // if i!=== the clicked pit and our marbles stored in valueChange is not 0
                }else{
                    // add 1 marble to state.board value at each put at i 
                    state.board[i].value+=1
                    // if there are still marbles in valueChange and i in the fist loop === 0, change the inner text to the value of state.board[0] and decrement the marbles in valueChange
                    if(valueChange>=1 && i===0){
                            allEndCaps[0].innerText=state.board[0].value
                            valueChange-=1
                            // if valueChange is not 0 (still marbles to move), loop through the bottom board pits and insert marble until there are none left.  
                            if(valueChange>0){
                                for(let j = 7; j<state.board.length; j++){
                                    if(valueChange===0){
                                        return
                                    }else if(j!==13){
                                        state.board[j].value+=1
                                    allPlayerBoxes[j-1].innerText=state.board[j].value
                                    valueChange-=1
                                }else if(j===13){
                                        state.board[j].value+=1
                                        allEndCaps[1].innerText=state.board[13].value
                                        valueChange-=1
                                        console.log(state.board[13])
                                        // If there are still marbles left to place, loop through the top pits of the board again and place a marble until valueChange===0
                                        if(valueChange>=1 && j===13){
                                            for(let k = 6; k>=0; k--){
                                                if(valueChange===0){
                                                    return
                                                }else if(k!==0){
                                                    state.board[k].value+=1
                                                    allPlayerBoxes[k-1].innerText=state.board[k].value
                                                    valueChange-=1
                                                }else if(k===0){
                                                allEndCaps[0].innerText=state.board[0].value
                                                valueChange-=1
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }else if(i>0){
                        // allPlayersBoxes is one index above the index for state.board. set the value for state.board to the inner text of each pit on the board
                        allPlayerBoxes[i-1].innerText=state.board[i].value
                        // subctract 1 from valueChange which lets us know if we have 'used' all of the marbles from the original clicked pit.
                        valueChange-=1
                    }
                }
            }
        }
        // if the pit that is clicked is one of the bottom pits, loop counter clockwise and place marbles into pits(same pattern as above but starting at bottom of board)  
        if(clickedIdx>=7){
            for(let i = clickedIdx; i<=13; i++){
                if(state.board[i].index===clickedIdx){
                    state.board[i].value=0
                    e.target.innerText = 0
                    continue
                }else if(valueChange === 0){
                    break
                }else{
                    state.board[i].value+=1
                    if(valueChange>=1 && i===13){
                            allEndCaps[1].innerText=state.board[13].value
                            valueChange-=1
                            if(valueChange>0){
                                for(let j = 6; j>=0; j--){
                                    if(valueChange===0){
                                        return
                                    }else if(j!==0){
                                        state.board[j].value+=1
                                    allPlayerBoxes[j-1].innerText=state.board[j].value
                                    valueChange-=1
                                }else if(j===0){
                                        state.board[j].value+=1
                                        allEndCaps[1].innerText=state.board[0].value
                                        valueChange-=1
                                        if(valueChange>=1 && j===0){
                                            for(let k = 7; k<=state.board.length; k++){
                                                if(valueChange===0){
                                                    return
                                                }else if(k!==13){
                                                    state.board[k].value+=1
                                                    allPlayerBoxes[k-1].innerText=state.board[k].value
                                                    valueChange-=1
                                                }else if(k===13){
                                                allEndCaps[1].innerText=state.board[13].value
                                                valueChange-=1
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }else if(i>0){
                        // allPlayersBoxes is one index above the index for state.board. set the value for state.board to the inner text of each pit on the board
                        allPlayerBoxes[i-1].innerText=state.board[i].value
                        // subctract 1 from valueChange which lets us know if we have 'used' all of the marbles from the original clicked pit.
                        valueChange-=1
                    }
                }
            }
        }  
    }
}

mancalaBoard.addEventListener("click", playerClick)

