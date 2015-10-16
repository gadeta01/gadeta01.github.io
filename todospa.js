addItem = function() {
  var list, newitem, selected, classnew; 
  list = document.querySelector("#lista");
  alert(list);
  newitem = document.createElement("li");
  alert(newitem);
  classnew = document.querySelector("#priority").value;
  newitem.class = classnew;
  alert(newitem.class);
  //box = document.createElement("input");
  //box.type = "checkbox"; 
  //taskdata = document.querySelector("#task").value;
  //tasknode = document.createTextNode(taskdata);
  //list.appendChild(newitem);
  //newitem.appendChild(box);
  //newitem.appendChild(tasknode);
  alert("The Button was clicked");
}
