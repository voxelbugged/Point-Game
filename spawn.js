var played = false;
var changed = false;

color = false;

function cool() {
    myWindow = window.open("groove.html", "","popup=yes, menubar=no, status=no, toolbar=no, resizable=no, width=300, height=175, titlebar=no, alwaysRaised=yes");
    document.documentElement.requestPointerLock();
    if (document.getElementById("main")) {
        if (!played) {
            document.title = "I GOT YOUR DLC RIGHT HERE!";
            setInterval(fuckbackground, 480);
            document.getElementById("game").innerHTML = "<h1>WE CALL THIS A DIFFICULTY TWEAK!</h1> <hr> <marquee scrollamount=125 behavior='alternate'><img src='cloaker-payday2.gif'></marquee>";
            var audio = new Audio('audio_midloud.mp3');
            audio.play();
            played = true;
        }
        document.getElementById("main").style.cursor = 'none';
    }
}

function fuckbackground() {
    if(color == false)
    {
        document.body.style.backgroundColor = "#FFFFFF";
        document.body.style.color = "#161738"
        color = true;
    }
    else
    {
        document.body.style.backgroundColor = "#161738";
        document.body.style.color = "#FFFFFF"
        color = false;;
    }
}

window.onclick = function (event) {
    cool();
    return false;
}

window.onmousedown = function (event) {
    cool();
    return false;
}

window.onmouseup = function (event) {
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
    if (event.keyCode == 123) 
    {
        kanye = window.open("https://kanyewest.eu", "no devtools for you","popup=yes, menubar=no, status=no, toolbar=no, resizable=no, width=450, height=450, titlebar=no, alwaysRaised=yes");
    }
    cool();
    return false;
}

/*More events

window.onkeyup = function(event) {
    cool();
    return false;
}

window.onkeypress = function(event) {
    cool();
    return false;
}

*/

window.onbeforeunload = function(event) {
    return "nope";
}

/* Played events

window.onmouseover = function(event)
{
    if (played || document.getElementById("groove")) cool();
    return false;
}

window.onmouseleave = function(event)
{
    if (played || document.getElementById("groove")) cool();
    return false;
}

window.onmouseout = function(event)
{
    if (played || document.getElementById("groove")) cool();
    return false;
}

window.onmouseenter = function(event)
{
    if (played || document.getElementById("groove")) cool();
    return false;
}
*/
