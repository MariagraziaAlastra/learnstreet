// Mastermind game methods
function generateSolution(){
    var colors = "ROYGBV";
    var result = "";
    for (var i = 0; i < 4; i++) {
        result += colors.charAt(Math.random() * 6 | 0);
    }
    return result;
}
function checkAnswerMatch(currentGuess, answer){
    var count = 0;
    for (var i = 0; i < answer.length; i++) {
        if (currentGuess[i] == answer[i]) {
            count += 1;
        }
    }
    
    return count;
}
function checkAnswerWrongPlace(ans, realanswer){
    var count = 0;
    for (var i = 0; i < ans.length; i++) {
        for (var j = 0; j < realanswer.length; j++) {
            if ((i != j) && (ans[i] == realanswer[j])) {
                count += 1;
            }
        }
    }
    
    return count;
}