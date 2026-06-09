// ****THE DOCUMENT OBJECT MODEL (DOM): Connecting Logic to Layout


/* In Web Development, the DOM is the ultimate bridge between passive layout and interactive logic.
 1. HTML provides the structural skeleton.
 2. CSS provides the visual layout styles.
 3. JavaScript treats the entire webpage layout as a massive object container to manipulate.
*/


// 1. What is the DOM? (The Architectural Reality)

/* DOM stands for Document Object Model.
 When a browser opens an HTML page, it builds a running digital layout inside the system RAM.
 The browser translates every individual HTML tag (<h1>, <button>, <p>) into a standard 
 JavaScript Object Node container [INDEX].
 Because tags are now objects, we can use Dot Notation to modify their properties on the fly.

 The Root Window & Document Objects:
 window   -> The highest global object representing the physical browser tab itself.
 document -> A nested object folder inside window representing the root web page container.
*/

// 2. Targeting Nodes (The Search Claws)

// Before you can mutate a webpage element, you must fetch its object reference from the document container.
// Modern JS relies on document.querySelector(), which uses standard CSS selectors to search the DOM tree.

// Rules of Query Selection:
// Tag Selector:   Grabs the first instance of that tag name on the page.
// Class Selector: Requires a dot (.) prefix. Targets based on CSS class styling hooks .
// ID Selector:    Requires a hashtag (#) prefix. Targets unique element identifier badges.

/* Imagine this HTML fragment exists on the page:
   <h1 id="main-title">Welcome</h1>
   <p class="txt-content">Initial data paragraph.</p>
   <button>Submit</button>
*/

// Fetching object reference keys and packing them into local variable boxes:
let pageHeading = document.querySelector("#main-title");    // ✅ Precision Targeting via unique ID.
let pageParagraph = document.querySelector(".txt-content"); // ✅ Class targeting.
let nativeButton = document.querySelector("button");       // ✅ Simple tag targeting.