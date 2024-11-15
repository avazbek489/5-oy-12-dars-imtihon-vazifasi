function createCard(data) {
  return `
  <div class="card">
      <img src="${data.logo}" alt="Company Logo">
      <div class="main">
          <div class="info">
              <h6>${data.manage}</h6>
              <div class="up">
                  ${data.new ? "<h5>NEW!</h5>" : ""}
                  ${data.fet ? '<h5 id="tittle">FEATURED</h5>' : ""}
              </div>
          </div>
          <div class="posit">
              <h3>${data.pos}</h3>
          </div>
          <div class="details">
              <ul>
                  <li class="day">${data.time}</li>
                  <li>${data.work}</li>
                  <li>${data.location}</li>
              </ul>
          </div>
      </div>
      <div class="level">
         ${data.Fullstack ? `<h6 class="vue">Full Stack</h6>` : ""}
              ${data.React ? `<h6 class="vue">React</h6>` : ""}
              ${data.Midweight ? `<h6 class="vue">Midweight</h6>` : ""}
              ${data.Python ? `<h6 class="vue">Python</h6>` : ""}  
      </div>
      <button class="remove">delete</button>
  </div>
  `;
}
function validate() {
  const logo = document.querySelector("#logo");
  const manage = document.querySelector("#manage");
  const pos = document.querySelector("#pos");
  const time = document.querySelector("#time");
  const work = document.querySelector("#work");
  const location = document.querySelector("#location");

  console.log(logo.value);
  console.log(manage.value);
  console.log(pos.value);
  console.log(time.value);
  console.log(work.value);
  console.log(location.value);

  if (
    logo.value.trim().length < 6 ||
    manage.value.trim().length < 4 ||
    pos.value.trim().length < 5 ||
    time.value == "Tanlang" ||
    work.value == "Tanlang" ||
    location.value == "Tanlang"
  ) {
    alert("Qaysidir vakansiya malumoti yaxshi toldirilmadi");
    return false;
  }
  return true;
}

function getLocalStorage() {
  let data = [];
  if (localStorage.getItem("todos")) {
    data = JSON.parse(localStorage.getItem("todos"));
  }
  return data;
}
function deleteCard(arg) {
  if (arg.target.classList.contains("remove")) {
    const card = arg.target.closest(".card");
    const confirmDelete = confirm("Shu vakansiyani ochirasmi");
    if (confirmDelete) {
      card.remove();
      updateLocalStorage();
    }
  }
}
function clearAll() {
  const wrappers = document.querySelector("#wrappers");
  const confirmClear = confirm(
    "Rostdan ham barcha vakansiya malumotlarini tozalamoqchimisiz"
  );
  if (confirmClear) {
    wrappers.innerHTML = "";
    localStorage.removeItem("todos");
  }
}
function storageAdd(data) {
  const save = getLocalStorage();
  save.push(data);
  localStorage.setItem("todos", JSON.stringify(save));
}

export { createCard, validate, getLocalStorage, deleteCard, clearAll, storageAdd };
