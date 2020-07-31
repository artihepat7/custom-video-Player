const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");

const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

//play and pause video on clicking video
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

//update play Icon
function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}

//stop video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

//update progress and timestamp
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = "0" + String(mins);
  }

  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = "0" + String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`;
}

//set  video time to progress
function setVideoProgress() {
  video.currentTime = (progress.value * video.duration) / 100;
}

//event listeners
video.addEventListener("click", toggleVideoStatus);
play.addEventListener("click", toggleVideoStatus);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("pause", updatePlayIcon);
stop.addEventListener("click", stopVideo);

//regarding timestamp and progress bar
video.addEventListener("timeupdate", updateProgress);

progress.addEventListener("change", setVideoProgress);
