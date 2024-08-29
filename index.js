const typingText = document.querySelector('.typing-text');
const text = 'Hi, I\'m Voonna Gowri Ganesh';
let i = 0;

const intervalId = setInterval(() => {
    typingText.textContent = text.substring(0, i + 1); // set the text, not append
    i++;
    if (i >= text.length) {
        clearInterval(intervalId); // stop the interval when the text is fully typed
    }
}, 100);