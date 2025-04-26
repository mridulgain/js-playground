let isRunning = false;
let elapsedTime = 0;
let timer = null;
let startTime = 0;
const display = document.getElementById('display');

function start(){
    if (isRunning){
        return;
    }
    isRunning = true;
    startTime = Date.now() - elapsedTime;
    timer = setInterval(updateTime, 10);
}

function stop(){
    if (!isRunning){
        return;
    }
    clearInterval(timer);
    isRunning = false;
    elapsedTime = Date.now() - startTime;
}

function reset(){
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    startTime = 0;
    display.innerText = "00:00:00:00";
}

function updateTime(){
    let elapsedTime = Date.now() - startTime;
    let ms = Math.floor(elapsedTime % 1000 / 10);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);

    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0'); 
    seconds = seconds.toString().padStart(2, '0');
    ms = ms.toString().padStart(2, '0');
    
    display.innerText = `${hours}:${minutes}:${seconds}:${ms}`;
}