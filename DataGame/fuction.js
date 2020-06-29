function createWords(game){
    // ul.rootWprd li.childWord
    var rWord = $('.rootWord');
    for(var i = 0; i < sizeWord; i++ ){
        for(var a = 0; a < sizeWord; a++){
            $(rWord[i]).append('<div class="childWord" onclick="clickWord(' + game + ',' + i + ',' + a +')">'+ data[game].words[i][a] + '</div>');
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
    audioClick.src='./audioGame1/290439__littlerobotsoundfactory__mouth-12.wav';
    audioTrue = new Audio();
    audioTrue.type= 'audio/mpeg';
    audioTrue.src='./audioGame1/true.mp3';
    audioFalse = new Audio();
    audioFalse.type= 'audio/mpeg';
    audioFalse.src='./audioGame1/false.ogg';
    audioWin = new Audio();
    audioWin.type= 'audio/mpeg';
    audioWin.src='./audioGame1/win.wav';
    audioLose = new Audio();
    audioLose.type= 'audio/mpeg';
    audioLose.src='./audioGame1/lose.wav';
}
function clickWord(game, i , a){
    audioClick.play();
    if(currentWord.length < 15){
        currentWord.push(data[game].words[i][a]);
        iCurWord.push(i);
        aCurWord.push(a);
    }
    var word = $('.rootWord');
    var tempWord = $(word[i]).children();
    $(tempWord[a]).addClass('selectChildWord');
    
    
    
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


