/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
    // Horizonal Combos
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Vertical Combos
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonal Combos
    [0, 4, 8],
    [2, 4, 6],
]



/*---------------------------- Variables (state) ----------------------------*/
// (BOARD) - represent state of the squares on the board
let board = [null, null, null, null, null, null, null, null, null]

// (TURN) - track player turn
let turn = 1

// (WINNER) - represent if anyone has one yet
let winner = false

// (TIE) - represend if game has ended in tie
let tie = false



/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll(".sqr")

const messageEl = document.getElementById("message")

const resetBtnEl = document.getElementById("reset")

/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach(function(square){
    square.addEventListener("click", handleClick)
})


resetBtnEl.addEventListener("click", init)

/*-------------------------------- Functions --------------------------------*/

function init () {
    board = [null, null, null, null, null, null, null, null, null]
    turn = 1
    winner = false
    tie = false
    rstButton()
    render()
}

init()

function render() {
    updateBoard()
    updateMessage()
}

function updateBoard() {
    board.forEach(function(square, idx) { 
        if(square === 1) {
            squareEls[idx].textContent = "X"
        } else if (square === -1) {
            squareEls[idx].textContent = "O"
        } else {
            squareEls[idx].textContent = ""
        }
    })
}

function updateMessage() {
    if (winner === false && tie === false) {
        messageEl.textContent = `Player ${turn}, you're up!`
    } else if (winner === false && tie === true) {
        messageEl.textContent = `It's a tie!`
    } else {
        messageEl.textContent = `${turn} has won!`
    }
} 

function handleClick(evt) {
    //console.dir(evt.target); Grabs the target value of the event
    sqIdx = evt.target.id.slice(2) //Uses slice to remove first two values leaving the id # which we set to be the value of sqIdx
    //console.log(sqIdx);
    if (board[sqIdx] !== null) {
        return
    }  
    
    placePiece(sqIdx)
    checkForTie()
    checkForWinner()
    switchPlayerTurn()
    rstButton()
    //console.log(winner);
    render()
}

function placePiece(idx) {
    board[idx] = turn
}

function checkForTie(){
    // Check if every value in board is NOT equal to null, else return true if so
    let check = board.every(function(square) {
        return square !== null 
    })
    //  console.log(check);
    //  console.log(board);
}  

function checkForWinner() {
   winningCombos.forEach(function(combo) {
    let totalSumAtCombo = combo.reduce(function(sum, sqrId) {
        return sum + board[sqrId]
   }, 0) 
   if (totalSumAtCombo === 3 || totalSumAtCombo === -3) {
        winner = true
   } 
}) 
}

function switchPlayerTurn() {
    if (winner === false) {
        turn = turn * -1
    } else if (winner === true) {
        return
    }
}

function rstButton() {
    if (winner === false) {
        resetBtnEl.style.visibility = "hidden";
    } else {
        resetBtnEl.style.visibility = "visible";
    }
}
