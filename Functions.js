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

let ended = false;

function checkWinX(){
    if(board[1] == 'X' && board[2] == 'X' && board[3] == 'X'){
        return true;
    } else if(board[4] == 'X' && board[5] == 'X' && board[6] == 'X'){
        return true;
    } else if(board[7] == 'X' && board[8] == 'X' && board[9] == 'X'){
        return true;
    } else if(board[1] == 'X' && board[4] == 'X' && board[7] == 'X'){
        return true;
    } else if(board[2] == 'X' && board[5] == 'X' && board[8] == 'X'){
        return true;
    } else if(board[3] == 'X' && board[6] == 'X' && board[9] == 'X'){
        return true;
    } else if(board[1] == 'X' && board[5] == 'X' && board[9] == 'X'){
        return true;
    } else if(board[3] == 'X' && board[5] == 'X' && board[7] == 'X'){
        return true;
    }
    return false;
}

function checkWinO(){
    if(board[1] == 'O' && board[2] == 'O' && board[3] == 'O'){
        return true;
    } else if(board[4] == 'O' && board[5] == 'O' && board[6] == 'O'){
        return true;
    } else if(board[7] == 'O' && board[8] == 'O' && board[9] == 'O'){
        return true;
    } else if(board[1] == 'O' && board[4] == 'O' && board[7] == 'O'){
        return true;
    } else if(board[2] == 'O' && board[5] == 'O' && board[8] == 'O'){
        return true;
    } else if(board[3] == 'O' && board[6] == 'O' && board[9] == 'O'){
        return true;
    } else if(board[1] == 'O' && board[5] == 'O' && board[9] == 'O'){
        return true;
    } else if(board[3] == 'O' && board[5] == 'O' && board[7] == 'O'){
        return true;
    }
    return false;
}

function randomNum(){
    for (let y in board) {
        if(board[y] == ""){
            break;
        }
        if(y == 9 && board[y] != ""){
            return false;
        }
    }

    let x = Math.floor(Math.random() * 10);
    while(x==0){
        x = Math.floor(Math.random() * 10);
    }

    if(board[x] != 'X' && board[x] != 'O'){
        console.log(x)
        document.getElementById(x).innerHTML='O';
        board[x] = 'O';
        if(checkWinO()){
            console.log("game ended");
            console.log("O won");
            ended = true;
        }
    } else{
        randomNum();
    }
}

function display(input){
    if(board[input] != 'X' && board[input] != 'O' && !ended){
        document.getElementById(input).innerHTML='X';
        board[input] = 'X';

        for (let y in board) {
            if(board[y] == ""){
                break;
            }
            if(y == 9 && board[y] != ""){

                console.log("game ended");
                ended = true;
                if(checkWinX()){
                    console.log("X won");
                } else if(checkWinO()){
                    console.log("O won");
                } else{
                    console.log("Draw");
                }
            }
        }

        randomNum();
    }
    
}