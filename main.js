const elForm = document.querySelector(".form");
const elInput = document.querySelector(".input");
const elMessage = document.querySelector(".mes");
const elUl = document.querySelector("ul");
let array = [];
elForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const elValue = elInput.value.trim();
  if (elValue.length > 20) {
    elMessage.textContent = "20 char dan oshmasin!";
    elForm.reset();
  } else {
    if (!elValue)
      return (elMessage.textContent = "Iltimos maydonni toldiring!");
    else {
      elMessage.textContent = "";
      const info = {
        value: elValue,
        date: "12.02.2026",
        isCompleted: false,
      };
      array.unshift(info);
      showInformation(array);
      elForm.reset();
    }
  }
});
function showInformation(infor) {
  elUl.innerHTML = "";
  infor.forEach((element) => {
    elUl.innerHTML += `
          <li>
            <h5>${element.value}</h5>
            <p>${element.date}</p>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
          </li>
          `;
  });
}
