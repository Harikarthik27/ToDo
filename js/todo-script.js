// funcion newList() {
//     var firstList = document.getElementById('firstlist');
//     var inputField = document.getElementById('newlist');
//     var para = document.createElement('p');
//     para.classList.add('p-style');
//     para.innerText = inputField.value;
//     firstList.appendChild(para);
//     inputField.value = "";

//   }
// var page;
// const myDaySubTask = [];
// const plannedSubTask = [];

// function myDay(taskName) {
//   var results = document.getElementById("textBox").innerHTML="";
//   var results = document.getElementById("textBox").innerHTML= taskName;
//   let pageLines=document.getElementsByClassName("lines");
//   pageLines[0].style.display="block";
//   let listBox=document.getElementsByClassName("myDayTask")
//   listBox[0].style.display="block"; 

// }

//   function important(taskName) {
//     page=taskName;
//     var results = document.getElementById("textBox").innerHTML= "";
//     var results = document.getElementById("textBox").innerHTML= taskName;
//     let pageLines=document.getElementsByClassName("lines");
//     pageLines[0].style.display="block";
//     let listBox=document.getElementsByClassName("myDayTask")
//     listBox[0].style.display="block"; 

//   }

//   function planned(taskName) {
//     page=taskName;
//     var results = document.getElementById("textBox").innerHTML= taskName;
//     let pageLines=document.getElementsByClassName("lines");
//     pageLines[0].style.display="block";
//     let listBox=document.getElementsByClassName("myDayTask")
//     listBox[0].style.display="block"; 

//   }

//   function assigned(taskName) {
//     page=taskName;
//     var results = document.getElementById("textBox").innerHTML= taskName;
//     let pageLines=document.getElementsByClassName("lines");
//     pageLines[0].style.display="none";
//     let listbox=document.getElementsByClassName("myDayTask")
//     listbox[0].style.display="none";
//   }

//   function task() {
//     var results = document.getElementById("textBox").innerHTML= taskName;
//   }



function arrow() {
  var x = document.getElementById("left");
  var y = document.getElementById("leftcollapsed");
  if (x.style.display === "none") {
    x.style.display = "flex";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "flex";
  }
}
function expand() {
  var x = document.getElementById("left");
  var y = document.getElementById("leftcollapsed")
  if (y.style.display === "flex") {
    x.style.display = "flex";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "flex";
  }
}



//   function newlist() {
//     var newListName=document.getElementById("newlist");
//     var output=document.getElementById("Textboxes");
//     var firstlist=document.getElementById("firstlist");
//     output.innerHTML="";
//     output.innerHTML +=newListName.value;
//     firstlist.innerHTML+=newListName.value;
//     newListName.innerHTML+="";
//   }



//   function showTask() {
//       let boxInput=document.getElementById("new-list");
//       let newTask=document.getElementById("added-task");
//       var listing=document.createElement("li");
//       listing.classList.add('new-styling');
//       listing.innerText=boxInput.value;
//       newTask.appendChild(listing);
//       boxInput.value="";
//       let heading=document.getElementsByClassName("leftClick");
//       var flow=listing.innerText;
//       heading[0].innerHTML=flow;
//       listing.addEventListener('click',function() {
//       heading[0].innerHTML=listing.innerText;
//       let area=document.getElementsByClassName("line");
//       area[0].innerText="";
//       let horizontalLines=document.getElementsByClassName("lines");
//       horizontalLines[0].style.display="block";
//       let box=document.getElementsByClassName("myDayTask")
//       box[0].style.display="block";
//       })	
//   }
//    function addingSubTask(){
//     let subtext=document.getElementById("myDayBox");
//     let area=document.getElementsByClassName("line");
//     var paragraph=document.createElement("li");
//       if(page=="Important"){
//         myDaySubTask.push(subtext);
//         console.log(myDaySubTask);
//         for(var i=0;i<myDaySubTask.length;i++){

//           paragraph.classList.add("new-style");
//           paragraph.innerText=myDaySubTask[i].value;
//             area[i].append(paragraph);
//           }
//       }
//       if(page=="Planned"){
//         plannedSubTask.push(subtext);
//         console.log(plannedSubTask);
//         for(var i=0;i<plannedSubTask.length;i++){

//           paragraph.classList.add("new-style");
//           paragraph.innerText=plannedSubTask[i].value;
//             area[i].append(paragraph);
//           }
//       }

//        //let area=document.getElementsByClassName("line");
//       // var paragraph=document.createElement("li");
//       // paragraph.classList.add("new-style");
//       // paragraph.innerText=subtext.value;
//       // area[0].appendChild(paragraph);
//       // subtext.value="";
//       // myDaySubTask.push(subtext);
//       // console.log(myDaySubTask);
//     }


// var todoconfiuration={myday:[],importantDay:[],plannedDay:[],assignedToMe:[]};

// function todoMaker(element){
//   document.getElementById("myDayBox").value="";
//    document.getElementById("todoinserter").innerHTML="";
//    document.getElementById("add").value=element.value;
//    addValue(element.value);
// }
// function addValueToArray(addbutton){
//   document.getElementById("todoinserter").innerHTML="";
//     todoconfiuration[addbutton.value].push(document.getElementById("myDayBox").value);
//     addValue(addbutton.value);
//      document.getElementById("myDayBox").value="";
// }
// function addValue(elem){
//   var parent = document.getElementById("todoinserter");
//   todoconfiuration[elem].forEach(todovalue => {
//     var newLine=document.createElement("div");
//     newLine.className="line";
//     newLine.innerText=todovalue;
//     parent.append(newLine);
//   });
// }


var toDo = [{ head: "My Day", tasks: [] },
{ head: "Important", tasks: [] },
{ head: "Planned", tasks: [] },
{ head: "Assigned To Me", tasks: [] },
{ head: "Tasks", tasks: [] }];

function viewMaker(clickedButton) {
  document.getElementById("space").innerText = toDo[clickedButton.value].head;
  document.getElementById("space").setAttribute("contenteditable", "false");
  document.getElementById("myDayBox").value = "";
  document.getElementById("new-list").value = "";
  document.getElementById("todoinserter").innerHTML = "";
  document.getElementById("add").value = clickedButton.value;
  if (clickedButton.getAttribute("editable") == "true") {
    document.getElementById("space").setAttribute("contenteditable", "true");
  }
  todoMaker(clickedButton.value);
}
function taskInsert(button) {
  if (document.getElementById("myDayBox").value != "") {
    toDo[button.value].tasks.push(document.getElementById("myDayBox").value);
    todoMaker(button.value);
    document.getElementById("myDayBox").value = "";
  }
}
function todoMaker(index) {
  document.getElementById("todoinserter").innerHTML = "";
  var parent = document.getElementById("todoinserter");
  toDo[index].tasks.forEach(function (todovalue, index) {
    var newLine = document.createElement("div");
    newLine.setAttribute("contenteditable", "true");
    newLine.setAttribute("onblur", "editValue(this)");
    newLine.setAttribute("index", index);
    newLine.className = "line";
    newLine.innerText = todovalue;
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
    var deleteButton = document.createElement("button");
    deleteButton.className = "deleteButton";
    deleteButton.setAttribute("onclick", "deleteList(this)");
    deleteButton.innerText = "Del";
    deleteButton.value = toDo.length;
    newDiv.append(newlistIcon);
    newDiv.append(newButton);
    newDiv.append(deleteButton);
    document.getElementById("added-task").append(newDiv);
    var newObj = { head: inputValue, tasks: [] };
    toDo.push(newObj);
    viewMaker(newButton);
  }

}
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
      toDo[document.getElementById("add").value].tasks[elem.getAttribute("index")] = elem.innerText;
    }
  }
}
function deleteList(elem) {
  toDo.splice(elem.value, 1);
  elem.parentElement.remove();
  viewMaker(document.getElementById("myDay"));

}