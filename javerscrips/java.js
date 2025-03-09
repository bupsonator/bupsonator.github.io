// clear the terminal in the site
function clear()
{
    document.getElementById("terminal").innerHTML = "<b><u>The Terminal</u></b><br>";
}
// print text without new line
function print(input)
{
    document.getElementById("terminal").innerHTML += input;
}
// print text with new line
function println(input)
{
    document.getElementById("terminal").innerHTML += input + "<br>";
}
// create input box 
function createInput(placeholder, id, theFunction)
{
    // create a form
    let form = document.createElement("form");
    
    // set the id argument to the form
    form.id = id;
    
    // put the form in the terminal
    document.getElementById("terminal").appendChild(form);
    
    // put the text box into the form
    let textBox = document.createElement("input");
    document.getElementById(form.id).appendChild(textBox);
    
    // set the placeholder argument to the input & disable autofill
    textBox.id = id + "input";
    textBox.placeholder = placeholder;
    textBox.autocomplete = 'off';
    
    // onclick
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // prevent refresh
        form.style.display = "none"; // hide form
        theFunction(); // run the function argument
    });
}
function getInput(theID)
{
    return document.getElementById(theID + 'input').value;
}
// ------------------------------------------------------------------
// |                 THE APPLETS THEMSELVES BEGIN HERE              |
// ------------------------------------------------------------------
function printSomething()
{
    clear();
    createInput("enter something!", 'printThings', function(){ 
        if (getInput('printThings') == 'something!' || getInput('printThings') == 'something')
        {
            println("<span style='color:red'>you're so funny and cool.</span>")
        }
        else println("<br>" + getInput('printThings'));
    });
}
function manyNumbers()
{
    clear();
    let x = 0;
    while (x < 1000)
    {
        x++;
        println(x);
    }
}
function stringTraversal()
{
    clear();
    let index = 1;
    println("<br>enter a string to get printed line-by-line, character-by-character");
    createInput("enter something!", 'straverse', function() {
        let straverse = String(getInput('straverse'));
        if (straverse != null)
        {
            println("<span style='color:lime'>now printing each character of </span>" + straverse + " <span style='color:lime'>line-by-line:</span><br>");
        }
        for(i = 0; i < straverse.length; i++)
        {
            println(straverse.substring(i, i+1));
        }
    });
    
}
function mathSqrting()
{
    clear();
    let sixteenInstead = 16;
    let dumber = sixteenInstead;
    let somethingStupid = dumber;
    let allOverThePlace = somethingStupid;
    let Public = Math.sqrt(allOverThePlace);
        
    println("<br>math is really sqrting all over the place in public<br>");
    println("<i style='color:cyan'>let</i> sixteenInstead <span style='color:red'>=</span> 16;");
    println("<i style='color:cyan'>let</i> dumber <span style='color:red'>=</span> sixteenInstead;");
    println("<i style='color:cyan'>let</i> somethingStupid <span style='color:red'>=</span> dumber;");
    println("<i style='color:cyan'>let</i> allOverThePlace <span style='color:red'>=</span> somethingStupid;");
    println("<i style='color:cyan'>let</i> Public <span style='color:red'>=</span> <span style='color:lime'>Math</span>.<span style='color:cyan'>sqrt</span>(allOverThePlace);<br>");
    println("Math, sqrting allOverThePlace in Public: " + Public);
}
function quizGame()
{
    clear();
    
    // the header and counter
    println("<br><i>Java vs Python Quiz Game</i><br>");
    let counter = 0;
    
    // question one
    println("<i>What is the java equivalent of println()?</i><br>a) System.out.println();<br>b) println();<br>c) std::cout <<;<br>d) printf();")
    createInput("enter answer here", "q1", function(){
        if (getInput("q1") == "a")
        {
            println("<span style='color:lime'>correct!</span>");
            counter++;
            questionTwo();
        }
        else
        {
            println("<span style='color:red'>incorrect, or invalid.</span>");
            questionTwo();
        }
    });
    // question two
    function questionTwo()
    {
        println("<br><i>2. What does Java use instead of functions?</i><br>a) Classes<br>b) Div's<br>c) Java uses functions.<br>d) Methods");
        createInput("enter answer here", "q2", function() {
            if (getInput("q2") == "d")
            {
                println("<span style='color:lime'>correct!</span>");
                counter++;
                questionThree();
            }
            else
            {
                println("<span style='color:red'>incorrect, or invalid.</span>");
                questionThree();
            }
        });
    }
    
    function questionThree()
    {
        println("<br><i>3. What is the Java if/elif/else equivalent?</i><br>a) if/elif/otherwise<br>b) try/catch<br>c) if/else if/else<br>d) look/elseif/else");
        createInput("enter answer here", "q3", function() {
            if (getInput("q3") == "c")
            {
                println("<span style='color:lime'>correct!</span>");
                counter++;
                questionFour();
            }
            else
            {
                println("<span style='color:red'>incorrect, or invalid.</span>");
                questionFour();
            }
        });
    }
    function questionFour()
    {
        println("<br><i>4. How do you declare a variable in Java?</i><br>a) name = value;<br>b) type name = value<br>c) name type = value<br>d) value = type name");
        createInput("enter answer here", "q4", function() {
            if (getInput("q4") == "b")
            {
                println("<span style='color:lime'>correct!</span>");
                counter++;
                questionFive();
            }
            else
            {
                println("<span style='color:red'>incorrect, or invalid.</span>");
                questionFive();
            }
        });
    }
    function questionFive()
    {
        println("<br><i>5. After importing the correct utility, what command lets you take user input in Java?</i><br>a) Create a variable, and set the value to input.nextInt,Double, or Line.<br>b) variable = System.in();<br>c) std::cin <<;<br>d) userIn()");
        createInput("enter answer here", "q5", function(){
            if (getInput("q5") == "a")
            {
                println("<span style='color:lime'>correct!</span>");
                counter++;
                println("<i><br>Quiz complete!!!</i><br>You answered " + counter + " out of 5 questions correctly.");
            }
            else
            {
                println("<span style='color:red'>incorrect, or invalid.</span>");
                println("<i><br>Quiz complete!!!</i><br>You answered " + counter + " out of 5 questions correctly.");
            }
        });
    }
}
function bandCYOA()
{
    clear();
    let fChoice;
    let sChoice;
        
        // Intro
        println("<br>So, you want to be in band.<br>Coolio, time to pick your first instrument.");
        
        // First Choice: Brass or Woodwind
        println("Do you want a [b]rass or [w]oodwind instrument?");
        createInput("'b' or 'w'", "BorW", function(){
            if (getInput("BorW") == "b")
            {
                println("<br>Ooh, nice! You'll be a nice and loud player right from the start.<br>Would you like to play a [tru]mpet or a [tro]mbone to start off?");
                createInput("'tru' or 'tro'", 'brass', function(){
                    if (getInput("brass") == "tru")
                    {
                        println("<br>Oh dear. Just, please don't deafen somebody either intentionally<br>or unintentionally, thanks!");
                    }
                    else if (getInput("brass") == "tro")
                    {
                        println("<br>OOh, the sliding trumpet! You're gonna look very cool, no matter<br>your skill level.");
                    }
                    else
                    {
                        println("<span style='color:red'>not a valid input, please restart</span>");
                    }
                });
            }
            else if (getInput("BorW") == "w")
            {
                println("<br>Good choice. You'll be quieter, but eventually you'll be better<br>and more technical than the brass crowd because of your buttons.<br>Would you like to play a [c]larinet or a [f]lute to start off?");
                createInput("'c' or 'f'", 'ww', function() {
                    if (getInput("wwinput") == "c")
                    {
                        println("<br>Good, good. It'll only be a matter of time until you harass<br>the whole band with Jungle Dance.")
                    }
                    else if (getInput("wwinput") == "f")
                    {
                        println("<br>Ah, a flute. A quiet instrument. I'm sure you'll do very well with<br>it, even though we're always gonna tell you to be louder.")
                    }
                    else
                    {
                        println("<span style='color:red'>not a valid input, please restart</span>");
                    }
                });
            }
            else
            {
                println("<span style='color:red'>not a valid input, please restart</span>");
            }
        });
}
function flippydo()
{
    // reset site terminal
    clear();
    println('<br>enter 1-8 binary digits (0 or 1) to convert to an integer');
    // initialize the let to store the end result
    let result = 0;
    
    // a list of the int values 
    const binVals = [1, 2, 4, 8, 16, 32, 64, 128];
    
    // asking user for their binary num
    createInput("enter them here", 'binary', function(){
        
        // get the input and reverse it so the program works right
        const binary = getInput('binary').split('').reverse().join('');
        
        // if input is valid, convert
        if(binary.length <= 8 && binary.length >= 1)
        {
            // traversing the binary string
            for(let i = 0; i < binary.length; i++)
            {
                // the char to check
                let substr = binary.substring(i, i + 1);
                
                // if substr is 1, add the appropriate value to result
                if(substr === "1") result += binVals[i];
                
                // if substr is 0, carry on
                else if(substr === "0") continue;
                    
                // if character is invalid, tell the user they suck
                else
                {
                    println("<br><span style='color:red'>The only valid characters are '0' and '1', please try again.</span>");
                    return;
                }
                
            }
            // print the final result if an error didn't stop the function
            println("<br><span style='color:lime'>binary to int conversion --&gt;</span> " + result);
        }
        
        // if input isn't a valid length, tell the user to be better
        else
        {
            println("<br><span style='color:red'>Your input can only be 1-8 digits long.</span>");
        }
    });
}
function loopPrint()
{
    clear();
    println("<br><span style='color:lime'>enter a string of characters to be repeatedly printed:</span>");
    createInput('enter here', 'loopStr', function() {
        let loopInput = getInput('loopStr');
        println("<br>now enter how many times you want <span style='color:lime'>" + loopInput + "</span> printed (must be less than 3000):");
        createInput('enter here', 'loopAmt', function() {
            let loopAmt = Number(getInput('loopAmt'));
            println(' ');
            if (loopAmt < 1000)
            {
                for (let i = 0; i < loopAmt; i++)
                {
                    println(loopInput);
                }
            }
            else if (loopAmt <= 3000)
            {
                println("Are you sure? Printing over 1000 times may crash your browser. (y/n)");
                createInput("'y' or 'n'", 'loopConfirm', function() {
                    let confirm = getInput('loopConfirm');
                    println('');
                    if (confirm == 'y')
                    {
                        for (let i = 0; i < loopAmt; i++)
                        {
                            println(loopInput);
                        }
                    }
                });
            }
            else println("<span style='color:red'>invalid input (too high, or not a number)</span>");
            
        });
    });
}
function blobMaker()
{
    clear();
    println('<br><span style="lime">would you like a txt or html blob?</span>');
    createInput("'html' or 'txt'", 'blobType', function(){
        if (getInput('blobType') == 'html')
        {
            println("<br><span style='color:lime'>enter your html blob text:</span>");
            createInput("enter html here", "blobText", function(){
                let theBlob = new Blob([getInput('blobText')], {type: "text/html"});
                let newLink = document.createElement('a');
                document.getElementById('terminal').appendChild(newLink);
                newLink.href = window.URL.createObjectURL(theBlob);
                newLink.target = "_blank";
                newLink.innerHTML = '<br>click this to open your html blob!';
            });
        }
        else if (getInput('blobType') == 'txt')
        {
            println("<br><span style='color:lime'>enter your txt blob text:</span>");
            createInput("enter txt here", "blobText", function(){
                let theBlob = new Blob([getInput('blobText')], {type: "text/plain"});
                let newLink = document.createElement('a');
                document.getElementById('terminal').appendChild(newLink);
                newLink.href = window.URL.createObjectURL(theBlob);
                newLink.target = "_blank";
                newLink.innerHTML = '<br>click this to open your txt blob!';
            });
        }
        else println('<br><span style="color:red">thats not a valid input</span>');
    });
}
function rollDie()
{
    clear();
    println('<br>Enter how many sides you want your imaginary die to have:');
    createInput('enter an int', 'die', function(){
        let input = Number(getInput('die'));
        let result = parseInt(Math.random() * input + 1);
        console.log(result);
        println("<br><span style='color:lime'>rolling a die with " + Number(getInput('die')) + " sides...</span><br>")
        if (String(result) == 'NaN')
        {
            println("You rolled: <i style='color:red'>not a number</i>"); 
        }
        else println("You rolled: <i style='color:cyan'>" + result + '</i>'); 
    });
}