
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

// *****2. The for Loop (The Counting Machine)

// Best Used For: When you know EXACTLY how many times you want the code to repeat.
// It packs the Initialization, Condition, and Control Step all onto one single line.

// Structure: for (initialization; condition; control_step)
for (let i = 0; i < 3; i++) {
    console.log(`Looping turn number: ${i}`);
}

/* Memory breakdown of the 'for' loop header:
 1. let i = 0;   -> Creates a counter variable (i stands for index/iterator). Runs ONCE at the start.
 2. i < 3;       -> The condition checked BEFORE every single turn.
 3. i++          -> The control step executed AFTER the code block runs, adding 1 to our counter.
*/


// this code contains a very common cs bug called an Off-By-One Error.
// it will print 4 times - first 3 would be array's value and fourth last one is undefined.
let levels = ["Forest", "Desert", "Ice World"];


for (let i = 0; i <= levels.length; i++) {
    console.log(levels[i]);
}

/* the final index num is 2 cause in array index num start with 0, so it's 0, 1, 2.
  and the total length of array is 3 okay!
  the exact reason why js prints that fourth line. it comes down to the subtle difference between < (the less than operator) and <= (the less than or equal to operator).
  turn 1 (i = 0): the computer checks: is 0 <=3 ? yes! true
  turn 1 (i = 1): the computer checks: is 1 <=3 ? yes! true
  turn 1 (i = 2): the computer checks: is 2 <=3 ? yes! true
  turn 1 (i = 3): the computer checks: is 3 <=3 ? yes! true
  because 3 is equal to 3, the loop continues. it steps inside the curly braces and tries to execute console.log(levels[3]).

  why it print undefined ~ inside your comp' RAM, the array only allocated space for indices 0, 1, and 2.
  when computer asks to see index 3, it is looking into a locker room slot that hasn't been configured or filled with anything.
  it throw out undefined. cause a variable box that exists but contains nothing it will return "undefined".

  to fix this error and make the loop run exactly 3 times, we always use < instead of <=.

*/

// ***** 2. The for Loop (The Counting Machine)

// Best Used For: When you know EXACTLY how many times you want the code to repeat.
// It packs the Initialization, Condition, and Control Step all onto one single line.

// Structure: for (initialization; condition; control_step)
for (let i = 0; i < 3; i++) {
    console.log(`Looping turn number: ${i}`);
}

// Memory breakdown of the 'for' loop header:
// 1. let i = 0;   -> Creates a counter variable (i stands for index/iterator). Runs ONCE at the start.
// 2. i < 3;       -> The condition checked BEFORE every single turn.
// 3. i++          -> The control step executed AFTER the code block runs, adding 1 to our counter.
