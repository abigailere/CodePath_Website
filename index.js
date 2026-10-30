
/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button
let themeButton = document.getElementById("theme-button");
// Step 2: Write the callback function
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    // Write your code here
    // This section will run whenever the button is clicked
}

// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function
themeButton.addEventListener("click", toggleDarkMode);

/*** Form Handling ***
  
  Purpose:
  - When the user submits the RSVP form, the name and state they 
    entered should be added to the list of participants.

  When To Modify:
  - [ ] Project 6 (REQUIRED FEATURE)
  - [ ] Project 6 (STRETCH FEATURE) 
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: Add your query for the submit RSVP button here
const rsvpButton = document.getElementById("rsvp-button");

const addParticipant = (event) => {
    // Step 2: Write your code to manipulate the DOM here


    // Get the values the user entered
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const company = document.getElementById("company").value;

    // Create a new <p> element and set its text
    const newParticipant = document.createElement("p");
    newParticipant.textContent = `🎟️ ${fname} ${lname} (${email}) from ${company} has RSVP'd.`;

    // Find the rsvp-participants div and add the new <p> to it
    const participantsDiv = document.querySelector(".rsvp-participants");
    participantsDiv.appendChild(newParticipant);
}



/*** Form Validation ***
  
  Purpose:
  - Prevents invalid form submissions from being added to the list of participants.

  When To Modify:
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 7 (STRETCH FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: We actually don't need to select the form button again -- we already did it in the RSVP code above.

// Step 2: Write the callback function
const validateForm = () => {

  let containsErrors = false;

  const rsvpInputs = document.getElementById("rsvp-form").elements;
  // Loop through all inputs
  for (let i = 0; i<rsvpInputs.length; i++) {
    if (rsvpInputs[i].value.length < 2) {
      containsErrors = true;
      rsvpInputs[i].classList.add("error");
    } else {
      rsvpInputs[i].classList.remove("error");
    }
  }

  // Inside loop, validate the value of each input
  if (containsErrors == false) {
    addParticipant();
    for (let i = 0; i<rsvpInputs.length; i++) {
      rsvpInputs[i].value = "";   
    }   
    }

}

  // TODO: If no errors, call addParticipant() and clear fields


// Step 3: Replace the form button's event listener with a new one that calls validateForm()
rsvpButton.addEventListener("click", validateForm);

/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/