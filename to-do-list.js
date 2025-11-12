const addInput = document.querySelector(".title-border input");
const addBtn = document.getElementById("to-do-button");
const tasksList = document.querySelector(".list-border ol");
const listXBtn = document.getElementById("list-x-button");

addBtn.addEventListener("click", addTask);

function addTask(event) {
  if (event) {
    event.preventDefault();
  }
  const inpValue = addInput.value.trim();

  if (inpValue === "") {
    alert("Task required");
  } else {
    const listItem = document.createElement("li");
    
    listItem.innerHTML = `${inpValue} <button class="list-x-button">X</button>`;

    tasksList.appendChild(listItem);
    addInput.value = "";
    
    const deleteBtn = listItem.querySelector(".list-x-button");
deleteBtn.addEventListener("click", function() {
  listItem.remove();
});
  }
}
