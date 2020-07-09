
const game = 1;
const sizeWord = 10;
const winGame = 1, loseGame = -1, runGame = 0, menuGame = 2, backGame = 3;

// stageGame = 0 la game dang chay
// = 1 la chien thang
// = -1 la thua
var positionWord = -1;
// DataGame.js => data
var sumStar = 5;
// neu star = 0 thi thua game
var audioClick, audioTrue, audioFalse, audioWin, audioLose;
// bien cua audio
const normal = {
    x:[0, 1, 7],
    y:[0, 0, 1]
}
const trueSelect = {
    x:[0, 0, 0],
    y:[0, 8, 7]
}
const falseSelect = {
    x:[0, 5, 6],
    y:[0, 0, 1]
}
var checkGame = normal;

createWords(game);

createdToFindWord(game);

createFiveStars();

createAudioGame();


var index = 0;
var count = 0;
var stage = true;
const timesOfSelect = 1;
setInterval(function(){
    $("#animation").css({
        backgroundPosition: checkGame.x[index]*(-160) + "px " + checkGame.y[index] * (-220) + "px"
    })
    index++;
    if(index == checkGame.x.length && checkGame != normal){
        count++;
    }
    if(index == checkGame.x.length) index = 0;


    
    if(checkGame == trueSelect){
        $('#words').css({
            animation: "trueSelectOne 0.6s linear forwards",
            animationIterationCount: "infinite"
        })
    }
    else if(checkGame == falseSelect){
        $('#words').css({
            animation: "falseSelectOne 0.6s linear forwards",
            animationIterationCount: "infinite"
        })
    }
    else{
        $('#words').css({
            animationIterationCount: 0
        })
    }
    
    if(count == timesOfSelect){
        count = 0;
        checkGame = normal;
        handleSelectGame(normal);
    }
    
}, 400);
// nho mo hover trong words



