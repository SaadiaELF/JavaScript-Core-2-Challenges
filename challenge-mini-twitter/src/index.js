let message = document.querySelector(".post-message");
let form = document.querySelector(".form");
let tweetsDiv = document.querySelector(".tweets");

function postTweet() {
  let tweet = document.createElement("p");
  tweet.innerHTML = message.value;
  tweetsDiv.appendChild(tweet);
  message.value = "";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  postTweet();
});
