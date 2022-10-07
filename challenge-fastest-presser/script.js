let startBtn = document.querySelector(".start-btn");
let lSum = document.querySelector(".l-counter");
let sSum = document.querySelector(".s-counter");
let lCount = 0;
let sCount = 0;
let time;

function startGame() {
  let input = document.getElementById("timerSet").value;
  setTimeout(() => {
    if (lCount > sCount) {
      showWinner(".winner2");
    } else {
      showWinner(".winner1");
    }
  }, input * 1000);
}

function showWinner(num) {
  let winner = document.querySelector(num);
  winner.className = "show";
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

startBtn.addEventListener("click", startGame);
document.addEventListener("keypress", keyBoardEvents);
