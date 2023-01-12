let isBgRemoved = false;
// let isBgRemoved = JSON.parse(sessionStorage.getItem("isBgRemoved"));
const introText = document.querySelector("#short-intro-text");
const overlay = document.querySelector(".overlay");

if (isBgRemoved) {
  overlay.remove();
  removeUtilityClasses();
}

if (!isBgRemoved) {
  addRemoveBackgroundListener();
}

function addRemoveBackgroundListener() {
  document.body.addEventListener(
    "click",
    (e) => {
      e.preventDefault();
      overlay.classList.remove("background");
      removeUtilityClasses();
      sessionStorage.setItem("isBgRemoved", JSON.stringify(true));
    },
    { once: true }
  );
}

function removeUtilityClasses() {
  document.body.classList.remove("disable-scroll");
  introText.classList.remove("col-white");
}
