window.addEventListener("load", () => {
  handleClick();
  handleKeyPress();
});

function handleClick() {
  const buttons = document.querySelectorAll(".drum");
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      makeSound(event.target.textContent);
    });
  });
}
function handleKeyPress() {
  document.addEventListener("keydown", (event) => {
    makeSound(event.key);
  });
}

function makeSound(event) {
  switch (event) {
    case "w":
      play("./sounds/tom-1.mp3");
      break;
    case "a":
      play("./sounds/tom-2.mp3");
      break;
    case "s":
      play("./sounds/tom-3.mp3");
      break;
    case "d":
      play("./sounds/tom-4.mp3");
      break;
    case "j":
      play("./sounds/kick-bass.mp3");
      break;
    case "k":
      play("./sounds/snare.mp3");
      break;
    case "l":
      play("./sounds/crash.mp3");
      break;
    default:
      break;
  }
}

function play(location) {
  let sound = new Audio(location);
  sound.play();
}
