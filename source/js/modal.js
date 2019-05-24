var offers = document.querySelector(".offers__button");
var modal = document.querySelector(".modal");
var overlay = document.querySelector(".overlay");

offers.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal__open");
  overlay.classList.add("overlay__open");
});

document.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modal.classList.contains("modal__open")) {
      modal.classList.remove("modal__open");
    }
    if (overlay.classList.contains("overlay__open")) {
      overlay.classList.remove("overlay__open");
    }
  }
});
