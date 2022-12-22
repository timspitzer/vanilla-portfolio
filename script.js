let alreadyRemoved = JSON.parse(sessionStorage.getItem("alreadyRemoved"));
const element = document.querySelector(".overlay");

if (alreadyRemoved) {
  element.remove();
  document.body.classList.remove("disable-scroll");
}

if (!alreadyRemoved) {
  addRemoveBackgroundListener();
}

function addRemoveBackgroundListener() {
  document.body.addEventListener(
    "click",
    (e) => {
      e.preventDefault();
      element.classList.remove("background-effect");
      document.body.classList.remove("disable-scroll");
      sessionStorage.setItem("alreadyRemoved", JSON.stringify(true));
    },
    { once: true }
  );
}
