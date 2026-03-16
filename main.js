document.addEventListener('DOMContentLoaded', () => {

    // --- Milestone Data ---
    // In a real app this might be loaded via JSON, but we'll hardcode our milestones here
    const milestones = [
        {
            year: "1970",
            title: "The Arcade Era",
            quote: "Coin-operated entertainment dominated the landscape.",
            desc: "Classics like Pong, Pac-Man, and Space Invaders defined a generation of early electronic gaming. Arcades became massive social hubs for teenagers worldwide.",
            tags: ["Coin-Op", "Vector Graphics", "High Scores"],
            image: "../assets/NMAH-2006-11760.png"
        },
        {
            year: "1985",
            title: "8-Bit Consoles",
            quote: "Gaming moved into the living room.",
            desc: "Following the crash of 1983, the 8-bit era brought immersive, narrative-driven experiences, revolutionizing how stories were told through gameplay directly in the home.",
            tags: ["Cartridges", "Platformers", "Home Entertainment"],
            image: "../assets/NMAH-2006-11760.png"
        },
        {
            year: "1994",
            title: "3D Revolution",
            quote: "Polygons replaced sprites. The leap to 3D unlocked vast exploring worlds.",
            desc: "The mid-90s saw massive technological leaps. Early 3D geometry gave birth to genres and franchises that are still beloved and played today across modern platforms.",
            tags: ["CD-ROM", "Polygonal Graphics", "Analog Sticks"],
            image: "../assets/NMAH-2006-11760.png"
        },
        {
            year: "2010",
            title: "Modern Realism",
            quote: "Photorealistic graphics transformed gaming into the largest entertainment industry.",
            desc: "High fidelity, massive multiplayer worlds, real-time ray tracing, and esports have pushed the boundaries of what is visually and socially possible in interactive media.",
            tags: ["4K Resolution", "Online Multiplayer", "Esports"],
            image: "../assets/NMAH-2006-11760.png"
        },
        {
            year: "2015",
            title: "Placeholder Era 1",
            quote: "Placeholder quote for this new gaming era.",
            desc: "Placeholder description detailing this era in gaming history that will be customized later.",
            tags: ["Placeholder", "Tag A", "Tag B"],
            image: "../assets/NMAH-2006-11760.png"
        },
        {
            year: "2018",
            title: "Placeholder Era 2",
            quote: "Placeholder quote for this new gaming era.",
            desc: "Placeholder description detailing this era in gaming history that will be customized later.",
            tags: ["Placeholder", "Tag C", "Tag D"],
            image: "../assets/NMAH-2006-11760.png"
        },
        {
            year: "2020",
            title: "Placeholder Era 3",
            quote: "Placeholder quote for this new gaming era.",
            desc: "Placeholder description detailing this era in gaming history that will be customized later.",
            tags: ["Placeholder", "Tag E", "Tag F"],
            image: "../assets/NMAH-2006-11760.png"
        },
        {
            year: "2022",
            title: "Placeholder Era 4",
            quote: "Placeholder quote for this new gaming era.",
            desc: "Placeholder description detailing this era in gaming history that will be customized later.",
            tags: ["Placeholder", "Tag G", "Tag H"],
            image: "../assets/NMAH-2006-11760.png"
        },
        {
            year: "2024",
            title: "Placeholder Era 5",
            quote: "Placeholder quote for this new gaming era.",
            desc: "Placeholder description detailing this era in gaming history that will be customized later.",
            tags: ["Placeholder", "Tag I", "Tag J"],
            image: "../assets/NMAH-2006-11760.png"
        },
        {
            year: "2026",
            title: "Placeholder Era 6",
            quote: "Placeholder quote for this new gaming era.",
            desc: "Placeholder description detailing this era in gaming history that will be customized later.",
            tags: ["Placeholder", "Tag K", "Tag L"],
            image: "../assets/NMAH-2006-11760.png"
        }
    ];

    let currentIndex = 0;
    let isAnimating = false;

    // DOM Elements
    const timelineNav = document.getElementById('timelineNav');
    const cardWrapper = document.getElementById('cardWrapper');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // --- Initialization ---
    // 1. Build Top Navigation
    milestones.forEach((m, index) => {
        const node = document.createElement('div');
        node.className = 'timeline-node';
        node.style.cursor = 'pointer';
        node.innerHTML = `
            <div class="dot"></div>
            <p>${m.year}</p>
        `;
        node.addEventListener('click', () => {
            if (index !== currentIndex && !isAnimating) {
                goToSlide(index);
            }
        });
        timelineNav.appendChild(node);
    });

    // 2. Build Cards
    milestones.forEach((m, index) => {
        const card = document.createElement('div');
        card.className = `milestone-card ${index === 0 ? 'active' : ''}`;
        card.dataset.index = index;

        let tagsHTML = m.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

        card.innerHTML = `
            <div class="card-layout">
                <div class="card-image-container">
                    <img src="${m.image}" alt="Historical gaming hardware" class="card-image">
                </div>
                <div class="card-content">
                    <div class="card-header">
                        <span class="year">${m.year}</span>
                        <div class="header-line"></div>
                        <span class="index">${index + 1} / ${milestones.length}</span>
                    </div>
                    <h2 class="card-title">${m.title}</h2>
                    <div class="card-quote">"${m.quote}"</div>
                    <p class="card-desc">${m.desc}</p>
                    <div class="tags-container">
                        ${tagsHTML}
                    </div>
                    <button class="cta-button">Learn More</button>
                </div>
            </div>
        `;
        cardWrapper.appendChild(card);
    });

    // Initial state update
    updateNavUI();

    // --- Logic ---

    function goToSlide(newIndex) {
        if (isAnimating) return;
        isAnimating = true;

        const currentCard = cardWrapper.querySelector(`.milestone-card[data-index="${currentIndex}"]`);
        const nextCard = cardWrapper.querySelector(`.milestone-card[data-index="${newIndex}"]`);

        // Update classes for CSS transitions
        currentCard.classList.remove('active');
        nextCard.classList.add('active');

        currentIndex = newIndex;
        updateNavUI();

        // Prevent spam scrolling while transitions play out (matches our CSS transition time)
        setTimeout(() => {
            isAnimating = false;
        }, 600); // 600ms matches the CSS transition time
    }

    function updateNavUI() {
        // Update top nodes
        const nodes = timelineNav.querySelectorAll('.timeline-node');
        nodes.forEach((node, idx) => {
            if (idx === currentIndex) {
                node.classList.add('active');
            } else {
                node.classList.remove('active');
            }
        });

        // Update arrows
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === milestones.length - 1;

        // Update the golden progress string
        requestAnimationFrame(() => {
            if (nodes.length > 0) {
                const firstNode = nodes[0];
                const activeNode = nodes[currentIndex];
                const lastNode = nodes[nodes.length - 1];

                const navRect = timelineNav.getBoundingClientRect();
                const firstRect = firstNode.getBoundingClientRect();
                const activeRect = activeNode.getBoundingClientRect();
                const lastRect = lastNode.getBoundingClientRect();

                // Compute centers relative to the parent nav
                const startLeft = firstRect.left - navRect.left + (firstRect.width / 2);
                const activeLeft = activeRect.left - navRect.left + (activeRect.width / 2);
                const totalWidth = lastRect.left - firstRect.left;

                const bgLine = document.querySelector('.progress-line-bg');
                const progressLine = document.getElementById('progressLine');

                if (bgLine) {
                    bgLine.style.left = startLeft + 'px';
                    bgLine.style.width = totalWidth + 'px';
                }

                if (progressLine) {
                    progressLine.style.left = startLeft + 'px';
                    progressLine.style.width = (activeLeft - startLeft) + 'px';
                }
            }
        });
    }

    // --- Event Listeners ---

    // Clicking Arrows
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) goToSlide(currentIndex - 1);
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < milestones.length - 1) goToSlide(currentIndex + 1);
    });

    // Keyboard Navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            if (currentIndex < milestones.length - 1) goToSlide(currentIndex + 1);
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            if (currentIndex > 0) goToSlide(currentIndex - 1);
        }
    });

    // Scroll Hijacking (Wheel Event)
    let wheelTimeout;
    document.addEventListener('wheel', (e) => {
        // Debounce wheel to prevent flying through all slides
        if (wheelTimeout) return;

        if (e.deltaY > 0) {
            // Scroll down
            if (currentIndex < milestones.length - 1) {
                goToSlide(currentIndex + 1);
            }
        } else if (e.deltaY < 0) {
            // Scroll up
            if (currentIndex > 0) {
                goToSlide(currentIndex - 1);
            }
        }

        wheelTimeout = setTimeout(() => {
            wheelTimeout = null;
        }, 800); // Cooldown between scrolls
    }, { passive: false }); // Making it not passive might be required to event.preventDefault() if needed, but we used overflow: hidden on body

});
