let startBtn = document.querySelector(".start-btn");
let restartBtn = document.querySelector(".restart-btn");
let input = document.getElementById("timerSet");
let timer = document.getElementById("timer");
let lSum = document.querySelector(".l-counter");
let sSum = document.querySelector(".s-counter");
let lCount = 0;
let sCount = 0;
let timeOut;
let interval;

function startGame() {
  setTimer();
  timeOut = setTimeout(() => {
    document.removeEventListener("keypress", keyBoardEvents);
    if (lCount > sCount) {
      showWinner(".winner2");
    } else if (lCount < sCount) {
      showWinner(".winner1");
    } else {
      showWinner(".winner");
    }
    clearInterval(interval);
    timer.innerText = "00:00";
  }, input.value * 1000);
  input.value = "";
}
function setTimer() {
  let timeLeft = input.value;
  interval = setInterval(() => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = Math.floor(timeLeft % 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    timer.innerText = `${minutes}:${seconds}`;

    timeLeft--;
  }, 1000);
}

function showWinner(className) {
  let winner = document.querySelectorAll(className);
  if (className == ".winner") {
    for (let i = 0; i < winner.length; i++) {
      winner[i].innerHTML = "Draw!";
    }
  } else {
    winner.innerHTML = "You win!";
  }
}

function hideWinner(className) {
  let winner = document.querySelectorAll(className);

  for (let i = 0; i < winner.length; i++) {
    winner[i].innerHTML = "";
  }
}

function keyBoardEvents(e) {
  if (e.code === "KeyS") {
    sCount++;
    sSum.innerHTML = sCount;
  } else if (e.code === "KeyL") {
    lCount++;
    lSum.innerHTML = lCount;
  }
}

function restartGame() {
  hideWinner(".winner");
  clearTimeout(timeOut);
}

startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", restartGame);
document.addEventListener("keypress", keyBoardEvents);
