//get w a s ..
var str = document.querySelectorAll(".drum");
for (i = 0; i < str.length; i++) {
  str[i].addEventListener("click", function() { //click the button
    var buttonContext = this.textContent;
    console.log("button is " + buttonContext);
    makeSound(buttonContext);
    buttonAniation(buttonContext);
  });
}

document.addEventListener("keypress", function(e) { //keyboard press
  makeSound(e.key);
  buttonAniation(e.key);
});


function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case "a":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    case "s":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case "d":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case "j":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case "k":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case "l":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    default:
      console.log(key);
  }
}

// highlight after press
function buttonAniation(e){
  var activeButton=document.querySelector("."+e)
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
