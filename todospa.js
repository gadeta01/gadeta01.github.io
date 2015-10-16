addItem = function() {
  var list, newitem, selected, classnew; 
  list = document.querySelector("#lista");
  newitem = document.createElement("li");
  classnew = document.querySelector("#priority").value;
  newitem.class = classnew;
  box = document.createElement("input");
  box.type = "checkbox"; 
  alert(box);
  taskdata = document.querySelector("#task").value;
  alert(taskdata);
  //tasknode = document.createTextNode(taskdata);
  //list.appendChild(newitem);
  //newitem.appendChild(box);
  //newitem.appendChild(tasknode);
  alert("The Button was clicked");
}
