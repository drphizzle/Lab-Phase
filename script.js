const quotes = [
    '"As the family goes, so goes the nation and so goes the whole world in which we live." - Pope John Pall II',
    '"Do not be afraid. Open wide the doors to Christ." - Pope John',
    '"The future starts today, not tomorrow." - Pope John',
];

let currentQuoteIndex = 0;

const quoteElement = document.querySelector('.quote');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const likeButton = document.querySelector('.like-button');
const dislikeButton = document.querySelector('.dislike-button');

function updateQuote() {
    quoteElement.textContent = quotes[currentQuoteIndex];
    resetReactions();
}

prevButton.addEventListener('click', () => {
    currentQuoteIndex = (currentQuoteIndex - 1 + quotes.length) % quotes.length;
    updateQuote();
});
nextButton.addEventListener('click', () => {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    updateQuote();
});

function resetReactions() {
    likeButton.classList.remove('active');
    dislikeButton.classList.remove('active');
}

likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('active');
    if (likeButton.classList.contains('active')) {
        dislikeButton.classList.remove('active');
    }
});
dislikeButton.addEventListener('click', () => {
    dislikeButton.classList.toggle('active');
    if (dislikeButton.classList.contains('active')) {
        likeButton.classList.remove('active');
    }
});
updateQuote();