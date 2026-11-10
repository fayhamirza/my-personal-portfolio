/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

// Show popup on load
window.onload = () => {
  document.getElementById('popup').classList.add('active');
  document.body.classList.add('popup-active');
};

// Handle name submission
function submitName() {
  const name = document.getElementById('usernameInput').value.trim();
  if (name) {
    // Set welcome message
    const welcomeDiv = document.getElementById('welcomeMessage');
    welcomeDiv.textContent = `Welcome ${name}!`;

    // Hide popup
    document.getElementById('popup').classList.remove('active');
    document.body.classList.remove('popup-active');
  } else {
    alert('Please enter your name.');
  }
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // prevent the form from submitting

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("formMessage");

    // Reset message styling
    message.classList.remove('success');
    message.classList.remove('error');

    // Validation
    if (name === "" || email === "") {
        message.textContent = "Please fill in both name and email.";
        return;
    }

    if (!email.includes("@") || email.startsWith("@") || email.endsWith("@")) {
        message.textContent = "Please enter a valid email address.";
        return;
    }

    // If valid
    message.classList.add('success');
    message.textContent = "Thank you," + ` ${name}` + "! Your information has been submitted.";

    // clear form fields
    document.getElementById("contactForm").reset();
});

document.addEventListener("DOMContentLoaded", function () {
    const lightIcon = document.getElementById("lightIcon");
    const darkIcon = document.getElementById("darkIcon");

    // Toggle function
    function toggleDarkMode() {
        document.body.classList.toggle("dark-mode");

        // Show the correct icon
        if (document.body.classList.contains("dark-mode")) {
            lightIcon.style.display = "none";
            darkIcon.style.display = "inline";
        } else {
            lightIcon.style.display = "inline";
            darkIcon.style.display = "none";
        }
    }

    // Click either icon to toggle
    lightIcon.addEventListener("click", toggleDarkMode);
    darkIcon.addEventListener("click", toggleDarkMode);

    // Check for saved mode
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        lightIcon.style.display = "none";
        darkIcon.style.display = "inline";
    }

    // Save mode on change
    document.body.addEventListener("classChange", () => {
        const mode = document.body.classList.contains("dark-mode") ? "dark" : "light";
        localStorage.setItem("theme", mode);
    });

    // Listen for class changes and trigger save
    const observer = new MutationObserver(() => {
        const event = new Event("classChange");
        document.body.dispatchEvent(event);
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
});


const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show/hide the button on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

// Smooth scroll to top on click
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

