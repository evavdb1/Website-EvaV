// runs client-side - they just click
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".memes-galery img");

    images.forEach(img => {
        img.addEventListener("click", () => {
            img.classList.toggle("zoom");
        });
    });
});

// In gallery.js
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('memes')) {
        document.body.classList.add('memes-active');
    }
});


// <script src="javascript/gallery.js"></script> --> interlude.html
