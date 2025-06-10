// Load all components when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Load navbar
    fetch('./components/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
        });
        // Load all flashcard sections

});

function flipCard(card) {
    const inner = card.querySelector('.flashcard-inner');
    const front = card.querySelector('.flashcard-front');
    const back = card.querySelector('.flashcard-back');
    
    // Measure both sides before flipping
    const frontHeight = front.scrollHeight;
    const backHeight = back.scrollHeight;
    const maxHeight = Math.max(frontHeight, backHeight);
    
    // Set the height to accommodate the taller side
    inner.style.minHeight = `${maxHeight}px`;


    inner.classList.toggle('flipped');
}

function showCategory(category) {
// Hide all flashcard containers
const containers = document.querySelectorAll('.flashcards-container');
containers.forEach(container => {
    container.classList.remove('active');
    if (container.id === category) {
        container.classList.add('active');
    }
});

// Update active state for navbar items
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('onclick').includes(category)) {
        link.classList.add('active');
    }
});


    containers.forEach(container => {
        container.classList.remove('active');
        if (container.id === category) {
            container.classList.add('active');
        }
    });
}
