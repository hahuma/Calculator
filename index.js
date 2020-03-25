const canvas = document.getElementById('calc')
const ctx = canvas.getContext('2d')
var inputValues = "";
ctx.font = "30px Arial"


function updatingScreen(){
  ctx.clearRect(0, 0, 283, 60)
  ctx.fillText(inputValues, 0, 30, 283)
}
function clearCalc() {
  inputValues = ""
  ctx.clearRect(0, 0, 283, 60)
}

function showResult() {
  var result = eval(inputValues)
  inputValues = result
  updatingScreen()
}



function allInputs(buttonValue) {
  const allButtonsValues = {
    operators: ["+","-","*","/"],
    numbers:["1","2","3","4","5","6","7","8","9","0"],
    point: "."
  };
  var anomalyOnString = inputValues.charAt(inputValues.length -2)
  if (allButtonsValues.numbers.indexOf(buttonValue) != -1 ){
    inputValues += buttonValue
  }else if(
    inputValues.valueOf() == "" && allButtonsValues.point.indexOf(buttonValue) != -1){
      inputValues = "0"
      inputValues += buttonValue
    }else if(
    allButtonsValues.operators.indexOf(buttonValue) != -1
    && anomalyOnString.indexOf(buttonValue) == -1
    && allButtonsValues.operators.indexOf(anomalyOnString) == -1){
      inputValues += ` ${buttonValue} `
  }
  updatingScreen()
}