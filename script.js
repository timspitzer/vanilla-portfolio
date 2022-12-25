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
  addMouseTrackingListener();
}

function addMouseTrackingListener() {
  document.addEventListener("touchmove", (e) => {
    const x =
      Math.round((e.touches[0].clientX / window.innerWidth - 0.5) * 6) + "deg";
    const y =
      -1 * Math.round((e.touches[0].clientY / window.innerHeight - 0.5) * 6) +
      "deg";
  });

  window.addEventListener("mousemove", (e) => {
    const x = Math.round((e.clientX / window.innerWidth - 0.5) * 6) + "deg";
    const y =
      -1 * Math.round((e.clientY / window.innerHeight - 0.5) * 6) + "deg";

    document.body.style.setProperty("--mouse-x", x);
    document.body.style.setProperty("--mouse-y", y);
  });
}

function addRemoveBackgroundListener() {
  overlay.addEventListener(
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
