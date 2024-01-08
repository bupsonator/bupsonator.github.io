// initialize some vars i need
var gridChildren = document.getElementById("asdf").children;
const grid = document.getElementById('asdf');

// log the grid children to the console
console.log("grid children " + gridChildren);

// initialize the index counter
var index = 0;

// constantly scan for button clicks, then run newSrc() 
for (let i = 0, len = grid.children.length; i < len; i++)
{
    grid.children[i].onclick = function()
    {
    index = i;
    console.log("index of clicked: " + index);
    newSrc();
    }
}

// assign the button's value to the frm's src, then clear the menu, and display the window
function newSrc() {
    index = gridChildren[index];
    var newSrc = index.value;
    document.getElementById("frm").src = newSrc;
    document.getElementById("fs").href = newSrc;
    document.getElementById("window").style.display="block";
    document.getElementById("menu").style.display="none";
}