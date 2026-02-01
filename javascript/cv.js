function toggleDetails(id) {
    const el = document.getElementById(id);
    if (!el) return;

    el.style.display = (el.style.display === "none") ? "block" : "none";
}


document.querySelectorAll('.experience li').forEach(li => {
    li.style.setProperty('--offset--r', Math.random());
});


document.addEventListener("click", function(e) {
    if (e.target.classList.contains("edubutton") && e.target.tagName === "BUTTON") {
        const msg = e.target.getAttribute("data-message");
        alert(msg);
    }
});


// <script src="javascript/cv.js"></script>
