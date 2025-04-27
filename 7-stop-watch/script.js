let isRunning = false;
let elapsedTime = 0;
let timer = null;
let startTime = 0;
let laps = [];
const display = document.getElementById('display');
const records = document.getElementById('records');

function start() {
    if (isRunning) {
        return;
    }
    isRunning = true;
    startTime = Date.now() - elapsedTime;
    timer = setInterval(updateTime, 10);
}

function stop() {
    if (!isRunning) {
        return;
    }
    clearInterval(timer);
    isRunning = false;
    elapsedTime = Date.now() - startTime;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    startTime = 0;
    laps = [];
    display.innerText = "00:00:00:00";
    records.innerHTML = '';
}

function lap() {
    if (!isRunning) {
        return;
    }

    let currentLapTime = Date.now() - startTime;
    let ms = Math.floor(currentLapTime % 1000 / 10);
    let seconds = Math.floor((currentLapTime / 1000) % 60);
    let minutes = Math.floor((currentLapTime / (1000 * 60)) % 60);
    let hours = Math.floor((currentLapTime / (1000 * 60 * 60)) % 24);

    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');
    ms = ms.toString().padStart(2, '0');

    let lapTime = `${hours}:${minutes}:${seconds}:${ms}`;
    laps.push(lapTime); 

    let lapElement = document.createElement('p');
    let lapNumber = document.createElement('span');
    lapNumber.innerText = `Lap ${laps.length}`;
    lapElement.appendChild(lapNumber);

    let lapTimeElement = document.createElement('span');
    lapTimeElement.classList.add('lap-time');
    lapTimeElement.innerText = lapTime;
    lapElement.appendChild(lapTimeElement);

    records.appendChild(lapElement);
}

function updateTime() {
    let currentElapsedTime = Date.now() - startTime;
    let ms = Math.floor(currentElapsedTime % 1000 / 10);
    let seconds = Math.floor((currentElapsedTime / 1000) % 60);
    let minutes = Math.floor((currentElapsedTime / (1000 * 60)) % 60);
    let hours = Math.floor((currentElapsedTime / (1000 * 60 * 60)) % 24);

    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');
    ms = ms.toString().padStart(2, '0');

    display.innerText = `${hours}:${minutes}:${seconds}:${ms}`;
}
