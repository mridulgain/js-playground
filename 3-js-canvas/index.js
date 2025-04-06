// Get canvas element and context
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Set circle properties
const centerX = window.innerWidth/2;
const centerY = window.innerHeight/2;
const radius = 100;

// Draw the circle
ctx.beginPath();
ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI); // arc(x, y, radius, startAngle, endAngle)
ctx.stroke(); // draw the outline
ctx.fillStyle = 'skyblue'; // set fill color
ctx.fill(); // to fill the circle, uncomment this

// add 3 button: +, -, reset