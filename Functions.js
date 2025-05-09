const board = {
    '1': "",
    '2': "",
    '3': "",
    '4': "",
    '5': "",
    '6': "",
    '7': "",
    '8': "",
    '9': "",
};

let wins = localStorage.getItem("wins") || 0;
let losses = localStorage.getItem("losses") || 0;
let draws = localStorage.getItem("draws") || 0;
const ScoreBoard = document.getElementById("ScoreBoard");
ScoreBoard.innerHTML = "X wins: " + wins + " / Draws: " + draws + " / O wins: " + losses;

let move = 0;

const buttons = document.getElementById("Buttons").children;

const title = document.getElementById("title");
title.style.opacity = "0";
title.style.color = "rgb(0, 217, 255)";

let timeAfterRound = 2;

let ended = false;
let PVE = true;
let PlayAs = "X";
let WhoseMove = 'X';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function updateScoreBoard() {
    localStorage.setItem("wins", wins);
    localStorage.setItem("losses", losses);
    localStorage.setItem("draws", draws);

    ScoreBoard.innerHTML = "X wins: " + wins + " / Draws: " + draws + " / O wins: " + losses;
}

function resetScore() {
    wins = 0;
    losses = 0;
    draws = 0;
    updateScoreBoard();
}


// PVP Code:

async function PVPorPVE() {
    if (PVE) {
        for (let y in board) {
            board[y] = '';
        }
        for (let i = 1; i < 10; i++) {
            document.getElementById(i).innerHTML = '';
        }
        ended = false;
        PVE = false;
        move = 0;
        resetScore();
        document.getElementById("PVPButton").innerHTML = "Player vs Bot";
    } else {
        for (let y in board) {
            board[y] = '';
        }
        for (let i = 1; i < 10; i++) {
            document.getElementById(i).innerHTML = '';
        }
        ended = false;
        PVE = true;
        move = 0;
        resetScore();
        document.getElementById("PVPButton").innerHTML = "Player vs Player";
    }
}


//  PVE Code:

function PlayAsX() {
    PVE = false;
    PlayAs = "X";
    PVPorPVE();
}

function PlayAsO() {
    PVE = false;
    PlayAs = "O";
    PVPorPVE();
    randomNum("X");
}

function if3Win(botMove) {
    if (botMove == "O") {
        if (board[1] == '' && board[2] == 'O' && board[3] == 'O') {
            return 1;
        } else if (board[1] == 'O' && board[2] == '' && board[3] == 'O') {
            return 2;
        } else if (board[1] == 'O' && board[2] == 'O' && board[3] == '') {
            return 3;
        }

        if (board[4] == '' && board[5] == 'O' && board[6] == 'O') {
            return 4;
        } else if (board[4] == 'O' && board[5] == '' && board[6] == 'O') {
            return 5;
        } else if (board[4] == 'O' && board[5] == 'O' && board[6] == '') {
            return 6;
        }

        if (board[7] == '' && board[8] == 'O' && board[9] == 'O') {
            return 7;
        } else if (board[7] == 'O' && board[8] == '' && board[9] == 'O') {
            return 8;
        } else if (board[7] == 'O' && board[8] == 'O' && board[9] == '') {
            return 9;
        }

        if (board[1] == '' && board[4] == 'O' && board[7] == 'O') {
            return 1;
        } else if (board[1] == 'O' && board[4] == '' && board[7] == 'O') {
            return 4;
        } else if (board[1] == 'O' && board[4] == 'O' && board[7] == '') {
            return 7;
        }

        if (board[2] == '' && board[5] == 'O' && board[8] == 'O') {
            return 2;
        } else if (board[2] == 'O' && board[5] == '' && board[8] == 'O') {
            return 5;
        } else if (board[2] == 'O' && board[5] == 'O' && board[8] == '') {
            return 8;
        }

        if (board[3] == '' && board[6] == 'O' && board[9] == 'O') {
            return 3;
        } else if (board[3] == 'O' && board[6] == '' && board[9] == 'O') {
            return 6;
        } else if (board[3] == 'O' && board[6] == 'O' && board[9] == '') {
            return 9;
        }

        if (board[1] == '' && board[5] == 'O' && board[9] == 'O') {
            return 1;
        } else if (board[1] == 'O' && board[5] == '' && board[9] == 'O') {
            return 5;
        } else if (board[1] == 'O' && board[5] == 'O' && board[9] == '') {
            return 9;
        }

        if (board[3] == '' && board[5] == 'O' && board[7] == 'O') {
            return 3;
        } else if (board[3] == 'O' && board[5] == '' && board[7] == 'O') {
            return 5;
        } else if (board[3] == 'O' && board[5] == 'O' && board[7] == '') {
            return 7;
        }
    } else if (botMove == "X") {
        if (board[1] == '' && board[2] == 'X' && board[3] == 'X') {
            return 1;
        } else if (board[1] == 'X' && board[2] == '' && board[3] == 'X') {
            return 2;
        } else if (board[1] == 'X' && board[2] == 'X' && board[3] == '') {
            return 3;
        }

        if (board[4] == '' && board[5] == 'X' && board[6] == 'X') {
            return 4;
        } else if (board[4] == 'X' && board[5] == '' && board[6] == 'X') {
            return 5;
        } else if (board[4] == 'X' && board[5] == 'X' && board[6] == '') {
            return 6;
        }

        if (board[7] == '' && board[8] == 'X' && board[9] == 'X') {
            return 7;
        } else if (board[7] == 'X' && board[8] == '' && board[9] == 'X') {
            return 8;
        } else if (board[7] == 'X' && board[8] == 'X' && board[9] == '') {
            return 9;
        }

        if (board[1] == '' && board[4] == 'X' && board[7] == 'X') {
            return 1;
        } else if (board[1] == 'X' && board[4] == '' && board[7] == 'X') {
            return 4;
        } else if (board[1] == 'X' && board[4] == 'X' && board[7] == '') {
            return 7;
        }

        if (board[2] == '' && board[5] == 'X' && board[8] == 'X') {
            return 2;
        } else if (board[2] == 'X' && board[5] == '' && board[8] == 'X') {
            return 5;
        } else if (board[2] == 'X' && board[5] == 'X' && board[8] == '') {
            return 8;
        }

        if (board[3] == '' && board[6] == 'X' && board[9] == 'X') {
            return 3;
        } else if (board[3] == 'X' && board[6] == '' && board[9] == 'X') {
            return 6;
        } else if (board[3] == 'X' && board[6] == 'X' && board[9] == '') {
            return 9;
        }

        if (board[1] == '' && board[5] == 'X' && board[9] == 'X') {
            return 1;
        } else if (board[1] == 'X' && board[5] == '' && board[9] == 'X') {
            return 5;
        } else if (board[1] == 'X' && board[5] == 'X' && board[9] == '') {
            return 9;
        }

        if (board[3] == '' && board[5] == 'X' && board[7] == 'X') {
            return 3;
        } else if (board[3] == 'X' && board[5] == '' && board[7] == 'X') {
            return 5;
        } else if (board[3] == 'X' && board[5] == 'X' && board[7] == '') {
            return 7;
        }
    }
    return 0;
}

function if3Block(botMove) {
    if (botMove == "O") {
        if (board[1] == '' && board[2] == 'X' && board[3] == 'X') {
            return 1;
        } else if (board[1] == 'X' && board[2] == '' && board[3] == 'X') {
            return 2;
        } else if (board[1] == 'X' && board[2] == 'X' && board[3] == '') {
            return 3;
        }

        if (board[4] == '' && board[5] == 'X' && board[6] == 'X') {
            return 4;
        } else if (board[4] == 'X' && board[5] == '' && board[6] == 'X') {
            return 5;
        } else if (board[4] == 'X' && board[5] == 'X' && board[6] == '') {
            return 6;
        }

        if (board[7] == '' && board[8] == 'X' && board[9] == 'X') {
            return 7;
        } else if (board[7] == 'X' && board[8] == '' && board[9] == 'X') {
            return 8;
        } else if (board[7] == 'X' && board[8] == 'X' && board[9] == '') {
            return 9;
        }

        if (board[1] == '' && board[4] == 'X' && board[7] == 'X') {
            return 1;
        } else if (board[1] == 'X' && board[4] == '' && board[7] == 'X') {
            return 4;
        } else if (board[1] == 'X' && board[4] == 'X' && board[7] == '') {
            return 7;
        }

        if (board[2] == '' && board[5] == 'X' && board[8] == 'X') {
            return 2;
        } else if (board[2] == 'X' && board[5] == '' && board[8] == 'X') {
            return 5;
        } else if (board[2] == 'X' && board[5] == 'X' && board[8] == '') {
            return 8;
        }

        if (board[3] == '' && board[6] == 'X' && board[9] == 'X') {
            return 3;
        } else if (board[3] == 'X' && board[6] == '' && board[9] == 'X') {
            return 6;
        } else if (board[3] == 'X' && board[6] == 'X' && board[9] == '') {
            return 9;
        }

        if (board[1] == '' && board[5] == 'X' && board[9] == 'X') {
            return 1;
        } else if (board[1] == 'X' && board[5] == '' && board[9] == 'X') {
            return 5;
        } else if (board[1] == 'X' && board[5] == 'X' && board[9] == '') {
            return 9;
        }

        if (board[3] == '' && board[5] == 'X' && board[7] == 'X') {
            return 3;
        } else if (board[3] == 'X' && board[5] == '' && board[7] == 'X') {
            return 5;
        } else if (board[3] == 'X' && board[5] == 'X' && board[7] == '') {
            return 7;
        }
    } else if (botMove == "X") {
        if (board[1] == '' && board[2] == 'O' && board[3] == 'O') {
            return 1;
        } else if (board[1] == 'O' && board[2] == '' && board[3] == 'O') {
            return 2;
        } else if (board[1] == 'O' && board[2] == 'O' && board[3] == '') {
            return 3;
        }

        if (board[4] == '' && board[5] == 'O' && board[6] == 'O') {
            return 4;
        } else if (board[4] == 'O' && board[5] == '' && board[6] == 'O') {
            return 5;
        } else if (board[4] == 'O' && board[5] == 'O' && board[6] == '') {
            return 6;
        }

        if (board[7] == '' && board[8] == 'O' && board[9] == 'O') {
            return 7;
        } else if (board[7] == 'O' && board[8] == '' && board[9] == 'O') {
            return 8;
        } else if (board[7] == 'O' && board[8] == 'O' && board[9] == '') {
            return 9;
        }

        if (board[1] == '' && board[4] == 'O' && board[7] == 'O') {
            return 1;
        } else if (board[1] == 'O' && board[4] == '' && board[7] == 'O') {
            return 4;
        } else if (board[1] == 'O' && board[4] == 'O' && board[7] == '') {
            return 7;
        }

        if (board[2] == '' && board[5] == 'O' && board[8] == 'O') {
            return 2;
        } else if (board[2] == 'O' && board[5] == '' && board[8] == 'O') {
            return 5;
        } else if (board[2] == 'O' && board[5] == 'O' && board[8] == '') {
            return 8;
        }

        if (board[3] == '' && board[6] == 'O' && board[9] == 'O') {
            return 3;
        } else if (board[3] == 'O' && board[6] == '' && board[9] == 'O') {
            return 6;
        } else if (board[3] == 'O' && board[6] == 'O' && board[9] == '') {
            return 9;
        }

        if (board[1] == '' && board[5] == 'O' && board[9] == 'O') {
            return 1;
        } else if (board[1] == 'O' && board[5] == '' && board[9] == 'O') {
            return 5;
        } else if (board[1] == 'O' && board[5] == 'O' && board[9] == '') {
            return 9;
        }

        if (board[3] == '' && board[5] == 'O' && board[7] == 'O') {
            return 3;
        } else if (board[3] == 'O' && board[5] == '' && board[7] == 'O') {
            return 5;
        } else if (board[3] == 'O' && board[5] == 'O' && board[7] == '') {
            return 7;
        }
    }
    return 0;
}

function sensitiveCases(botMove) {
    if (botMove == "O") {
        // Case 1
        if (board[5] == 'X' && move == 1) {
            x = Math.floor(Math.random() * 5);
            while (x == 0) {
                x = Math.floor(Math.random() * 5);
            }
            if (x == 1) {
                return 1;
            } else if (x == 2) {
                return 3;
            } else if (x == 3) {
                return 7;
            } else if (x == 4) {
                return 9;
            }
        } else if (board[5] != 'X' && move == 1) {
            return 5;
        }

        // Case 2
        if (move == 2 && board[5] == 'X' && board[1] == 'X' || board[3] == 'X' || board[7] == 'X' || board[9] == 'X') {
            let currentXPos = [];
            for (let y in board) {
                if (board[y] == "X" && y != 5) {
                    currentXPos[0] = y;
                }
            }
            if (currentXPos[0] == 1 && board[9] == 'O') {
                x = Math.floor(Math.random() * 3);
                while (x == 0) {
                    x = Math.floor(Math.random() * 3);
                }
                if (x == 1) {
                    return 3;
                } else if (x == 2) {
                    return 7;
                }
            } else if (currentXPos[0] == 3 && board[7] == 'O') {
                x = Math.floor(Math.random() * 3);
                while (x == 0) {
                    x = Math.floor(Math.random() * 3);
                }
                if (x == 1) {
                    return 1;
                } else if (x == 2) {
                    return 9;
                }
            } else if (currentXPos[0] == 7 && board[3] == 'O') {
                x = Math.floor(Math.random() * 3);
                while (x == 0) {
                    x = Math.floor(Math.random() * 3);
                }
                if (x == 1) {
                    return 1;
                } else if (x == 2) {
                    return 9;
                }
            } else if (currentXPos[0] == 9 && board[1] == 'O') {
                x = Math.floor(Math.random() * 3);
                while (x == 0) {
                    x = Math.floor(Math.random() * 3);
                }
                if (x == 1) {
                    return 3;
                } else if (x == 2) {
                    return 7;
                }
            }
        }

        // Case 3
        if (move == 2 && board[5] == 'O' && board[1] == 'X' || board[3] == 'X' || board[7] == 'X' || board[9] == 'X') {
            let currentXPos = [' '];
            for (let y in board) {
                if (board[y] == "X") {
                    if (currentXPos[0] == ' ') {
                        currentXPos[0] = y;
                    } else {
                        currentXPos[1] = y;
                    }
                }
            }
            if (currentXPos[0] == 3 && currentXPos[1] == 7 || currentXPos[0] == 1 && currentXPos[1] == 9) {
                x = Math.floor(Math.random() * 5);
                while (x == 0) {
                    x = Math.floor(Math.random() * 5);
                }
                if (x == 1) {
                    return 2;
                } else if (x == 2) {
                    return 4;
                } else if (x == 3) {
                    return 6;
                } else if (x == 4) {
                    return 8;
                }
            }
        }

        // Case 4
        if (move == 2 && board[5] == 'O' && board[2] == 'X' || board[4] == 'X' || board[6] == 'X' || board[8] == 'X') {
            let currentXPos = [' '];
            for (let y in board) {
                if (board[y] == "X") {
                    if (currentXPos[0] == ' ') {
                        currentXPos[0] = y;
                    } else {
                        currentXPos[1] = y;
                    }
                }
            }
            if (currentXPos[0] == 2 && currentXPos[1] == 4) {
                return 1;
            } else if (currentXPos[0] == 2 && currentXPos[1] == 6) {
                return 3;
            } else if (currentXPos[0] == 4 && currentXPos[1] == 8) {
                return 7;
            } else if (currentXPos[0] == 6 && currentXPos[1] == 8) {
                return 9;
            }
        }

        // Case 5
        if (move == 2 && board[5] == 'O' && (board[2] == 'X' && board[7] == 'X' || board[2] == 'X' && board[9] == 'X' || board[4] == 'X' && board[3] == 'X' || board[4] == 'X' && board[9] == 'X' || board[6] == 'X' && board[1] == 'X' || board[6] == 'X' && board[7] == 'X' || board[8] == 'X' && board[1] == 'X' || board[8] == 'X' && board[3] == 'X')) {
            let currentXPos = [' '];
            for (let y in board) {
                if (board[y] == "X") {
                    if (currentXPos[0] == ' ') {
                        currentXPos[0] = y;
                    } else {
                        currentXPos[1] = y;
                    }
                }
            }
            if (currentXPos[0] == 2 && currentXPos[1] == 7) {
                return 1;
            } else if (currentXPos[0] == 2 && currentXPos[1] == 9) {
                return 3;
            } else if (currentXPos[0] == 3 && currentXPos[1] == 4) {
                return 1;
            } else if (currentXPos[0] == 4 && currentXPos[1] == 9) {
                return 7;
            } else if (currentXPos[0] == 1 && currentXPos[1] == 6) {
                return 3;
            } else if (currentXPos[0] == 6 && currentXPos[1] == 7) {
                return 9;
            } else if (currentXPos[0] == 1 && currentXPos[1] == 8) {
                return 7;
            } else if (currentXPos[0] == 3 && currentXPos[1] == 8) {
                return 9;
            }
        }

        return 0;
    } else if (botMove == "X") {
        // continua dac sunt sens cases..
    }
}

function checkWinX() {
    if (board[1] == 'X' && board[2] == 'X' && board[3] == 'X') {
        return true;
    } else if (board[4] == 'X' && board[5] == 'X' && board[6] == 'X') {
        return true;
    } else if (board[7] == 'X' && board[8] == 'X' && board[9] == 'X') {
        return true;
    } else if (board[1] == 'X' && board[4] == 'X' && board[7] == 'X') {
        return true;
    } else if (board[2] == 'X' && board[5] == 'X' && board[8] == 'X') {
        return true;
    } else if (board[3] == 'X' && board[6] == 'X' && board[9] == 'X') {
        return true;
    } else if (board[1] == 'X' && board[5] == 'X' && board[9] == 'X') {
        return true;
    } else if (board[3] == 'X' && board[5] == 'X' && board[7] == 'X') {
        return true;
    }
    return false;
}

function checkWinO() {
    if (board[1] == 'O' && board[2] == 'O' && board[3] == 'O') {
        return true;
    } else if (board[4] == 'O' && board[5] == 'O' && board[6] == 'O') {
        return true;
    } else if (board[7] == 'O' && board[8] == 'O' && board[9] == 'O') {
        return true;
    } else if (board[1] == 'O' && board[4] == 'O' && board[7] == 'O') {
        return true;
    } else if (board[2] == 'O' && board[5] == 'O' && board[8] == 'O') {
        return true;
    } else if (board[3] == 'O' && board[6] == 'O' && board[9] == 'O') {
        return true;
    } else if (board[1] == 'O' && board[5] == 'O' && board[9] == 'O') {
        return true;
    } else if (board[3] == 'O' && board[5] == 'O' && board[7] == 'O') {
        return true;
    }
    return false;
}

async function randomNum(botMove) {
    if (botMove == "O") {
        for (let y in board) {
            if (board[y] == "") {
                break;
            }
            if (y == 9 && board[y] != "") {
                return false;
            }
        }

        let x = sensitiveCases("O");
        if (move == 1 && x != 0) {
            console.log(x)
            document.getElementById(x).innerHTML = 'O';
            board[x] = 'O';
            if (checkWinO()) {
                console.log("game ended");
                console.log("O won!");
                ended = true;
                title.style.opacity = "100";
                title.innerHTML = "O won!";
                losses++;
                updateScoreBoard();
                move = 0;

                await sleep(timeAfterRound * 1000);
                for (let x in board) {
                    board[x] = "";
                }
                for (let y in buttons) {
                    buttons[y].innerHTML = "";
                }
                ended = false;
                title.style.opacity = "0";
                return;
            }
            return;
        }
        if (move == 2 && x != 0 && board[5] == 'X') {
            if (x != 0) {
                console.log(x)
                document.getElementById(x).innerHTML = 'O';
                board[x] = 'O';
                if (checkWinO()) {
                    console.log("game ended");
                    console.log("O won!");
                    ended = true;
                    title.style.opacity = "100";
                    title.innerHTML = "O won!";
                    losses++;
                    updateScoreBoard();
                    move = 0;

                    await sleep(timeAfterRound * 1000);
                    for (let x in board) {
                        board[x] = "";
                    }
                    for (let y in buttons) {
                        buttons[y].innerHTML = "";
                    }
                    ended = false;
                    title.style.opacity = "0";
                    return;
                }
            }
            return;
        }
        if (move == 2 && x != 0 && board[5] == 'O' && (board[1] == 'X' || board[3] == 'X' || board[7] == 'X' || board[9] == 'X')) {
            if (x != 0) {
                console.log(x)
                document.getElementById(x).innerHTML = 'O';
                board[x] = 'O';
                if (checkWinO()) {
                    console.log("game ended");
                    console.log("O won!");
                    ended = true;
                    title.style.opacity = "100";
                    title.innerHTML = "O won!";
                    losses++;
                    updateScoreBoard();
                    move = 0;

                    await sleep(timeAfterRound * 1000);
                    for (let x in board) {
                        board[x] = "";
                    }
                    for (let y in buttons) {
                        buttons[y].innerHTML = "";
                    }
                    ended = false;
                    title.style.opacity = "0";
                    return;
                }
            }
            return;
        }
        if (move == 2 && board[5] == 'O' && (board[2] == 'X' && board[4] == 'X' || board[2] == 'X' && board[6] == 'X' || board[4] == 'X' && board[8] == 'X' || board[6] == 'X' && board[8] == 'X')) {
            if (x != 0) {
                console.log(x)
                document.getElementById(x).innerHTML = 'O';
                board[x] = 'O';
                if (checkWinO()) {
                    console.log("game ended");
                    console.log("O won!");
                    ended = true;
                    title.style.opacity = "100";
                    title.innerHTML = "O won!";
                    losses++;
                    updateScoreBoard();
                    move = 0;

                    await sleep(timeAfterRound * 1000);
                    for (let x in board) {
                        board[x] = "";
                    }
                    for (let y in buttons) {
                        buttons[y].innerHTML = "";
                    }
                    ended = false;
                    title.style.opacity = "0";
                    return;
                }
            }
        } else {
            x = if3Win("O");
            if (x != 0) {
                console.log(x)
                document.getElementById(x).innerHTML = 'O';
                board[x] = 'O';
                if (checkWinO()) {
                    console.log("game ended");
                    console.log("O won!");
                    ended = true;
                    title.style.opacity = "100";
                    title.innerHTML = "O won!";
                    losses++;
                    updateScoreBoard();
                    move = 0;

                    await sleep(timeAfterRound * 1000);
                    for (let x in board) {
                        board[x] = "";
                    }
                    for (let y in buttons) {
                        buttons[y].innerHTML = "";
                    }
                    ended = false;
                    title.style.opacity = "0";
                    return;
                }
            } else {
                x = if3Block("O");
                if (x != 0) {
                    console.log(x)
                    document.getElementById(x).innerHTML = 'O';
                    board[x] = 'O';
                    if (checkWinO()) {
                        console.log("game ended");
                        console.log("O won!");
                        ended = true;
                        title.style.opacity = "100";
                        title.innerHTML = "O won!";
                        losses++;
                        updateScoreBoard();
                        move = 0;

                        await sleep(timeAfterRound * 1000);
                        for (let x in board) {
                            board[x] = "";
                        }
                        for (let y in buttons) {
                            buttons[y].innerHTML = "";
                        }
                        ended = false;
                        title.style.opacity = "0";
                        return;
                    }
                } else {
                    x = Math.floor(Math.random() * 10);
                    while (x == 0) {
                        x = Math.floor(Math.random() * 10);
                    }

                    if (board[x] != 'X' && board[x] != 'O') {
                        console.log(x)
                        document.getElementById(x).innerHTML = 'O';
                        board[x] = 'O';
                        if (checkWinO()) {
                            console.log("game ended");
                            console.log("O won!");
                            ended = true;
                            title.style.opacity = "100";
                            title.innerHTML = "O won!";
                            losses++;
                            updateScoreBoard();
                            move = 0;

                            await sleep(timeAfterRound * 1000);
                            for (let x in board) {
                                board[x] = "";
                            }
                            for (let y in buttons) {
                                buttons[y].innerHTML = "";
                            }
                            ended = false;
                            title.style.opacity = "0";
                            return;
                        }
                    } else {
                        randomNum("O");
                    }
                }
            }
        }
    } else if (botMove == "X") {
        // continue

        for (let y in board) {
            if (board[y] == "") {
                break;
            }
            if (y == 9 && board[y] != "") {
                return false;
            }
        }

        if (botMove == "X") {
            x = if3Win("X");
            if (x != 0) {
                console.log(x)
                document.getElementById(x).innerHTML = 'X';
                board[x] = 'X';
                if (checkWinX()) {
                    console.log("game ended");
                    console.log("X won!");
                    ended = true;
                    title.style.opacity = "100";
                    title.innerHTML = "X won!";
                    wins++;
                    updateScoreBoard();
                    move = 0;

                    await sleep(timeAfterRound * 1000);
                    for (let x in board) {
                        board[x] = "";
                    }
                    for (let y in buttons) {
                        buttons[y].innerHTML = "";
                    }
                    ended = false;
                    title.style.opacity = "0";
                    randomNum("X")
                    return;
                }

                for (let y in board) {
                    if (board[y] == "") {
                        break;
                    }
                    if (y == 9 && board[y] != "") {
                        console.log("game ended");
                        ended = true;
                        if (checkWinX()) {
                            console.log("X won");
                            title.style.opacity = "100";
                            title.innerHTML = "X won!";
                            wins++;
                            updateScoreBoard();
                            move = 0;
                        } else if (checkWinO()) {
                            console.log("O won");
                            title.style.opacity = "100";
                            title.innerHTML = "O won!";
                            losses++;
                            updateScoreBoard();
                            move = 0;
                        } else {
                            console.log("Draw");
                            title.style.opacity = "100";
                            title.innerHTML = "Draw!";
                            draws++;
                            updateScoreBoard();
                            move = 0;
        
                            await sleep(timeAfterRound * 1000);
                            for (let x in board) {
                                board[x] = "";
                            }
                            for (let y in buttons) {
                                buttons[y].innerHTML = "";
                            }
                            ended = false;
                            title.style.opacity = "0";
                            randomNum("X")
                            return;
                        }
                    }
                }
            } else {
                x = if3Block("X");
                if (x != 0) {
                    console.log(x)
                    document.getElementById(x).innerHTML = 'X';
                    board[x] = 'X';
                    if (checkWinX()) {
                        console.log("game ended");
                        console.log("X won!");
                        ended = true;
                        title.style.opacity = "100";
                        title.innerHTML = "X won!";
                        wins++;
                        updateScoreBoard();
                        move = 0;

                        await sleep(timeAfterRound * 1000);
                        for (let x in board) {
                            board[x] = "";
                        }
                        for (let y in buttons) {
                            buttons[y].innerHTML = "";
                        }
                        ended = false;
                        title.style.opacity = "0";
                        randomNum("X")
                        return;
                    }

                    for (let y in board) {
                        if (board[y] == "") {
                            break;
                        }
                        if (y == 9 && board[y] != "") {
                            console.log("game ended");
                            ended = true;
                            if (checkWinX()) {
                                console.log("X won");
                                title.style.opacity = "100";
                                title.innerHTML = "X won!";
                                wins++;
                                updateScoreBoard();
                                move = 0;
                            } else if (checkWinO()) {
                                console.log("O won");
                                title.style.opacity = "100";
                                title.innerHTML = "O won!";
                                losses++;
                                updateScoreBoard();
                                move = 0;
                            } else {
                                console.log("Draw");
                                title.style.opacity = "100";
                                title.innerHTML = "Draw!";
                                draws++;
                                updateScoreBoard();
                                move = 0;
            
                                await sleep(timeAfterRound * 1000);
                                for (let x in board) {
                                    board[x] = "";
                                }
                                for (let y in buttons) {
                                    buttons[y].innerHTML = "";
                                }
                                ended = false;
                                title.style.opacity = "0";
                                randomNum("X")
                                return;
                            }
                        }
                    }
                } else {
                    x = Math.floor(Math.random() * 10);
                    while (x == 0) {
                        x = Math.floor(Math.random() * 10);
                    }

                    if (board[x] != 'X' && board[x] != 'O') {
                        console.log(x)
                        document.getElementById(x).innerHTML = 'X';
                        board[x] = 'X';
                        if (checkWinX()) {
                            console.log("game ended");
                            console.log("X won!");
                            ended = true;
                            title.style.opacity = "100";
                            title.innerHTML = "X won!";
                            wins++;
                            updateScoreBoard();
                            move = 0;

                            await sleep(timeAfterRound * 1000);
                            for (let x in board) {
                                board[x] = "";
                            }
                            for (let y in buttons) {
                                buttons[y].innerHTML = "";
                            }
                            ended = false;
                            title.style.opacity = "0";
                            randomNum("X")
                            return;
                        }
                        
                        for (let y in board) {
                            if (board[y] == "") {
                                break;
                            }
                            if (y == 9 && board[y] != "") {
                                console.log("game ended");
                                ended = true;
                                if (checkWinX()) {
                                    console.log("X won");
                                    title.style.opacity = "100";
                                    title.innerHTML = "X won!";
                                    wins++;
                                    updateScoreBoard();
                                    move = 0;
                                } else if (checkWinO()) {
                                    console.log("O won");
                                    title.style.opacity = "100";
                                    title.innerHTML = "O won!";
                                    losses++;
                                    updateScoreBoard();
                                    move = 0;
                                } else {
                                    console.log("Draw");
                                    title.style.opacity = "100";
                                    title.innerHTML = "Draw!";
                                    draws++;
                                    updateScoreBoard();
                                    move = 0;
                
                                    await sleep(timeAfterRound * 1000);
                                    for (let x in board) {
                                        board[x] = "";
                                    }
                                    for (let y in buttons) {
                                        buttons[y].innerHTML = "";
                                    }
                                    ended = false;
                                    title.style.opacity = "0";
                                    randomNum("X")
                                    return;
                                }
                            }
                        }
                    } else {
                        for (let y in board) {
                            if (board[y] == "") {
                                break;
                            }
                            if (y == 9 && board[y] != "") {
                                console.log("game ended");
                                ended = true;
                                if (checkWinX()) {
                                    console.log("X won");
                                    title.style.opacity = "100";
                                    title.innerHTML = "X won!";
                                    wins++;
                                    updateScoreBoard();
                                    move = 0;
                                } else if (checkWinO()) {
                                    console.log("O won");
                                    title.style.opacity = "100";
                                    title.innerHTML = "O won!";
                                    losses++;
                                    updateScoreBoard();
                                    move = 0;
                                } else {
                                    console.log("Draw");
                                    title.style.opacity = "100";
                                    title.innerHTML = "Draw!";
                                    draws++;
                                    updateScoreBoard();
                                    move = 0;
                
                                    await sleep(timeAfterRound * 1000);
                                    for (let x in board) {
                                        board[x] = "";
                                    }
                                    for (let y in buttons) {
                                        buttons[y].innerHTML = "";
                                    }
                                    ended = false;
                                    title.style.opacity = "0";
                                    randomNum("X")
                                    return;
                                }
                            }
                        }
                        randomNum("X");
                    }
                }
            }
        }
    }
}

async function display(input) {
    if (board[input] != 'X' && board[input] != 'O' && !ended && PVE && PlayAs == "X") {
        document.getElementById(input).innerHTML = 'X';
        board[input] = 'X';
        move++;

        if (checkWinX()) {
            console.log("game ended");
            console.log("X won");
            ended = true;
            title.style.opacity = "100";
            title.innerHTML = "X won!";
            wins++;
            updateScoreBoard();
            move = 0;

            await sleep(timeAfterRound * 1000);
            for (let x in board) {
                board[x] = "";
            }
            for (let y in buttons) {
                buttons[y].innerHTML = "";
            }
            ended = false;
            title.style.opacity = "0";
            return;
        }

        for (let y in board) {
            if (board[y] == "") {
                break;
            }
            if (y == 9 && board[y] != "") {
                console.log("game ended");
                ended = true;
                if (checkWinX()) {
                    console.log("X won");
                    title.style.opacity = "100";
                    title.innerHTML = "X won!";
                    wins++;
                    updateScoreBoard();
                    move = 0;
                } else if (checkWinO()) {
                    console.log("O won");
                    title.style.opacity = "100";
                    title.innerHTML = "O won!";
                    losses++;
                    updateScoreBoard();
                    move = 0;
                } else {
                    console.log("Draw");
                    title.style.opacity = "100";
                    title.innerHTML = "Draw!";
                    draws++;
                    updateScoreBoard();
                    move = 0;

                    await sleep(timeAfterRound * 1000);
                    for (let x in board) {
                        board[x] = "";
                    }
                    for (let y in buttons) {
                        buttons[y].innerHTML = "";
                    }
                    ended = false;
                    title.style.opacity = "0";
                    return;
                }
            }
        }

        randomNum("O");
    } else if (board[input] != 'X' && board[input] != 'O' && !ended && PVE && PlayAs == "O") {
        document.getElementById(input).innerHTML = 'O';
        board[input] = 'O';
        move++;

        if (checkWinO()) {
            console.log("game ended");
            console.log("O won");
            ended = true;
            title.style.opacity = "100";
            title.innerHTML = "O won!";
            losses++;
            updateScoreBoard();
            move = 0;

            await sleep(timeAfterRound * 1000);
            for (let x in board) {
                board[x] = "";
            }
            for (let y in buttons) {
                buttons[y].innerHTML = "";
            }
            ended = false;
            title.style.opacity = "0";
            randomNum("X");
            return;
        }

        for (let y in board) {
            if (board[y] == "") {
                break;
            }
            if (y == 9 && board[y] != "") {

                console.log("game ended");
                ended = true;
                if (checkWinO()) {
                    console.log("O won");
                    title.style.opacity = "100";
                    title.innerHTML = "O won!";
                    losses++;
                    updateScoreBoard();
                    move = 0;
                    randomNum("X");
                } else if (checkWinX()) {
                    console.log("X won");
                    title.style.opacity = "100";
                    title.innerHTML = "X won!";
                    wins++;
                    updateScoreBoard();
                    move = 0;
                    randomNum("X");
                } else {
                    console.log("Draw");
                    title.style.opacity = "100";
                    title.innerHTML = "Draw!";
                    draws++;
                    updateScoreBoard();
                    move = 0;

                    await sleep(timeAfterRound * 1000);
                    for (let x in board) {
                        board[x] = "";
                    }
                    for (let y in buttons) {
                        buttons[y].innerHTML = "";
                    }
                    ended = false;
                    title.style.opacity = "0";
                    randomNum("X");
                    return;
                }
            }
        }

        randomNum("X");
    } else if (board[input] != 'X' && board[input] != 'O' && !PVE) {
        if (board[input] != 'X' && board[input] != 'O' && WhoseMove == 'X') {
            document.getElementById(input).innerHTML = 'X';
            board[input] = 'X';
            move++;

            if (checkWinX()) {
                console.log("game ended");
                console.log("X won");
                ended = true;
                title.style.opacity = "100";
                title.innerHTML = "X won!";
                wins++;
                updateScoreBoard();
                move = 0;

                await sleep(timeAfterRound * 1000);
                for (let x in board) {
                    board[x] = "";
                }
                for (let y in buttons) {
                    buttons[y].innerHTML = "";
                }
                ended = false;
                title.style.opacity = "0";
                return;
            }

            for (let y in board) {
                if (board[y] == "") {
                    break;
                }
                if (y == 9 && board[y] != "") {

                    console.log("game ended");
                    ended = true;
                    if (checkWinX()) {
                        console.log("X won");
                        title.style.opacity = "100";
                        title.innerHTML = "X won!";
                        wins++;
                        updateScoreBoard();
                        move = 0;
                    } else if (checkWinO()) {
                        console.log("O won");
                        title.style.opacity = "100";
                        title.innerHTML = "O won!";
                        losses++;
                        updateScoreBoard();
                        move = 0;
                    } else {
                        console.log("Draw");
                        title.style.opacity = "100";
                        title.innerHTML = "Draw!";
                        draws++;
                        updateScoreBoard();
                        move = 0;

                        await sleep(timeAfterRound * 1000);
                        for (let x in board) {
                            board[x] = "";
                        }
                        for (let y in buttons) {
                            buttons[y].innerHTML = "";
                        }
                        ended = false;
                        title.style.opacity = "0";
                        return;
                    }
                }
            }

            WhoseMove = 'O';
        } else if (board[input] != 'X' && board[input] != 'O' && WhoseMove == 'O' && !PVE) {
            document.getElementById(input).innerHTML = 'O';
            board[input] = 'O';
            move++;

            if (checkWinO()) {
                console.log("game ended");
                console.log("O won");
                ended = true;
                title.style.opacity = "100";
                title.innerHTML = "O won!";
                losses++;
                updateScoreBoard();
                move = 0;

                await sleep(timeAfterRound * 1000);
                for (let x in board) {
                    board[x] = "";
                }
                for (let y in buttons) {
                    buttons[y].innerHTML = "";
                }
                ended = false;
                title.style.opacity = "0";
                return;
            }

            for (let y in board) {
                if (board[y] == "") {
                    break;
                }
                if (y == 9 && board[y] != "") {

                    console.log("game ended");
                    ended = true;
                    if (checkWinO()) {
                        console.log("O won");
                        title.style.opacity = "100";
                        title.innerHTML = "O won!";
                        losses++;
                        updateScoreBoard();
                        move = 0;
                    } else if (checkWinX()) {
                        console.log("X won");
                        title.style.opacity = "100";
                        title.innerHTML = "X won!";
                        wins++;
                        updateScoreBoard();
                        move = 0;
                    } else {
                        console.log("Draw");
                        title.style.opacity = "100";
                        title.innerHTML = "Draw!";
                        draws++;
                        updateScoreBoard();
                        move = 0;

                        await sleep(timeAfterRound * 1000);
                        for (let x in board) {
                            board[x] = "";
                        }
                        for (let y in buttons) {
                            buttons[y].innerHTML = "";
                        }
                        ended = false;
                        title.style.opacity = "0";
                        return;
                    }
                }
            }

            WhoseMove = 'X';
        }
    }
}
