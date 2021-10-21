setInterval(function (){
    var offer = new Date("October 20, 2021 12:00:00").getTime();
    var now = new Date().getTime();
    var time = offer - now;
    var distDays = Math.floor(time/86400000);
    var distHours = Math.floor(time/(1000*60*60)%24);
    var distMin = Math.floor(time/(1000*60)%60)
    var distSec = Math.floor(time/1000%60)
    var stringS = "До конца акции: " + distDays + "д. " + distHours + "ч. " + distMin + "мин. " + distSec + "сек. ";
    document.querySelector(".SaleTimer").innerHTML = stringS;
}, 1000)
