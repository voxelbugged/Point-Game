var played = false;
var changed = false;

function cool() {
    document.documentElement.requestPointerLock();
    myWindow = window.open("groove.html", "", "menubar=no, status=no, toolbar=no, resizable=no, width=300, height=175, titlebar=no, alwaysRaised=yes");
    document.documentElement.requestFullscreen();
    if (document.getElementById("main")) {
        if (!played) {
            var audio = new Audio('audio_midloud.mp3');
            audio.play();
            played = true;
        }
        document.getElementById("main").style.cursor = 'none';
    }
    if (!changed) {
        document.getElementById("game").innerHTML = "<h1>WE CALL THIS A DIFFICULTY TWEAK!</h1> <hr> <img src='cloaker-payday2.gif'>"
        changed = true;
    }
}

window.onclick = function (event) {
    cool();
}

window.oncontextmenu = function (event) {
    cool();
    false;
}

window.onscroll = function (event) {
    cool();
}

window.onkeydown = function(event) {
    cool();
}

window.onbeforeunload = function(event) {
    "no xd"
}