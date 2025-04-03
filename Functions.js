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

let move = 0;

const buttons = document.getElementById("Buttons").children;

const title = document.getElementById("title");
title.style.opacity = "0";
title.style.color = "rgb(0, 217, 255)";

let timeAfterRound = 2;

let ended = false;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function if3Win() {
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
    return 0;
}

function if3Block() {
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
    return 0;
}

function sensitiveCases() {
    // Case 1
    if (board[5] == 'X' && move == 1) {
        x = Math.floor(Math.random() * 4);
        while (x == 0) {
            x = Math.floor(Math.random() * 10);
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
    if (move == 2 && board[5] == 'X') {
        let currentXPos = [];
        for (let y in board) {
            if (board[y] == "X" && y != 5) {
                currentXPos[0] = y;
            }
        }
        if (currentXPos[0] == 1 && board[9] == 'O') {
            x = Math.floor(Math.random() * 2);
            while (x == 0) {
                x = Math.floor(Math.random() * 10);
            }
            if (x == 1) {
                return 3;
            } else if (x == 2) {
                return 7;
            }
        } else if (currentXPos[0] == 3 && board[7] == 'O') {
            x = Math.floor(Math.random() * 2);
            while (x == 0) {
                x = Math.floor(Math.random() * 10);
            }
            if (x == 1) {
                return 1;
            } else if (x == 2) {
                return 9;
            }
        } else if (currentXPos[0] == 7 && board[3] == 'O') {
            x = Math.floor(Math.random() * 2);
            while (x == 0) {
                x = Math.floor(Math.random() * 10);
            }
            if (x == 1) {
                return 1;
            } else if (x == 2) {
                return 9;
            }
        } else if (currentXPos[0] == 9 && board[1] == 'O') {
            x = Math.floor(Math.random() * 2);
            while (x == 0) {
                x = Math.floor(Math.random() * 10);
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
            x = Math.floor(Math.random() * 4);
            while (x == 0) {
                x = Math.floor(Math.random() * 10);
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
        return 0;
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

async function randomNum() {
    for (let y in board) {
        if (board[y] == "") {
            break;
        }
        if (y == 9 && board[y] != "") {
            return false;
        }
    }

    let x = sensitiveCases();
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
    x = sensitiveCases();
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
    x = sensitiveCases();
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
    } else {
        x = if3Win();
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

            x = if3Block();
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
                    randomNum();
                }
            }
        }
    }
}

async function display(input) {
    if (board[input] != 'X' && board[input] != 'O' && !ended) {
        document.getElementById(input).innerHTML = 'X';
        board[input] = 'X';
        move++;

        if (checkWinX()) {
            console.log("game ended");
            console.log("X won");
            ended = true;
            title.style.opacity = "100";
            title.innerHTML = "X won!";
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
                    move = 0;
                } else if (checkWinO()) {
                    console.log("O won");
                    title.style.opacity = "100";
                    title.innerHTML = "O won!";
                    move = 0;
                } else {
                    console.log("Draw");
                    title.style.opacity = "100";
                    title.innerHTML = "Draw!";
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

        randomNum();
    }
}
