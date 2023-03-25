window.onload = initiateGame;

let statesAndCapitals = [
  ["MEX2706", "Mexicali", "840px 480px"],
  ["MEX2707", "La Paz", "720px 480px"],
  ["MEX2708", "Saltillo", "480px 480px"],
  ["MEX2709", "Chihuahua", "120px 480px"],
  ["MEX2710", "Victoria de Durango", "840px 360px"],
  ["MEX2711", "Culiacan Rosales", "960px 120px"],
  ["MEX2712", "Hermosillo", "840px 118px"],
  ["MEX2713", "Zacatecas", "120px 120px"],
  ["MEX2714", "Monterrey", "720px 240px"],
  ["MEX2715", "San Luis Potosi", "120px 240px"],
  ["MEX2716", "Ciudad Victoria", "600px 120px"],
  ["MEX2717", "Aguascalientes", "960px 480px"],
  ["MEX2718", "Colima", "360px 480px"],
  ["MEX2719", "Guadalajara", "360px 360px"],
  ["MEX2720", "Morelia", "120px 360px"],
  ["MEX2721", "Tepic", "840px 238px"],
  ["MEX2722", "San Francisco de Campeche", "600px 480px"],
  ["MEX2723", "Oaxaca de Juarez", "600px 240px"],
  ["MEX2724", "Puebla de Zaragoza", "480px 240px"],
  ["MEX2725", "Villahermosa", "720px 120px"],
  ["MEX2726", "Tlaxcala de Xicohtencatl", "480px 119px"],
  ["MEX2728", "Guanajuato", "720px 360px"],
  ["MEX2729", "Chilpancingo de los Bravos", "600px 360px"],
  ["MEX2730", "Pachuca de Soto", "480px 360px"],
  ["MEX2731", "Toluca de Lerdo", "240px 360px"],
  ["MEX2732", "Cuernavaca", "960px 238px"],
  ["MEX2733", "Santiago de Queretaro", "360px 240px"],
  ["MEX2734", "Xalapa-Enriquez", "360px 120px"],
  ["MEX2735", "Tuxtla Gutierrez", "240px 480px"],
  ["MEX2736", "Chetumal", "240px 240px"],
  ["MEX2737", "Merida", "240px 120px"],
];

let mistakes = 0;
let randomNumber;
let randomState;
let stateMapElement;
let stateMapElementName;
let stateTextElement;
let userAnswer;
let answer;
let stateFlag;

function initiateGame() {
  setNewState();
  addKeyListener();
  displayMistakes();
}

function displayMistakes() {
  mistakesElement = document.getElementById("mistakes");
  mistakesElement.textContent = mistakes;
}

function setNewState() {
  stateFlag = document.getElementById("stateFlag");
  randomNumber = Math.floor(Math.random() * (statesAndCapitals.length));
  randomState = statesAndCapitals[randomNumber];
  stateMapElement = document.getElementById(randomState[0]);
  stateMapElementName = stateMapElement.getAttribute("name");
  stateTextElement = document.getElementById("stateName");
  stateTextElement.textContent = stateMapElementName + "?";

  stateMapElement.style = "fill: blue";
  stateFlag.style = `background-position: ${randomState[2]}`;

  userAnswer = hideCapitalAnswer(randomState[1]);
  answer = randomState[1].toLowerCase().split("");

  document.getElementById("capitalAnswer").textContent = userAnswer.join("");
}

function addKeyListener() {
  document.addEventListener('keyup', (e) => {
    let userInput = e.key.toLowerCase();
    let indexOfLetter = answer.indexOf(userInput);
    
    if(statesAndCapitals.length === 0){
      document.getElementById("capitalAnswer").textContent = "YOU WON!";
      return;
    }

    if(indexOfLetter != -1){
      replaceLetterInDisplayedAnswer(answer, userInput, userAnswer);
      document.getElementById("capitalAnswer").textContent = userAnswer.join("");
      isWordCompleted(userAnswer)
    } else {
      mistakes +=1;
      displayMistakes();
    }
  })
}

function hideCapitalAnswer(capital){
  return capital.replace(/[a-z]/ig, "_").split("")
}

function replaceLetterInDisplayedAnswer(answer, key, userAnswer) {
  for(let x = 0; x < answer.length; x++){
    if(answer[x] === key){
      userAnswer[x] = key;
    }
  }
}

function isWordCompleted(userAnswer) {
  if(userAnswer.indexOf("_") === -1){
    stateMapElement.style = "fill: green";
    statesAndCapitals.splice(randomNumber, 1)
    setTimeout(setNewState, "3000");
  }
}