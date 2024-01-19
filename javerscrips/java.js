// terminal var for ease of use for me
var terminal = document.getElementById("terminal");
// clear the terminal in the site
function resetTerm()
{
    terminal.innerHTML = "<b><u>The Terminal</u></b><br>";
}
function userReset()
{
    terminal.innerHTML = "<b><u>The Terminal</u></b><br><span style='color:gray'>--console cleared--</span><br>";
}
// print text to the terminal per-line, like in Python
function print(input)
{
    terminal.innerHTML += input + "<br>";
}
// prompts the user for input so that I can use it in my applets
function input(question)
{
    let intput = prompt(question);
    if (intput != null) {
        print("<span style='color:lime'>&gt;  input - " + intput + "</span>");
    }
    else {
        print("<span style='color:red'>&gt; input cancelled by user</span>");
        return null;
    }
    return intput;
}

// ------------------------------------------------------------------
// |                 THE APPLETS THEMSELVES BEGIN HERE              |
// ------------------------------------------------------------------
function printSomething()
{
    print(prompt("enter something to print"));
}
function manyNumbers()
{
    resetTerm();
    let x = 0;
    while (x < 1000)
    {
        x++;
        print(x);
    }
}
function stringTraversal()
{
    resetTerm();
    let index = 1;
    print("");
    let straverse = input("enter any string of characters your heart desires.");
    print("now printing each character of that string line-by-line:<br>")
    for(i = 0; i < straverse.length; i++)
    {
        print(straverse.substring(i, i+1));
    }
}
function mathSqrting()
{
    resetTerm();
    let sixteenInstead = 16;
    let dumber = sixteenInstead;
    let somethingStupid = dumber;
    let allOverThePlace = somethingStupid;
    let Public = Math.sqrt(allOverThePlace);
        
    print("<br>math is really sqrting all over the place in public<br>");
    print("<i style='color:cyan'>let</i> sixteenInstead <span style='color:red'>=</span> 16;");
    print("<i style='color:cyan'>let</i> dumber <span style='color:red'>=</span> sixteenInstead;");
    print("<i style='color:cyan'>let</i> somethingStupid <span style='color:red'>=</span> dumber;");
    print("<i style='color:cyan'>let</i> allOverThePlace <span style='color:red'>=</span> somethingStupid;");
    print("<i style='color:cyan'>let</i> Public <span style='color:red'>=</span> <span style='color:lime'>Math</span>.<span style='color:cyan'>sqrt</span>(allOverThePlace);<br>");
    print("Math, sqrting allOverThePlace in Public: " + Public);
}