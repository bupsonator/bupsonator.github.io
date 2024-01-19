// ------------------------------------------------------------------
// |               THE IMPLEMENTATION JAVA BEGINs HERE              |
// ------------------------------------------------------------------

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
// this will create a form with an input box with the specified
// placeholder and id. the input's id is whatever id was sent,
// with 'input' appended to the end of it.
function createInput(placeholder, id)
{
    var form = document.createElement("form");
    form.id = id;
    var textBox = document.createElement("input");
    document.getElementById("terminal").appendChild(form);
    document.getElementById(form.id).appendChild(textBox);
    textBox.id = id + "input";
    textBox.placeholder = placeholder;
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
function quizGame()
{
    resetTerm();
    
    // the header and counter
    print("<br><i>Java vs Python Quiz Game</i><br>");
    let counter = 0;
    
    // question one
    print("<i>What is the java equivalent of print()?</i><br>a) System.out.println();<br>b) println();<br>c) std::cout <<;<br>d) printf();")
    createInput("enter answer here", "q1");
    q1.addEventListener('submit', function(e) {
        e.preventDefault();
        q1.style.display = "none";
        if (document.getElementById("q1input").value == "a")
        {
            print("<span style='color:lime'>correct!</span>");
            counter++;
            questionTwo();
        }
        else
        {
            print("<span style='color:red'>incorrect, or invalid.</span>");
            questionTwo();
        }
    });
    
    // question two
    function questionTwo()
    {
        print("<br><i>2. What does Java use instead of functions?</i><br>a) Classes<br>b) Div's<br>c) Java uses functions.<br>d) Methods");
        createInput("enter answer here", "q2");
        q2.addEventListener('submit', function(e) {
            e.preventDefault();
            q2.style.display = "none";
            if (document.getElementById("q2input").value == "d")
            {
                print("<span style='color:lime'>correct!</span>");
                counter++;
                questionThree();
            }
            else
            {
                print("<span style='color:red'>incorrect, or invalid.</span>");
                questionThree();
            }
        });
    }
    
    function questionThree()
    {
        print("<br><i>3. What is the Java if/elif/else equivalent?</i><br>a) if/elif/otherwise<br>b) try/catch<br>c) if/else if/else<br>d) look/elseif/else");
        createInput("enter answer here", "q3");
        q3.addEventListener('submit', function(e) {
            e.preventDefault();
            q3.style.display = "none";
            if (document.getElementById("q3input").value == "c")
            {
                print("<span style='color:lime'>correct!</span>");
                counter++;
                questionFour();
            }
            else
            {
                print("<span style='color:red'>incorrect, or invalid.</span>");
                questionFour();
            }
        });
    }
    function questionFour()
    {
        print("<br><i>4. How do you declare a variable in Java?</i><br>a) name = value;<br>b) type name = value<br>c) name type = value<br>d) value = type name");
        createInput("enter answer here", "q4");
        q4.addEventListener('submit', function(e) {
            e.preventDefault();
            q4.style.display = "none";
            if (document.getElementById("q4input").value == "b")
            {
                print("<span style='color:lime'>correct!</span>");
                counter++;
                questionFive();
            }
            else
            {
                print("<span style='color:red'>incorrect, or invalid.</span>");
                questionFive();
            }
        });
    }
    function questionFive()
    {
        print("<br><i>5. After importing the correct utility, what command lets you take user input in Java?</i><br>a) Create a variable, and set the value to input.nextInt,Double, or Line.<br>b) variable = System.in();<br>c) std::cin <<;<br>d) userIn()");
        createInput("enter answer here", "q5");
        q5.addEventListener('submit', function(e) {
            e.preventDefault();
            q5.style.display = "none";
            if (document.getElementById("q5input").value == "a")
            {
                print("<span style='color:lime'>correct!</span>");
                counter++;
                print("<i><br>Quiz complete!!!</i><br>You answered " + counter + " out of 5 questions correctly.");
            }
            else
            {
                print("<span style='color:red'>incorrect, or invalid.</span>");
                print("<i><br>Quiz complete!!!</i><br>You answered " + counter + " out of 5 questions correctly.");
            }
        });
    }
}