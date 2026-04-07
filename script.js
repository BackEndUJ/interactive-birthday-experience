// Generate placeholder photos with beautiful colors
const photoGrid = document.getElementById('photoGrid');
const colors = [
    'linear-gradient(135deg, #FFB4A2 0%, #FFCAD4 100%)',
    'linear-gradient(135deg, #FFD4B8 0%, #F4D58D 100%)',
    'linear-gradient(135deg, #FFCAD4 0%, #E8C4E0 100%)',
    'linear-gradient(135deg, #F4D58D 0%, #FFB4A2 100%)',
    'linear-gradient(135deg, #E8C4E0 0%, #FFD4B8 100%)',
    'linear-gradient(135deg, #FFCAD4 0%, #FFB4A2 100%)',
    'linear-gradient(135deg, #FFB4A2 0%, #F4D58D 100%)',
    'linear-gradient(135deg, #FFD4B8 0%, #FFCAD4 100%)',
];

// Create 18 placeholder photo items (fits the new grid)
for (let i = 0; i < 23; i++) {
    const photoItem = document.createElement('div');
    photoItem.className = 'photo-item';
    
    const gradient = colors[i % colors.length];
    photoItem.innerHTML = `<div class="photo-content" style="background: ${gradient}; display: flex; align-items: center; justify-content: center; color: white; font-size: 14px; font-weight: 500; opacity: 0.8;">Photo ${i + 1}</div>`;
    
    photoGrid.appendChild(photoItem);
}

// Generate floating hearts for opening page
const floatingHearts = document.getElementById('floatingHearts');
const heartEmojis = ['💖', '💕', '💗', '💓', '💝', '🌸', '🌺', '🦋', '✨', '💫'];

for (let i = 0; i < 15; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 4 + 6) + 's';
    heart.style.animationDelay = Math.random() * 5 + 's';
    floatingHearts.appendChild(heart);
}

// Generate floating hearts for welcome page
const welcomeHearts = document.getElementById('welcomeHearts');
for (let i = 0; i < 12; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 4 + 6) + 's';
    heart.style.animationDelay = Math.random() * 5 + 's';
    welcomeHearts.appendChild(heart);
}

// Elegant page transition
const startButton = document.getElementById('startButton');
const photoMosaicPage = document.getElementById('photoMosaicPage');
const pageTransition = document.getElementById('pageTransition');
const welcomePage = document.getElementById('welcomePage');

startButton.addEventListener('click', function() {
    // Create floating hearts
    const heartEmojis = ['💕', '💖', '💗', '💓', '💝'];
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.className = 'transition-heart';
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = (Math.random() * 0.5) + 's';
        pageTransition.appendChild(heart);
    }

    // Show elegant transition
    pageTransition.classList.add('active');

    // After 1.5 seconds, switch pages
    setTimeout(() => {
        photoMosaicPage.classList.remove('active');
        welcomePage.classList.add('active');
        
        // Fade out transition
        setTimeout(() => {
            pageTransition.classList.remove('active');
            // Clean up hearts
            setTimeout(() => {
                pageTransition.innerHTML = '';
            }, 600);
        }, 300);
    }, 1500);
});

// Continue button (placeholder for now)
document.getElementById('continueButton').addEventListener('click', function() {
    welcomePage.classList.remove('active');
    document.getElementById('cakeGamePage').classList.add('active');
});

// === CAKE GAME LOGIC ===
const blowButton = document.getElementById('blowButton');
const birthdayCake = document.getElementById('birthdayCake');
const blowCharacter = document.getElementById('blowCharacter');
const windEffect = document.getElementById('windEffect');
const successMessage = document.getElementById('successMessage');
const gameContainer = document.querySelector('.game-container');

let blowCount = 0;
const dodgeAnimations = ['dodge-left', 'dodge-right', 'dodge-up'];

// Generate floating hearts for cake page
const cakeHearts = document.getElementById('cakeHearts');
for (let i = 0; i < 12; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 4 + 6) + 's';
    heart.style.animationDelay = Math.random() * 5 + 's';
    cakeHearts.appendChild(heart);
}

blowButton.addEventListener('click', function() {
    blowCount++;

    // Trigger wind effect - blows from character to cake
    windEffect.classList.add('active');
    setTimeout(() => windEffect.classList.remove('active'), 1000);

    if (blowCount === 1) {
        // First blow - cake dodges left, character surprised
        birthdayCake.classList.remove(...dodgeAnimations);
        setTimeout(() => birthdayCake.classList.add('dodge-left'), 10);
        blowCharacter.className = 'blow-character surprised';
        
    } else if (blowCount === 2) {
        // Second blow - cake dodges right, character annoyed
        birthdayCake.classList.remove(...dodgeAnimations);
        setTimeout(() => birthdayCake.classList.add('dodge-right'), 10);
        blowCharacter.className = 'blow-character annoyed';
        
    } else if (blowCount === 3) {
        // Third blow - cake dodges up with spin, character ANGRY, button changes
        birthdayCake.classList.remove(...dodgeAnimations);
        setTimeout(() => birthdayCake.classList.add('dodge-up'), 10);
        blowCharacter.className = 'blow-character angry';
        blowButton.textContent = 'BLOW (LAST TIME 🥹)';
        
    } else if (blowCount === 4) {
        // Final blow - SUCCESS!
        birthdayCake.classList.remove(...dodgeAnimations);
        birthdayCake.classList.add('blown-out');
        blowCharacter.className = 'blow-character happy';
        
        // Blow out candles with smoke
        const flames = document.querySelectorAll('.flame');
        const smokes = document.querySelectorAll('.smoke');
        flames.forEach((flame, index) => {
            setTimeout(() => {
                flame.classList.add('out');
                smokes[index].classList.add('show');
            }, index * 150);
        });

        // Hide character, cake and button
        setTimeout(() => {
            blowCharacter.classList.add('hide');
            birthdayCake.style.opacity = '0';
            birthdayCake.style.transform = 'translate(-50%, -50%) scale(0.8)';
            blowButton.style.opacity = '0';
            blowButton.style.pointerEvents = 'none';
        }, 800);

        // Show success message
        setTimeout(() => {
            successMessage.classList.add('show');
        }, 1400);

        // Create confetti explosion
        setTimeout(() => createConfetti(), 1000);
    }
});

function createConfetti() {
    const colors = ['#FFB4A2', '#FFCAD4', '#F4D58D', '#E8C4E0', '#FFD4B8'];
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '50%';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 0.3 + 's';
        gameContainer.appendChild(confetti);
        
        setTimeout(() => confetti.classList.add('burst'), 10);
        
        // Remove after animation
        setTimeout(() => confetti.remove(), 3000);
    }
}

// To letter button (placeholder)
document.getElementById('toLetterButton').addEventListener('click', function() {
    document.getElementById('cakeGamePage').classList.remove('active');
    document.getElementById('letterPage').classList.add('active');
});

// Generate floating hearts for letter page
const letterHearts = document.getElementById('letterHearts');
for (let i = 0; i < 12; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 4 + 6) + 's';
    heart.style.animationDelay = Math.random() * 5 + 's';
    letterHearts.appendChild(heart);
}

// To gallery button (placeholder for now)
document.getElementById('toGalleryButton').addEventListener('click', function() {
    document.getElementById('letterPage').classList.remove('active');
    document.getElementById('memoryBookPage').classList.add('active');
});

// Generate floating hearts for memory book page
const bookHearts = document.getElementById('bookHearts');
for (let i = 0; i < 12; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 4 + 6) + 's';
    heart.style.animationDelay = Math.random() * 5 + 's';
    bookHearts.appendChild(heart);
}

// === MEMORY BOOK LOGIC ===
const bookClosed = document.getElementById('bookClosed');
const bookContainer = document.getElementById('bookContainer');
const closeBookBtn = document.getElementById('closeBookBtn');
const prevPageBtn = document.getElementById('prevPage');
const nextPageBtn = document.getElementById('nextPage');
const spreads = document.querySelectorAll('.book-spread');

let currentSpread = 0;
let isAnimating = false;

// Open book
bookClosed.addEventListener('click', function() {
    bookClosed.style.display = 'none';
    bookContainer.classList.add('active');
    showSpread(0);
});

// Close book
closeBookBtn.addEventListener('click', function() {
    bookContainer.classList.remove('active');
    setTimeout(() => {
        bookClosed.style.display = 'flex';
        spreads.forEach(s => s.classList.remove('active'));
        currentSpread = 0;
    }, 300);
});

// Show specific spread
function showSpread(index) {
    if (isAnimating) return;
    
    spreads.forEach((s, i) => {
        s.classList.remove('active', 'page-turn-in', 'page-turn-out');
        if (i !== index) {
            s.style.visibility = 'hidden';
        }
    });
    
    spreads[index].style.visibility = 'visible';
    spreads[index].classList.add('active', 'page-turn-in');
    currentSpread = index;
    
    // Update navigation buttons
    prevPageBtn.disabled = (currentSpread === 0);
    nextPageBtn.disabled = (currentSpread === spreads.length - 1);
    
    setTimeout(() => {
        spreads[index].classList.remove('page-turn-in');
    }, 600);
}

// Turn page with smooth animation
function turnPage(direction) {
    if (isAnimating) return;
    
    const newIndex = currentSpread + direction;
    if (newIndex < 0 || newIndex >= spreads.length) return;
    
    isAnimating = true;
    
    // Current page turns out
    spreads[currentSpread].classList.add('page-turn-out');
    
    setTimeout(() => {
        spreads[currentSpread].classList.remove('active', 'page-turn-out');
        spreads[currentSpread].style.visibility = 'hidden';
        
        // New page turns in
        currentSpread = newIndex;
        spreads[currentSpread].style.visibility = 'visible';
        spreads[currentSpread].classList.add('active', 'page-turn-in');
        
        // Update buttons
        prevPageBtn.disabled = (currentSpread === 0);
        nextPageBtn.disabled = (currentSpread === spreads.length - 1);
        
        setTimeout(() => {
            spreads[currentSpread].classList.remove('page-turn-in');
            isAnimating = false;
        }, 600);
    }, 300);
}

// Navigation
prevPageBtn.addEventListener('click', () => turnPage(-1));
nextPageBtn.addEventListener('click', () => turnPage(1));

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!bookContainer.classList.contains('active')) return;
    
    if (e.key === 'ArrowLeft') turnPage(-1);
    if (e.key === 'ArrowRight') turnPage(1);
});

// Touch/swipe support
let touchStartX = 0;
let touchEndX = 0;

bookContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

bookContainer.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next page
            turnPage(1);
        } else {
            // Swipe right - previous page
            turnPage(-1);
        }
    }
}