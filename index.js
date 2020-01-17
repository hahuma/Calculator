//I could have made some simplier functions, but I'm just focused on it works for now

const canvas = document.getElementById('calc')
const ctx = canvas.getContext('2d')
var inputValues = "";

function getNumberValue(numberValue) { //this function get the value and put that into canvas using the method fillText()
  ctx.clearRect(0, 0, 283, 60) // I added that line because of some canvas problems
  inputValues += numberValue
  ctx.font = "30px Arial"
  ctx.fillText(inputValues, 0, 30, 283)
}

function getOperationsValue(operationsValue){
  checkImpossibilities()
  ctx.clearRect(0, 0, 283, 60) // I also added that because of some problems with canvas
  inputValues += ` ${operationsValue} `
  ctx.fillText(inputValues, 0, 30, 283)
}

function clearCalc() {
  console.log("It's working!")
  inputValues = ""
  ctx.clearRect(0, 0, 283, 60)
}

function showResult() {
  var result = eval(inputValues)
  inputValues = result
  ctx.clearRect(0, 0, 283, 60)
  ctx.fillText(result, 0, 30, 283)
}

// Impossible Cases

function checkImpossibilities(){
  let checkingString = inputValues.substring(inputValues.lenght -1, inputValues.lenght)
  if (checkingString == "+" || checkingString == "-" || checkingString == "*" || checkingString == "/"){
    console.log("essa função foi chamada");
  }else{
    return console.log(false)
  }
}