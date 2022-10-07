let startBtn = document.querySelector(".start-btn");
let restartBtn = document.querySelector(".restart-btn");
let input = document.getElementById("timerSet");
let lSum = document.querySelector(".l-counter");
let sSum = document.querySelector(".s-counter");
let lCount = 0;
let sCount = 0;
let time;

function startGame() {
  time = setTimeout(() => {
    document.removeEventListener("keypress", keyBoardEvents);
    if (lCount > sCount) {
      showWinner(".winner2");
    } else if (lCount < sCount) {
      showWinner(".winner1");
    } else {
      showWinner(".winner");
    }
  }, input.value * 1000);
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
  input.value = "";
  hideWinner(".winner");
  clearTimeout(time);
}

startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", restartGame);
document.addEventListener("keypress", keyBoardEvents);
