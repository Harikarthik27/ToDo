let rightPanel= { MyDay : [], Important: [],
    Planned: [],Tasks: []
  }
    let inputbox=document.createElement("input");
    let button=document.createElement("button");
    var text = document.createTextNode("+");
    var newLine=document.createElement("br");
    button.appendChild(text);
    var box=document.createElement("div")
    box.setAttribute('id','textBox')
  function important(value) {
    rightSide.innerText="";
    button.setAttribute('id','adder');
    inputbox.setAttribute('id','myDayBox');
    inputbox.setAttribute('placeholder','Add a task')
    var box=document.createElement("div")
    box.setAttribute('id','textBox')
    rightSide.appendChild(box)
    rightSide.append(newLine,inputbox,button);
    box.append(value)
    newId=value;
    var rightCorner=document.getElementById("rightSide");
    let header=document.getElementById(newId).innerText;
    console.log(header);
    var text=document.createTextNode(header);
    let myDayBox=document.getElementById("myDayBox");
    console.log(text);
    var add=document.getElementById("adder");
    add.onclick=function(addingTask){
      let subtext=document.getElementById("myDayBox").value;
      console.log(subtext);
      rightPanel[header].push(subtext);
      console.log(rightPanel);
      inputbox.value="";
      rightSide.append(subtext)
    }
    for (let index = 0; index < rightPanel[header].length; index++) {
      console.log("success")
      let createdDiv = document.createElement("li");
      createdDiv.setAttribute('id','putLine');
      let createdText = document.createTextNode(rightPanel[header][index]);
      
      createdDiv.appendChild(createdText)
      rightSide.appendChild(createdDiv)
    }
  }
  function assignedToMe(value) {
    var output=document.getElementById("clickassign").innerHTML;
    output.innerHTML="";
    document.getElementById("textBox").innerHTML=value;
    var tag = document.createElement("button");
    var text = document.createTextNode("...");
    tag.classList.add("myDayDotButton");
    tag.appendChild(text);
    var element = document.getElementById("textBox");
    element.appendChild(tag);
    tag = document.createElement('img');
    tag.classList.add("assigning-Image");
    tag.src='assets/assign.svg';
    element.appendChild(tag);
    tag = document.createElement("div");
    text = document.createTextNode("Task assigned to you in To Do or Planner show up here");
    tag.classList.add("assign-text");
    tag.appendChild(text);
    element.appendChild(tag);
    let horizontalLines=document.getElementsByClassName("lines");
    horizontalLines[0].style.display="none";
    let box=document.getElementsByClassName("myDayTask")
    box[0].style.display="none";
  }
  function hide() {
    var x = document.getElementById("menuBox");
    var y =document.getElementById("leftcollapsed");
    if (x.style.display==="none") {
      x.style.display="flex";
      y.style.display="none";
    } else {
      x.style.display="none";
      y.style.display="flex";
    }
  }
  function arrowexpand() {
    var x = document.getElementById("menuBox");
    var y =document.getElementById("leftcollapsed")
    if (y.style.display==="flex") {
      x.style.display="flex";
      y.style.display="none";
    } else {
      x.style.display="none";
      y.style.display="flex";
    }
  }
  function showTask() {
    rightSide.innerHTML="";
    let boxInput=document.getElementById("new-list");
    let newTask=document.getElementById("added-task");
    var listing=document.createElement("li");
    listing.classList.add('new-styling');
    listing.innerText=boxInput.value;
    newTask.appendChild(listing);
    boxInput.value="";
    let heading=document.getElementById("textBox");
    var flow=listing.innerText;
    console.log(flow);
    // heading.innerHTML=flow;
    rightSide.append(flow,newLine,inputbox,button);
    listing.addEventListener('click',function() {
      rightSide.innerHTML="";
      rightSide.append(flow,newLine,inputbox,button);
      // heading.innerHTML=flow;
      // rightSide.append(newLine,inputbox,button);
      // heading.innerHTML=flow;
      // heading.innerHTML=listing.innerText;
      // let area=document.getElementsByClassName("line");
      // area.innerText="";
      // let horizontalLines=document.getElementsByClassName("lines");
      // horizontalLines[0].style.display="block";
      // let box=document.getElementsByClassName("myDayTask")
      // box[0].style.display="block";
    })	
  }
  
  
  // let rightPanel= { MyDay : [], Important: [],
  //   Planned: [],Tasks: []
  // function myDay(value) {
  //     var output=document.getElementById("textBox").innerHTML;
  //     output.innerHTML="";
  //     document.getElementById("textBox").innerHTML=value;
  //     var tag = document.createElement("p");
  //     var text = document.createTextNode("Wednesday,October 27");
  //     tag.classList.add("my-class");
  //     tag.appendChild(text);
  //     var element = document.getElementById("textBox");
  //     element.appendChild(tag);
  //     let area=document.getElementsByClassName("line");
  //     area[0].innerText="";
  //     let horizontalLines=document.getElementsByClassName("lines");
  //     horizontalLines[0].style.display="block";
  //     let box=document.getElementsByClassName("myDayTask")
  //     box[0].style.display="block";
  //   }
  //   function important(value) {
  //     var output=document.getElementById("textBox").innerHTML;
  //     output.innerHTML="";
  //     document.getElementById("textBox").innerHTML=value;
  //     let area=document.getElementsByClassName("line");
  //     area[0].innerText="";
  //     let horizontalLines=document.getElementsByClassName("lines");
  //     horizontalLines[0].style.display="block";
  //     let box=document.getElementsByClassName("myDayTask")
  //     box[0].style.display="block";
  //     let title=document.getElementById(value).innerText;
  //     var entervalue=document.getElementById("add");
  //     entervalue.onclick=function(){
  //       let subText=document.getElementById("myDayBox");
  //       let lineArea=document.getElementsByClassName("line")
  //       let emptySpace=document.createElement("br");
  //       let  para=subText.value
  //       lineArea[0].append(para);
  //       rightPanel[title].push(para);
  //       subText.value="";
  //     }
  //     for (let index = 0; index < rightPanel[title].length; index++) {
  //           console.log("success")
  //           let createdDiv = document.createElement("li");
  //           let createdText = document.createTextNode(rightPanel[title][index]);
            
  //           createdDiv.appendChild(createdText)
  //           rightSide.appendChild(createdDiv)
  //     }
  //   }
  
    // function planned(value) {
    //   var output=document.getElementById(value).innerHTML;
    //   output.innerHTML="";
    //   document.getElementById("textBox").innerHTML=value; 
    //   let area=document.getElementsByClassName("line");
    //   area[0].innerText="";
    //   let horizontalLines=document.getElementsByClassName("lines");
    //   horizontalLines[0].style.display="block";
    //   let box=document.getElementsByClassName("myDayTask")
    //   box[0].style.display="block";
    //   let title=document.getElementById(value).innerText;
    //   var entervalue=document.getElementById("add");
    //   entervalue.onclick=function(){
    //     let subText=document.getElementById("myDayBox");
    //     let lineArea=document.getElementsByClassName("line")
    //     let emptySpace=document.createElement("br");
    //     let  para=subText.value
    //     lineArea[0].append(para);
    //     rightPanel[title].push(para);
    //     subText.value="";
    //   }
    //   for (let index = 0; index < rightPanel[title].length; index++) {
    //         console.log("success")
    //         let createdDiv = document.createElement("li");
    //         let createdText = document.createTextNode(rightPanel[title][index]);
    //         createdDiv.appendChild(createdText)
    //         area.appendChild(createdDiv)
    //   }
    // }
  