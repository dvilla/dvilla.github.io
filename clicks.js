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

function getCurrentJobTime() {
  const currentJobElem = document.getElementById("current_job");
  const initialDate = new Date(2020, 10, 30);
  const currentDate = new Date();
  const { years, months } = calculateTotalTime(initialDate, currentDate);
  const formattedDateRange = formatDateRange(initialDate, currentDate);

  currentJobElem.innerText = formattedDateRange + " ~ " + years + " yrs, " + months + " mos";
}

function calculateTotalTime(startDate, endDate) {
  const startYear = startDate.getFullYear();
  const endYear = endDate.getFullYear();
  const startMonth = startDate.getMonth();
  const endMonth = endDate.getMonth();

  let years = endYear - startYear;
  let months = endMonth - startMonth;

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months };
}

function formatDateRange(startDate, endDate) {
  const startMonth = startDate.toLocaleString('default', { month: 'short' });
  const endMonth = endDate.toLocaleString('default', { month: 'short' });
  const startYear = startDate.getFullYear();
  const endYear = endDate.getFullYear();
  const dateRange = startMonth + " " + startYear + " - " + endMonth + " " + endYear;
  return dateRange;
}

window.onload = init;