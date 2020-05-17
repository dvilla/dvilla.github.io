window.onload = init;

let statesAndCapitals = [
  ["MEX2706", "Mexicali"],
  ["MEX2707", "La Paz"],
  ["MEX2708", "Saltillo"],
  ["MEX2709", "Chihuahua"],
  ["MEX2710", "Victoria de Durango"],
  ["MEX2711", "Culiacan Rosales"],
  ["MEX2712", "Hermosillo"],
  ["MEX2713", "Zacatecas"],
  ["MEX2714", "Monterrey"],
  ["MEX2715", "San Luis Potosi"],
  ["MEX2716", "Ciudad Victoria"],
  ["MEX2717", "Aguascalientes"],
  ["MEX2718", "Colima"],
  ["MEX2719", "Guadalajara"],
  ["MEX2720", "Morelia"],
  ["MEX2721", "Tepic"],
  ["MEX2722", "San Francisco de Campeche"],
  ["MEX2723", "Oaxaca de Juarez"],
  ["MEX2724", "Puebla de Zaragoza"],
  ["MEX2725", "Villahermosa"],
  ["MEX2726", "Tlaxcala"],
  ["MEX2728", "Guanajuato"],
  ["MEX2729", "Chilpancingo de los Bravos"],
  ["MEX2730", "Pachuca de Soto"],
  ["MEX2731", "Toluca de Lerdo"],
  ["MEX2732", "Cuernavaca"],
  ["MEX2733", "Santiago de Queretaro"],
  ["MEX2734", "Xalapa-Enriquez"],
  ["MEX2735", "Tuxtla Gutierrez"],
  ["MEX2736", "Chetumal"],
  ["MEX2737", "Merida"]
];

let mistakes = 0;
let randomNumber;
let randomState;
let stateMapElement;
let stateMapElementName;
let stateTextElement;
let userAnswer;
let answer;

function init() {
  initiateGame();
  addKeyListener();
}

function initiateGame() {
  randomNumber = Math.floor(Math.random() * (statesAndCapitals.length));
  randomState = statesAndCapitals[randomNumber];
  stateMapElement = document.getElementById(randomState[0]);
  stateMapElementName = stateMapElement.getAttribute("name");
  stateTextElement = document.getElementById("stateName");
  stateTextElement.textContent = stateMapElementName + "?";

  stateMapElement.style = "fill: blue";

  userAnswer = hideCapitalAnswer(randomState[1]);
  answer = randomState[1].toLowerCase().split("");

  document.getElementById("capitalAnswer").textContent = userAnswer.join("");
}

function addKeyListener() {
  document.addEventListener('keyup', (e) => {
    let indexOfLetter = answer.indexOf(e.key);
    
    if(statesAndCapitals.length === 0){
      document.getElementById("capitalAnswer").textContent = "YOU WON!";
      return;
    }

    if(indexOfLetter != -1){
      replaceLetterInDisplayedAnswer(answer, e.key, userAnswer);
      document.getElementById("capitalAnswer").textContent = userAnswer.join("");
      isWordCompleted(userAnswer)
    } else {
      mistakes +=1;
    }
  })
}

function hideCapitalAnswer(capital){
  return capital.replace(/./g, "_").split("");
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
    initiateGame();
  }
}