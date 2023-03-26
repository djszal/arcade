let state = {};

//********************** DOM Selectors and Create Elements *****************************
const body = document.body

const title = document.createElement('h1');
title.setAttribute('class', 'title');

const boardBox = document.createElement('div');
boardBox.setAttribute('class', 'board-box');
const playerBox = document.createElement('div');
const scoreBox = document.createElement('div');

let randomNumber = Math.floor(Math.random() * 100) + 1;
// let randomNumber = 3;


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
        {name: null, score: 0, isTurn: false},
        {name: null, score: 0, isTurn: false}]
    state.game=
        {isGameStarted: false,
        error: false
        }
    

    title.textContent = 'Mancala'
    body.appendChild(title)


    
}

function renderPlayerBox(){
    playerBox.setAttribute("class", "player-box"); 
    body.appendChild(playerBox)
    
    scoreBox.setAttribute("class", "score-box"); 
    body.appendChild(scoreBox)

    const playerOne = document.createElement('h3');
    playerOne.setAttribute('class', 'players');
    playerOne.textContent = 'Player One: ';
    playerBox.appendChild(playerOne);

    const playerOneInput = document.createElement('input')
    playerOneInput.setAttribute('type', 'text');
    playerOneInput.setAttribute('class', 'input');
    playerOneInput.setAttribute('name', 'player1');
    playerOneInput.setAttribute('placeholder', 'Enter Player One Name');
    playerBox.appendChild(playerOneInput);

    const playerTwo = document.createElement('h3');
    playerTwo.setAttribute('class', 'players');
    playerTwo.textContent = 'Player Two: ';
    playerBox.appendChild(playerTwo);

    const playerTwoInput = document.createElement('input')
    playerTwoInput.setAttribute('type', 'text');
    playerTwoInput.setAttribute('class', 'input');
    playerTwoInput.setAttribute('name', 'player2');
    playerTwoInput.setAttribute('placeholder', 'Enter Player Two Name');
    playerBox.appendChild(playerTwoInput);

    const playGameButton = document.createElement('button');
    playGameButton.setAttribute('type', 'button');
    playGameButton.setAttribute('class', 'button');
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
const startGame = document.querySelector(".button")
const allPlayerBoxes = document.querySelectorAll(".box");
const allEndCaps = document.querySelectorAll(".endCaps");
const player1Input = document.querySelector("input[name=player1]");
const player2Input = document.querySelector("input[name=player2]");
const inputFields = document.querySelectorAll(".input")
const playerNameBox = document.querySelector(".player-box")

const setPlayers =()=>{
    const player1Value = player1Input.value;
    const player2Value = player2Input.value;
    const nameInputError = document.createElement('h3')
    nameInputError.setAttribute('class', 'error');
    nameInputError.textContent = "Please enter both player names before clicking Play Game";
    state.players[0].name = player1Value
    state.players[1].name = player2Value

    const scoreTitle = document.createElement('h3');
    scoreTitle.setAttribute('class', 'score-title');
    scoreTitle.textContent = 'Score: ';
    scoreBox.appendChild(scoreTitle);
    
    if(!state.players[0].name || !state.players[1].name){
        body.appendChild(nameInputError);
        state.game.error = true;
        return
    }else if(randomNumber%2===0){
        const player1Turn = document.createElement('p')
        player1Turn.setAttribute('class', 'player-turn');
        player1Turn.innerText = `It is ${state.players[0].name}'s turn.`;
        state.players[0].isTurn = true
        state.players[1].isTurn = false
        body.appendChild(player1Turn)
        
    }else{
        const player2Turn = document.createElement('p')
        player2Turn.setAttribute('class', 'player-turn');
        player2Turn.innerText = `It is ${state.players[1].name}'s turn.`;
        state.players[0].isTurn = false
        state.players[1].isTurn = true
        body.appendChild(player2Turn)
    }
    const playerOneName = document.createElement('h3')
    playerOneName.setAttribute('class', 'player-name');
    playerOneName.innerText=`\u00A0${state.players[0].name}`;
    
    const playerTwoName = document.createElement('h3')
    playerTwoName.setAttribute('class', 'player-name');
    playerTwoName.innerText=`\u00A0${state.players[1].name}`;

    const playerOneScore = document.createElement('h3')
    playerOneScore.setAttribute('class', 'player-score');
    playerOneScore.innerText=`\u00A0${state.players[0].score}`;
    scoreBox.appendChild(playerOneScore);
    
    const playerTwoScore = document.createElement('h3')
    playerTwoScore.setAttribute('class', 'player-score');
    playerTwoScore.innerText=`\u00A0${state.players[1].score}`;
    scoreBox.appendChild(playerTwoScore);
    
    inputFields[0].replaceWith(playerOneName)
    inputFields[1].replaceWith(playerTwoName)
    startGame.remove()
    state.game.isGameStarted=true

    if(state.game.error===true){
        const inputError = document.querySelector(".error")
        inputError.remove()
    }
}

const winConditions =() =>{
    const playerWinDisplay = document.querySelector(".player-turn")
    plyrOneWin = 0;
    plyrTwoWin = 0;
    for(let i=1; i<=6; i++){
        if(state.board[i].value===0){
            plyrOneWin +=1
        }
    }
    for(let i=7; i<=12; i++){
        if(state.board[i].value===0){
            plyrTwoWin +=1
        }
    }
    if(plyrOneWin===6){
        let plyrOneScore = state.board[0].value
        let plyrTwoScore = state.board[13].value
        for(let i=7; i<=12; i++){
            plyrTwoScore += state.board[i].value
            }
        state.game.isGameStarted=false;
        if(plyrOneScore>plyrTwoScore){
            playerWinDisplay.innerText=`${state.players[0].name} Wins!! ${state.players[1].name} Points: ${plyrTwoScore} || ${state.players[0].name} Points: ${plyrOneScore}`
            state.players[0].score += 1
        }else{
            playerWinDisplay.innerText=`${state.players[1].name} Wins!! ${state.players[0].name} Points: ${plyrOneScore} || ${state.players[1].name} Points: ${plyrTwoScore}`
            state.players[1].score += 1
        }
    }
    if(plyrTwoWin===6){
        let plyrTwoScore = state.board[13].value
        let plyrOneScore = state.board[0].value
        for(let i=1; i<=6; i++){
            plyrOneScore += state.board[i].value
            }
        state.game.isGameStarted=false
        if(plyrTwoScore>plyrOneScore){
            playerWinDisplay.innerText=`${state.players[1].name} Wins!! ${state.players[1].name} Points: ${plyrTwoScore} || ${state.players[0].name} Points: ${plyrOneScore}`
            state.players[1].score += 1
        }else{
            playerWinDisplay.innerText=`${state.players[0].name} Wins!! ${state.players[0].name} Points: ${plyrOneScore} || ${state.players[1].name} Points: ${plyrTwoScore}`
            state.players[0].score += 1
        }
    }


    // const playAgainButton = document.createElement('button');
    // playAgainButton.setAttribute('type', 'button');
    // playAgainButton.setAttribute('class', 'button');
    // playAgainButton.textContent = 'Play Again?';
    // body.appendChild(playAgainButton);
    
}

const changePlayer1Turn = () =>{
    state.players[0].isTurn=false
    state.players[1].isTurn=true
    const playerTurnDisplay = document.querySelector(".player-turn")
    playerTurnDisplay.innerText=`It is ${state.players[1].name}'s turn.`
}

const changePlayer2Turn = () => {
    state.players[0].isTurn=true
    state.players[1].isTurn=false
    const playerTurnDisplay = document.querySelector(".player-turn")
    playerTurnDisplay.innerText=`It is ${state.players[0].name}'s turn.`

}

const playerClick = (e) => {
    
    if(state.game.isGameStarted===false){
        return
    }
    
    // Do noting if player clicks on the ends of the board, otherwise, run the following
    if (e.target.className !== "endCaps"){
        // Store the index number into the variable below
        const clickedIdx = e.target.idx
        // store the inner text value as an integer in the variable below. inner text value matches the state.board value
        let clickedValue = parseInt(e.target.innerText)
        // store the integer value above in a new variable that can be changed to let us know how many marbles were taken from the clicked pit.
        let valueChange = clickedValue
        // if the clicked idx number is less than or equal to 6, we need to iterate backwards since the game is played counter clockwise 

        if(clickedIdx<=6 && state.players[0].isTurn===true && clickedValue!==0 ){
            for(let i = clickedIdx; i>=0; i--){
                // set the value of state.board at the clicked index to 0 and also set the innerText of that index to 0
                if(state.board[i].index===clickedIdx){
                    state.board[i].value=0
                    e.target.innerText = 0
                // check to see if the valueChange variable is 0 so that we can stop the loop. 
                }else if(valueChange === 0){
                    changePlayer1Turn();
                    return
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
                                    if(j!==13){
                                        state.board[j].value+=1
                                        allPlayerBoxes[j-1].innerText=state.board[j].value
                                        valueChange-=1
                                        if(valueChange===0){
                                            changePlayer1Turn();
                                            return
                                        }
                                    }else if(j===13){
                                        // If there are still marbles left to place, loop through the top pits of the board again and place a marble until valueChange===0
                                        if(valueChange>=1 && j===13){
                                            for(let k = 6; k>=0; k--){
// ###################################################################################### WORK ON THIS BELOW ##################################### 
                                                if(k<=6 && state.board[k].value === 0 && state.board[k+6].value>=1){
                                                    state.board[k].value=0
                                                    allPlayerBoxes[k-1].innerText=state.board[k].value
                                                    // add captured bin value to the value in the player's store
                                                    state.board[0].value+=state.board[k+6].value 
                                                    allEndCaps[0].innerText=state.board[0].value
                        
                                                    state.board[k+6].value = 0
                                                    allPlayerBoxes[k+5].innerText=state.board[k+6].value
                                                    valueChange-=1
                                                }else if(valueChange===0){
                                                    changePlayer1Turn();
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
                                        }else{
                                            changePlayer1Turn();
                                            return
                                        }
                                    }
                                }
                            }else{
                                changePlayer1Turn();
                                return
                            }
                    }else if(i>0){
                        // allPlayersBoxes is one index above the index for state.board. set the value for state.board to the inner text of each pit on the board
                        allPlayerBoxes[i-1].innerText=state.board[i].value
                        // subctract 1 from valueChange which lets us know if we have 'used' all of the marbles from the original clicked pit.
                        valueChange-=1
                        if(valueChange===0){
                            changePlayer1Turn();
                            return
                        }
                    }
                }
            }
            // if the pit that is clicked is one of the bottom pits, loop counter clockwise and place marbles into pits(same pattern as above but starting at bottom of board)  
        }if(clickedIdx>=7 && state.players[1].isTurn===true && clickedValue!==0){
            for(let i = clickedIdx; i<=13; i++){
                if(state.board[i].index===clickedIdx){
                    state.board[i].value=0
                    e.target.innerText = 0
                }else if(valueChange === 0){
                   changePlayer2Turn();
                   break
                }else{
                    state.board[i].value+=1
                    if(valueChange>=1 && i===13){
                            allEndCaps[1].innerText=state.board[13].value
                            valueChange-=1
                            if(valueChange>0){
                                for(let j = 6; j>=0; j--){
                                    if(j!==0){
                                        state.board[j].value+=1
                                        allPlayerBoxes[j-1].innerText=state.board[j].value
                                        valueChange-=1
                                        if(valueChange===0){
                                            changePlayer2Turn();
                                            return
                                        }
                                }else if(j===0){
                                        if(valueChange>=1 && j===0){
                                            for(let k = 7; k<=state.board.length; k++){
                                                if(valueChange===0){
                                                    changePlayer2Turn();
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
                                    }else{
                                        changePlayer1Turn();
                                        return
                                    }
                                }
                            }
                        }else{
                            changePlayer2Turn();
                            return
                    }
                    }else if(i>0){
                        // allPlayersBoxes is one index above the index for state.board. set the value for state.board to the inner text of each pit on the board
                        allPlayerBoxes[i-1].innerText=state.board[i].value
                        // subctract 1 from valueChange which lets us know if we have 'used' all of the marbles from the original clicked pit.
                        valueChange-=1
                        if(valueChange===0){
                            changePlayer2Turn();
                        return
                        }
                    }
                }
            }
        }  
        
    }
}

startGame.addEventListener("click", setPlayers)
mancalaBoard.addEventListener("click", playerClick)
mancalaBoard.addEventListener("click", winConditions)

