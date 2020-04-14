window.onload = init;

function init(){
  var button = document.getElementById("add_button");
  button.onclick = createSticky;

  var stickies = getStickiesArray();

  for(var i = 0; i < stickies.length; i++){
    var key = stickiesArray[i];
    var value = localStorage[key];
    addStickyNote(value);
  }
}

function getStickiesArray(){
  var stickiesArray = localStorage.getItem("stickiesArray");

  if(!stickiesArray) {
    stickiesArray = [];
    localStorage.setItem("stickiesArray", JSON.stringify(stickiesArray));
  } else {
    stickiesArray = JSON.parse(stickiesArray);
  }
  return stickiesArray;
}

function addStickyNote(value){
   var stickies = document.getElementById("stickies");
   
   //Create elements li and span
   var sticky = document.createElement("li");
   var span = document.createElement("span");

   span.setAttribute("class", "sticky");
   span.innerHTML = value;
   sticky.appendChild(span);
   stickies.appendChild(sticky);
}

function createSticky(){
  var value = document.getElementById("note_text").value;
  var key = "sticky_" + Date.now();

  localStorage.setItem(key, value);

  addStickyNote(value);
}