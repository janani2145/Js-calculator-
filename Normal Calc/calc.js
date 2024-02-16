const display=document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}
function clearDisplay(){
    display.value="";
}
function deleteDisplay(){
    display.value=display.value.slice(0,-1);
}
function percent(){
    display.value=display.value/100;
}
function calculator(){
    try{
    display.value=eval(display.value);
}
catch(error)
{
    alert("invalid value")
}}
