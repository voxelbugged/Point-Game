var played = false;
var changed = false;

function cool() {
    document.documentElement.requestPointerLock();
    myWindow = window.open("groove.html", "", "menubar=no, status=no, toolbar=no, resizable=no, width=300, height=175, titlebar=no, alwaysRaised=yes");
    if (document.getElementById("main")) {
        if (!played) {
            var audio = new Audio('audio_midloud.mp3');
            audio.play();
            played = true;
        }
        document.getElementById("main").style.cursor = 'none';
    }
    if (!changed) {
        if(document.getElementById("game"))
        {
            document.getElementById("game").innerHTML = "<h1>WE CALL THIS A DIFFICULTY TWEAK!</h1> <hr> <img src='cloaker-payday2.gif'>"
        }
        changed = true;
    }
}

window.onclick = function (event) {
    cool();
    return false;
}

window.oncontextmenu = function (event) {
    cool();
    return false;
}

window.onscroll = function (event) {
    cool();
    return false;
}

window.onkeydown = function(event) {
    cool();
    return false;
}

window.onkeydown = function(event) {
    cool();
    return false;
}

window.onbeforeunload = function(event) {
    return "nope";
}