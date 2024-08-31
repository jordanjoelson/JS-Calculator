const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){ 
    try{
        display.value = eval(display.value); // Calculation
    }
    catch(error){ // If invalid syntax output error
        display.value = "Error";
    }
    
}