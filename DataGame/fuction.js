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

function handle(game){
    $(".check").click(function (e) { 
        if(checkWord(game)){
            var temp = $('.check');
            console.log(positionWord);
            $(temp[positionWord]).removeClass('nodis');
        }
        

        $('.childWord').removeClass('selectChildWord'); 
        currentWord = [];
        iCurWord = [];
        aCurWord = [];
        $('#currentWord').html("");
    });
}
//https://www.google.com/search?q=%E1%BA%A3nh%20l%C3%A0m%20game&tbm=isch&tbs=rimg%3ACTmmu8CsSfjyImCYtI9ZpPb0uNXQhVAFHIdVerlUftfFr8fO_103swZJaMt1cv2R1DXDn0w88xIUDghm-66OTwAbq_1yRPAxaNvDqy8UEY8cQEADud_1Q5NyF9IJBtcsj4asLq65v9p0KyuspAqEgmYtI9ZpPb0uBEc5QFon0_1NPCoSCdXQhVAFHIdVEWlga6WPCbjqKhIJerlUftfFr8cRx9VAqZvwvdsqEgnO_103swZJaMhGCXRuFyH62GSoSCd1cv2R1DXDnEce9BRh1ogpIKhIJ0w88xIUDghkRpxrmHDCj8WIqEgm-66OTwAbq_1xGQIp0h05QnUSoSCSRPAxaNvDqyEeXdMulbBo5FKhIJ8UEY8cQEADsRvNhoirAdAMoqEgmd_1Q5NyF9IJBEDaJKTP-60VSoSCRtcsj4asLq6EQm0Cdu8wuMDKhIJ5v9p0KyuspAR7MA4v3v-8PVh7A5VfUTviBI&rlz=1C1CHBF_enVN884VN884&hl=vi&ved=0CBwQuIIBahcKEwjQ-PTHxJrqAhUAAAAAHQAAAAAQGg&biw=1349&bih=657#imgrc=8ELcoC0RDXwNjM&imgdii=PPdWPSk5eu04HM