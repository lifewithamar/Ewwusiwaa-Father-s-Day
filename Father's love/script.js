document.addEventListener("DOMContentLoaded", () => {
    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.12 // Trigger when 12% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in-element');
    fadeElements.forEach(el => {
        // Skip hero content since it has its own load-in animation
        if (!el.classList.contains('hero-content')) {
            observer.observe(el);
        } else {
            // Immediately show hero content with its CSS animation
            el.classList.add('visible');
        }
    });
});
