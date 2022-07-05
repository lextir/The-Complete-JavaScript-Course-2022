'use strict';

// Declare (DOM) variables that you will use
const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnCloseModal = document.querySelector(`.close-modal`);
const btnsShowModal = document.querySelectorAll(`.show-modal`);

// Function to display the elements
function openModal() {
  modal.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
}

// Function to hide the elements
function closeModal() {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
}

// Create a loop to use button click event on all 3 buttons
for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener(`click`, openModal);
}

// Close modal by clicking the X or anywhere outside the modal (select the overlay)
btnCloseModal.addEventListener(`click`, closeModal);
overlay.addEventListener(`click`, closeModal);

// Enable Escape key to close modal
document.addEventListener(`keydown`, function (e) {
  if (e.key === `Escape` && !modal.classList.contains(`hidden`)) {
    closeModal();
  }
});
