const modal = document.querySelector(".modal"),
  modalBtn = document.querySelector(".btn"),
  close = document.querySelector(".close");

const openModal = (ev) => {
  ev.preventDefault();
  modal.style.display = "block";
};

const closeModal = (ev) => {
  modal.style.display = "none";
};

modalBtn.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);
