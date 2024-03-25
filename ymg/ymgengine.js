/******************************************************************************************************
***************************************** THE YMG ENGINE **********************************************
******************************************************************************************************/

// loop through every single button and apply the appropriate event listener
for (let i = 0, len = buttons.length; i < len; i++)
{
    // if button's id is 'enlarge', enlarge() runs onclick
    if (buttons[i].getAttribute('id') == 'enlarge') buttons[i].addEventListener('click', enlarge);
    
    // if button's id is 'gameReturn', returnToIndex() runs onclick
    else if (buttons[i].getAttribute('id') == 'gameReturn') buttons[i].addEventListener('click', returnToIndex);
 
    // if button's id is 'your-stats', seeAccount() runs onclick
    else if (buttons[i].getAttribute('id') == 'your-stats') buttons[i].addEventListener('click', seeAccount);
    
    // if button's id is 'settings', setSettings() runs onclick
    else if (buttons[i].getAttribute('id') == 'settings') buttons[i].addEventListener('click', seeSettings);
    
    // if button's class is navbar-toggler, or btn btn-dark dropdown-toggle, don't let the button do anything
    else if (buttons[i].getAttribute('class') == "navbar-toggler" || buttons[i].getAttribute('class') == "btn btn-dark dropdown-toggle" || buttons[i].getAttribute("class") == "btn btn-dark setting") console.log("dropdown menu made");
    
    // if the button has none of these, it's a game button, and it'll run openGame() onclick
    else buttons[i].addEventListener('click', openGame);
}

// if user set safeMode on, display the site as needed
if(localStorage.safeMode == "on")
{
    let allButtons = document.getElementById("all-games").children;
    let dropButtons = document.getElementById("dropdown-games").children;
    document.getElementById("set-0").style.color = "lime";
    document.getElementById("set-0").innerHTML = "on";
    for(let i = 0; i < allButtons.length; i++) {
        if(allButtons[i].getAttribute("data-safe") != "true") {
            allButtons[i].style.display = "none";
        }
    }
    for(let i = 0; i < dropButtons.length; i++) {
        if(dropButtons[i].getAttribute("data-safe") != "true") {
            dropButtons[i].style.display = "none";
        }
    }
}

// when game button is pressed
function openGame() {
    // send user to page top (works sometimes)
    window.scrollTo(0, 0);
    
    // shut up audio
    document.getElementById("sneaky").muted = true;
    
    // prepare the window page with the button's data
    document.getElementById("header-subheader").innerHTML = this.name;
    document.getElementById("frm").src = this.value;

    // prepare fullscreen iframe 
    document.getElementById("fullframe").src = this.value;
    
    // hide all but the essential divs
    document.getElementById("main").style.display="none";
    document.getElementById("fullscreen").style.display="none";
    
    //  make sure navigational stuff displays (when exiting fullscreen)
    document.getElementById("nav").style.display="block";
    document.getElementById("header").style.display="block";
    document.getElementById("footer").style.display="block";
    
    // prepare the minimize button with the button's data
    document.getElementById("minimize").value = this.value;
    document.getElementById("minimize").name = this.name;
    document.getElementById("minimize").setAttribute('data-isVertical', this.getAttribute('data-isVertical'));
    
    // display window div, as well as the needed buttons
    document.getElementById("window").style.display="block";
    document.getElementById("gameReturn").style.display="block";
    document.getElementById("enlarge").style.display="block";
    
    // add the game to most recent game in local storage
    localStorage.recentGame = this.name;
    
    // check if the game needs a vertical frame. if not, make it normal width
    if (this.getAttribute('data-isVertical') == 'true') document.getElementById("frm").style.width = '350px';
    else document.getElementById("frm").style.width = '70%';
}

// when 'return' button is pressed on the window page
function returnToIndex() {
    
    // unmute the audio
    document.getElementById("sneaky").muted = false;
    
    // hide the divs and game buttons
    document.getElementById("window").style.display="none";
    document.getElementById('your-stats-index').style.display='none';
    document.getElementById('gameReturn').style.display='none';
    document.getElementById('enlarge').style.display='none';
    
    // re-show main index and stat button
    document.getElementById("main").style.display="block";
    
    // clear iframe sources for smoothness
    document.getElementById("fullframe").src = '';
    document.getElementById("frm").src = '';
    
    // fix subheader & send user to top of page
    document.getElementById("header-subheader").innerHTML = "even better video gaming";
    window.scrollTo(0, 0);
}

// when the fullscreen button on window page is pressed
function enlarge() {
    
    // hide the window div, as well as navigational stuff
    document.getElementById("window").style.display="none";
    document.getElementById("nav").style.display="none";
    document.getElementById("header").style.display="none";
    document.getElementById("footer").style.display="none";
    
    // display the fullscreen div
    document.getElementById("fullscreen").style.display ="block";
    
}

// when the about button on menu div is pressed
function seeAccount() {
    if(this.value == "0")
    {
        if(!localStorage.recentGame) {
            localStorage.recentGame = "none!";
        }
        document.getElementById("recent-game").innerHTML = "<b>recently played: </b>" + localStorage.recentGame;
        document.getElementById("settings-panel").style.display = "none";
        document.getElementById("settings").value = "0";
        document.getElementById("your-stats-index").style.display = "block";
        this.value = "1";
    }
    else
    {
        document.getElementById("your-stats-index").style.display = "none";
        this.value = "0";
    }
}

// when the settings button is pressed (0: safemode)
function seeSettings() {
    if(this.value == "0")
    {
        document.getElementById("your-stats-index").style.display = "none";
        document.getElementById("your-stats").value = "0";
        document.getElementById("settings-panel").style.display = "block";
        if(!localStorage.safeMode || localStorage.safeMode == "off") {
            document.getElementById("set-0").style.color = "red";
            document.getElementById("set-0").innerHTML = "off";
        }
        else {
            document.getElementById("set-0").style.color = "lime";
            document.getElementById("set-0").innerHTML = "on";
        }
        this.value = "1";
    }
    else
    {
        document.getElementById("settings-panel").style.display = "none";
        this.value = "0";
    }
}

function setSetting(index)
{
    if(!localStorage.safeMode) {
        localStorage.safeMode = "off";
    }
    
    if(index == 0) // safe game setting (set-0)
    {
        let allButtons = document.getElementById("all-games").children;
        let dropButtons = document.getElementById("dropdown-games").children;
        if(localStorage.safeMode == "off")
        {
            document.getElementById("set-0").style.color = "lime";
            document.getElementById("set-0").innerHTML = "on";
            for(let i = 0; i < allButtons.length; i++) {
                if(allButtons[i].getAttribute("data-safe") != "true") {
                    allButtons[i].style.display = "none";
                }
            }
            for(let i = 0; i < dropButtons.length; i++) {
                if(dropButtons[i].getAttribute("data-safe") != "true") {
                    dropButtons[i].style.display = "none";
                }
            }
            localStorage.safeMode = "on";
        }
        else
        {
            document.getElementById("set-0").style.color = "red";
            document.getElementById("set-0").innerHTML = "off";
            for(let i = 0; i < allButtons.length; i++) {
                allButtons[i].style.display = "block";
            }
            for(let i = 0; i < dropButtons.length; i++) {
                dropButtons[i].style.display = "block";
            }
            localStorage.safeMode = "off";
        }
    }
}