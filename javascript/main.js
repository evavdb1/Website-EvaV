// start
document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio loaded");

    // terminal homepage
    const phrases = [
        "clean code",
        "elegant logic",
        "secure solutions",
        "creative thinking",
        "occasional fun",
        "... Crafted with Care"
    ];

    let i = 0;
    let char = 0;
    let deleting = false;
    const speed = 150;
    const pause = 600;
    const el = document.getElementById("terminal-text");

    if (el) {
        function typeLoop() {
            const current = phrases[i];

            if (!deleting) {
                // typing forward
                el.textContent = current.slice(0, char++);
                if (char > current.length) {
                    deleting = true;
                    setTimeout(typeLoop, pause);
                    return;
                }
            } else {
                // deleting backward
                el.textContent = current.slice(0, char--);

                // when fully deleted
                if (char < 0) {
                    deleting = false;
                    char = 0;               
                    i = (i + 1) % phrases.length;
                    el.textContent = "";    
                    setTimeout(typeLoop, speed);
                    return;
                }
            }
            setTimeout(typeLoop, speed);
        }
        typeLoop();
    }

    // auto update year in footnote
    const footerText = document.querySelector("footer p");
    if (footerText) {
        const year = new Date().getFullYear();
        footerText.textContent = `© ${year} Website Eva Vandenbroucke.`;
    }
    
    // easter egg
    const logo = document.querySelector('footer .logo');
    const overlay = document.getElementById('meme-overlay');

    if (!logo || !overlay) return;

    logo.addEventListener('click', () => {
        overlay.style.display = 'flex';
    });

    overlay.addEventListener('click', () => {
        overlay.style.display = 'none';
    });
});

// <script src="javascript/main.js"></script>
