// can you tell that this site is just your mom gaming
// but with less code

// initialize the list of all buttons
const buttons = document.getElementsByTagName('button');

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});

// loop through every single button and apply the appropriate event listener
for (let i = 0, len = buttons.length; i < len; i++)
{
    // if button's id is 'gameReturn', returnToIndex() runs onclick
    if (buttons[i].getAttribute('id') == 'gameReturn') buttons[i].addEventListener('click', returnToIndex);
    
    // if button's class is navbar-toggler, or btn btn-dark dropdown-toggle, don't let the button do anything
    else if (buttons[i].getAttribute('class') == "navbar-toggler") console.log("dropdown menu made");
    
    // if the button has none of these, it's a game button, and it'll run openGame() onclick
    else buttons[i].addEventListener('click', openGame);
}

// when game button is pressed
function openGame() {
    // send user to page top (works sometimes)
    window.scrollTo(0, 0);
    
    // prepare download button with link to document
    document.getElementById("download").href = this.value;
    
    // prepare the window page with the button's data
    document.getElementById("header-subheader").innerHTML = this.name;
    document.getElementById("frm").src = this.value;
    
    // hide all but the essential divs
    document.getElementById("main").style.display="none";
    
    //  make sure navigational stuff displays (when exiting fullscreen)
    document.getElementById("header").style.display="block";
    document.getElementById("footer").style.display="block";
    
    // display window div, as well as the needed buttons
    document.getElementById("window").style.display="block";
    document.getElementById("doc-buttons").style.display="block";
}

// when 'return' button is pressed on the window page
function returnToIndex() {
    
    // hide the divs and game buttons
    document.getElementById("window").style.display="none";
    document.getElementById('doc-buttons').style.display='none';
    
    // re-show main index and stat button
    document.getElementById("main").style.display="block";
    
    // clear iframe sources for smoothness
    document.getElementById("frm").src = '';
    
    // fix subheader & send user to top of page
    document.getElementById("header-subheader").innerHTML = "top tier text";
    window.scrollTo(0, 0);
}