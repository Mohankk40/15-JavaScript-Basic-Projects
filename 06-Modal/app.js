// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

modalOverlay = document.querySelector('.modal-overlay');
modalBtn = document.querySelector('.modal-btn');
closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click', () => {
  modalOverlay.classList.add('open-modal');
});

closeBtn.addEventListener('click', () => {
  modalOverlay.classList.remove('open-modal');
});