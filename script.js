let speech = new SpeechSynthesisUtterance();


let voices = [];
let voiceSelect = document.querySelector('select');

window.speechSynthesis.onvoiceschanged = () => {

    voices = window.speechSynthesis.getVoices();
    voiceSelect.innerHTML = voices
        .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
        .join('');
}
document.querySelector('button').addEventListener('click', () => {

    let text = document.querySelector('textarea').value;
    speech.text = text;
    window.speechSynthesis.speak(speech);
})