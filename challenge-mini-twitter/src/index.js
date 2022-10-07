let message = document.querySelector(".post-message");
let form = document.querySelector(".form");
let tweetsDiv = document.querySelector(".tweets");
let countDiv = document.querySelector(".character-counter");
let time = new Date();
let count = 0;

function postTweet() {
  let tweetDiv = document.createElement("div");
  let timeDiv = document.createElement("div");
  tweetDiv.className = "tweet";
  tweetDiv.innerHTML = message.value.replace(/\r|\n/, "<br>");
  timeDiv.className = "time";
  timeDiv.innerHTML =
    "- " +
    time.toLocaleString("en-GB", {
      timeZone: "UTC",
    });
  tweetDiv.appendChild(timeDiv);
  if (count >= 0) {
    tweetsDiv.appendChild(tweetDiv);
  }
  message.value = "";
}

function characterCount(e) {
  count = 280 - e.target.value.length;
  countDiv.style.color = count < 0 ? "red" : "initial";
  countDiv.innerHTML = `${count} characters left`;
}

message.addEventListener("input", characterCount);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  postTweet();
});
