let speech = new SpeechSynthesisUtterance();


let voices = [];
let voiceSelect = document.querySelector('select');

window.speechSynthesis.onvoiceschanged = () => {

    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voices.forEach(voice => {

        let option = document.createElement('option');
        option.value = voice.name;
        option.innerText = `${voice.name} ${voice.lang}`;
        voiceSelect.appendChild(option);

    })
}
document.querySelector('button').addEventListener('click', () => {

    let text = document.querySelector('textarea').value;
    speech.text = text;
    window.speechSynthesis.speak(speech);
})