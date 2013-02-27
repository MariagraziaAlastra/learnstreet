// Hangman Project
//RETURN A 'HIDDEN' VERSION OF THE SUPPLIED SECRET WORD
function getDisplay(word)
{   
    var dashes = '';
    for (var i=0; i<word.length; i++){
        dashes += '-';
    }
    
    return dashes;
}

//FIND IF THE LETTER IS IN THE WORD
function isLetterInWord(word,letter){
    
    for (var i=0; i<word.length; i++){
        if (word[i] == letter) return true;
    }
    
    return false;
}

//UPDATE GAME DISPLAY IF WE'VE BEEN GIVEN A MATCHING LETTER
function getLetter(word,letter,display){
    var newdisp = '';
    
    for (var i=0; i<word.length; i++){
        if (word[i] == letter) {
            newdisp += letter;
        } 
        else {
            newdisp += display[i];
        }
    }
    
    return newdisp;
}

/*  
    *RETURN 'finished' if game has finished 
    *RETURN 'lose' if game has lossed 
    *RETURN 'continue' if it is not finished
*/
function isFinished(word, display, left) {
    
    if (word == display) return 'finished';
    
    else if (left == 0) return 'lose';
    
    else return 'continue';

}