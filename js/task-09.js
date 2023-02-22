function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const buttonEl = document.querySelector('.change-color');
const textColorEl = document.querySelector('.color');

function changeColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  textColorEl.textContent = getRandomHexColor();

};
buttonEl.addEventListener('click', changeColor);
