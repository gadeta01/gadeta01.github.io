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
}

slash = function() {
  if (this.checked) {
  alert(this.parentNode); 
  this.parentNode.classList.add("done");
  alert("Hello, who am I?");
  }
  else {
    this.parentNode.classList.remove("done");
    alert(this.parentNode.classList)
  }
}


