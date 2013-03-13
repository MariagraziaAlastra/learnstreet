// Sudoku Solver Project
function isPossibleRow(sudoku, row, number) {
    for (var i = 0; i < sudoku[row].length; i++) {
        if (number == sudoku[row][i]) {
            return false;
        }
    }        
    return true;
    
}

function isPossibleColumn(sudoku, col, number) {
    for (var i = 0; i < sudoku[col].length; i++) {
        if (number == sudoku[i][col]) {
            return false;
        }
    }        
    return true;
    
}

function isPossibleBlock(sudoku, block, number) {
   var top = [0, 1, 2];
   var middle = [3, 4, 5];
   var bottom = [6, 7, 8];
   var zones = [top, middle, bottom];
   
   var rows = [];
   var cols = [];
   
   for (var i = 0; i < zones.length; i++) {
       if (block in zones[i]) {
            rows = zones[i];
            cols = zones[block];   
       }    
   }
   
   for (var j = 0; j < rows.length; j++) {
       if (!isPossibleRow(sudoku, rows[j], number) || !isPossibleColumn(sudoku, cols[j], number)) {
           return false;
       }
   }
   
   return true;
}

function isPossibleNumber(sudoku, row, col, number) {
    if (!isPossibleRow(sudoku, row, number) || !isPossibleColumn(sudoku, col, number)) {
        return false;
    }
    
    var block = getCellBlock(row, col);
    if (!isPossibleBlock(sudoku, block, number)) {
        return false;
    }
    
    return true;
    
}
function isCorrectRow(sudoku, row) {
    var copy = sudoku[row].slice(0);
    copy = copy.sort();
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    for (var i = 0; i < copy.length; i++) {
        if (copy[i] != numbers[i]) {
            return false;
        }
    }
    
    return true;
}

function isCorrectColumn(sudoku, col) {
    var copy = new Array();
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    for (var i = 0; i < 9; i++) {
        copy.push(sudoku[i][col]);
    }
        
    copy = copy.sort();
    for (var j = 0; j <= numbers.length ; j++) {
        if (copy[j] !== numbers[j]) {
            return false;
        }
    }
    
    return true;
    
}

function isCorrectBlock(sudoku, block) {
     var top = [0, 1, 2];
   var middle = [3, 4, 5];
   var bottom = [6, 7, 8];
   var zones = [top, middle, bottom];
   var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
   
   var rows = [];
   var cols = [];
   var copy = new Array();
   
   for (var i = 0; i < zones.length; i++) {
       if (block in zones[i]) {
            rows = zones[i];
            cols = zones[block];   
       }    
   }
   
   for (var i = 0; i < rows.length; i++) {
       for (var j = 0; j < cols.length; j++) {
           copy.push(sudoku[i][j]);
       }
   }
   
   copy = copy.sort();
   
   for (var k = 0; k <= numbers.length ; k++) {
        if (copy[j] !== numbers[j]) {
            return false;
        }
    }
    
    return true;
    
}

function isSolved(sudoku) {
    for (var i = 0; i < 9; i++) {
        if ((!isCorrectRow(sudoku, i) || !isCorrectColumn(sudoku, i)) || !isCorrectBlock(sudoku, i)) {
            return false;
        }
    }
    
    return true;
}

/***********************************************************
	DO NOT CHANGE THIS FUNCTION!

	It is provided for your convenience to be used in the 
	isPossibleNumber() function.
***********************************************************/
function getCellBlock(row,col) {
	var block_row = Math.floor(row/3);
	var block_col = Math.floor(col/3);
	var block = block_row*3+block_col;
	return block;
}