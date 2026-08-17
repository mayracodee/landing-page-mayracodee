const projectsGrid = document.querySelector(".projects-grid");

let isDragging = false;
let startX;
let initialScrollLeft;

projectsGrid.addEventListener("mousedown", (event) => {
    isDragging = true;

    startX = event.pageX - projectsGrid.offsetLeft;
    initialScrollLeft = projectsGrid.scrollLeft;

    projectsGrid.classList.add("is-dragging");
});

projectsGrid.addEventListener("mouseup", () => {
    isDragging = false;

    projectsGrid.classList.remove("is-dragging");
});

projectsGrid.addEventListener("mouseleave", () => {
    isDragging = false;

    projectsGrid.classList.remove("is-dragging");
});

projectsGrid.addEventListener("mousemove", (event) => {
    if (!isDragging) return;

    event.preventDefault();

    const currentX = event.pageX - projectsGrid.offsetLeft;
    const distance = currentX - startX;

    projectsGrid.scrollLeft = initialScrollLeft - distance;
});