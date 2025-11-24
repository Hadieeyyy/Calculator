const btns = document.querySelectorAll(".btn");
let op_btns = document.getElementsByClassName("op_cell");

const clr = document.querySelector("#clr");
const eql = document.querySelector("#eql");

const textbar = document.getElementById("textbar");
textbar.value = "Start Calculating";


let evals = "";
let flag = false;
let operator, operands, operand1, operand2, ans;


//either mark operator as clicked (flag as true) or evaluate 
function double_Op(bo){
   if (flag == false) {log_entry(bo); flag = true}
   else{
    operate(evals); 
    evals = ans;
    log_entry(bo);
   }
}


for (let op of op_btns){
    op.addEventListener("click", () => double_Op(op));
}

for (let btn of btns){
    btn.addEventListener("click", () => log_entry(btn));
}

function log_entry(b){
    evals += b.children[0].textContent;
    textbar.value = evals;
}

clr.addEventListener("click", 
    () => {
        textbar.value = "";
        evals = "";
        flag = false;
    })


eql.addEventListener("click", 
        () => {
            operate(evals);
            flag = false;
        }) 
 
function operate(it){  
    // operands = str.split(/[+/-*]/);
    it.includes("+") ? (add(it)):
    it.includes("-") ? (sub(it)):
    it.includes("*") ? (mul(it)):
    it.includes("/") ? (dvd(it)):
    ( alert("No operator found"), textbar.value = "", evals = "");
}


function add(str){
operands = str.split("+");
console.log(operands);
ans = parseInt(operands[0]) + parseInt(operands[1]);
check_Ops(operands);
textbar.value = ans;
evals="";
}

function sub(str){
    operands = str.split("-");
    ans = parseInt(operands[0]) - parseInt(operands[1]); textbar.value = ans, evals="";
}

function mul(str){
    operands = str.split("*");
    ans = parseInt(operands[0]) * parseInt(operands[1]); textbar.value = ans, evals="";
}

function dvd(str){
    operands = str.split("/");
    ans = (parseInt(operands[0]) / parseInt(operands[1])).toFixed(2); 
    check_Ops(operands);
    textbar.value = ans;
     evals="";
}


function check_Ops(arr){
    if (arr[1] == ""){
        alert("You did not enter a second operand");
    }
    else if (arr[1] == "0"){
        alert("Trying to break me?");
    }

}