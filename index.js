window.addEventListener("load", () => {
  setButtonsImg();
  handleClick();
});

function getButtons() {
  const wBtn = document.querySelector(".w");
  const aBtn = document.querySelector(".a");
  const sBtn = document.querySelector(".s");
  const dBtn = document.querySelector(".d");
  const jBtn = document.querySelector(".j");
  const kBtn = document.querySelector(".k");
  const lBtn = document.querySelector(".l");
  return [wBtn, aBtn, sBtn, dBtn, jBtn, kBtn, lBtn];
}

function setButtonsImg() {
  const imgs = [
    "tom1.png",
    "tom2.png",
    "tom3.png",
    "tom4.png",
    "kick.png",
    "snare.png",
    "crash.png",
  ];
  const buttons = getButtons();
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundImage = `url(./images/${imgs[i]})`;
  }
}

function drums() {
  const tom1 = new Audio("./sounds/tom-1.mp3");
  const tom2 = new Audio("./sounds/tom-2.mp3");
  const tom3 = new Audio("./sounds/tom-3.mp3");
  const tom4 = new Audio("./sounds/tom-4.mp3");
  const kickBass = new Audio("./sounds/kick-bass.mp3");
  const snare = new Audio("./sounds/snare.mp3");
  const crash = new Audio("./sounds/crash.mp3");
  return { tom1, tom2, tom3, tom4, kickBass, snare, crash };
}

function handleClick() {
  const buttons = getButtons();
  buttons.forEach((button) => {
    button.addEventListener("mouseover", (event) => {
      switch (event.target.textContent) {
        case "w":
          drums().tom1.play();

          break;
        case "a":
          drums().tom2.play();
          break;
        case "s":
          drums().tom3.play();
          break;
        case "d":
          drums().tom4.play();
          break;
        case "j":
          drums().kickBass.play();
          break;
        case "k":
          drums().snare.play();
          break;
        case "l":
          drums().crash.play();
          break;
        default:
          break;
      }
    });
  });
}
