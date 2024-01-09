// initialize the list of all buttons
const buttons = document.getElementsByTagName('button');
const fsButton = document.getElementById("fs");

// log the buttons to the console
console.log(buttons);

// initialize the index counter
var index = 0;

// constantly scan for button tag clicks, then run newSrc() 
for (let i = 0, len = buttons.length; i < len; i++)
{
    buttons[i].onclick = function() {
    index = i;
    console.log("index of clicked: " + index);
    openGame();
    }
    
    fsButton.onclick = function() {
    fullScreen();
    }
}

// assign the button's value to the frm's src, then shut up audio, then clear the menu, and display the window
function openGame() {
    index = buttons[index];
    var newSrc = index.value;
    var gameTitle = index.name;
    // document.getElementById("sneaky").muted = true;
    document.getElementById("gameheader").innerHTML = gameTitle;
    document.getElementById("fullframe").src = newSrc;
    document.getElementById("frm").src = newSrc;
    document.getElementById("minimize").value = newSrc;
    document.getElementById("window").style.display="block";
    document.getElementById("fullscreen").style.display ="none";
    document.getElementById("menu").style.display="none";
}

// set all but fullscreen divs to no display.
function fullScreen() {
    document.getElementById("window").style.display="none";
    document.getElementById("fullscreen").style.display ="block";
    document.getElementById("menu").style.display="none";
}