console.log("JavaScript is running on", document.title);

const quotes = [
    '"To be successful in life is not an easy road... Legit is hard, illegit is even harder. You just have to choose your own hard but most importantly. choose wisely." - Phil Godwin',
    '"A person who never made a mistake never tried anything new." - Albert Einstein',
    '"When something is important enough, you do it even if the odds are not in your favor." - Elon Musk',
    '"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time." - Thomas A. Edison',
    '"I have found that luck is quite predictable. If you want more luck, take more chances. Be more active. Show up more often." - Brian Tracy',
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

// javascript for lifefact

const lifeFacts = [
    '"Life can be unpredictable sometimes; things that seem like a blessing at first can begin to feel like a curse or regrets. You never know.. so many questions without a definite answer" - Phil Godwin',
    '"Nobody actually cares until you have made it" - FBE',
    '"Some day, the poor will have nothing left to eat but the rich." - Deep Thoughts',
    '"Never stop learning, because life never stops teaching" - Deep Thoughts',
    '"Life is the most difficult exam and many people fail because they try to copy others not realizing that everyone has a different question paper." - Unknown'
];

let currentLifeFactIndex = 0;

const lifeFactElement = document.querySelector('.lifeFact');
const preButton = document.querySelector('#pre-btn');
const nexButton = document.querySelector('#nex-btn');
const likButton = document.querySelector('.lik-button');
const dislikButton = document.querySelector('.dislik-button');

function updateLifeFact() {
    lifeFactElement.textContent = lifeFacts[currentLifeFactIndex];
    resetReactions();
}
if(prevButton){
    preButton.addEventListener('click', () => {
        currentLifeFactIndex = (currentLifeFactIndex - 1 + lifeFacts.length) % lifeFacts.length;
        updateLifeFact();
    });
}
//To catch any error 
try{
    nexButton.addEventListener('click', () => {
        currentLifeFactIndex = (currentLifeFactIndex + 1) % lifeFacts.length;
        updateLifeFact();
    });
}catch (error){
 console.log(error)
}
function resetReact() {
    likButton.classList.remove('active');
    dislikButton.classList.remove('active');
}
likButton.addEventListener('click', () => {
    likButton.classList.toggle('active');
    if (likButton.classList.contains('active')) {
        dislikButton.classList.remove('active');
    }
});
dislikButton.addEventListener('click', () => {
    dislikButton.classList.toggle('active');
    if (dislikButton.classList.contains('active')) {
        likButton.classList.remove('active');
    }
});
updateLifeFact();

alert("This site is under construction. Check back later!");



    