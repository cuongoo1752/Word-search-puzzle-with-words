function createWords(game){
    // ul.rootWprd li.childWord
    var rWord = $('.rootWord');
    console.log(rWord);
    for(var i = 0; i < sizeWord; i++ ){
        for(var a = 0; a < sizeWord; a++){
            $(rWord[i]).append('<div class="childWord">' + data[game].words[i][a] + '</div>');
        }
    }
}

function createdToFindWord(game){
    var must = $('#mustWords');
    for(var i = 0; i < data[game].findWords.length; i++){
        $(must).append('<div>' + data[game].findWords[i] + '</div>')
    }
}