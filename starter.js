// We are going to be learning Vanilla JS and getting to know what is the deeper parts of JS

// Conceptual Aside: Syntax Parsers, Execution Contect and Lexical Enviroments

// Conecptual Aside: Name/Value Pairs and Objects
    //Name Value Pairs- EX: Address = '100 Main St.' 
    // Object EX: 
    //     Address:{
    //         Street: 100 Main St.,
    //         State: ID,
    //         zip:83686
    //         Apartment:{
    //             floor: 1,
    //             number: 13
    //         }
    //     }

    // Global Environment and Global Variable
    
    let change = "That Worked";
    
    let h1 = document.querySelector("h1"); 
    
    h1.innerText= change;
    h1.style.color = "red";
    
    function empty(){
        // This is a part of the window;
        console.warn("Empty was called")
    }
    
    empty();
    console.log(change);

    let num =1;

    // Creation phase is where the Global Variables and Objects and functions are set aside to memory first and in the Execution phase is where the variables get added to the Engines memory

    // Using guard statements to do an if/else statement to see how JS uses undefinted
    if (num === undefined) console.log("a is undefined")
    else console.log('a is defined')

    // After the Creation phase and the hoisting, it goes through the execution phase to run my code. 

    // Single Threaded: One command is being executed at one time. 

    // Syncrononus: One at a time in a specific order. 

    // Function Invocation and Execution Stack
        // Function Invocation: Running of the JS Funtion i.e.()
        
        // Below is an example of how the execution stack works
        function first(){
            console.log("I'm First!")
        }

        function second(){
        first();
            return console.log("Second Place")
            console.log("Never run")
        }

        function third(){
            second();
            console.log("Last statement")
        }

        third();
   
// Variable environment: Where the Variable lives and what it is in that place. 

function b(){
    var myVar;
    console.log(myVar)

}
function a(){
    var myVar = 2
console.log(myVar)
b();

}

var myVar = 1;
console.log(myVar)

a();
console.log(myVar);

// Scope Chain: How the Scope of variables work. 
var v;
function test(){
var b = 2
if (b<5){
    console.log(v)
}
v=10

}

test();
console.log(v)

let result = (function(){
    return "This is an IIFE";
})()

console.log(result)

// Scope: where a variable is available in your code. 

// Asynchronous: More han one at a time. 
    // Event Queue happen afer the JS Engine Stack is done. 

// Dynampic Typing: You dont tell the engine what type data a variable holds, it will figure it out.

// Types: Undefinted, Null, Number, Boolean, String,Symbol

