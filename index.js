const display=document.querySelector("#screen");

function appendToDisplay(input){
    display.value += input;
}


function calculate(){
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value='Error ';
    }
}

function clearDisplay(){
    display.value ='';
}

function deletValue(){
    display.value = display.value.toString().slice(0,-1);
}
