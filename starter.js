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

    // Creation phase is where the Global Variables and Objects and functions are set aside to memory first and in the Execution phase is where the variables get added to the Engines memory

    