// start
document.addEventListener("DOMContentLoaded", () => {

    console.log("Portfolio loaded");
});

// auto update year in footnote
document.addEventListener("DOMContentLoaded", () => {
    const year = new Date().getFullYear();
    const footerText = document.querySelector("footer p");

    if (footerText) {
        footerText.textContent = `© ${year} Portfolio Eva Vandenbroucke.`;
    }
});


// <script src="javascript/main.js"></script>
