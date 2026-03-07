document.addEventListener('DOMContentLoaded', () => {
    // Select all our milstones
    const observerItems = document.querySelectorAll('.milestone');

    // Setup an IntersectionObserver to watch for elements scrolling into view
    const observerOptions = {
        root: null,         // Use viewport
        rootMargin: '0px',
        threshold: 0.25     // Trigger when 25% of the item is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove 'hidden' class to trigger CSS transition
                entry.target.classList.remove('hidden');
                // Add an 'in-view' class for other potential styling (like lighting up the dot)
                entry.target.classList.add('in-view');
                
                // Once revealed, we don't need to observe it anymore to keep performance high
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Start observing all milestone elements
    observerItems.forEach(item => {
        observer.observe(item);
    });
});
