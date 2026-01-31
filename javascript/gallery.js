// runs client-side - they just click
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".memes-galery img");

    images.forEach(img => {
        img.addEventListener("click", () => {
            img.classList.toggle("zoom");
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('memes')) {
        document.body.classList.add('memes-active');
    }
});

// Select all meme images
const memes = document.querySelectorAll(".memes-gallery img");

// Create modal elements
const modal = document.createElement("div");
modal.id = "meme-modal";

const modalImg = document.createElement("img");
modal.appendChild(modalImg);

const closeBtn = document.createElement("span");
closeBtn.id = "close-modal";
closeBtn.textContent = "×";
modal.appendChild(closeBtn);

document.body.appendChild(modal);

// Assign random rotation to each meme
memes.forEach(img => {
    img.style.setProperty("--r", Math.random());

    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
    });
});

// Close modal when clicking the X
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal when clicking outside the image
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});



// <script src="javascript/gallery.js"></script> --> interlude.html
