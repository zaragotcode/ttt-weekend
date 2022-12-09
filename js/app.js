/*-------------------------------- Constants --------------------------------*/



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

const messageEl = document.getElementById("#message")


/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

function init () {
    // board = [null, null, null, null, null, null, null, null, null,]
    // turn = 1
    // winner = false
    // tie = false
    render()
}

init()

function render() {

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

updateBoard()

console.log(updateBoard)