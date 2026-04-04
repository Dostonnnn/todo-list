const elInput = document.querySelector(".input");
const elButton = document.querySelector(".add");
const elList = document.querySelector("ul");
const elMessage = document.querySelector(".mes");
elButton.addEventListener("click", (event) => {
  event.preventDefault();
  const inputValue = elInput.value.trim();
  if (!inputValue) {
    elMessage.textContent = "Iltimos, biror narsa yozing!";
    elMessage.style.color = "aliceblue";
    return;
  }
  elMessage.textContent = "";
  elList.innerHTML += `
      <li>
        <h5>${inputValue}</h5> 
        <p>30.03.2026</p>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
      </li>
  `;
});
