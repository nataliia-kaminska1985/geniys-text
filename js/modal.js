// const modal = document.querySelector('.backdrop');
// const modalBtnOpen = document.querySelector('.modal-btn-open');
// const modalBtnClose = document.querySelector('.modal-btn-close');

// const toggleModal = () => modal.classList.toggle('is-hidden');

// modalBtnOpen.addEventListener('click', toggleModal);
// modalBtnClose.addEventListener('click', toggleModal);
document.addEventListener('DOMContentLoaded', () => {
  // Логіка для модального вікна
  const modal = document.querySelector('.backdrop');
  const modalBtnOpen = document.querySelectorAll('.modal-btn-open');
  const modalBtnClose = document.querySelector('.modal-btn-close');

  if (modal && modalBtnOpen.length > 0 && modalBtnClose) {
    const toggleModal = () => modal.classList.toggle('is-hidden');

    modalBtnOpen.forEach(button => {
      button.addEventListener('click', toggleModal);
    });

    modalBtnClose.addEventListener('click', toggleModal);
  } else {
    console.error('Помилка: елементи модального вікна не знайдені в DOM!');
  }
});
