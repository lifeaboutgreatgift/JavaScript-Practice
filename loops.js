
// ***LOOPS: The Repetition Machines****


/* In programming, loops are used to automate repetitive tasks.
 Instead of copy-pasting a line of code 100 times, you write it once inside a loop.
 The code inside a loop repeats continuously based on a conditional statement. 
*/


// *****1. The while Loop (The Roller Coaster)***

// Best Used For: When you don't know exactly how many turns the loop needs beforehand.
// It keeps running as long as its condition evaluates to true.

let ticketCount = 3;

while (ticketCount > 0) {
    console.log("Coaster runs! Ticket used.");
    
    ticketCount--; // ⚠️ CRUCIAL CONTROL STEP: Decrements the count by 1 on every turn.
                   // Without this step, the condition stays true forever, creating an INFINITE LOOP!
}

console.log("Out of tickets. Ride stops."); 
/* Execution Order:
 Turn 1: Is 3 > 0? Yes (true) -> Prints, tickets becomes 2.
 Turn 2: Is 2 > 0? Yes (true) -> Prints, tickets becomes 1.
 Turn 3: Is 1 > 0? Yes (true) -> Prints, tickets becomes 0.
 Turn 4: Is 0 > 0? No (false) -> The loop breaks instantly, skipping the curly braces. 
*/


let energy = 5;

while (energy > 0) {
    console.log("Character is running!");
    energy--;
}

let levels = ["Forest", "Desert", "Ice World"];

for (let i = 0; i <= levels.length; i++) {
    console.log(levels[i]);
}