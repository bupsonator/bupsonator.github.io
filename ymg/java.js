// initialize the list of all buttons
const buttons = document.getElementsByTagName('button');
const fsButton = document.getElementById("fs");

// log the buttons to the console
console.log(buttons);

// constantly scan for button tag clicks, then run newSrc() 
for (let i = 0, len = buttons.length; i < len; i++)
{
    buttons[i].addEventListener('click', openGame);
    
    fsButton.addEventListener('click', fullScreen);
}

// assign the button's value to the frm's src, then shut up audio, then clear the menu, and display the window
function openGame() {
    document.getElementById("sneaky").muted = true;
    document.getElementById("gameheader").innerHTML = this.name;
    document.getElementById("fullframe").src = this.value;
    document.getElementById("frm").src = this.value;
    document.getElementById("minimize").value = this.value;
    document.getElementById("minimize").name = this.name;
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