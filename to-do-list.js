const addInput = document.querySelector('.title-border input[type="text"]');
const addBtn = document.getElementById("to-do-button");
const tasksList = document.querySelector(".list-border ol");

addBtn.addEventListener("click", addtask);

function addTask() {
  const inpValue = addInput.inpValue.trim();
  if (inputValue != "") {
    alert("task required");
  } else {
    const listItems = document.createElement("li");
    listItemsHTML = inpValue.Value;
  }
}
function showItem() {
  listItems.push(listItems);
  for (let i = 0; i < listItems.length; i++) {
    tasksList.appendChild(listItems[i]);
  }
}
