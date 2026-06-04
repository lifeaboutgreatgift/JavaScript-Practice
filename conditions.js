// if else if - is a type of control flow statement.
// it called conditional statement or in easy word ~ decision making flow.

//first you declare a variable

// ===== THE DIRECT ACTION TYPE


let perTablePerson = 2;

if (perTablePerson <= 2 ) {
    console.log("Would you like a table for two, sir?");
} else if ( perTablePerson <= 6 ) {
    console.log("Would you like a large grouptable?");
} else {
    console.log("Sorry! We're already reserved for today!")
}

//variable initialization - creating intentionally empty box;

// ==== THE STATE MUTATION TYPE

let score = 10;
let cheerUp = "Briar! Briar! Briar!" ;
let boo = "The team score is down!" ;

let finalMsg = "";
// this is an empty variable it's  reserved slot in memory.

if (score <= 5) {
    finalMsg = boo; // here we ressignmemt that slot, in cs term - variable mutation.
    //  In easy words, changing or overwriting the data that was perviously stored in memory slot.
} else {
    finalMsg = cheerUp;
}



console.log(finalMsg);
// using console for send data out to user!
// without adding console in last you can't see the output in device.


//====== THE FUNCTIONAL TYPE
// return only works inside a function


// here we create a function - like creating a recipe (the definition).
// function -is naming the recipe.
// internal logic inside it -is the recipe.
// the execution line - console log - like ordering the food.

function checkTeamStatus () {
    if (score <= 5) {
        return boo;
    }else {
        return cheerUp;
    }
}

console.log(checkTeamStatus());


//=== CONDITIONAL STATEMENTS has 4 types

// 1. if/ else if/ else  - checking ranges of data (e.g., score >= 50)
// 2. switch   - matching one box against many exact text/number options
// 3. Ternary Operator(? :)   - shrinking a simple if/else down into one short line
// 4. Logical short-circuiting  - setting up quick backup values if data goes missing.

// Already covered first two types above

//The ternary operator does same job in one single line. the word "ternary" just means "three parts".

//let finalMsg = (score <= 5) ? boo : cheerUp;  - comment out cause finalMsg is already declared above it will show an error.

let playerScore = 2;
let playerWins = "Yay! You get level up."
let playerLoses = "Oops! You lose it"

let dashboardScore = (playerScore <= 2) ? playerWins : playerLoses;

console.log(dashboardScore);


/* ======== Logical short-circuiting (||) ========= */

// It uses the OR || operator to instantly make a choice without writing any if or else keywords at all.

let userNickname = null;

let displayName = userNickname || "GuestPlayer" ;

console.log(displayName);