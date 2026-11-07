

// =================================
// DIWALI GLOW — INTERACTIONS
// =================================

// Find the button in our HTML
const lightButton = document.getElementById("lightButton");

// Find the message in our HTML
const message = document.getElementById("message");

// Find the flame in our HTML
const flame = document.querySelector(".flame");

// Track whether the diya is lit
let isLit = false;


// Listen for button clicks
lightButton.addEventListener("click", function () {

    // Change the diya's state
    isLit = !isLit;

    if (isLit) {

        // Diya is ON
        flame.classList.add("lit");

        message.textContent = "May your life shine with happiness and light.";

        lightButton.textContent = "Extinguish Diya";

    } else {

        // Diya is OFF
        flame.classList.remove("lit");

        message.textContent = "Let the light begin.";

        lightButton.textContent = "Light the Diya";

    }

});
