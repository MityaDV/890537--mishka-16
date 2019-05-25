var actionButtons = document.querySelectorAll(".js-modal");
var modal = document.querySelector(".modal");
var modalOverlay = document.querySelector(".overlay");
var onKeyUp = function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modal.classList.contains("modal__open")) {
      modal.classList.remove("modal__open");
    }
    if (modalOverlay.classList.contains("overlay__open")) {
      modalOverlay.classList.remove("overlay__open");
    }
  }
  document.removeEventListener("keyup", onKeyUp);
}

for (var i = 0; i < actionButtons.length; i++) {
  actionButtons[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.add("modal__open");
    modalOverlay.classList.add("overlay__open");
    document.addEventListener("keyup", onKeyUp);
  });
}
