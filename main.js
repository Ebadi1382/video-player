let playArea = document.querySelector(".myplayer");
let media = playArea.querySelector("video");
let controls = playArea.querySelector(".myplayer__controls");

let play = playArea.querySelector(".play");
let rewind = playArea.querySelector(".rewind");
let forward = playArea.querySelector(".forward");

let currentTime = document.querySelector(".currentTime");
let videoTime = document.querySelector(".videoTime");

let barlenght = document.querySelector(".controls__progressbar-current");

let volumeIcon = document.querySelector(".volume .icon");
let rangeVolume = document.querySelector(".volume__progress");

let volumeRange = document.querySelector("#volume_bar");

let fullscreen = document.querySelector(".fullscreen");

play.addEventListener("click", function () {
  if (media.paused) {
    media.play();
    togglePlayIcon();
  } else {
    media.pause();
    togglePlayIcon();
  }
  videoTime.textContent = getData(media.duration);
});
media.addEventListener("click", function () {
  if (media.paused) {
    media.play();
    togglePlayIcon();
  } else {
    media.pause();
    togglePlayIcon();
  }
  videoTime.textContent = getData(media.duration);
});
let togglePlayIcon = () => {
  let playIcon = play.querySelector("i");
  playIcon.classList.toggle("ion-md-pause");
  playIcon.classList.toggle("ion-md-play");
};

rewind.addEventListener("click", function () {
  media.currentTime -= 5;
});
forward.addEventListener("click", function () {
  media.currentTime += 5;
});

media.addEventListener("timeupdate", function () {
  currentTime.textContent = getData(media.currentTime);
  let barPercent = (media.currentTime / media.duration) * 100;
  barlenght.style = `  background: linear-gradient(90deg, rgba(230, 126, 34, 1) ${barPercent}%, #e1e1e1 0%);`;
  barlenght.value = barPercent;
});
let getData = (time) => {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time - minutes * 60);
  let minuteValue, secondValue;
  if (seconds < 10) {
    secondValue = "0" + seconds;
  } else {
    secondValue = seconds;
  }
  if (minutes < 10) {
    minuteValue = "0" + minutes;
  } else {
    minuteValue = minutes;
  }
  return minuteValue + ":" + secondValue;
};

barlenght.addEventListener("input", function () {
  media.currentTime = (this.value / 100) * media.duration;
});

volumeIcon.addEventListener("click", function () {
  rangeVolume.classList.toggle("active");
});

media.volume = 0.5;
volume_bar.addEventListener("input", function () {
  media.volume = this.value / 100;
  this.style = `background: linear-gradient(90deg, rgba(230, 126, 34, 1) ${this.value}%, #e1e1e1 50%);`;
});

fullscreen.addEventListener("click", function () {
  if (!document.fullscreenElement) {
    playArea.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
});
