let message = document.querySelector(".post-message");
let form = document.querySelector(".form");
let tweetsDiv = document.querySelector(".tweets");
let countDiv = document.querySelector(".character-counter");
let deleteBtn;
let time = new Date();
let count = 0;

function postTweet() {
  if (count >= 0) {
    let tweetDiv = document.createElement("div");
    let timeDiv = document.createElement("div");
    let deleteIcon = document.createElement("i");

    tweetDiv.className = "tweet";
    timeDiv.className = "time";
    deleteIcon.className = "delete-icon fa-solid fa-trash-can";
    tweetDiv.innerHTML = message.value.replace(/\r|\n/, "<br>");
    timeDiv.innerHTML =
      "- " +
      time.toLocaleString("en-GB", {
        timeZone: "UTC",
      });

    tweetDiv.prepend(deleteIcon);
    tweetDiv.appendChild(timeDiv);
    tweetsDiv.appendChild(tweetDiv);
  }

  message.value = "";
  deleteBtn = document.querySelectorAll(".delete-icon");
  deleteBtn.forEach((btn) => btn.addEventListener("click", deleteTweet));
}

function characterCount(e) {
  count = 280 - e.target.value.length;
  countDiv.style.color = count < 0 ? "red" : "initial";
  countDiv.innerHTML = `${count} characters left`;
}

function deleteTweet(e) {
  let tweet = e.target.parentNode;
  tweetsDiv.removeChild(tweet);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  postTweet();
});

message.addEventListener("input", characterCount);
