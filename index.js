const quoteTextElem = document.querySelector('.js-quote-text');
const quotes = [
    `"Believe you can, and you're halfway there." -Theodore Roosevelt`,
    `"The only way to do great work is to love what you do." -Steve Jobs`,
    `"In the middle of every difficulty lies opportunity." -Albert Einstein`,
    `"Don't watch the clock; do what it does. Keep going." -Sam Levenson`,
    `"The future depends on what you do today." -Mahatma Gandhi`,
    `"Success is not final, failure is not fatal: It is the courage to continue that counts." -Winston Churchill`,
    `"Dream big and dare to fail." -Norman Vaughan`,
    `"The only limit to our realization of tomorrow will be our doubts of today." -Franklin D. Roosevelt`,
    `"You are never too old to set another goal or to dream a new dream." -C.S. Lewis`,
    `"The only person you are destined to become is the person you decide to be." -Ralph Waldo Emerson`
];
let usedIndices = [];
let shuffledQuotes = [];

// Function to shuffle the quotes array
function shuffleQuotes() {
    shuffledQuotes = [...quotes]; // Copy the original quotes array
    for (let i = shuffledQuotes.length - 1; i >= 0; i--) { //loop through array starting at the end
        const j = Math.floor(Math.random() * (i + 1)); //sets j to random number
        [shuffledQuotes[i], shuffledQuotes[j]] = [shuffledQuotes[j], shuffledQuotes[i]]; //swaps elements between indices i and j, shuffling the quotes
    }
}

// Function to generate and display a quote
function GenerateQuote() {
    if (shuffledQuotes.length === 0) {
        // If all quotes have been displayed, reset and reshuffle
        usedIndices = [];
        shuffleQuotes();
    }

    let attempts = 0;
    let randomNumber;

    while (attempts < shuffledQuotes.length) { //sets a maximum number of attempts to avoid an infinite loop
        randomNumber = Math.floor(Math.random() * shuffledQuotes.length);
        if (!usedIndices.includes(randomNumber)) { //if this is a new quote that has not been displayed before
            const quote = shuffledQuotes[randomNumber];
            quoteTextElem.innerHTML = quote;
            usedIndices.push(randomNumber);
            break; // Exit the loop when an unused quote is found
        }
        attempts++;
    }
}

// Initial shuffle
shuffleQuotes();
