// Funzione per copiare l'URL della repo
function copyRepoUrl() {
    const repoUrl = document.getElementById('repoUrl').textContent;
    navigator.clipboard.writeText(repoUrl).then(() => {
        // Feedback visivo
        const button = event.target.closest('button');
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i> Copiato!';
        button.style.background = '#28a745';
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = '';
        }, 2000);
    }).catch(err => {
        console.error('Errore nella copia: ', err);
        alert('Errore nella copia. Copia manualmente: ' + repoUrl);
    });
}

// Animazione al caricamento della pagina
document.addEventListener('DOMContentLoaded', () => {
    // Aggiungi animazione alle cards
    const cards = document.querySelectorAll('.about-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Funzione per futuri tweaks (da implementare)
function loadTweaks() {
    // Qui caricherà i tweak dinamicamente in futuro
    console.log('Caricamento tweaks...');
}

// Inizializzazione
loadTweaks();
