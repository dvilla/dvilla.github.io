window.onload = init;

let statesAndCapitals = [
  ["MEX2706", "Mexicali"],
  ["MEX2707", "La Paz"],
  ["MEX2708", "Saltillo"],
  ["MEX2709", "Chihuahua"],
  ["MEX2710", "Victoria de Durango"],
  ["MEX2711", "Culiacán Rosales"],
  ["MEX2712", "Hermosillo"],
  ["MEX2713", "Zacatecas"],
  ["MEX2714", "Monterrey"],
  ["MEX2715", "San Luis Potosí"],
  ["MEX2716", "Ciudad Victoria"],
  ["MEX2717", "Aguascalientes"],
  ["MEX2718", "Colima"],
  ["MEX2719", "Guadalajara"],
  ["MEX2720", "Morelia"],
  ["MEX2721", "Tepic"],
  ["MEX2722", "San Francisco de Campeche"],
  ["MEX2723", "Oaxaca de Juáre"],
  ["MEX2724", "Puebla de Zaragoza"],
  ["MEX2725", "Villahermosa"],
  ["MEX2726", "Tlaxcala"],
  ["MEX2727", "Ciudad de México"],
  ["MEX2728", "Guanajuato"],
  ["MEX2729", "Chilpancingo de los Bravos"],
  ["MEX2730", "Pachuca de Soto"],
  ["MEX2731", "Toluca de Lerdo"],
  ["MEX2732", "Cuernavaca"],
  ["MEX2733", "Santiago de Querétaro"],
  ["MEX2734", "Xalapa-Enríquez"],
  ["MEX2735", "Tuxtla Gutiérrez"],
  ["MEX2736", "Chetumal"],
  ["MEX2737", "Mérida"]
]
let mistakes = 0;

function init() {
  let randomState = statesAndCapitals[Math.floor(Math.random() * (statesAndCapitals.length+1))]
  let stateMapElement = document.getElementById(randomState[0])
  let stateMapElementName = stateMapElement.getAttribute("name")
  let stateTextElement = document.getElementById("stateName");
  stateTextElement.textContent = stateMapElementName + "?";

  stateMapElement.style = "fill: blue"

  let capitalAnswer = hideCapitalAnswer(randomState[1]);
  document.getElementById("capitalAnswer").textContent = capitalAnswer;

  document.addEventListener('keyup', (e) => {
    console.log(e);
  })
}

function hideCapitalAnswer(capital){
  return capital.replace(/./g, "_ ");
}