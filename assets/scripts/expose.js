// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
const hornSelect = document.querySelector("#horn-select");
const hornImg = document.querySelector("img");
const audio = document.querySelector("audio");
const volumeSlider = document.querySelector("#volume");
const volumeIcon = document.querySelector("#volume-controls img");
const playButton = document.querySelector("button");
const jsConfetti = new JSConfetti();



hornSelect.addEventListener("change", () => {
  console.log(hornSelect.value);

  hornImg.src = "assets/images/" + hornSelect.value + ".svg";
  audio.src = "assets/audio/" + hornSelect.value + ".mp3";
//Select Horn Images from dropdown menu 
});

volumeSlider.addEventListener("input", () => {
  const volume = volumeSlider.value;

  audio.volume = volume / 100;

  if (volume == 0) {
    volumeIcon.src = "assets/icons/volume-level-0.svg";
  } else if (volume < 33) {
    volumeIcon.src = "assets/icons/volume-level-1.svg";
  } else if (volume < 67) {
    volumeIcon.src = "assets/icons/volume-level-2.svg";
  } else {
    volumeIcon.src = "assets/icons/volume-level-3.svg";
  }
  //Changing volume icon according to Volume Level or Mute 
});

playButton.addEventListener("click", () => {
  audio.play();
  //Plays respective audio 
  if (hornSelect.value === "party-horn") {
    jsConfetti.addConfetti();
  }
  //If Party Horn is selected, then confetti will be added  

});

}