// animations, badges,...
document.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelectorAll(".project");

    projects.forEach(project => {
        project.addEventListener("mouseenter", () => {
            project.classList.add("hover");
        });

        project.addEventListener("mouseleave", () => {
            project.classList.remove("hover");
        });
    });
});

// <script src="javascript/projects.js"></script> --> projects.html
