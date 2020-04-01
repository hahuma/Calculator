const canvas = document.getElementById('calc')
const ctx = canvas.getContext('2d')
const allButtonsValues = {
    operators: ["+","-","x","/"],
    numbers:["1","2","3","4","5","6","7","8","9","0"],
    point: ".",
};
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
  function changer(inputValues){
    if (inputValues.indexOf('x')){
        var result = inputValues.replace("x","*")
        return inputValues = result
    }else if(inputValues.indexOf('÷')){
        var result = inputValues.replace("÷","/")
        return inputValues = result
    }else{
        return inputValues
    }
  }
  let finalResult = eval(changer(inputValues))
  inputValues = finalResult
  updatingScreen()
  return inputValues
}



function allInputs(buttonValue) {
  let anomalyOnString = inputValues.charAt(inputValues.length -2)
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
        }else if(
            (inputValues.indexOf(buttonValue) != 1 && buttonValue === allButtonsValues.point)
            && (inputValues.indexOf(allButtonsValues.point) < inputValues.indexOf(allButtonsValues.operators))
            ){
                inputvalues += buttonValue
        }else if(inputValues != ""
         && inputValues.charAt(inputValues.length -1) != allButtonsValues.point){
            inputValues += buttonValue
        }
  updatingScreen()
}