// semantic tags into vars
var header = document.getElementsByTagName("header");
header = header[0];
var main = document.getElementsByTagName("main");
main = main[0];

// the first interaction
function first() {
    document.getElementById("first").style.display="none";
    document.getElementById("second").style.display="block";
    console.log("first function");
}

// dark mode
var current = 1; // counter for each display mode
function darkMode() {
    // 0 means light, 1 means dark
    if (current == 0) {
        current = 1;
        document.body.style.backgroundColor="#111611";
        document.body.style.color="#EFE";
        header.style.backgroundColor = "#113711";
        main.style.backgroundColor = "#112611";
        document.getElementById("displayMode").innerHTML = "light mode";
    }
    else if (current == 1) {
        current = 0;
        document.body.style.backgroundColor="#EFE";
        document.body.style.color="#111611";
        header.style.backgroundColor = "#448744";
        main.style.backgroundColor = "#337633";
        document.getElementById("displayMode").innerHTML = "dark mode";
    }
}

// the second interaction
function second() {
    document.getElementById("second").style.display="none";
    document.getElementById("third").style.display="block";
    console.log("second function");
}

// the third interaction
function third() {
    let selection = window.getSelection();
    if (selection == "")
    {
        document.getElementById("highlight").innerHTML = "whoops, try again. highlight this line of text and click the button."
    }
    else if (selection == "highlight this text, then click" || selection == "whoops, try again. highlight this line of text and click the button.")
    {
        document.getElementById("third").style.display="none";
        document.getElementById("fourth").style.display="block";
    }
}