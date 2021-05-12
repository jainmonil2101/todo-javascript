var arr = [];
var task = document.getElementById("task");
var ol = document.getElementById("ol");

function add() {
  var li = document.createElement("li");
  var deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "btn btn-danger btn-sm m-1");
  deleteButton.innerText = "Delete";
  arr.push(task.value);
  li.setAttribute("id", task.value);
  li.appendChild(document.createTextNode(task.value));
  li.appendChild(deleteButton);
  ol.appendChild(li);
  console.log(arr);
  task.value = "";

  deleteButton.onclick = (e) => {
    e.preventDefault()
    ol.removeChild(li)
  }
}

function remove() {
  if (confirm("Are you sure want to clear the tasks list?")) {
    document.getElementById("ol").innerHTML = "";
  }
}

