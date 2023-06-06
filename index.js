const card = document.querySelectorAll('.card')
let currentIndex = 0

function showNextCard() {
    card[currentIndex].classList.add('active');
    currentIndex = (currentIndex + 1) % card.length;
}

function hideAllCards() {
    card.forEach(card => {
        card.classList.remove('active');
    });
}

function rotate () {
    hideAllCards();
    showNextCard();
}
const timer = setInterval(rotate, 200)

setTimeout(() => {
    hideAllCards()
    clearInterval(timer)
}, 1000)