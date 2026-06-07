
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