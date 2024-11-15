import {
  createCard,
  validate,
  getLocalStorage,
  deleteCard,
  clearAll,
  storageAdd,
} from "./function.js";

const button = document.querySelector("#btn");
const logo = document.querySelector("#logo");
const manage = document.querySelector("#manage");
const check = document.querySelector("#new");
const fet = document.querySelector("#fet");
const pos = document.querySelector("#pos");
const time = document.querySelector("#time");
const work = document.querySelector("#work");
const location = document.querySelector("#location");
const wrappers = document.querySelector("#wrappers");
const clear = document.querySelector("#clear");

function keep() {
  const cards = wrappers.querySelectorAll(".card");
  const hard = [];
  localStorage.setItem("todos", JSON.stringify(hard));
}
button &&
  button.addEventListener("click", function () {
    const Fullstack = document.querySelector("#Fullstack");
    const React = document.querySelector("#React");
    const Python = document.querySelector("#Python");
    const Midweight = document.querySelector("#Midweight");
    const data = {
      logo: logo.value,
      manage: manage.value,
      new: check.checked,
      fet: fet.checked,
      pos: pos.value,
      time: time.value,
      work: work.value,
      location: location.value,
      Fullstack: Fullstack.checked,
      React: React.checked,
      Midweight: Midweight.checked,
      Python: Python.checked,
    };

    if (validate()) {
      const card = createCard(data);
      wrappers.innerHTML += card;
      storageAdd(data);
    }
  });

clear && clear.addEventListener("click", clearAll);

document.addEventListener("DOMContentLoaded", function () {
  const save = getLocalStorage();

  save.forEach(function (value) {
    const card = createCard(value);
    wrappers.innerHTML += card;
  });

  wrappers && wrappers.addEventListener("click", deleteCard);
});
