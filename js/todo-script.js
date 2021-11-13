function arrow() {
  var toggle = document.getElementById("left");
  var toggleClose = document.getElementById("leftcollapsed");
  if (toggle.style.display === "none") {
    toggle.style.display = "flex";
    toggleClose.style.display = "none";
  } else {
    toggle.style.display = "none";
    toggleClose.style.display = "flex";
  }
}

function expand() {
  var toggle = document.getElementById("left");
  var toggleClose = document.getElementById("leftcollapsed")
  if (toggleClose.style.display === "flex") {
    toggle.style.display = "flex";
    toggleClose.style.display = "none";
  } else {
    toggle.style.display = "none";
    toggleClose.style.display = "flex";
  }
}

function rightToggle() {
  var toggle = document.getElementById("right-end-parent"); 
  console.log(toggle.style.display);
  if(toggle.style.display=="flex"){
    toggle.style.display="none";
  }
  else{
    toggle.style.display = "flex";
  }
}

var toDo = [{ head: "My Day", tasks: [] },
{ head: "Important", tasks: []},
{ head: "Planned", tasks: []},
{ head: "Assigned To Me", tasks: [] },
{ head: "Tasks", tasks: []}];

function viewMaker(clickedButton) {
  document.getElementById("space").innerText = toDo[clickedButton.value].head;
  document.getElementById("space").setAttribute("contenteditable", "false");
  document.getElementById("my-day-box").value = "";
  document.getElementById("new-list").value = "";
  document.getElementById("todoinserter").innerHTML = "";
  document.getElementById("add").value = clickedButton.value;
  if(clickedButton.value>4){
   var deleteButton = document.createElement("button");
  deleteButton.className = "deleteButtonCenter";
  deleteButton.setAttribute("onclick", "popup(this)");
  deleteButton.innerText = "...";
  deleteButton.value = toDo.length;
  document.getElementById("space").append(deleteButton);
  }
  if (clickedButton.getAttribute("editable") == "true") {
    document.getElementById("space").setAttribute("contenteditable", "true");
  }
  todoMaker(clickedButton.value);
  clickedButton.setAttribute("isclicked","true")
}

function rightEdit(edit) {
  document.getElementById("right-end-title").innerText = toDo[clickedButton.value].head;
  document.getElementById("right-end-title").setAttribute("contenteditable", "false");
  if (edit.getAttribute("editable") == "true") {
    document.getElementById("right-end-title").setAttribute("contenteditable", "true");
  }
}

function taskInsert(button) {
  if (document.getElementById("my-day-box").value != "") {
    var obj = {
      selected :false,taskName:document.getElementById("my-day-box").value,subTasks:[]
    }
    toDo[button.value].tasks.push(obj);
    todoMaker(button.value);
    document.getElementById("my-day-box").value = "";
    console.log(toDo);
  }
}
function todoMaker(index) {
  document.getElementById("todoinserter").innerHTML = "";
  var parent = document.getElementById("todoinserter");
  toDo[index].tasks.forEach(function (todovalue, i) {
  var newLine = document.createElement("div");
  newLine.setAttribute("contenteditable", "true");
  newLine.setAttribute("onblur", "editValue(this)");
  var x = document.createElement("INPUT");
  x.setAttribute("type", "checkbox");
  x.className = "check-list";
  x.setAttribute("onclick", "checkList(this)");
  x.setAttribute("index", i)
  newLine.setAttribute("index", i);
  newLine.className = "line";
  if(toDo[index].tasks[i].selected==true){
   newLine.style.textDecoration = 'line-through';
   x.checked=true;
  }
  else{
    newLine.style.textDecoration = 'none';
    x.checked=false;
  }
  newLine.innerText = todovalue.taskName;
  newLine.setAttribute("onclick", "rightHead(this)");
  // newLine.setAttribute("onclick", "rightToggle()");
  newLine.append(x);
  parent.append(newLine);
  });
}
function addTodo() {
  var inputValue = document.getElementById("new-list").value;
  if (inputValue != "") {
    var newDiv = document.createElement("div");
    var newButton = document.createElement("button");
    newButton.setAttribute("onclick", "viewMaker(this)");
    newButton.setAttribute("editable", "true");
    newButton.setAttribute("value", toDo.length);
    newButton.id = inputValue;
    newButton.innerText = inputValue;
    newDiv.className = "left-added-task"
    newButton.className = "new-styling-todo";
    var newlistIcon = document.createElement("img");
    newlistIcon.setAttribute("src", "../css/list.png");
    newlistIcon.className = "list-icon";
    // var deleteButton = document.createElement("button");
    // deleteButton.className = "deleteButton";
    // deleteButton.setAttribute("onclick", "popup()");
    // deleteButton.innerText = "Del";
    // deleteButton.value = toDo.length;
    newDiv.append(newlistIcon);
    newDiv.append(newButton);
    // newDiv.append(deleteButton);
    document.getElementById("added-task").append(newDiv);
    var newObj = { head: inputValue, tasks: [] };
    toDo.push(newObj);
    viewMaker(newButton);
  }
}
function popup(element) {
  var pop = document.getElementsByClassName("delete-line");
  var popUp=document.getElementById("space").innerText;
  popUp = popUp.substring(0, popUp.length - 3);
  pop[0].append(`"${popUp}" `+"will be permanatly deleted");
  if(element.innerText == "...") {
    document.getElementById('pop').style.display='block';
    document.getElementById("popup-delete").value = element.value;
    document.getElementById("popup-delete").setAttribute("deletetype","task")
  }
  else if(element.innerText == "Cancel"){
    document.getElementById('pop').style.display='none';
  } 
  else {
    document.getElementById('pop').style.display='block';
    document.getElementById("popup-delete").value = element.getAttribute("index");
    document.getElementById("popup-delete").setAttribute("deletetype","subtask")
    console.log(element.getAttribute("index"));
  }
}

function rightCheck() {
  console.log("hi")
  var checkList = document.getElementsByClassName("check-list");
  temp = document.getElementById("right-end-title").innerText;
  var line = document.getElementsByClassName("line");
  console.log(document.getElementById("right-end-title").style.textDecoration)
  if (document.getElementById("right-end-title").style.textDecoration == "none") {
    for (var i = 0; i < line.length; i++) {
      if (line[i].innerText == temp) {
        document.getElementById("right-end-title").style.textDecoration="line-through";
        line[i].style.textDecoration = "line-through";
        checkList[i].checked = true;
      }
    }
  } else {
    console.log("hiii")
    for (var i = 0; i < line.length; i++) {
      if (line[i].innerText == temp) {
        document.getElementById("right-end-title").style.textDecoration="none";
        line[i].style.textDecoration = "none";
        checkList[i].checked = false;
      }
    }
  }
}

// To edit the task name in the center 


function editValue(elem) {
  if (elem.innerText == "" && elem.className != "line") {
    document.getElementById(toDo[document.getElementById("add").value].head).remove();
    toDo.splice(document.getElementById("add").value, 1);
    viewMaker(document.getElementById("myDay"));
  }
  else if (elem.className != "line") {
    document.getElementById(toDo[document.getElementById("add").value].head).innerText = elem.innerText;
    document.getElementById(toDo[document.getElementById("add").value].head).id = elem.innerText;
    toDo[document.getElementById("add").value].head = elem.innerText;
  }
  if (elem.className == "line") {
    var linebyClass = document.getElementById("todoinserter").getElementsByClassName("line")[elem.getAttribute("index")];
    if (elem.innerText == "") {
      toDo[document.getElementById("add").value].tasks.splice(elem.getAttribute("index"), 1);
      linebyClass.remove();
    }
    else {
      toDo[document.getElementById("add").value].tasks[elem.getAttribute("index")].taskName = elem.innerText;
    }
  }
}

// function deleteNewTask() {
//   var deleteButton = document.createElement("button");
//   deleteButton.className = "deleteButton";
//   deleteButton.setAttribute("onclick", "popup()");
//   deleteButton.innerText = "Del";
//   deleteButton.value = toDo.length;
// }

// To delete the added task in the left panel

function deleteList(elem) {
  toDo.splice(elem.value, 1);
  elem.parentElement.remove();
  viewMaker(document.getElementById("myDay"));
}

function deleteNextTask(element) {
  console.log(element.getAttribute("deletetype"),element.value);
  if(element.getAttribute("deletetype")== "task"){
    toDo.splice(element.value, 1);
    viewMaker(document.getElementById("myDay"));
    document.getElementsByClassName("left-added-task")[element.value-6].remove();
  }
  else {
    document.getElementsByClassName("line sub-line")[element.value].remove();
    console.log(document.getElementsByClassName("line sub-line")[element.value]);
    
  }
  document.getElementById('pop').style.display='none';
}

// To add the list name in the right panel

function rightHead(element) {
  selectedTodo= toDo[document.getElementById("add").value].tasks[element.getAttribute("index")];
  document.getElementById("right-end-title").innerText = selectedTodo.taskName;
  if(selectedTodo.selected==true){
    document.getElementById("right-end-title").style.textDecoration="line-through";
    document.getElementsByClassName("right-corner-input")[0].checked=true;
  }
  else{
    document.getElementById("right-end-title").style.textDecoration="none";
    document.getElementsByClassName("right-corner-input")[0].checked=false;

  }
  document.getElementsByClassName("right-corner-input")[0].setAttribute("index",element.getAttribute("index"));
  console.log(selectedTodo );
  rightToggle()
}


// This function to strikeout the text when we check the checkbox


function checkList(element) { 
  console.log();
  var index = element.getAttribute("index");
  var task = document.getElementsByClassName("check-list")[index];
  var strikeOut = document.getElementsByClassName("line")[index];
  if (task.checked)
  {
    strikeOut.style.textDecoration = 'line-through';
    toDo[document.getElementById("add").value].tasks[index].selected=true;
  }
  else
  {
    strikeOut.style.textDecoration = 'none';
    toDo[ document.getElementById("add").value].tasks[index].selected=false;
  }
  console.log(toDo);
  rightHead(strikeOut) 
}

function subtaskInsert(elem) {
  var newLine = document.createElement("div");
  var index = document.getElementsByClassName("section-item")[0].getElementsByClassName("sub-line").length;
  newLine.setAttribute("contenteditable", "true");
  newLine.setAttribute("onblur", "editValue(this)");
  var x = document.createElement("INPUT");
  x.setAttribute("type", "checkbox");
  x.className = "check-list";
  x.setAttribute("index", index);
  x.setAttribute("onclick", "checkRightList(this)");
  newLine.className = "line sub-line";
  var deleteButton = document.createElement("button");
  deleteButton.className = "deleteButton";
  deleteButton.setAttribute("index", index);
  deleteButton.setAttribute("onclick", "popup(this)");
  deleteButton.innerText = "✖";
  deleteButton.value = toDo.length;
  newLine.innerText =document.getElementById("right-input").value;
  newLine.setAttribute("onclick", "rightHead(this)");
  newLine.style.marginTop="10px";
  newLine.append(x);
  newLine.append(deleteButton);
  document.getElementsByClassName("section-item")[0].append(newLine);
  document.getElementById("right-input").value="";
  console.log(document.getElementsByClassName("section-item")[0].getElementsByClassName("line").length)
}

function checkRightList(element) { 
  var index = element.getAttribute("index");
  var task = document.getElementsByClassName("check-list")[index];
  var strikeOut = document.getElementsByClassName("sub-line")[index];
  console.log(element, task, strikeOut);
  if (element.checked)
  {
    strikeOut.style.textDecoration = 'line-through';
    toDo[document.getElementById("add-right-task").value].tasks[index].selected=true;
  }
  else
  {
    strikeOut.style.textDecoration = 'none';
    toDo[ document.getElementById("add-right-task").value].tasks[index].selected=false;
  }
  console.log(toDo);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == document.getElementById('pop')) {
    document.getElementById('pop').style.display = "none";
  }
}