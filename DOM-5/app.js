var randomInput = document.getElementById("toDoAdd");
var buttonAdd = document.getElementById("addGoal");
var editGoalButton = document.getElementById("editGoal");
var goalsList = document.getElementById("goalsList");
var editElemButton, deleteElemButton;
var goals = [];

editGoalButton.style.display = "none";

buttonAdd.addEventListener("click", function () {
  var newInput = {
    id: idCreator(6),
    value: randomInput.value,
  };

  goals.push(newInput);
  renderList();
  randomInput.value = "";
});

function editElem(edit) {
  editGoalButton.style.display = "block";
  buttonAdd.style.display = "none";
  let elemId = edit.getAttribute("id");
  let toEdit = goals.find((g) => g.id === elemId);

  randomInput.value = toEdit.value;
  editGoalButton.setAttribute("class", elemId);
}

editGoalButton.addEventListener("click", function () {
  let elemId = editGoalButton.getAttribute("class");

  console.log(goals.findIndex((g) => g.id === elemId));

  let index = goals.findIndex((g) => g.id === elemId);

  goals[index].value = randomInput.value;
  renderList();
  randomInput.value = "";
});

function deleteElem(edit) {
  let elemId = edit.getAttribute("id");

  goals = goals.filter((g) => g.id !== elemId);
  renderList();
  randomInput.value = "";
}

function renderList() {
  goalsList.innerHTML = "";
  goals.forEach((g) => {
    goalsList.innerHTML += `<li>${g.value}<button id="${g.id}" class='editElem' onclick='editElem(this)'>Edit</button><button id="${g.id}" class='deleteElem' onclick='deleteElem(this)'>Delete</button></li>`;
  });
}

function idCreator(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
