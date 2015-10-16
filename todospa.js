addItem = function() {
  var list, newitem, selected, classnew; 
  list = document.querySelector("#lista");
  list.type = none; 
  alert("Style Change");
  newitem = document.createElement("li");
  classnew = document.querySelector("#priority").value;
  newitem.class = classnew;
  box = document.createElement("input");
  box.type = "checkbox"; 
  taskdata = document.querySelector("#task").value;
  tasknode = document.createTextNode(taskdata);
  newitem.appendChild(box);
  newitem.appendChild(tasknode);
  list.appendChild(newitem);
  alert("The Button was clicked");
}
