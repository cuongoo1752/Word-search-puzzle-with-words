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
    $(must).append('<h3 id="title">Words</h3>');
    for(var i = 0; i < data[game].findWords.length; i++){
        $(must).append('<div class="must">' +'<i class="fa fa-check fa-1x nodis check" aria-hidden="true"></i>' + '<p>' + data[game].findWords[i] + '</p>' + '</div>');
    }
}
//current Word
function clickWord(game, i , a){
    if(currentWord.length < 15){
        currentWord.push(data[game].words[i][a]);
        iCurWord.push(i);
        aCurWord.push(a);
    }
    
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

function handle(game){
    $(".big-button").click(function (e) { 
        if(checkWord(game)){
            var temp = $('.check');
            console.log(positionWord);
            $(temp[positionWord]).removeClass('nodis');
        }

        currentWord = [];
        iCurWord = [];
        aCurWord = [];
        $('#currentWord').html("");
    });
}