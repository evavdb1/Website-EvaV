// runs client-side - they just click
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".memes-galery img");

    images.forEach(img => {
        img.addEventListener("click", () => {
            img.classList.toggle("zoom");
        });
    });
});

// <script src="javascript/gallery.js"></script> --> interlude.html
