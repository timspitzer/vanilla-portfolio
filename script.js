let alreadyRemoved = JSON.parse(sessionStorage.getItem("alreadyRemoved"));
const overlay = document.querySelector(".overlay");
const introText = document.querySelector("#short-intro-text");

window.addEventListener("mousemove", (e) => {
  const x = -1 * Math.round((e.clientX * 10) / window.innerWidth - 5) + "deg";
  const y = -1 * Math.round((e.clientY * 10) / window.innerHeight - 5) + "deg";
  // const x = Math.round((e.clientX * 10) / window.innerWidth - 5) + "deg";
  // const y = Math.round((e.clientY * 10) / window.innerHeight - 5) + "deg";

  document.body.style.setProperty("--mouse-x", x);
  document.body.style.setProperty("--mouse-y", y);
});

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
