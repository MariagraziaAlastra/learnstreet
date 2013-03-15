// Tic Tac Toe game functions
function checkRows(array) {
    if ((array[0] == array[1] && array[1] == array[2]) && array[0] != 0) {
        return array[0];
    } else if ((array[3] == array[4] && array[4] == array[5]) && array[3] != 0) {
        return array[3];
    } else if ((array[6] == array[7] && array[7] == array[8]) && array[6] != 0) {
        return array[6];
    }
    
    return 0;
    
}

function checkColumns(array) {
    if ((array[0] == array[3] && array[3] == array[6]) && array[0] != 0) {
        return array[0];
    } else if ((array[1] == array[4] && array[4] == array[7]) && array[3] != 0) {
        return array[1];
    } else if ((array[2] == array[5] && array[5] == array[8]) && array[6] != 0) {
        return array[2];
    }
    
    return 0;
    

}

function checkDiagonals(array){
    if ((array[0] == array[4] && array[4] == array[8]) && array[0] != 0) {
        return array[0];
    } else if ((array[2] == array[4] && array[4] == array[6]) && array[2] != 0) {
        return array[2];
    }
    
    return 0;
    
}

function getFirstEmptyMove(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == 0) {
            return i;
        }
    }
    
    return -1;
}
