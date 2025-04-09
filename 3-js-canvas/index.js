// Get canvas element and context
let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Set circle properties
let centerX = window.innerWidth/2;
let centerY = window.innerHeight/2;
let radius = 100;

function drawCircle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);

    // const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    // gradient.addColorStop(0, 'rgb(255, 0, 0)');
    // gradient.addColorStop(1, 'rgb(100, 100, 100)');

    // const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius)
    // gradient.addColorStop(0, 'rgb(255,0,0)');
    // gradient.addColorStop(0.5, 'rgb(0,255,0)');
    // gradient.addColorStop(1, 'rgb(0,0,255)');

    ctx.fillStyle = 'skyblue';
    ctx.fill();
    ctx.stroke();
}

drawCircle();

document.getElementById('increase').onclick = () => {
    if (radius < window.innerHeight/2){
        radius += 10;
        console.log(radius)
        drawCircle();
    }else{
        alert('Circle cant be made any bigger!')
    }
};

document.getElementById('decrease').onclick = () => {
    if (radius > 10) {
        radius -= 10;
        console.log(radius)
        drawCircle();
    }else{
        alert("Circle cant be made any smaller!")
    }
};

document.getElementById('reset').onclick = () => {
    radius = 100;
    drawCircle();
};

// add 3 button: +, -, reset