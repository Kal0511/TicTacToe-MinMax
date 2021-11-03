let board = new Array(3);
for (let i = 0; i < 3; i++) {
    board[i] = new Array(3);
}

for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
        board[i][j] = 'n';
    }
}
// let openSpots = 9;

var p1Score ;
var p2Score
var drawScore ;

function clearScore(){
     p1Score = 0;
     p2Score = 0;
     drawScore = 0;
     setScore();
}
console.log(localStorage.getItem('p1Score'));
if(localStorage.getItem('p1Score') === null){
    p1Score = 0;
    p2Score = 0;
    drawScore = 0;
    localStorage.setItem('p1Score', p1Score.toString());
    localStorage.setItem('p2Score', p2Score.toString());
    localStorage.setItem('drawScore', drawScore.toString());
} else{
     p1Score = localStorage.getItem('p1Score').valueOf();
     p2Score = localStorage.getItem('p2Score').valueOf();
     drawScore = localStorage.getItem('drawScore').valueOf();
}



let ai = 'X';
let human = "O";
let currentPlayer = human;
let isOnePlayer = false;


window.onbeforeunload = function () {
    localStorage.setItem('p1Score', p1Score.toString());
    localStorage.setItem('p2Score', p2Score.toString());
    localStorage.setItem('drawScore', drawScore.toString());
}

const gameMode = document.getElementById("player");
const playerImg = document.getElementById("player-img");
const player1Name = document.getElementById("player1");
const player2Name = document.getElementById("player2");
toggleGameMode();
function toggleGameMode(){
    if(isOnePlayer){
        playerImg.classList.toggle("swap");
        gameMode.innerHTML = "2 Player";
        player1Name.innerHTML = "Player 1 (" + human + ")";
        player2Name.innerHTML = "Player 2 (" + ai + ")";
        isOnePlayer = false;
    }else{
        gameMode.innerHTML = "1 Player";
        playerImg.classList.toggle("swap");
        player1Name.innerHTML = "Player (" + human + ")";
        player2Name.innerHTML = "Computer (" + ai + ")";
        isOnePlayer = true;
    }
}

const player1Score = document.getElementById("player1Score");
const player2Score = document.getElementById("player2Score");
const draw = document.getElementById("draw");

setScore();

function setScore(){
    player1Score.innerHTML = p1Score;
    player2Score.innerHTML = p2Score;
    draw.innerHTML = drawScore;
}


// function start() {
//     document.getElementById("start").style.visibility = "hidden";
//     document.getElementById("mode").style.visibility = "visible";
// }
//
// function onePlayer() {
//     isOnePlayer = true;
//     document.getElementById("mode").style.visibility = "hidden";
//     document.getElementById("marker").style.visibility = "visible";
// }
//
// function twoPlayer() {
//     isOnePlayer = false;
//     document.getElementById("mode").style.visibility = "hidden";
// }
//
// function goFirst() {
//     currentPlayer = human;
//     document.getElementById("marker").style.visibility = "hidden";
// }
//
// function goSecond() {
//     currentPlayer = ai;
//     document.getElementById("marker").style.visibility = "hidden";
//     bestMove(board);
// }

function playMove(x, y) {
    if (isOnePlayer) {
        if (currentPlayer === human) {
            if (board[x][y] == "n") {
                placeMarker(x,y,human);
                currentPlayer = ai;
            }
           bestMove(board);
            endgame(calculateScore(board));
        }
    } else {
        if (currentPlayer === human) {
            if (board[x][y] == "n") {
                placeMarker(x,y,human);
                currentPlayer = ai;
                endgame(calculateScore(board));
            }
        }else{
            if (board[x][y] == "n") {
                placeMarker(x,y,ai);
                currentPlayer = human;
                endgame(calculateScore(board));
            }
        }
    }
}

function endgame(result){
    if(result == 1){
        // document.getElementById("end").style.visibility = "visible";
        // console.log("ai wins");
        // document.getElementById("winner").innerHTML = "ai";
        p2Score++;
        setScore();
        for(let j=0;j<3;j++){
            for(let i=0;i<3;i++){
removeMarker(i,j);
            }
        }
    } else if(result == -1){
        // document.getElementById("end").style.visibility = "visible";
        // console.log("human wins");
        // document.getElementById("winner").innerHTML = "human";
        p1Score++;
        setScore();
        for(let j=0;j<3;j++){
            for(let i=0;i<3;i++){
                removeMarker(i,j);
            }
        }
    }else if(result == 0){
        // document.getElementById("end").style.visibility = "visible";
        // console.log("draw");
        // document.getElementById("winner").innerHTML = "draw";
        drawScore++;
        setScore();
        for(let j=0;j<3;j++){
            for(let i=0;i<3;i++){
                removeMarker(i,j);
            }
        }
    }
    // else{
    //     if(spots(board) != 0){
    //         return;
    //     }
    // }
}

// function reset(){
//     document.getElementById("end").style.visibility = "hidden";
//     for (let j = 0; j < 3; j++) {
//         for (let i = 0; i < 3; i++) {
//             removeMarker(i,j)
//         }
//     }
//     start();
// }

function placeMarker(x, y, marker){
    board[x][y] = marker;
    let index = x + y * 3;
    document.getElementById(index).classList.toggle(marker);
}

function removeMarker(x, y){
    let index = x + y * 3;
    document.getElementById(index).classList.toggle(board[x][y]);
    board[x][y] = "n";
}

function checkWinner(board) {
    // horizontal
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === board[i][1] && board[i][0] === board[i][2] && board[i][0] !== 'n') {
            return board[i][0];
        }
    }

    // for (let j = 0; j < 3; j++) {
    //     for (let i = 1; i < 3; i++) {
    //         if (board[0][j] != board[i][j] && board[0][j] == "n") {
    //             break;
    //         }
    //         if(board[0][j] != "n") {
    //             return board[0][j];
    //         }
    //     }
    // }

    // Vertical
    for (let i = 0; i < 3; i++) {
        if (board[0][i] == board[1][i] && board[0][i] == board[2][i] && board[0][i] != 'n') {
            return board[0][i];
        }
    }

    // for (let j = 1; j < 3; j++) {
    //     for (let i = 0; i < 3; i++) {
    //         if (board[i][0] != board[i][j] && board[i][0] == "n") {
    //             break;
    //         }
    //         if(board[i][0] != "n") {
    //             return board[i][0];
    //         }
    //     }
    // }

    // Diagonal
    if (board[0][0] == board[1][1] && board[0][0] == board[2][2] && board[0][0] != 'n') {
        return board[0][0];
    }
    if (board[0][2] == board[1][1] && board[0][2] == board[2][0] && board[0][2] != 'n') {
        return board[2][0];
    }

    return "n";
}

function calculateScore(board){

    let winner = checkWinner(board);


    if (winner == ai) {
        return 1;
    } else if (winner == human) {
        return -1;
    } else {
        let openSpots = spots(board);
        if(openSpots == 0){
            return 0;
        }
return null;
    }
}

function spots(board) {
    let openSpots = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === 'n') {
                openSpots++;
            }
        }
    }
    return openSpots;
}

function bestMove(board) {

    // AI to make its turn
    let bestScore = -1000;
    let movei = 0;
    let movej = 0;
    let open = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            // Is the spot available?
            if (board[i][j] == 'n') {
                open++;
                board[i][j] = ai;
                let score = minimax(board, false);
                board[i][j] = 'n';
                if (score > bestScore) {
                    bestScore = score;
                    movei = i;
                    movej = j;
                }
            }
        }
    }
    if (open != 0) {
        placeMarker(movei,movej,ai);
    }
    currentPlayer = human;
    return bestScore;
}


function minimax(board, isMaximizing) {

    let result = calculateScore(board);
    if (result == 1) {
        return result;
    }
    if (result == -1) {
        return result;
    }
    if (result == 0) {
        return result;
    }

    if (isMaximizing) {
        let bestScore = -1000;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                // Is the spot available?
                if (board[i][j] == 'n') {
                    board[i][j] = ai;
                    //placeMarker(i,j,ai);
                    let score = minimax(board, false);
                    board[i][j] = 'n';
                    //removeMarker(i,j)
                    bestScore = Math.max(score, bestScore);
                }
            }
        }
        return bestScore;
    } else {
        let bestScore = 1000;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                // Is the spot available?
                if (board[i][j] == 'n') {
                    board[i][j] = human;
                    //placeMarker(i,j,human);
                    let score = minimax(board, true);
                    board[i][j] = 'n';
                    //removeMarker(i,j)
                    bestScore = Math.min(score, bestScore);
                }
            }
        }
        return bestScore;
    }
}