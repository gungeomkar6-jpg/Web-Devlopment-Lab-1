
// Display current date in the newspaper
const dateElement = document.querySelector(".date");

if (dateElement) {
    const today = new Date();

    dateElement.textContent = today.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
}

// Navigation link click message
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        console.log("You clicked: " + link.textContent);
    });
});

// Welcome message
console.log("Welcome to The Daily News!");
