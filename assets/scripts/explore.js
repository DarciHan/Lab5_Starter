// explore.js

window.addEventListener("DOMContentLoaded", init);

function init() {
  const textArea = document.getElementById("text-to-speak");
  const voiceSelect = document.getElementById("voice-select");
  const button = document.querySelector("button");
  const face = document.querySelector("img");

  const speaker = window.speechSynthesis;

  function loadVoices() {
    const voices = speaker.getVoices();

    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';

    voices.forEach((voice, index) => {
      const option = document.createElement("option");
      option.value = index;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  speaker.onvoiceschanged = loadVoices;
  loadVoices();

  button.addEventListener("click", () => {
    const text = textArea.value;

    if (text === "") {
      return;
    }

    const speech = new SpeechSynthesisUtterance(text);
    const voices = speaker.getVoices();

    speech.voice = voices[voiceSelect.value] || voices[0];

    speech.onstart = () => {
      face.src = "assets/images/smiling-open.png";
    };

    speech.onend = () => {
      face.src = "assets/images/smiling.png";
    };

    speaker.speak(speech);
  });
}