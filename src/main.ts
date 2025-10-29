// CMPM 121 Smelly Code Activity
// not so smelly now ;p

// This variable keeps track of the counter
let counter = 0;

// These constants are for button IDs and heading text
const increment_id = "increment",
  counter_id = "counter",
  header = "CMPM 121 Project";

function setup() {
  // Create the HTML for the counter
  document.body.innerHTML = `
    <h1>${header}</h1>
    <p>Counter: <span id="${counter_id}">0</span></p>
    <button id="${increment_id}">Click Me!</button>
    <button id="dec">Decrement</button>
    <button id="reset">Reset</button>
  `;

  // Craeting the buttons
  const incremt_button = document.getElementById(increment_id);
  const decremt_button = document.getElementById("dec");
  const reset = document.getElementById("reset");

  // The counter element to display and update with
  const counter_display = document.getElementById(counter_id);

  // Check if any element is missing, then exit the function
  if (!incremt_button || !decremt_button || !reset || !counter_display) return;

  // Add click event to the increment button
  incremt_button.addEventListener("click", () => {
    counter++;
    counter_display.innerHTML = `${counter}`;

    document_change(counter);
  });

  // Add click event to the decrement button
  decremt_button.addEventListener("click", () => {
    counter--;
    counter_display.innerHTML = `${counter}`;

    document_change(counter);
  });

  // Add click event to the reset button
  reset.addEventListener("click", () => {
    counter = 0;
    counter_display.innerHTML = `${counter}`;

    document_change(counter);
  });
}

function start() {
  // Call setup to initialize the UI
  setup();
}
// Start the counter app
start();

// changes the page
function document_change(counter: number) {
  document.title = "Clicked " + counter;
  document.body.style.backgroundColor = counter % 2 ? "pink" : "lightblue";
}
