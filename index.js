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

  ctx.clearRect(0, 0, 283, 60)
  ctx.fillText(inputValues, 0, 30, 283)

}
function clearCalc() {
    
  inputValues = ""
  lastPointPosition = ""
  operationsPosition = []
  filteredInputValues = ""
  updatingScreen()

}

function changer(){ // This simple function has the response to modify the inputValues to make it able to run the eval function correctly
    
  return inputValues = inputValues.replace(/x/g,"*").replace(/÷/g,"/")

}


function showResult() { // This function returns the result of the operation, if it fails, it'll show an error message

  try{
      if(inputValues.indexOf(allButtonsValues.point) != -1){
         inputValues = eval(changer()).toFixed(5).toString()
        }else{
            inputValues = eval(changer()).toString()
        }
    updatingScreen()
  }catch{
    alert("This operation is impossible to solve")
    inputValues = inputValues.replace(/[*]/g,"x").replace(/[/]/g,"÷")
  }

}

function hasOperation(){ // this function returns a boolean that indicates if the var inputValues has any operators in it

  for(let i = 0; i < allButtonsValues.operators.length; i++){
    if(inputValues.indexOf(allButtonsValues.operators[i]) != -1){
      return true
    }
  } 
  return false

}


function operationListener(buttonValue){
    /*
    This function return the following informations:
    * The number and type of operators in the operations
    * The index of the last position of the "."
    * An array with the index of the position of each operator 
    */

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

function allInputs(buttonValue) { // This function define the way the calculator will respond to each input of numbers/operators

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
