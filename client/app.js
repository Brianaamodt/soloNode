/**
 * Created by brianaamodt on 5/8/15.
 */
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
});

var photos =[
    "<img class='jewel' src='https://scontent-ord.xx.fbcdn.net/hphotos-xap1/v/t1.0-9/248298_1767070498102_7395183_n.jpg?oh=9246732d539c0ca72864858e198a139f&oe=55DFA282'>",
    "<img class='jewel' src='https://scontent-ord.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/206547_1675579930895_7815665_n.jpg?oh=7f7cf6eda39cfa1ed937c2bf14f86577&oe=55C23C5B'>",
    "<img class='jewel' src='https://scontent-ord.xx.fbcdn.net/hphotos-xap1/v/t1.0-9/11205099_10204304163905779_3943245054857892274_n.jpg?oh=b792bf4c9f0694184a0324bd4ae24d59&oe=55CB0DFB'>",
    "<img class='jewel' src='https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-9/11221287_10204304163185761_673483864560329886_n.jpg?oh=2180e54ec7e7019977616e3ce5c624d0&oe=55C3E484&__gda__=1443586493_dd40f7211826fafe4e5c36df42626e40'>",
    "<img class='jewel' src='https://scontent-ord.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/11193361_10204304164185786_382068903915559715_n.jpg?oh=629547dc9cc8fea341182bf472b164be&oe=55CFE23C'>",
    "<img class='jewel' src='https://scontent-ord.xx.fbcdn.net/hphotos-xat1/v/t1.0-9/11206009_10204304164465793_4285637148970309442_n.jpg?oh=bd15d24c026e320f762db7fd60452c99&oe=5609B5D9'>",
    "<img class='jewel' src='https://scontent-ord.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/10422028_10204304163505769_4749392633592335419_n.jpg?oh=ec632e3e11c55423bce9f7128c1d6be7&oe=55D31E75'>"];



$(document).ready(function(){
    var i=0;
    $(".gallery").html(photos[0]);
    setInterval(function(){
        i++;
        if (i > 6){
            i = 0;
        }
        $(".gallery").hide().html(photos[i]);
        $(".gallery").fadeToggle(1000);
    },5000);
});