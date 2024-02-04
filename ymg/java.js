// initialize the list of all buttons
const buttons = document.getElementsByTagName('button');

// loop through every single button and apply the appropriate event listener
for (let i = 0, len = buttons.length; i < len; i++)
{
    // if button's value is 'return', outOfIndex() runs onclick
    if (buttons[i].getAttribute('value') == 'return') buttons[i].addEventListener('click', outOfIndex);
    
    // if button's id is 'fs', fullScreen() runs onclick
    else if (buttons[i].getAttribute('id') == 'fs') buttons[i].addEventListener('click', fullScreen);
    
    // if button's id is 'gameReturn', returnToIndex() runs onclick
    else if (buttons[i].getAttribute('id') == 'gameReturn') buttons[i].addEventListener('click', returnToIndex);
    
    // if button's class is 'multigame', openIndex() runs onclick
    else if (buttons[i].getAttribute('class') == 'multigame') buttons[i].addEventListener('click', openIndex);
    
    // if button's id is 'about', aboutOpen() runs onclick
    else if (buttons[i].getAttribute('id') == 'about') buttons[i].addEventListener('click', aboutOpen);
    
    // if button's data-isLink is 'true', it will turn button into link.
    else if (buttons[i].getAttribute('data-isLink') == "true") buttons[i].addEventListener('click', function(){
        // if data-target is blank, it'll open the value in a new tab
        if (this.getAttribute('data-target') == 'blank') window.open(this.value, '_blank').focus();
        // else it'll just send the user to the page in the same tab
        else location.href = this.value;
    });
    
    // if the button has none of these, it's a game button, and it'll run openGame() onclick
    else buttons[i].addEventListener('click', openGame);
}

// when game button is pressed
function openGame() {
    
    // shut up audio
    document.getElementById("sneaky").muted = true;
    
    // prepare the window page with the button's data
    document.getElementById("gameheader").innerHTML = this.name;
    document.getElementById("frm").src = this.value;

    // prepare fullscreen iframe 
    document.getElementById("fullframe").src = this.value;
    
    // prepare the minimize button with the button's data
    document.getElementById("minimize").value = this.value;
    document.getElementById("minimize").name = this.name;
    document.getElementById("minimize").setAttribute('data-isVertical', this.getAttribute('data-isVertical'));
    
    // hide all but the window divs
    let indices = document.getElementsByClassName('multiIndex');
    for (let i = 0; i < indices.length; i++) indices[i].style.display = 'none';
    document.getElementById("menu").style.display="none";
    document.getElementById("fullscreen").style.display="none";
    
    // display window div
    document.getElementById("window").style.display="block";
    
    // check if the game needs a vertical frame. if not, make it normal width
    if (this.getAttribute('data-isVertical') == 'true') document.getElementById("frm").style.width = '350px';
    else document.getElementById("frm").style.width = '1000px';
}

// when 'return' button is pressed on the window page
function returnToIndex() {
    
    // unmute the audio
    document.getElementById("sneaky").muted = false;
    
    // create a list of all multiIndices
    let indices = document.getElementsByClassName('multiIndex');
    
    // hide the divs that don't need to be tested at all
    document.getElementById("window").style.display="none";
    document.getElementById('aboutIndex').style.display='none';
    
    // if value is -1, the div needed is the main menu
    if (this.getAttribute('value') == '-1') document.getElementById("menu").style.display="block";
    
    // else, get the value stored in the button, and open the multiIndex at the index of the same value
    else
    {
        let num = Number(this.getAttribute('value'));
        indices[num].style.display = 'block';
        this.setAttribute('value', '-1')
    }
    
    // clear iframe sources for smoothness
    document.getElementById("fullframe").src = '';
    document.getElementById("frm").src = '';
}

// when a multiButton is pressed
function openIndex() {
    
    // get the number value stored in the multiButton
    let theValue = Number(this.getAttribute('value'));
    
    // create a list of all multiIndices
    let indices = document.getElementsByClassName('multiIndex');
    
    // hide the divs
    document.getElementById("menu").style.display="none";
    document.getElementById('aboutIndex').style.display='none';
    
    // store the value in gameReturn so that the appropriate index is opened when the game is closed
    document.getElementById('gameReturn').value = theValue;
    
    // show the appropriate index
    indices[theValue].style.display = 'block';
}

// when the fullscreen button on window page is pressed
function fullScreen() {
    
    // hide the window div
    document.getElementById("window").style.display="none";
    
    // display the fullscreen div
    document.getElementById("fullscreen").style.display ="block";
}

// when the about button on menu div is pressed
function aboutOpen() {
    
    // hide menu div
    document.getElementById("menu").style.display="none";
    
    // display aboutIndex div
    document.getElementById('aboutIndex').style.display='block';
}

// when 'return' button is pressed on a multiGame index
function outOfIndex() {
    
    // hide all multiIndices and about index
    let indices = document.getElementsByClassName('multiIndex');
    for (let i = 0; i < indices.length; i++) indices[i].style.display = 'none';
    document.getElementById('aboutIndex').style.display = 'none';
    
    // display main menu div
    document.getElementById("menu").style.display="block";
    
    // set gameReturn button value so that game will return to the right menu
    document.getElementById('gameReturn').value = '-1';
}