
const game = 0;
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
var currentWord = [];
var iCurWord = [];
var aCurWord = [];
createWords(game);

createdToFindWord(game);

createFiveStars();

createAudioGame();

handleEventGame(game);

var x = -(160 * 3)
setInterval(function(){
    $("#animation").css({
        //backgroundPosition: x + "px -220px"
    })
    x = x - 160;
    if(x == -(160 * 9))x = 0;
}, 300)
// nho mo hover trong words



