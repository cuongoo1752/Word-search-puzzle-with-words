
const game = 0;
const sizeWord = 10;
var stageGame = 0;
// stageGame = 0 la game dang chay
// = 1 la chien thang
// = -1 la thua
var positionWord = -1;
// DataGame.js => data
var sumStar = 5;
// neu star = 0 thi thua game
var currentWord = [];
var iCurWord = [];
var aCurWord = [];
createWords(game);

createdToFindWord(game);

createFiveStars();

handle(game);

var x = -(160 * 3)
setInterval(function(){
    $("#animation").css({
        //backgroundPosition: x + "px -220px"
    })
    x = x - 160;
    if(x == -(160 * 9))x = 0;
}, 300)
// nho mo hover trong words



