// semantic tags into vars
var header = document.getElementsByTagName("header")[0];
var main = document.getElementsByTagName("main")[0];
var nav = document.getElementsByTagName("nav")[0];
var counter = document.getElementById("counter");

// initialize the clock for num 6
function Time() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    hour = fixTime(hour);
    minute = fixTime(minute);
    second = fixTime(second);
    document.getElementById("clock").innerHTML = "<br><br>Time: " + hour + " : " + minute + " : " + second;
    setTimeout(Time, 1000);
}
function fixTime(t) {
    if (t < 10) {
        return "0" + t;
    }
    else {
        return t;
    }
}
Time();

// 1st interaction (display mode, begin button)
function first() {
    document.getElementById("first").style.display="none";
    document.getElementById("second").style.display="block";
    counter.innerHTML = "1";
    console.log("first function");
}

// display mode
var current = 1; // counter for each display mode
function darkMode() {
    // 0 means light, 1 means dark
    if (current == 0) {
        current = 1;
        document.body.style.backgroundColor="#111611";
        document.body.style.color="#EFE";
        header.style.backgroundColor = "#113711";
        main.style.backgroundColor = "#112611";
        nav.style.backgroundColor = "#113011";
        document.getElementById("displayMode").innerHTML = "light mode";
    }
    else if (current == 1) {
        current = 0;
        document.body.style.backgroundColor="#EFE";
        header.style.backgroundColor = "#448744";
        main.style.backgroundColor = "#337633";
        nav.style.backgroundColor = "#388138"
        document.getElementById("displayMode").innerHTML = "dark mode";
    }
}

//  2nd interaction (hover over me to continue)
function second() {
    document.getElementById("second").style.display="none";
    document.getElementById("third").style.display="block";
    counter.innerHTML = "2";
    console.log("second function");
}

// 3rd interaction (highlight text, click submit)
function third() {
    let selection = window.getSelection();
    if (selection == "")
    {
        document.getElementById("highlight").innerHTML = "whoops, try again. highlight this line of text and click the button."
    }
    else if (selection == "highlight this text, then click 'submit'" || selection == "whoops, try again. highlight this line of text and click the button." || selection == "try to be more precise, cuz my scripting is bad.")
    {
        document.getElementById("third").style.display="none";
        document.getElementById("fourth").style.display="block";
        counter.innerHTML = "3";
    }
    else 
    {
        document.getElementById("highlight").innerHTML = "try to be more precise, cuz my scripting is bad."
    }
}

// 4th interaction (highlight wrong answer)
function fourth() {
    let selection = window.getSelection();
    if (selection == "")
    {
        document.getElementById("quiz").innerHTML = "make sure to highlight an answer.";
    }
    else if (selection == "b) wrong")
    {
        document.getElementById("fourth").style.display="none";
        document.getElementById("fifth").style.display="block";
        counter.innerHTML = "4";
    }
    else if (selection == "a) incorrect" || selection == "c) correct" || selection == "d) bad")
    {
        document.getElementById("quiz").innerHTML = "that wasn't correct. highlight the wrong answer, then click 'submit'";
    }
    else
    {
        document.getElementById("quiz").innerHTML = "make sure to be precise in your highlighting pleeeease";
    }
    
}

// 5th interaction (calculator one)
function calcExit() {
        document.getElementById("fifth").style.display="none";
        document.getElementById("sixth").style.display="block";
        document.getElementById("clock").style.display="block";
        counter.innerHTML = "5";
    }
function fifth() {
    let first = Number(prompt("enter a number:"));
    let second = Number(prompt("enter another number:"));
    let result = first + second;
    document.getElementById("calcResult").innerHTML = first + " + " + second + " = " + (result);
    document.getElementById("calcPrompt").innerHTML = "click the same button to continue";
    document.getElementById("calcButton").style.display = "none"
    document.getElementById("calcExit").style.display = "inline";
}


function sixth() {
    let date = new Date();
    let secs = Number(date.getSeconds());
    if (secs == 0 || secs == 10 || secs == 20 || secs == 30 || secs == 40 || secs == 50)
    {
        document.getElementById("sixth").style.display="none";
        document.getElementById("clock").style.display="none";
        document.getElementById("seventh").style.display="block";
        counter.innerHTML = "6";
    }
    else
    {
        document.getElementById("clockPrompt").innerHTML = "that wasn't it. make sure you hit submit only when the seconds portion of the clock is a multiple of 10."
    }
}