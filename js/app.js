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
let board = [null, null, null, null, null, null, null, null, null,]

// (TURN) - track player turn
let turn = 1

// (WINNER) - represent if anyone has one yet
let winner = false

// (TIE) - represend if game has ended in tie
let tie = false



/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll(".sqr")

const messageEl = document.getElementById("message")


/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

function init () {
    board = [null, null, null, null, null, null, null, null, null,]
    turn = 1
    winner = false
    tie = false
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

console.log(updateBoard)

function updateMessage() {
    if (winner === false && tie === false) {
        messageEl.textContent = `Player ${turn}, you're up!`
    } else if (winner === false && tie === true) {
        messageEl.textContent = `It's a tie!`
    } else {
        messageEl.textContent = `${turn} has won!`
    }
} 






