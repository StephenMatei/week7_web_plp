document.addEventListener("DOMContentLoaded", function () {
    let lightModeBtn = document.getElementById("lightMode");
    let darkModeBtn = document.getElementById("darkMode");
    let animateBtn = document.getElementById("animateBtn");
    let animatedBox = document.getElementById("animatedBox");

    // 🌟 Function to apply theme
    function applyTheme(theme) {
        if (theme === "dark") {
            document.body.style.backgroundColor = "#333";
            document.body.style.color = "white";
        } else {
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
        }
        localStorage.setItem("theme", theme);
    }

    // 🌟 Load saved theme from localStorage
    let savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        applyTheme(savedTheme);
    }

    // 🌟 Event Listeners for Theme Buttons
    lightModeBtn.addEventListener("click", function () {
        applyTheme("light");
    });

    darkModeBtn.addEventListener("click", function () {
        applyTheme("dark");
    });

    // 🌟 Trigger Animation on Button Click
    animateBtn.addEventListener("click", function () {
        animatedBox.style.display = "block";
        animatedBox.classList.add("bounce");

        // Remove animation class after animation ends
        setTimeout(() => {
            animatedBox.classList.remove("bounce");
        }, 1000);
    });
});
