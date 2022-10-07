let message = document.querySelector(".post-message");
let form = document.querySelector(".form");
let tweetsDiv = document.querySelector(".tweets");
let time = new Date();

function postTweet() {
  let tweetDiv = document.createElement("div");
  let timeDiv = document.createElement("div");
  tweetDiv.className = "tweet";
  tweetDiv.innerHTML = message.value.replace(/\r|\n/, "<br>");;
  timeDiv.className = "time";
  timeDiv.innerHTML =
    "- " +
    time.toLocaleString("en-GB", {
      timeZone: "UTC",
    });
  tweetDiv.appendChild(timeDiv);
  tweetsDiv.appendChild(tweetDiv);
  message.value = "";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  postTweet();
});
