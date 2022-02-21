let callOne = false;
let buttonState = false;
let width;
setInterval(setClock, 1000)
setInterval(correction, 1000)


const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function changeColor(color1, color2){
    document.querySelector('body').style.background = color1;
    document.querySelector('.layer2').style.background = color1;
    document.querySelector('.clock').style.borderColor = color2;
}

function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)

}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

function hideColors(){
    const layer1Class = document.querySelectorAll('.layer1');
    const layer2Class = document.querySelectorAll('.layer2');

  if(width > 680){
    layer1Class.forEach(element => {
        element.style.height = '48vh';
        element.style.width = '48vh';
    });
    layer2Class.forEach(element => {
        element.style.height = '38vh';
        element.style.width = '38vh';
    });
  };
  if(width <= 680){
    layer1Class.forEach(element => {
        element.style.height = '23vh';
        element.style.width = '23vh';
    });
    layer2Class.forEach(element => {
        element.style.height = '16vh';
        element.style.width = '16vh';
    });
  };
}

function showColors(){
    const layer1Class = document.querySelectorAll('.layer1');
    const layer2Class = document.querySelectorAll('.layer2');

    learnWinSize();
    if(width > 680){
        layer1Class.forEach(element => {
            element.style.height = '70vh';
            element.style.width = '70vh';
        });
        layer2Class.forEach(element => {
            element.style.height = '60vh';
            element.style.width = '60vh';
        });
    }
    else if(width <= 680){
        layer1Class.forEach(element => {
            element.style.height = '40vh';
            element.style.width = '40vh';
        });
        layer2Class.forEach(element => {
            element.style.height = '33vh';
            element.style.width = '33vh';
        });
    }
}

function call(){
   if(callOne) hideColors();
   else showColors();
   callOne = !callOne;
 }

function toggleButton(){
    if(buttonState) {
        document.querySelector('#toggle-colors-background').style.width = '0px';
        document.querySelector('#toggle-colors-background').style.height = '0px';
    }    
    else {
        document.querySelector('#toggle-colors-background').style.width = '50px';
        document.querySelector('#toggle-colors-background').style.height = '50px';
    }
    buttonState = !buttonState;
}

function learnWinSize(){
    width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}

function correction(){
    if(callOne) showColors();
}
var deg = 360;
function rotateLayers(){
    document.getElementById("layer1").style.transform = `rotate(${deg}deg)`;
    deg = (deg + 360);
}
setClock();