/******************************************************************************************************
***************************************** THE YMG ENGINE **********************************************
******************************************************************************************************/

// initialize the list of all buttons
const buttons = document.getElementsByTagName('button');

// loop through every single button and apply the appropriate event listener
for (let i = 0, len = buttons.length; i < len; i++)
{
    // if button's id is 'fs', fullScreen() runs onclick
    if (buttons[i].getAttribute('id') == 'enlarge') buttons[i].addEventListener('click', enlarge);
    
    // if button's id is 'gameReturn', returnToIndex() runs onclick
    else if (buttons[i].getAttribute('id') == 'gameReturn') buttons[i].addEventListener('click', returnToIndex);
 
    // if button's id is 'about', aboutOpen() runs onclick
    else if (buttons[i].getAttribute('id') == 'your-stats') buttons[i].addEventListener('click', seeAccount);
    
    // if button's data-isLink is 'true', it will turn button into link.
    else if (buttons[i].getAttribute('data-isLink') == "true") buttons[i].addEventListener('click', function(){
        // if data-target is blank, it'll open the value in a new tab
        if (this.getAttribute('data-target') == 'blank') window.open(this.value, '_blank').focus();
        // else it'll just send the user to the page in the same tab
        else location.href = this.value;
    });
    
    // if button's class is dropbtn, don't let the button do anything
    else if (buttons[i].getAttribute('class') == "navbar-toggler" || buttons[i].getAttribute('class') == "btn btn-dark dropdown-toggle") console.log("dropdown menu made");
    
    // if the button has none of these, it's a game button, and it'll run openGame() onclick
    else buttons[i].addEventListener('click', openGame);
}

// when game button is pressed
function openGame() {
    
    // shut up audio
    document.getElementById("sneaky").muted = true;
    
    // prepare the window page with the button's data
    document.getElementById("header-subheader").innerHTML = this.name;
    document.getElementById("frm").src = this.value;

    // prepare fullscreen iframe 
    document.getElementById("fullframe").src = this.value;
    
    // hide all but the window divs
    document.getElementById("main").style.display="none";
    document.getElementById("fullscreen").style.display="none";
    document.getElementById("your-stats").style.display="none";
    
    document.getElementById("window").style.display="block";
    document.getElementById("nav").style.display="block";
    document.getElementById("header").style.display="block";
    document.getElementById("footer").style.display="block";
    
    // prepare the minimize button with the button's data
    document.getElementById("minimize").value = this.value;
    document.getElementById("minimize").name = this.name;
    document.getElementById("minimize").setAttribute('data-isVertical', this.getAttribute('data-isVertical'));
    
    // display window div
    document.getElementById("window").style.display="block";
    document.getElementById("gameReturn").style.display="block";
    document.getElementById("enlarge").style.display="block";
    
    // check if the game needs a vertical frame. if not, make it normal width
    if (this.getAttribute('data-isVertical') == 'true') document.getElementById("frm").style.width = '350px';
    else document.getElementById("frm").style.width = '70%';
}

// when 'return' button is pressed on the window page
function returnToIndex() {
    
    // unmute the audio
    document.getElementById("sneaky").muted = false;
    
    // hide the divs
    document.getElementById("window").style.display="none";
    document.getElementById('your-stats-index').style.display='none';
    document.getElementById('gameReturn').style.display='none';
    document.getElementById('enlarge').style.display='none';
    
    // re-show main index
    document.getElementById("main").style.display="block";
    document.getElementById("your-stats").style.display="block";
    
    // clear iframe sources for smoothness
    document.getElementById("fullframe").src = '';
    document.getElementById("frm").src = '';
    
    // fix subheader
    document.getElementById("header-subheader").innerHTML = "even better video gaming";
}

// when the fullscreen button on window page is pressed
function enlarge() {
    // hide the window div
    document.getElementById("window").style.display="none";
    document.getElementById("nav").style.display="none";
    document.getElementById("header").style.display="none";
    document.getElementById("footer").style.display="none";
    
    // display the fullscreen div
    document.getElementById("fullscreen").style.display ="block";
    
}

// when the about button on menu div is pressed
function seeAccount() {
    
    // hide menu div
    document.getElementById("main").style.display="none";
    document.getElementById("your-stats").style.display="none";
    
    // display aboutIndex div
    document.getElementById('your-stats-index').style.display='block';
    document.getElementById("gameReturn").style.display="block";
}