const decrementButtonEl = document.querySelector(
  'button[data-action="decrement"]'
);

const incrementButtonEl = document.querySelector(
  'button[data-action="increment"]'
);

const valueEl = document.querySelector("#value");

let counterValue = 0;

const clickMinus = () => {
  counterValue -= 1;
  return (valueEl.textContent = counterValue);

  console.log("Button was clicked");
  valueEl.textContent = counterValue;
  console.log(counterValue);
  return (counterValue -= 1);
};

const clickPlus = () => {
  counterValue += 1;
  return (valueEl.textContent = counterValue);

  console.log("Button was clicked");
  valueEl.textContent = counterValue;
  console.log(counterValue);
  return (counterValue += 1);
};

decrementButtonEl.addEventListener("click", clickMinus);
incrementButtonEl.addEventListener("click", clickPlus);