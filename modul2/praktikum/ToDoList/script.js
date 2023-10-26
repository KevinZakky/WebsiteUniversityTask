const inputTask = document.getElementById("input-task");
const listTaskContainer = document.getElementById("list-task-container");

function add() {
  if (inputTask.value === "") {
    alert("Data harus terisi");
  } else {
    let listItems = document.createElement("li");
    listItems.innerHTML = inputTask.value;

    let editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    editButton.onclick = function () {
      editTask(listItems);
    };

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.onclick = function () {
      deleteTask(listItems);
    };

    listItems.appendChild(editButton);
    listItems.appendChild(deleteButton);

    listTaskContainer.appendChild(listItems);
  }

  inputTask.value = "";
  saveData();
}

listTaskContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    }
  },
  false
);

function editTask(listItem) {
  const updatedTask = prompt("Edit task: ");
  if (updatedTask !== null) {
    listItem.innerHTML = updatedTask;

    let editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    editButton.onclick = function () {
      editTask(listItem);
    };

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.onclick = function () {
      deleteTask(listItem);
    };

    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    saveData();
  }
}

function deleteTask(listItem) {
  if (confirm("Apakah Anda yakin ingin menghapus tugas ini?")) {
    listItem.remove();
    saveData();
  }
}

function saveData() {}
