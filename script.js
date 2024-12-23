document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress-bar");

    if (progressBars.length > 0) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const bar = entry.target;
                    const targetWidth = bar.dataset.targetWidth;

                    if (entry.isIntersecting) {
                        // Animate the progress bar to the target width
                        bar.style.width = targetWidth;
                    } else {
                        // Reset the width when not in view
                        bar.style.width = "0";
                    }
                });
            },
            {
                threshold: 0.5, // Trigger animation when 50% of the element is visible
            }
        );

        progressBars.forEach((bar) => observer.observe(bar));
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth",
                });
            }
        });
    });
});
