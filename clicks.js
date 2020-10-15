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
  getCurrentJobTime();
}

function getCurrentJobTime(){
  var current_job = document.getElementById("current_job");
  var initial_date = new Date(2020, 4, 22);
  var date_now = new Date(Date.now());
  var initial_date_month_and_year = getMonthAndYear(initial_date);
  var date_now_month_and_year = getMonthAndYear(date_now);

  var total_months = date_now.getFullYear() * 12;
  total_months -= initial_date.getFullYear() * 12;
  total_months += date_now.getMonth();
  total_months -= initial_date.getMonth();

  current_job.innerText = initial_date_month_and_year +  " – " + date_now_month_and_year + " ~ " + total_months + " mos";
}

function getMonthAndYear(date){
  const monthNames = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var monthName = monthNames[date.getMonth()];
  var year = date_now_year = date.getFullYear();
  return monthName + " " + year;
}

window.onload = init;