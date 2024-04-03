// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const clickHeart = document.querySelectorAll(".like-glyph")
for (let heart of clickHeart){
  heart.addEventListener("click", function(){
    mimicServerCall()
    .then(function(){
      heart.textContent = FULL_HEART;
      heart.className = "activated-heart";
    })
    .catch(function(error){
      document.getElementById("modal").className = "";
      document.getElementById("modal-message").textContent = error.message;
      setTimeout(function(){
        document.getElementById("modal").className = "hidden";
      }, 3000)
    })
    if (heart.className === "activated-heart"){
      heart.textContent = EMPTY_HEART;
      heart.classList.remove("activated-heart");
    }

  })
}
    





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
