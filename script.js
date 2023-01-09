let alreadyRemoved = JSON.parse(sessionStorage.getItem("alreadyRemoved"));
const introText = document.querySelector("#short-intro-text");
const overlay = document.querySelector(".overlay");

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
      overlay.classList.remove("background");
      document.body.classList.remove("disable-scroll");
      introText.classList.remove("color-white");
      sessionStorage.setItem("alreadyRemoved", JSON.stringify(true));
    },
    { once: true }
  );
}
