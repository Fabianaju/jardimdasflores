function toggleMenu() {
    document.querySelector('.dropdown').classList.toggle('active');
}

// Adicionando animação para typewriter
document.addEventListener('DOMContentLoaded', () => {
    const typewriterText = document.querySelector('.typewriter-text');
    const phrases = ['flores', 'arranjos florais', 'presentes especiais'];
    let i = 0;
    
    function type() {
        let text = phrases[i];
        let j = 0;
        typewriterText.textContent = '';
        
        function typing() {
            if (j < text.length) {
                typewriterText.textContent += text.charAt(j);
                j++;
                setTimeout(typing, 100);
            } else {
                setTimeout(() => {
                    typewriterText.textContent = '';
                    i = (i + 1) % phrases.length;
                    type();
                }, 2000);
            }
        }
        
        typing();
    }
    
    type();
});
