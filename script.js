// TODO: replace local with session storage

const element = document.querySelector(".overlay");
let alreadyRemoved = JSON.parse(localStorage.getItem("alreadyRemoved"));

const timeNow = new Date().getTime();
const timeRemoved = JSON.parse(localStorage.getItem("timestampRemoved"));
if (timeRemoved) {
  const waitTime = 1000 * 60 * 60 * 24 * 7;
  console.log("delay", timeNow - timeRemoved > waitTime);
  if (timeNow - timeRemoved > waitTime) {
    alreadyRemoved = false;
    localStorage.setItem("alreadyRemoved", JSON.stringify(alreadyRemoved));
  }
}

if (!alreadyRemoved) {
  addBackground();
  addRemoveBackgroundListener();
}

function addBackground() {
  document.body.classList.add("disable-scroll");
  element.classList.add("background-effect");
  window.scroll(0, 0);
}

function addRemoveBackgroundListener() {
  document.body.addEventListener(
    "click",
    (e) => {
      e.preventDefault();
      element.classList.remove("background-effect");
      document.body.classList.remove("disable-scroll");

      localStorage.setItem("alreadyRemoved", JSON.stringify(true));
      localStorage.setItem("timestampRemoved", JSON.stringify(timeNow));
    },
    { once: true }
  );
}
