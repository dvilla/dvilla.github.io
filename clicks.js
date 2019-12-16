function getRandomColor(){
  var letters = '0123456789ABCDEF';
  var color = '#';
  for(var i = 0; i < 6; i++){
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeColor(){
  this.style.color = getRandomColor();
}

function init(){
  var firstName = document.getElementById("tname");
  firstName.onclick = changeColor;
}

window.onload = init;