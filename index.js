const canvas = document.getElementById('calc')
const ctx = canvas.getContext('2d')
const allButtonsValues = {
    operators: ["+","-","x","÷"],
    numbers:["1","2","3","4","5","6","7","8","9","0"],
    point: ".",
};
var inputValues = ""
var lastPointPosition = ""
var operationsPosition = []
var filteredInputValues;
ctx.font = "30px Arial"



function updatingScreen(){ 
    // This function clear the screen and add print the newest value of the var inputValues
  ctx.clearRect(0, 0, 283, 60)
  ctx.fillText(inputValues, 0, 30, 283)
}
function clearCalc() {
    // This function reset all modificable values to start a new operation
  inputValues = ""
  lastPointPosition = ""
  operationsPosition = []
  filteredInputValues = ""
  updatingScreen()
}

function changer(){
  return inputValues = inputValues.replace(/x/g,"*").replace(/÷/g,"/")
}
function showResult() {
  inputValues = eval(changer()).toFixed(5).toString()
  updatingScreen()
}

function hasOperation(){
  for(let i = 0; i < allButtonsValues.operators.length; i++){
    if(inputValues.indexOf(allButtonsValues.operators[i]) != -1){
      return true
    }
  } 
  return false
}


function operationListener(buttonValue){
    if (allButtonsValues.operators.indexOf(buttonValue) != -1 ){ 
        lastOperation = buttonValue
    }
    filteredInputValues = inputValues.replace(/[0-9]/g, "").replace(/ /g, "")
    operationsPosition = allButtonsValues.operators.map(operationPositionConverter).sort().reverse()
    lastPointPosition = filteredInputValues.lastIndexOf(allButtonsValues.point)

    function operationPositionConverter(eachOperator){
        return filteredInputValues.lastIndexOf(eachOperator)
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
                    inputValues != ""
                    && buttonValue === allButtonsValues.point
                    && inputValues.indexOf(allButtonsValues.point) === -1
                    ){

                        inputValues += buttonValue

                    }else if(

                        buttonValue === allButtonsValues.point
                        && hasOperation()
                        && filteredInputValues.charAt(filteredInputValues.length -1) != allButtonsValues.point
                        ){

                            inputValues += buttonValue

                        }

  updatingScreen()
}
