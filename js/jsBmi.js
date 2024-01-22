let displaybmi = document.getElementById("display");
displaybmi.value = "";

let in1 = document.getElementById("inp1");
let in2 = document.getElementById("inp2");
let in3 = document.getElementById("inp3");
let in4 = document.getElementById("inp4");

let btnInp = document.getElementById("btn");
btnInp.addEventListener("click", bmi);

function bmi () {
    if(in1.value && in2.value) {
        let wt = parseFloat(in1.value);
        let ht = parseFloat(in2.value);
        let metricbmi = wt/(ht**2);
        displaybmi.value += metricbmi.toFixed(2);
    } else if (in3.value && in4.value) {
        let wt1 = parseFloat(in3.value);
        let ht1 = parseFloat(in4.value);
        let htsq = ht1**2;
        let wt1byhtsq = wt1/htsq;
        let imperialbmi = 703 * wt1byhtsq;
        displaybmi.value += imperialbmi.toFixed(2);
    } else {
        displaybmi.value = "Invalid Input";
    }
}