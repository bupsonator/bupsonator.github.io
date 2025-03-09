// initialize the list of all buttons
const buttons = document.getElementsByTagName('button');
const fsButton = document.getElementById("fs");
var audio = document.createElement("audio");

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
    playSounds();
    }
}

// assign the button's value to the frm's src, then shut up audio, then clear the menu, and display the window
function playSounds() {
    index = buttons[index];
    audio.src = index.value;
    audio.play();
}