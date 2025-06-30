let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");
let doneList = document.getElementById("done-list");

function createTask(taskText) {
  if (taskText.trim() === "") {
    alert("Please enter your task!");
    return;
  }

  let item = document.createElement("li");
  item.innerText = taskText;

  let delbtn = document.createElement("button");
  delbtn.innerText = "Delete";
  delbtn.classList.add("delete");

  let donebtn = document.createElement("button");
  donebtn.innerText = "Done";
  donebtn.classList.add("delete");
  donebtn.style.backgroundColor = "#28a745";
  donebtn.style.marginLeft = "10px";

  item.appendChild(donebtn);
  item.appendChild(delbtn);
  ul.appendChild(item);
  inp.value = "";
}

btn.addEventListener("click", function () {
  createTask(inp.value);
});

inp.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    createTask(inp.value);
  }
});

ul.addEventListener("click", function (event) {
  let item = event.target.parentElement;

  if (event.target.innerText === "Delete") {
    item.remove();
  } else if (event.target.innerText === "Done") {
    item.classList.add("completed");
    item.querySelectorAll("button").forEach(btn => btn.remove()); 
    doneList.appendChild(item);
  }
});
