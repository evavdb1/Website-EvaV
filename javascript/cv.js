function toggleDetails(id) {
    const el = document.getElementById(id);
    if (!el) return;

    el.style.display = (el.style.display === "none") ? "block" : "none";
}

// <script src="javascript/cv.js"></script>
