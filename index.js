const display = document.getElementById("display");
const num = document.querySelectorAll(".num");
const operator = document.querySelectorAll(".operator");
const dec = document.getElementById(".");
const equal = document.getElementById("=");

let result = 0;
let a = false;
let b = false;
let c = false;
let A = false;
let num1 = "";
let num2 = "";
let symbol = "";

operator.forEach(ael_opearator);
function ael_opearator(element){
    element.addEventListener("click", () => {
        if(a&&(!c)){
            symbol = element.textContent;
            b = true;
        }
        display.textContent = num1 + symbol + num2;
    });
}
num.forEach(ael_num);
function ael_num(element){
    element.addEventListener("click", () =>{
        if(a&&b){
            if(A){
                num2 = num2 + element.textContent;
            }
            else{
                num2 = element.textContent;
                c = true;
                A = true;
            }
        }
        else if(a){
            num1 = num1 + element.textContent;
        }
        else{
            num1 = element.textContent;
            a = true;
        }
        display.textContent = num1 + symbol + num2;
    });
}
equal.addEventListener("click", () => {
    switch(symbol){
        case "+":
            result = Number(num1) + Number(num2);
            break;

        case "-":
            result = Number(num1) - Number(num2);
            break;

        case "*":
            result = Number(num1) * Number(num2);
            break;

        case "/":
            result = Number(num1) / Number(num2);
            break;

        default:
            break;
    }
    a = false;
    b = false;
    c = false;
    A = false;
    num1 = "";
    num2 = "";
    symbol = "";
    display.textContent = result;
});