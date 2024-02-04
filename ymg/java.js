// initialize the list of all buttons
const buttons = document.getElementsByTagName('button');

// loop through every single button and apply the appropriate event listener
for (let i = 0, len = buttons.length; i < len; i++)
{
    if (buttons[i].getAttribute('value') == 'return') buttons[i].addEventListener('click', outOfIndex);
    else if (buttons[i].getAttribute('id') == 'fs') buttons[i].addEventListener('click', fullScreen);
    else if (buttons[i].getAttribute('id') == 'gameReturn') buttons[i].addEventListener('click', returnToIndex);
    else if (buttons[i].getAttribute('class') == 'multigame') buttons[i].addEventListener('click', openIndex);
    else if (buttons[i].getAttribute('id') == 'about') buttons[i].addEventListener('click', aboutOpen);
    else if (buttons[i].getAttribute('data-isLink') == "true") buttons[i].addEventListener('click', function(){
        if (this.getAttribute('data-target') == 'blank') window.open(this.value, '_blank').focus();
        else location.href = this.value;
    });
    else buttons[i].addEventListener('click', openGame);
}

// assign the button's value to the frm's src, then shut up audio, then clear the menu, and display the window
function openGame() {
    document.getElementById("sneaky").muted = true;
    document.getElementById("gameheader").innerHTML = this.name;
    document.getElementById("fullframe").src = this.value;
    document.getElementById("frm").src = this.value;
    document.getElementById("minimize").value = this.value;
    document.getElementById("minimize").name = this.name;
    document.getElementById('aboutIndex').style.display='none';
    document.getElementById("window").style.display="block";
    document.getElementById("fullscreen").style.display ="none";
    document.getElementById("menu").style.display="none";
    let indices = document.getElementsByClassName('multiIndex');
    for (let i = 0; i < indices.length; i++) indices[i].style.display = 'none';
    if (this.getAttribute('data-isVertical') == 'true') document.getElementById("frm").style.width = '350px';
    else document.getElementById("frm").style.width = '1000px';
}
function returnToIndex() {
    document.getElementById("sneaky").muted = false;
    document.getElementById("window").style.display="none";
    let indices = document.getElementsByClassName('multiIndex');
    for (let i = 0; i < indices.length; i++) indices[i].style.display = 'none';
    document.getElementById('aboutIndex').style.display='none';
    if (this.getAttribute('value') == '-1') document.getElementById("menu").style.display="block";
    else if (this.getAttribute('value') == '-5') document.getElementById('about').style.display='block';
    else
    {
        let num = Number(this.getAttribute('value'));
        indices[num].style.display = 'block';
        this.setAttribute('value', '-1')
    }
    document.getElementById("fullframe").src = '';
    document.getElementById("frm").src = '';
}
function openIndex() {
    let theValue = Number(this.getAttribute('value'));
    let indices = document.getElementsByClassName('multiIndex');
    console.log(theValue);
    document.getElementById("menu").style.display="none";
    document.getElementById('aboutIndex').style.display='none';
    document.getElementById('gameReturn').value = theValue;
    indices[theValue].style.display = 'block';
}
// set all but fullscreen divs to no display.
function fullScreen() {
    document.getElementById("window").style.display="none";
    document.getElementById("fullscreen").style.display ="block";
    document.getElementById("menu").style.display="none";
}
function aboutOpen() {
    document.getElementById("window").style.display="none";
    document.getElementById("fullscreen").style.display ="none";
    document.getElementById("menu").style.display="none";
    document.getElementById('aboutIndex').style.display='block';
}
function outOfIndex() {
    let indices = document.getElementsByClassName('multiIndex');
    for (let i = 0; i < indices.length; i++) indices[i].style.display = 'none';
    document.getElementById('aboutIndex').style.display='none';
    document.getElementById("window").style.display="none";
    document.getElementById("fullscreen").style.display ="none";
    document.getElementById("menu").style.display="block";
    document.getElementById('gameReturn').value = '-1';
}