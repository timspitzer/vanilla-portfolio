let alreadyRemoved = JSON.parse(sessionStorage.getItem("alreadyRemoved"));
const overlay = document.querySelector(".overlay");
const introText = document.querySelector("#short-intro-text");

if (alreadyRemoved) {
  overlay.remove();
  document.body.classList.remove("disable-scroll");
  introText.classList.remove("color-white");
}

if (!alreadyRemoved) {
  addRemoveBackgroundListener();
}

function addRemoveBackgroundListener() {
  document.body.addEventListener(
    "click",
    (e) => {
      e.preventDefault();
      overlay.classList.remove("background-effect");
      document.body.classList.remove("disable-scroll");
      introText.classList.remove("color-white");
      sessionStorage.setItem("alreadyRemoved", JSON.stringify(true));
    },
    { once: true }
  );
}
