let speech = new SpeechSynthesisUtterance();
document.querySelector('button').addEventListener('click', () => {

    let text = document.querySelector('textarea').value;
    speech.text = text;
    window.speechSynthesis.speak(speech);
})