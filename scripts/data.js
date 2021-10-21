setInterval(function (){
    var dateCrah = new Date("September 11, 2001 12:00:00").getTime();
    var now = new Date().getTime();
    var time = now-dateCrah;
    document.querySelector("p").innerHTML = time;
}, 1000);