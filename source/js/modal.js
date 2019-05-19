var offers = document.querySelector(".offers__button");
var modal = document.querySelector(".modal");
var overlay = document.querySelector(".overlay");

offers.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal-open");
  overlay.classList.add("overlay-open");
});

document.addEventListener("keyup", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modal.classList.contains("modal-open")) {
      modal.classList.remove("modal-open");
    }
    if (overlay.classList.contains("overlay-open")) {
      overlay.classList.remove("overlay-open");
    }
  }
});
