window.onload = function() {
    restoreList("#lista", slash);
}

addItem = function() {
  var list, newitem, selected, classnew; 
  list = document.querySelector("#lista");
  newitem = document.createElement("li");
  classnew = document.querySelector("#priority").value;
  newitem.className = classnew;
  box = document.createElement("input");
  box.type = "checkbox"; 
  box.onclick = slash; 
  taskdata = document.querySelector("#task").value;
  tasknode = document.createTextNode(taskdata);
  newitem.appendChild(box);
  newitem.appendChild(tasknode);
  list.appendChild(newitem);
  localSave("#lista");
}

slash = function() {
  if (this.checked) {
  this.parentNode.classList.add("done");
  }
  else {
    this.parentNode.classList.remove("done");
  }
}


