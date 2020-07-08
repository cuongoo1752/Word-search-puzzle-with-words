
createWords(game);

createdToFindWord(game);

createFiveStars();

createAudioGame();

handleEventGame(game);

var index = 0;
var count = 0;
const timesOfSelect = 3;
setInterval(function(){
    $("#animation").css({
        // backgroundPosition: checkGame.x[index]*(-160) + "px " + checkGame.y[index] * (-220) + "px"
    })
    index++;
    
    if(index == checkGame.x.length && checkGame != normal){
        count++;
    }
    if(index == checkGame.x.length) index = 0;
    if(count == timesOfSelect){
        count = 0;
        checkGame = normal;
        handleSelectGame(normal);
    }
}, 400);
// nho mo hover trong words



