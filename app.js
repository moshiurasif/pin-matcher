function generatePin(){
    let prePin = randomPin();
    let pinString = prePin + "";
    if (pinString.length === 4) {
        return prePin;
    }else{
        console.log("pin dose not 4 digit ", prePin);
        return randomPin();
    }
}
function randomPin(){
    let randomPin = Math.round(Math.random() *10000);
    return randomPin;
}
document.getElementById("generate-pin").addEventListener("click", ()=>{
    let pin = generatePin();
    document.getElementById("generate-pin-field").value = pin;
})

document.getElementById("calculator").addEventListener("click", (event)=>{
    
    let number = event.target.innerText;
    let numberField = document.getElementById("numberField");
    let previousNumber = numberField.value;
    if (number === "C") {
        numberField.value = "";
    }else if (number ==="<"){
        let preBack = previousNumber.split("");
        preBack.pop();
        numberField.value = preBack.join("");

    }
    else{
    
    
    let newNumber = previousNumber + number;
    numberField.value = newNumber;
}
})

document.getElementById("verify-pin").addEventListener("click",()=>{
    let generatePinField = document.getElementById("generate-pin-field");
    let generateValue = generatePinField.value;
    let numberField = document.getElementById("numberField");
    let success = document.getElementById("success-pin");
    let numberValue = numberField.value;
    let failure = document.getElementById("failure-pin");
    if (generateValue === numberValue) {
        
        success.style.display = "block";
        failure.style.display = "none";
    }else{
       
        failure.style.display = "block";
        success.style.display = "none";
    }
})