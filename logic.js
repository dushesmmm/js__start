let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]

let players = ['x', 'o']
let activePlayer = 0
let counter = 0

function startGame() {
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]
    renderBoard(board)
    counter = 0
}

function click (row, col) {
    console.log(row,col)

    if (counter % 2 === 0) {
    activePlayer = 0
    } else {
        activePlayer = 1
    }

    board[row][col] = players[activePlayer]
    renderBoard(board)
    checkWin()

    counter++
}

function checkWin() {
    let shot = players[activePlayer]
    for (let i = 0; i <= 2; i++) {
        for (let j = 0; j <= 2; j++) {
            if (board[i][0] == shot && board[i][1] == shot && board[i][2] == shot) {
                showWinner(activePlayer)
            } else if (board[0][j] == shot && board[1][j] == shot && board[2][j] == shot) {
                showWinner(activePlayer)
            } else if (board[0][0] == shot && board[1][1] == shot && board[2][2] == shot) {
                showWinner(activePlayer)
            } else if (board[0][2] == shot && board[1][1] == shot && board[2][0] == shot) {
                showWinner(activePlayer)
            }
        }
    }
}