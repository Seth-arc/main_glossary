class GlossarySlideshow {
    constructor(glossaryData) {
        this.data = glossaryData;
        this.terms = Object.keys(glossaryData.glossary);
        this.currentIndex = 0;
        this.init();
    }

    init() {
        this.renderCurrentTerm();
        this.renderNavigation();
        this.renderProgress();
        this.setupKeyboardNavigation();
    }



    renderCurrentTerm() {
        const termName = this.terms[this.currentIndex];
        const termData = this.data.glossary[termName];
        
        const termCard = document.querySelector('.term-card');
        if (!termCard) return;

        // Add fade-out animation
        termCard.style.opacity = '0';
        termCard.style.transform = 'translateY(10px) scale(0.99)';
        
        setTimeout(() => {
            termCard.innerHTML = `
                <div class="term-header">
                    <h2 class="term-name">${termName}</h2>
                    <span class="term-category">${termData.category}</span>
                </div>
                <div class="term-definition">
                    ${termData.definition}
                </div>
                <div class="term-example">
                    ${termData.example}
                </div>
            `;
            
            // Add fade-in animation
            setTimeout(() => {
                termCard.style.opacity = '1';
                termCard.style.transform = 'translateY(0) scale(1)';
            }, 50);
        }, 200);
    }

    renderNavigation() {
        const prevBtn = document.querySelector('.nav-btn.prev');
        const nextBtn = document.querySelector('.nav-btn.next');
        
        if (prevBtn) {
            prevBtn.disabled = this.currentIndex === 0;
            prevBtn.onclick = () => this.previousTerm();
        }
        
        if (nextBtn) {
            nextBtn.disabled = this.currentIndex === this.terms.length - 1;
            nextBtn.onclick = () => this.nextTerm();
        }
    }

    renderProgress() {
        const progressBar = document.querySelector('.progress-bar');
        if (progressBar) {
            const progress = ((this.currentIndex + 1) / this.terms.length) * 100;
            progressBar.style.width = `${progress}%`;
        }
    }



    nextTerm() {
        if (this.currentIndex < this.terms.length - 1) {
            this.currentIndex++;
            this.updateDisplay();
        }
    }

    previousTerm() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateDisplay();
        }
    }

    goToTerm(index) {
        if (index >= 0 && index < this.terms.length) {
            this.currentIndex = index;
            this.updateDisplay();
        }
    }

    updateDisplay() {
        this.renderCurrentTerm();
        this.renderNavigation();
        this.renderProgress();

        
        // Smooth scroll to term card
        const termCard = document.querySelector('.term-card');
        if (termCard) {
            termCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowLeft':
                case 'ArrowUp':
                    e.preventDefault();
                    this.previousTerm();
                    break;
                case 'ArrowRight':
                case 'ArrowDown':
                case ' ':
                    e.preventDefault();
                    this.nextTerm();
                    break;
                case 'Home':
                    e.preventDefault();
                    this.goToTerm(0);
                    break;
                case 'End':
                    e.preventDefault();
                    this.goToTerm(this.terms.length - 1);
                    break;
            }
        });
    }

    // Search functionality
    searchTerms(query) {
        const filteredIndices = this.terms
            .map((term, index) => ({ term, index }))
            .filter(({ term }) => 
                term.toLowerCase().includes(query.toLowerCase()) ||
                this.data.glossary[term].definition.toLowerCase().includes(query.toLowerCase()) ||
                this.data.glossary[term].category.toLowerCase().includes(query.toLowerCase())
            )
            .map(({ index }) => index);
        
        return filteredIndices;
    }
}

// Initialize glossary when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // The glossary data will be loaded by each individual module page
    if (window.glossaryData) {
        window.glossary = new GlossarySlideshow(window.glossaryData);
    }
});

// Export for use in module files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GlossarySlideshow;
}
