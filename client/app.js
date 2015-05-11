/**
 * Created by brianaamodt on 5/8/15.
 */
var templateHTML;
var gameData;
var i = 0;

$(document).ready(function(){
    $(".row").hide();
    $("#home").show();
    $("#gamebtn").on('click', function(){
        $(".row").fadeOut("slow").hide();
        $("#games").fadeIn("slow").show();
    });
    $("#gembtn").on('click', function(){
        $(".row").fadeOut("slow").hide();
        $("#gems").fadeIn("slow").show();
    });
    $("#homebtn").on('click', function(){
        $(".row").fadeOut("slow").hide();
        $("#home").fadeIn("slow").show();
    });

    function playData(info) {
        for(var j = 0; j < info.length; j++){
        $("#games").append(templateHTML);
        $(".picture").last().html(info[j].image);
        $(".title").last().text(info[j].name);
        $(".description").last().text(info[j].desc);
        };
    };

    $.get('/assets/data/data.json', function(pic){
        $(".gallery").html(pic.samples[i].photo);
        setInterval(function () {
            i++;
            if (i > 6) {
                i = 0;
            }
            $(".gallery").hide().html(pic.samples[i].photo);
            $(".gallery").fadeToggle(1000);
        }, 5000);
    });
    $.get('/views/template/template.html', function(data){
        templateHTML = data;
    });
    $.get('/assets/data/data.json', function(data){
        gameData=data;
        playData(gameData.gameList);
    });
});