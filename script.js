let speech = new SpeechSynthesisUtterance();
let browse = document.querySelector("#browse");
let textArea = document.querySelector("#text");

document.querySelector('button').addEventListener('click', () => {

    let text = document.querySelector('textarea').value;
    speech.text = text;
    window.speechSynthesis.speak(speech);

})

browse.addEventListener('change', (e) => {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const fileContent = e.target.result;
            textArea.textContent = fileContent;
        };

        reader.onerror = function(e) {
            console.error("Error reading file", e);
        };

        reader.readAsText(file); // Read the file as text (for CSV, TXT, etc.)
    } else {
        console.log("No file selected.");
    }
})