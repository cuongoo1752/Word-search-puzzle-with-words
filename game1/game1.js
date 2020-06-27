
const game = 0;
const sizeWord = 10;
var winGame = false;
var positionWord = -1;
// DataGame.js => data
var currentWord = [];
var iCurWord = [];
var aCurWord = [];
createWords(game);

createdToFindWord(game);

handle(game);

var x = 1;
setInterval(function(){
    $("#animation").css({
        background:'url(\'./png/Idle\ \('+x+'\).png\')'
        //backgroundPosition: x + "px 0px"
    })
    x++;
    if(x == 16) x = 1;
}, 500)
//click ô chữ
//click vào nút check



