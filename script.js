const button = document.getElementById('btn');

async function getJokes() {
    const res = await fetch(
        `https://official-joke-api.appspot.com/jokes/programming/random`
    );

    const data = await res.json();

    return data;
}

async function getJoke() {
    const jokes = await getJokes();
    const setup = jokes[0].setup;
    const punchline = jokes[0].punchline;
    const joke = setup + punchline;
    console.log(joke);
    setTextMessage(joke);
    speakText();
}

// Init speech synth
const message = new SpeechSynthesisUtterance();

// Set text
function setTextMessage(text) {
    message.text = text;
    console.log(text);
}

// Speak text
function speakText() {
    speechSynthesis.speak(message);
}

// Event Listeners
button.addEventListener('click', () => {
    getJoke();
});