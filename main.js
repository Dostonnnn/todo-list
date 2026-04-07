const elForm = document.querySelector(".form");
const elMes = document.querySelector(".mes");
const elInput = document.querySelector(".input");
const elLists = document.querySelector(".lists");
let array = [];
elForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = elInput.value.trim().toLocaleLowerCase();
  if (value.length > 20) {
    elMes.textContent = "Please enter less than 20 characters!";
    elForm.reset();
  } else if (value.length <= 0) {
    elMes.textContent = "Please fill the blank!";
  } else {
    elMes.textContent = "";
    const object = {
      id: Date.now(),
      name: value,
      year: "13",
      janr: "salom",
    };
    array.unshift(object);
    elForm.reset();
    showUI(array);
  }
});

function showUI(array) {
  elLists.innerHTML = "";
  array.forEach((element) => {
    elLists.innerHTML += `
          <li>
            <h5>${element.name}</h5>
            <p>${element.year}</p>
            <p>${element.janr}</p>
            <button class="edit">Edit</button>
            <button onclick = "deleteItem(${element.id})" class="delete">Delete</button>
          </li>
    `;
  });
}
function deleteItem(nazar) {
  array = array.filter((item) => item.id !== nazar);
  showUI(array);
}
