const sections = document.querySelectorAll(
    ".about, .projects, .services, .investment, .contact"
);

const observer = new IntersectionObserver((entries, observer) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");
            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.2
});

sections.forEach((section) => {
    observer.observe(section);
});