document.addEventListener('DOMContentLoaded', () => {

    // --- Milestone Data ---
    // In a real app this might be loaded via JSON, but we'll hardcode our milestones here
    const milestones = [
        {
            year: "1972",
            title: "Magnavox Odyssey",
            quote: "“I always wanted to create something that had never been done before.” — Ralph H Baer",
            desc: "The Magnavox Odyssey was the first home video game console. Built on analog logic without a CPU or sound, it used screen overlays for visuals. By introducing game cards and controllers, it proved the viability of the home gaming market",
            tags: ["World First Console", "Single-Channel Graphics"],
            image: "../assets/NMAH-2006-11760.png"
        },
        {
            year: "1977",
            title: "Atari 2600",
            quote: "\"The day you launch a product, it's obsolete\" — Nolan Bushnell",
            desc: "The Atari 2600 shifted the industry to microprocessors and ROM cartridges, turning games into standalone commodities. By bringing arcade hits home and introducing its iconic one-button joystick, it made video games a mainstream phenomenon",
            tags: ["Cartridges", "Microprocessor", "Joystick"],
            image: "../assets/NMAH-2006-11760.png"
        },
        {
            year: "1985",
            title: "NES",
            quote: "“The Atari collapsed because they gave too much freedom to third-party developers and the market was swamped with rubbish games” — Hiroshi Yamauchi",
            desc: "The NES saved the industry after the 1983 crash by restoring trust through its \"Seal of Quality\" and strict licensing. Its 8-bit hardware enabled smooth scrolling and complex physics, while its D-pad permanently replaced the joystick as the ergonomic standard",
            tags: ["8Bit Revolution", "Super Mari", "Industry Recovery"],
            image: "../assets/NMAH-2006-11760.png"
        },
        {
            year: "1989",
            title: "Game Boy",
            quote: "\"Lateral thinking with withered technology\" — Gunpei Yokoi",
            desc: "The Game Boy became the first mass-market handheld by prioritizing battery life (30 hours) and affordability over raw power. Using the \"lateral thinking with withered technology\" philosophy, it paired a monochrome screen with Tetris and introduced social gaming via the Link Cable",
            tags: ["Tetris", "Portability", "Long Battery"],
            image: "../assets/NMAH-2006-11760.png"
        },
        {
            year: "1994",
            title: "Sony PlayStation",
            quote: "“The name of the game is not market share, it's how fast we (Sony) can grow the industry” — Ken Kutaragi",
            desc: "The PlayStation revolutionized gaming by replacing cartridges with 650 MB CD-ROMs, enabling full-motion video, high-quality audio, and expansive 3D worlds. Its 32-bit architecture prioritized polygon processing, turning video games into a cinematic, mainstream cultural staple",
            tags: ["CDROM", "3D Graphics", "DualShock", "FPS and JRPG"],
            image: "../assets/NMAH-2006-11760.png"
        },
        {
            year: "2000",
            title: "PlayStation 2",
            quote: "\"We’re just going to be forced to educate the Sony Corporation a bit\" — Ken Kutaragi on PS2 ambitions",
            desc: "The PS2 became the best-selling console ever by doubling as an affordable DVD player and home media hub. Its \"Emotion Engine\" handled complex physics for realistic 3D, while its pioneering backward compatibility allowed players to use their original PlayStation library",
            tags: ["DVD", "Blu-ray", "Online Games", "Emotion Engines"],
            image: "../assets/NMAH-2006-11760.png"
        },
        {
            year: "2001",
            title: "Xbox",
            quote: "\"Xbox is everything The Rock is: cutting-edge, powerful, and exciting\" — Bill Gates at a presentation with The Rock",
            desc: "Microsoft’s debut utilized a PC-like architecture (Intel/Nvidia), making it developer-friendly. It introduced a built-in hard drive, eliminating memory cards, and set the modern standard for online gaming through its integrated Ethernet port and the launch of Xbox Live",
            tags: ["PC Architecture", "HDD", "Xbox Live", "Halo", "Network Play"],
            image: "../assets/NMAH-2006-11760.png"
        },
        {
            year: "2006",
            title: "Nintendo Wii",
            quote: "\"Video games are meant to be one thing only. Fun. Fun for everyone!\" — Satoru Iwata",
            desc: "Nintendo’s \"Blue Ocean\" strategy bypassed the tech race by targeting non-gamers with the Wii Remote. Its intuitive motion tracking made games accessible through physical gestures, proving that a unique \"fun factor\" and interface could outsell superior graphical power",
            tags: ["MotionControl", "Casual Games", "Family Entertainment", "Wiimote"],
            image: "../assets/NMAH-2006-11760.png"
        },
        {
            year: "2017",
            title: "Nintendo Switch",
            quote: "\"Switch is the first major hybrid console that combines a home and portable system\" — Tatsumi Kimishima",
            desc: "The Nintendo Switch is a unique hybrid console that transitions instantly between a TV dock and handheld mode. Powered by an Nvidia Tegra chip, it features detachable Joy-Con controllers with \"HD Rumble\" haptics.",
            tags: ["Hybrid", "JoyCon", "HD", "Portability", "Zelda"],
            image: "../assets/NMAH-2006-11760.png"
        },
        {
            year: "2020",
            title: "PS5 / Xbox Series X",
            quote: "\"The SSD is really a key for the next generation... it's a game changer\" — Mark Cerny",
            desc: "The ninth generation shifted the focus from polygon counts to data speed, using ultra-fast NVMe SSDs to virtually eliminate loading screens. Supporting 4K at 120 fps and hardware ray tracing",
            tags: ["SSD Revolution", "RayTracing", "4K120FPS", "Quick Resume"],
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
                    <div class="card-quote">${m.quote}</div>
                    <p class="card-desc">${m.desc}</p>
                    <div class="tags-container">
                        ${tagsHTML}
                    </div>
                    <button class="cta-button">Learn More</button>
                </div>
            </div>
        `;
        
        // Add event listener to the Learn More button
        const btn = card.querySelector('.cta-button');
        btn.addEventListener('click', () => {
            window.location.href = `learn-more.html?id=${index}`;
        });

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
