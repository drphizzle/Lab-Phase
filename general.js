function searchQuote() {
    let inputQuote = document.getElementById('inputQuote').value;
    if (inputQuote.trim() !== '') {
        let searchLink = `https://www.google.com/search?q=${encodeURIComponent(inputQuote)}`;
        window.location.href = `anyquotes.html?query=${encodeURIComponent(inputQuote)}&link=${encodeURIComponent(searchLink)}`;
    }
};