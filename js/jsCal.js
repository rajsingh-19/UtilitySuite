let outputDisplay = document.getElementById("outputDisplay");

outputDisplay.value = "";
function displayInfo (num) {
    outputDisplay.value += num;
}
function clearDisplay () {
    outputDisplay.value = "";
}
function delDisplay () {
    outputDisplay.value = outputDisplay.value.slice(0, -1);
}
function operatorFn (op) {
    let opArr = ['^', '%', '-', '+', '/', '*'];
    let lastChar = outputDisplay.value.charAt(outputDisplay.value.length-1);
    let percentChar = outputDisplay.value.charAt(outputDisplay.value.length);

    if(opArr.includes(lastChar)) {
        outputDisplay.value = outputDisplay.value.slice(0, -1);
    }
    outputDisplay.value += op;
}
function percentFn () {
    let displayLength = outputDisplay.value.length; 
    if (displayLength = 1) {
        outputDisplay.value =  outputDisplay.value / 100;
    } else {
        outputDisplay.value = outputDisplay.value.slice(0, -1) / 100;
    }
}
function calculate() {
    let exp = outputDisplay.value.replace('^', '**').replace("%", "/100");
    if (outputDisplay.value.length == 0) {
        outputDisplay.value = 0;
    } else {
        try {
            outputDisplay.value = eval(exp);
        } catch (error) {
            outputDisplay.value = "Invalid Operation";
        }
    }
}
