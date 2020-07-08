
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
// bien cua audio
const normal = {
    x:[0, 1, 7, 8],
    y:[0, 0, 1, 1]
}
const trueSelect = {
    x:[0, 0, 0],
    y:[0, 8, 7]
}
const falseSelect = {
    x:[0, 5, 6],
    y:[0, 0, 1]
}

var bPoint = {
    i:-1,
    a:-1
}
var bePoint = {
    i:-1,
    a:-1
}

var mPoint = {
    i:-1,
    a:-1
}
var ePoint = {
    i:-1,
    a:-1
}
var checkGame = normal;
// animation
var currentWord = [];
var iCurWord = [];
var aCurWord = [];
function beginPoint(game, i, a){
    console.log("begin");
    //bPoint.i = i;
    //bPoint.a = a;
    audioClick.play();
    addClassSelect(game, i, a, 'selectChildWord');
    
}

function equalAdd(num){
    if(num == 0) return 0;
    else if(num > 0) return 1;
    else return -1;
}
function satisfiedPointInLine(b, e){
    if(b.i == -1 || b.a == -1)
        return false;
    if(b.i == e.i || b.a == e.a)
        return true;
    if(b.i - e.i == b.a - e.a)
        return true;
    if(b.i - e.a == -(b.a - e.i))
        return true;
    return false;
}

function movePoint(game, i, a){
    console.log("move");
    console.log(bPoint);
    mPoint.i = i;
    mPoint.a = a;
    console.log(mPoint);
    $('.childWord').removeClass('selectChildWord');
    addClassSelect(game, i, a, 'selectChildWord');
    console.log(bPoint);
    var addI, addA;
    if(satisfiedPointInLine(bPoint, mPoint)){
        console.log(bPoint);
        addI = equalAdd(mPoint.i - bPoint.i);
        addA = equalAdd(mPoint.a - bPoint.a);
        var tempPoint = bPoint;
        for(;; tempPoint.i = tempPoint.i + addI, tempPoint.a = tempPoint.a + addA){
            //console.log('bpoint');
            console.log(bPoint);
            //console.log(bPoint);
            if(tempPoint.i == mPoint.i && tempPoint.a == mPoint.a) break;
            console.log(bPoint);
            addClassSelect(game, tempPoint.i, tempPoint.a, 'selectChildWord');
        }
    }
     
}

function endPoint(game, i, a){
    console.log("end");
    // bPoint.i = -1;
    // bPoint.a = -1;
    addClassSelect(game, i, a, 'selectChildWord');
}

function createWords(game){
    // ul.rootWprd li.childWord
    var rWord = $('.rootWord');
    for(var i = 0; i < sizeWord; i++ ){
        for(var a = 0; a < sizeWord; a++){
            $(rWord[i]).append('<div class="childWord" onmouseenter="movePoint(' + game + ',' + i + ',' + a +')" onmousedown="beginPoint(' + game + ',' + i + ',' + a +')" onmouseup="endPoint(' + game + ',' + i + ',' + a +')" >'+ data[game].words[i][a] + '</div>');
        }
    }
}

function createdToFindWord(game){
    var must = $('#mustWords');
    for(var i = 0; i < data[game].findWords.length; i++){
        $(must).append('<div class="must">' +'<i class="fa fa-check fa-1x nodis check" aria-hidden="true"></i>' + '<p>' + data[game].findWords[i] + '</p>' + '</div>');
    }
}
//current Word

function createFiveStars(){
    for(var i = 0; i < sumStar; i++){
        $('#fiveStar').append('<div class="star"></div>');
    }    
}

function createAudioGame(){
    audioClick = new Audio();
    audioClick.type= 'audio/mpeg';
    audioClick.src='./audioGame'+(game + 1)+'/290439__littlerobotsoundfactory__mouth-12.wav';
    audioTrue = new Audio();
    audioTrue.type= 'audio/mpeg';
    audioTrue.src='./audioGame'+(game + 1)+'/true.mp3';
    audioFalse = new Audio();
    audioFalse.type= 'audio/mpeg';
    audioFalse.src='./audioGame'+(game + 1)+'/false.ogg';
    audioWin = new Audio();
    audioWin.type= 'audio/mpeg';
    audioWin.src='./audioGame'+(game + 1)+'/win.wav';
    audioLose = new Audio();
    audioLose.type= 'audio/mpeg';
    audioLose.src='./audioGame'+(game + 1)+'/lose.wav';
}
function addClassSelect(game, i, a, nameClass){
    var word = $('.rootWord');
    var tempWord = $(word[i]).children();
    $(tempWord[a]).addClass(nameClass);
}
function removeClassSelect(game, i, a, nameClass){
    var word = $('.rootWord');
    var tempWord = $(word[i]).children();
    $(tempWord[a]).removeClass(nameClass);
}

function clickWord(game, i , a){
    audioClick.play();
    if(currentWord.length < 15){
        currentWord.push(data[game].words[i][a]);
        iCurWord.push(i);
        aCurWord.push(a);
    }

    addClassSelect(game, i, a, 'selectChildWord')
    
    var tempString = "";
    for(var index = 0; index < currentWord.length; index++){
        tempString = tempString + currentWord[index];
    }
    $('#currentWord').html(tempString);
}
//current Word

function checkWord(game){
    if(currentWord.length == 0){
        return false;
    }
    var pos = data[game].resultWords[iCurWord[0]][aCurWord[0]];

    for(var i = 0; i < currentWord.length; i++){
        if(data[game].resultWords[iCurWord[i]][aCurWord[i]] != pos){
            return false;
        }
        if(data[game].resultWords[iCurWord[i]][aCurWord[i]] == -1){
            return false;
        }
    }

    var tempString = "";
    for(var index = 0; index < currentWord.length; index++){
        tempString = tempString + currentWord[index];
    }

    if(!(tempString === data[game].findWords[pos])){
        return false;
    }

    positionWord = pos;
    return true;
}

function handleStageGame(stage){
    // stageGame = 0 la game dang chay
    // = 1 la chien thang
    // = -1 la thua
    // 2 la ba menu
    if(stage == winGame){
        $('.stage').css({
            display:"none"
        })
        $('#win').css({
            display:"block"
        })
    }
    else if(stage ==  loseGame){
        $('.stage').css({
            display:"none"
        })
        $('#lose').css({
            display:"block"
        })
    } else if(stage == menuGame){
        $('.stage').css({
            display:"none"
        })
        $('#tutor').css({
            display:"block"
        })
    } else if(stage == backGame){
        $('.stage').css({
            display:"block"
        })
        $('#tutor').css({
            display:"none"
        })
    }

}



function handleEventGame(game){
    $(".check").click(function (e) { 
        // click vao check
        if(checkWord(game)){
            // neu kiem tra tu nhap vao dung
            checkGame = trueSelect;
            index = 0;
            handleSelectGame(trueSelect);
            //animate lua chon dung
            var temp = $('.check');
            $(temp[positionWord]).removeClass('nodis');// them tich v o mustWords
            
            if(($('.nodis')).length == 0){
                // neu win
                audioWin.play();
                console.log("win");
                handleStageGame(winGame);
            }
            else{
                audioTrue.play();
                //audio lua chon dung
            }
        }
        else{
            
            if(($('.star')).length > 0){
                audioFalse.play();
                //tru 1 sao
                //audio lua chon sai
                checkGame = falseSelect;
                index = 0;
                handleSelectGame(falseSelect);
                //animate lua chon sai
                ($('.star'))[0].remove();
            }
            else{
            // thua
                handleStageGame(loseGame);
                audioLose.play();
                console.log("lose");
            }
            
        }
        

        $('.childWord').removeClass('selectChildWord'); 
        currentWord = [];
        iCurWord = [];
        aCurWord = [];
        $('#currentWord').html("");
    });

    $("#menu").click(function (e){
        handleStageGame(menuGame);
    });
}

function handleSelectGame(select){
    if(select == trueSelect){
        $('#selectGame').html("True!");
        $('#selectGame').css({
            right: "129px"
        })
    }
    else if(select == falseSelect){
        $('#selectGame').html("False!");
        $('#selectGame').css({
            right: "118px"
        })
    }
    else{
        $('#selectGame').html("");
    }
}


