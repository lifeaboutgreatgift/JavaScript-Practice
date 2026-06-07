
// ****FUNCTIONS: The Execution Machines*****

// In Computer Science, functions are the ultimate tool for abstraction.
// Abstraction means hiding complex code behind a simple name so you don't have to rewrite it.

// ==========================================
// 1. Defining vs. Executing (The Recipe Analogy)
// ==========================================

// PHASE A: Creating the Recipe (Function Definition)
// The computer does NOT run this code yet. It just stores the recipe in memory.
function cheerUp() {
    console.log("Briar! Briar! Briar!");
}

// PHASE B: Cooking the Meal (Function Invocation / Calling)
// The trailing parentheses () act as the activation trigger.
cheerUp(); // The computer pauses main code, runs the recipe, then returns.




// ****2. Inputs: Parameters vs. Arguments****

// Parameters: Placeholder variable names written inside the recipe definition (the empty form slots).
// Arguments: The real, actual data values passed into the function when you call it (filling the slots).

function greetUser(username, role) { // 'username' and 'role' are PARAMETERS
    console.log(`Welcome back ${username}, Role: ${role}`);
}

greetUser("Briar", "Mage"); // "Briar" and "Mage" are ARGUMENTS


// *****3. Outputs: Value vs. Action Functions***

/* TYPE A: Action / Side-Effect Functions
 These do not give a value back to the code. They perform an action in the outside world.
 Examples: console.log(), or game engine commands like drawSprites() or playBeepSound().
*/

/* TYPE B: Value Functions (The 'return' Mechanic)
 A function using 'return' acts like a vending machine. It processes data and spits a value back out.
 CRUCIAL RULE: You MUST catch the returned value in a variable box, or it drops to the floor and is lost!
*/

function calculateTax(price) {
    return price * 0.05; // Hands back a raw numerical value
}

let taxAmount = calculateTax(100); // Caught! taxAmount now holds 5
console.log(taxAmount);


// *****4. The Absolute Return Boundaries (Dead Code)

/* Rule 1: The 'return' keyword can ONLY be used inside a function. Global returns crash the script.
 Rule 2: 'return' is an immediate Emergency Eject Button. The function halts and exits instantly.
 Any code written directly underneath an executed return statement is completely unreachable.
*/

function testReturn() {
    return "Apples";
    console.log("Oranges"); // DEAD CODE! This line will never run.
}



// *****5. Memory & Architecture: The Call Stack

/* JavaScript is single-threaded (can only do one thing at a time). 
 It uses the Call Stack (like a stack of dirty dinner plates) to track where it is.
 When a function is called, its 'plate' drops on top. The CPU only works on the top plate.
 When a function hits 'return', that plate is popped off the stack, exposing the line underneath.
*/

function stepTwo() {
    console.log("Inside Step Two"); // Stack: [stepTwo, stepOne]
}

function stepOne() {
    stepTwo(); // Pauses stepOne, drops stepTwo on top of the stack
    console.log("Back in Step One"); // Stack: [stepOne]
}
stepOne();


// 6. Function Scope (The One-Way Mirror Rule)

/*Variables created INSIDE a function have Local Scope (Block Scope). 
  Code inside the function room can look out the window and read global variables.
  Code outside in the global hallway CANNOT look inside the room; the walls act as mirrors.
*/

let globalGold = 100; // Global Scope (Hallway)

function localShop() {
    let localItem = "Shield"; // Local Scope (Locked inside the room)
    console.log(globalGold);   // SUCCESS! The room can look out and see 100.
}

localShop();
// console.log(localItem); //  CRASH! ReferenceError: localItem is not defined.