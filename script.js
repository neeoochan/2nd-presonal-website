 // Profile picture
 document.getElementById("profile-picture").innerHTML = `
 <img src="https://assets.onecompiler.app/42s3tmnmk/42s3tfpjr/1000009462.jpg" alt="Profile Picture">
`;

// About me section
document.getElementById("about-me").innerHTML = `
 <p>Hello! My Name is Nhyoochan Rajkarnikar.</p>
 <p>This is my practice for making a website and in web development.</p>
 <p>I have used ChatGPT for this but I am here to learn, and this is my practice website.</p>
`;

// Side menu toggle function
function toggleMenu() {
 const sideMenu = document.getElementById("sideMenu");
 sideMenu.classList.toggle("active"); // Toggle the active class
}

// Dark mode toggle function
function toggleDarkMode() {
 document.body.classList.toggle("dark-mode");
 const toggleButton = document.getElementById("toggleButton");
 toggleButton.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
}