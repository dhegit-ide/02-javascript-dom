// Selector
const input = document.querySelector(".shopList__input");
const button = document.querySelector(".shopList__button");
const list = document.querySelector(".shopList__list");

// Event Listeners
button.addEventListener("click", addTodo);
list.addEventListener("click", deleteCheck);

function addTodo(ev) {
  ev.preventDefault();

  // Create element DIV
  // <div class="shopList"></div>
  const elDiv = document.createElement("div");
  elDiv.classList.add("shopList");

  // Create element LI
  // <div class="shopList">
  // // <li class="shopList__item"></li>
  // </div>
  const myList = document.createElement("li");
  myList.classList.add("shopList__item");
  elDiv.appendChild(myList);

  // Create element button
  // <div class="shopList">
  // // <li class="shopList__item"></li>
  // // <button class="trash__btn"></button>
  // </div>
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="bi bi-trash"></i>';
  trashButton.classList.add("trash__btn");
  elDiv.appendChild(trashButton);

  console.log(elDiv.value);

  if (input.value === "") {
    alert("input tidak boleh kosong");
  } else {
    if (input.value == myList.value) {
      // input spasi tak ditanggapi
      return;
    } else {
      myList.innerText = input.value;
      // Append to list
      // <ul class="shopList__list">
      // // <div class="shopList">...</div>
      // </ul>
      list.appendChild(elDiv);
      // Mengosongkan input
      input.value = "";
    }
  }
}

function deleteCheck(event) {
  const item = event.target;
  // Delete Todo
  if (item.classList[0] === "trash__btn") {
    const todo = item.parentElement;
    todo.remove();
  }
}
