document.addEventListener("DOMContentLoaded", function() {
    // Select all sections
    const sections = document.querySelectorAll(".section");

    // Create Intersection Observer
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    // Optional: Stop observing after animation triggers
                    // observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1 // Trigger when 10% of the section is visible
        }
    );

    // Observe each section
    sections.forEach((section) => {
        observer.observe(section);
    });
});