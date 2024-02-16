//Digital Clock
let ampm=document.getElementById('ampm');
function displayTime(){
    let dateTime=new Date();
    let hr=dateTime.getHours();
    let min=dateTime.getMinutes();
    let sec=dateTime.getSeconds();
    if(hr>12){
        ampm.innerHTML="PM";
    }
    document.getElementById('hours').innerHTML=padZero(hr);
    document.getElementById('mins').innerHTML=min;
    document.getElementById('seconds').innerHTML=sec;
}
function padZero(num){
    return num<10?"0"+num:num
}
setInterval(displayTime,500)

//Calculator Functions
const displayScreen=document.getElementById("displayScreen");

function press(numValue){
    displayScreen.value += numValue;
}
function clearScreen(){
    displayScreen.value="";
}
function sin(){
    displayScreen.value=Math.sin(displayScreen.value);
}

function cos(){
    displayScreen.value=Math.cos(displayScreen.value);
}
function tan(){
    displayScreen.value=Math.tan(displayScreen.value);
}
function pow(){
    displayScreen.value=Math.pow(displayScreen.value,2);
}
function e(){
    displayScreen.value=Math.exp(displayScreen.value);
}
function ln(){
    displayScreen.value=Math.log(displayScreen.value);
}

function percent(){
    displayScreen.value=displayScreen.value/100;
}
function sqrt(){
    displayScreen.value=Math.sqrt(displayScreen.value,2);
}
function log(){
    displayScreen.value=Math.log10(displayScreen.value);
}

function backspc(){
    displayScreen.value=displayScreen.value.substring(0,displayScreen.value.length-1);
}
function calculate(){
    try{
    displayScreen.value=eval(displayScreen.value);
}
catch(error){
    alert("Invalid value");
}
}
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function calculateFactorial() {
        const inputValue =displayScreen.value;
            displayScreen.value = factorial(inputValue);
    
}
