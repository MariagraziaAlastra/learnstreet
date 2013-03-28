// Connect Four
function initMatrix(){
    // Initialize the matrix with a two-dimensional array,
    // with 6 rows and 7 columns, setting all values to 0.
    var matrix = new Array();    
    for (var k = 0; k < 6; k++) {
        matrix[k] = new Array(7);
        for (var j = 0; j < 7; j++) {
            matrix[k][j] = 0;
        }
    }
    
    return matrix;
}
    
function getDropPosition(matrix, columnPosition){
    // This method returns the position of row (i.e., cell's row position)
    // Find the blank cell {i.e., for value 0} from row 5 to 0.
    // If there is no blank cell in that column return -1.
    for (var i = 5; i >= 0; i--) {
        if (matrix[i][columnPosition] == 0) {
            return i;
        }
    }
    
    return -1;
}
    
function setDropValue(matrix, rowPosition, columnPosition, human){
    // This method returns a matrix with values,
    // value 1 if human is true otherwise value 2
    if (human) {
        matrix[rowPosition][columnPosition] = 1;
    } else {
        matrix[rowPosition][columnPosition] = 2;
    }
    
    return matrix;
}
function getRowWin(matrix){
    // set 4 [i,j] values to a functionault cell position say -1 in a list.
    // [[-1,-1][-1,-1][-1,-1][-1,-1]]
    // For each row, check if any 4 consecutive similar values are there,
    // if so return the positions as a list [[row1, col1],[row2, col2],[row3, col3],[row4, col4]].
    var positions = new Array();
    for (var k = 0; k < 4; k++) {
        positions[k] = new Array();
        positions[k] = [-1, -1];
    }
    
    for (var i = 5; i >= 0; i--) {
        for (var j = 0; j <= 3; j++) {
            if (matrix[i][j] != 0) {
                var val = matrix[i][j];
                if (((matrix[i][j+1] == val) && (matrix[i][j+2] == val)) && (matrix[i][j+3] == val)) {
                        positions = [[i, j], [i, j+1], [i, j+2], [i, j+3]];
                        return positions;
                }
            }
        }
    }
    
    return positions;
}    
function getColumnWin(matrix){
    // Similarly, set 4 [i,j] functionault values in a list, for each column,
    // check for any 4 consecutive cells with same values and then return
    // their positions in the list.
    var positions = new Array();
    for (var k = 0; k < 4; k++) {
        positions[k] = new Array();
        positions[k] = [-1, -1];
    }
    
    for (var i = 5; i >= 3; i--) {
        for (var j = 0; j < 7; j++) {
            if (matrix[i][j] != 0) {
                var val = matrix[i][j];
                if (((matrix[i-1][j] == val) && (matrix[i-2][j] == val)) && (matrix[i-3][j] == val)) {
                        positions = [[i, j], [i-1, j], [i-2, j], [i-3, j]];
                        return positions;
                }
            }
        }
    }
    
    return positions;   
}    
function getDiagonalLeftToRightWin(matrix){
    // Similarly, set 4 [i,j] functionault values in a list.
    // Starting from left corner for each diagonal going right up check for 4 consecutive cells
    // with same values and return their positions.
    var positions = new Array();
    for (var k = 0; k < 4; k++) {
        positions[k] = new Array();
        positions[k] = [-1, -1];
    }
    
    for (var i = 5; i >= 3; i--) {
        for (var j = 0; j <= 3; j++) {
            if (matrix[i][j] != 0) {
                var val = matrix[i][j];
                if (((matrix[i-1][j+1] == val) && (matrix[i-2][j+2] == val)) && (matrix[i-3][j+3] == val)) {
                        positions = [[i, j], [i-1, j+1], [i-2, j+2], [i-3, j+3]];
                        return positions;
                }
            }
        }
    }
    
    return positions;   
}    
function getDiagonalRightToLeftWin(matrix){
    // Similarly, set 4 [i,j] functionault values in a list.
    // Starting from right corner for each diagonal going left up check for 4 consecutive cells
    // with same values and return their positions.
    var positions = new Array();
    for (var k = 0; k < 4; k++) {
        positions[k] = new Array();
        positions[k] = [-1, -1];
    }
    
    for (var i = 5; i >= 3; i--) {
        for (var j = 6; j >= 3; j--) {
            if (matrix[i][j] != 0) {
                var val = matrix[i][j];
                if (((matrix[i-1][j-1] == val) && (matrix[i-2][j-2] == val)) && (matrix[i-3][j-3] == val)) {
                        positions = [[i, j], [i-1, j-1], [i-2, j-2], [i-3, j-3]];
                        return positions;
                }
            }
        }
    }
    
    return positions;
}    
function isGameOver(matrix){
    // If the entire matrix is filled and there are no winners then the Game is Over.
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 7; j++) {
            if (matrix[i][j] == 0) {
                return false;
            }
        }
    }
    
    return true;
}