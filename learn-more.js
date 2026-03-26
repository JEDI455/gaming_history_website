document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const container = document.getElementById('lm-dynamic-content');
    
    if (id !== null && typeof consolesData !== 'undefined' && consolesData[id]) {
        const d = consolesData[id];
        
        let tagsHtml = d.tags.map(t => `<span class="tag">${t}</span>`).join('');
        
        let specsHtml = d.specs.map(spec => `
            <div class="lm-spec-card">
                <div class="lm-spec-title">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-yellow)" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect></svg>
                    ${spec[0]}
                </div>
                <div class="lm-spec-value">${spec[1]}</div>
            </div>`).join('');

        let gamesHtml = d.games.map(g => `
            <div class="lm-game-card">
                <h3 class="lm-game-title">${g[0]}</h3>
                <p class="lm-game-desc">${g[1]}</p>
            </div>`).join('');

        container.innerHTML = `
            <div class="lm-header-section">
                <div class="lm-year-wrap">
                    <span class="lm-year">${d.year}</span>
                    <div class="lm-year-line"></div>
                </div>
                <h1 class="lm-title">${d.title}</h1>
                <p class="lm-quote">${d.quote}</p>
                <div class="tags-container lm-tags">
                    ${tagsHtml}
                </div>
            </div>

            <div class="lm-specs-grid">
                ${specsHtml}
            </div>

            <div class="lm-section">
                <h2 class="lm-section-title"><span>Tech Specs</span><div class="lm-section-line"></div></h2>
                <div class="lm-section-content">
                    <p>${d.overview}</p>
                </div>
            </div>

            <div class="lm-section">
                <h2 class="lm-section-title"><span>Key Games</span><div class="lm-section-line"></div></h2>
                <div class="lm-games-grid">
                    ${gamesHtml}
                </div>
            </div>

            <div class="lm-section">
                <h2 class="lm-section-title"><span>Impact and Context</span><div class="lm-section-line"></div></h2>
                <div class="lm-section-content">
                    <p>${d.impact}</p>
                </div>
            </div>
        `;
    } else {
        container.innerHTML = `<h1 class="lm-title">Console not found...</h1>`;
    }
});
