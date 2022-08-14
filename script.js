var body = document.querySelector("body");
var game = document.querySelector("#game");
var background = document.querySelector("#background");

var partyAudio = document.querySelector(".party-audio");
var medvedAudio = document.querySelector(".medved-audio");
var sheepAudio = document.querySelector(".sheep-audio");
var mouseAudio = document.querySelector(".mouse-audio");
var vovkAudio = document.querySelector(".vovk-audio");

var screenWidth = document.documentElement.clientWidth + "px";
var screenHeight = document.documentElement.clientHeight + "px";

var sheep = document.querySelector("#zombie-sheep");
var vovk = document.querySelector("#vovk-zombie");
var medved = document.querySelector("#medved-zombie");
var mouse = document.querySelector("#mouse-zombie");

var medvedArea = document.querySelector("#medved-zombie-area");
var sheepArea = document.querySelector("#zombie-sheep-area");
var mouseArea = document.querySelector("#mouse-zombie-area");
var vovkArea = document.querySelector("#vovk-zombie-area");
var moonArea = document.querySelector("#moon-area");


//////////////////////////////////////////////////////
var silence = true;
moonArea.onclick = function() {
  // Click the Moon to play or pause main song
  if(silence) {
    partyAudio.src = "media/night_melody2.mp3";
    partyAudio.play();
    silence = false;
  } else {
    partyAudio.pause();
    silence = true;
  }
  console.log("Main Song!");
};
//////////////////////////////////////////////////////

// add animation of sound effect
function addSoundAnim(myElement) {
  var soundElement = document.querySelector("#" + myElement + " " + ".soundAnim");
  if(soundElement.className == "soundAnim hide") {
    soundElement.className = "soundAnim show";
    console.log("Sound Animation!");
  }
  function hideSound() {
    soundElement.className = "soundAnim hide";
  }
  setTimeout(hideSound, 500);
}

vovkArea.onclick = function() {
  // Vovki - audio sound ON
  vovkAudio.src = "media/vovki.mp3";
  vovkAudio.play();
  console.log("U-u-u-u!");
  addSoundAnim("vovk-zombie");
};
medvedArea.onclick = function() {
  // Medved - audio sound ON
  medvedAudio.src = "media/medved.mp3";
  medvedAudio.play();
  console.log("B-r-r-r!");
  addSoundAnim("medved-zombie");
};
sheepArea.onclick = function() {
  // Sheep - audio sound ON
  sheepAudio.src = "media/sheep5.mp3";
  sheepAudio.play();
  console.log("B-e-e-e!");
  addSoundAnim("zombie-sheep");
};
mouseArea.onclick = function() {
  // Mouse - audio sound ON
  mouseAudio.src = "media/mouse2.mp3";
  mouseAudio.play();
  console.log("Mi-mi-mi!");
  addSoundAnim("mouse-zombie");
};

var hintMedvedArea = document.querySelector(".hints span:nth-child(1)");
var hintSheepArea = document.querySelector(".hints span:nth-child(2)");
var hintMouseArea = document.querySelector(".hints span:nth-child(3)");

hintMedvedArea.onclick = function() {
  // Medved - audio sound ON
  medvedAudio.src = "media/medved.mp3";
  medvedAudio.play();
  console.log("B-r-r-r!!!!");
  addSoundAnim("medved-zombie");
};
hintSheepArea.onclick = function() {
  // Sheep - audio sound ON
  sheepAudio.src = "media/sheep5.mp3";
  sheepAudio.play();
  console.log("B-e-e-e!");
  addSoundAnim("zombie-sheep");
};
hintMouseArea.onclick = function() {
  // Mouse - audio sound ON
  mouseAudio.src = "media/mouse2.mp3";
  mouseAudio.play();
  console.log("Mi-mi-mi!");
  addSoundAnim("mouse-zombie");
};

document.onkeydown = function(event) {
  if (event.key == "ArrowLeft") {
    sheep.className = "flip";
    // Medved - audio sound ON
    medvedAudio.src = "media/medved.mp3";
    medvedAudio.play();
    addSoundAnim("medved-zombie");
  }
  if (event.key == "ArrowRight") {
    sheep.className = "";
    // Mouse - audio sound ON
    mouseAudio.src = "media/mouse2.mp3";
    mouseAudio.play();
    addSoundAnim("mouse-zombie");
  }
  if (event.key == "ArrowUp") {
    // Sheep - audio sound ON
    sheepAudio.src = "media/sheep5.mp3";
    sheepAudio.play();
    addSoundAnim("zombie-sheep");
  }
}

// var vovk = document.querySelector("#vovk-zombie");
var directionRun = 3;

function moveVovk() {
  console.log(screenWidth);

  setInterval(function() {
  // console.log(vovk.offsetLeft);

    if (vovk.offsetLeft > (document.querySelector("body").clientWidth) - 100) {
      directionRun = directionRun * (-1);
      /* sheep.className = ""; */
      vovk.className = "flip";
      console.log("edge!!!");
    } else if (vovk.offsetLeft < 100) {
      directionRun = directionRun * (-1);
      /* sheep.className = "flip"; */
      vovk.className = "";
      console.log("edge!!!");
    }
    vovk.style.left = vovk.offsetLeft + directionRun + "px";
    vovkArea.style.left = vovk.style.left;
  }, 30);

}
moveVovk();

//////////////////////////////////////////////////////
// start menu ON/OFF
//////////////////////////////////////////////////////
var toggleCircle = document.querySelector(".toggle-circle");
var startMenu = document.querySelector("#start-menu");
var toggleIcon = document.querySelector(".toggle-icon");
var naturalMusicSetupBtn = document.querySelector(".natural");

toggleCircle.onclick = function() {
  if(startMenu.className == "closed") {
    startMenu.className = "";
    toggleCircle.className = "toggle-circle opened";
    console.log("start menu ON");
    // Music OFF
    partyAudio.pause();
  }
}

// start menu buttons
naturalMusicSetupBtn.onclick = function() {

  // play main song
  partyAudio.src = "media/night_melody2.mp3";
  partyAudio.play();
  silence = false;

  // close menu and open the game
  if(startMenu.className == "") {
    startMenu.className = "closed";
    toggleCircle.className = "toggle-circle closed";
  }
}