const modal = document.querySelector('.modal');
const superheroeButtons = document.querySelectorAll('#superhero');
const closeButton = document.querySelector('.modal__content--close');

superheroeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('visible');
  });
});

closeButton.addEventListener('click', () => {
  console.log('hola');
  modal.classList.add('hidden');
  modal.classList.remove('visible');
});