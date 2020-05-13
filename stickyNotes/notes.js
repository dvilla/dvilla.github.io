window.onload = init;

function init(){
  var button = document.getElementById("add_button");
  button.onclick = createStickyButtonFunction;

  var stickies = getStickiesArrayFromLocalStorage();

  for(var i = 0; i < stickies.length; i++){
    var key = stickies[i];
    var value = localStorage[key];
    addStickyNoteToTheDOM(key, value);
  }

  var input = document.getElementById("note_text");

  input.addEventListener("keyup", function(event){
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("add_button").click();
      this.value = "";
    }
  });
}

function getStickiesArrayFromLocalStorage(){
  var stickiesArray = localStorage.getItem("stickiesArray");

  if(!stickiesArray) {
    stickiesArray = [];
    localStorage.setItem("stickiesArray", JSON.stringify(stickiesArray));
  } else {
    stickiesArray = JSON.parse(stickiesArray);
  }
  return stickiesArray;
}

function addStickyNoteToTheDOM(key, value){
   var stickies = document.getElementById("stickies");
   
   //Create elements li and span
   var sticky = document.createElement("li");
   var span = document.createElement("span");
   var closeIcon = document.createElement("button");

   //Adding attributes to the span
   span.setAttribute("class", "sticky");
   span.setAttribute("id", key);

   //Adding attributes to the closeIcon
   closeIcon.setAttribute("class", "closeIconSticky");
   closeIcon.textContent += "X"
   closeIcon.onclick = deleteStickyNoteFromDOM;

   span.innerHTML = value;
   sticky.appendChild(span);
   span.appendChild(closeIcon);

   stickies.appendChild(sticky);
}

function createStickyButtonFunction(){
  var value = document.getElementById("note_text").value;
  if (value !== "") {
    var key = "sticky_" + Date.now();

    //Add stickies ID to the array on localStorage
    var stickiesArray = getStickiesArrayFromLocalStorage()
    stickiesArray.push(key)
    localStorage.setItem("stickiesArray", JSON.stringify(stickiesArray));

    localStorage.setItem(key, value);
    addStickyNoteToTheDOM(key, value);
    document.getElementById("note_text").value = "";
  }
}

function deleteStickyNoteFromLocalStorage(key){
  var stickiesArray = getStickiesArrayFromLocalStorage()
  for(var x = 0; x < stickiesArray.length; x++){
    if(stickiesArray[x] === key){
      stickiesArray.splice(x, 1);
    }
  }
  localStorage.removeItem(key)
  localStorage.setItem("stickiesArray", JSON.stringify(stickiesArray));
}

function deleteStickyNoteFromDOM(e){
  var key = e.target.parentNode.id;
  var stickyNote = document.getElementById(key);
  stickyNote.parentNode.style.display = "none";
  deleteStickyNoteFromLocalStorage(key)
}