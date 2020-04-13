const canvas = document.getElementById('calc')
const ctx = canvas.getContext('2d')
const allButtonsValues = {
    operators: ["+","-","x","÷"],
    numbers:["1","2","3","4","5","6","7","8","9","0"],
    point: ".",
};
var inputValues = "";
var lastOperation = ""
ctx.font = "30px Arial"

function updatingScreen(){
  ctx.clearRect(0, 0, 283, 60)
  ctx.fillText(inputValues, 0, 30, 283)
}
function clearCalc() {
  inputValues = ""
  ctx.clearRect(0, 0, 283, 60)
}

function changer(){
  return inputValues = inputValues.replace(/x/g,"*").replace(/÷/g,"/")
}
function showResult() {
  inputValues = eval(changer()).toString()
  updatingScreen()
}

function operationListener(buttonValue){
    if (allButtonsValues.operators.indexOf(buttonValue) != -1){ 
        lastOperation = buttonValue
    }
}

function allInputs(buttonValue) {
  operationListener(buttonValue)
  let anomalyOnString = inputValues.charAt(inputValues.length -2)

  if (allButtonsValues.numbers.indexOf(buttonValue) != -1){

        inputValues += buttonValue

        }else if(
            inputValues.valueOf() == ""
            && allButtonsValues.point.indexOf(buttonValue) != -1){

                inputValues = "0"
                inputValues += buttonValue

            }else if(
                    inputValues != ""
                    && allButtonsValues.operators.indexOf(anomalyOnString) == -1
                    && buttonValue.indexOf(allButtonsValues.point) == -1
                    ){

                    inputValues += ` ${buttonValue} `

                    }else if(
                         (inputValues.indexOf(buttonValue) != 1 && buttonValue === allButtonsValues.point)
                         && (inputValues.lastIndexOf(allButtonsValues.point) > 
                             inputValues.lastIndexOf(lastOperation))
                         && (inputValues.indexOf(allButtonsValues.point) != -1)
                         ){

                             inputvalues += buttonValue

                         }else if(
                         inputValues != ""
                         && buttonValue.indexOf(allButtonsValues.point) != -1
                         && inputValues.charAt(inputValues.length -1) != allButtonsValues.point)
                         {

                             inputValues += buttonValue

                         }/*else if(
                          allButtonsValues.operators.indexOf(buttonValue) != -1
                          && inputValues.charAt   
                         ){

                         }*/
  updatingScreen()
}
