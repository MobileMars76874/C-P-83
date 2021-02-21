touchEvent = null;
var last_x, last_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

canvas.addEventListener("touchdown", my_touchstart);
function my_touchstart(){
touchEvent = touchstart;
last_x = clientX - canvas.offsetLeft;
last_y = clientY - canvas.offsetTop;
color = document.getElementById("C").value;
width = document.getElementById("W").value;
}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){
current_x = e.touch[0].clientX - canvas.offsetLeft;
current_y = e.touch[0].clientY - canvas.offsetTop;
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.moveTo(last_x, last_y);
ctx.lineTo(current_x, current_y);
ctx.stroke();

last_x = current_x;
last_y = current_y;
}