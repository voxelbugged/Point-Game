var played = false;
function cool()
{
    myWindow = window.open("groove.html", "", "menubar=no, status=no, toolbar=no, resizable=no, width=300, height=175, titlebar=no, alwaysRaised=yes");
    if(!played && document.getElementById("main"))
    {
        var audio = new Audio('audio_midloud.mp3');
        audio.play();
        played = true;
    }
    document.getElementById("game").innerHTML = "<h1>WE CALL THIS A DIFFICULTY TWEAK!</h1> <hr> <img src='cloaker-payday2.gif'>"
}

window.onclick = function(event) {
    cool();
}

window.oncontextmenu = function(event) {
    cool();
}

window.onkeydown = function(event) {
    cool();
}

window.addEventListener("keydown", (event) => {
    cool();
});