// initialize the list of all buttons
const buttons = document.getElementsByTagName('button');

// log the buttons to the console
console.log(buttons);

// initialize the index counter
var index = 0;

// constantly scan for button tag clicks, then run newSrc() 
for (let i = 0, len = buttons.length; i < len; i++)
{
    buttons[i].onclick = function()
    {
    index = i;
    console.log("index of clicked: " + index);
    newSrc();
    }
}

// assign the button's value to the frm's src, then clear the menu, and display the window
function newSrc() {
    index = buttons[index];
    var newSrc = index.value;
    document.getElementById("frm").src = newSrc;
    document.getElementById("fs").href = newSrc;
    document.getElementById("window").style.display="block";
    document.getElementById("menu").style.display="none";
}