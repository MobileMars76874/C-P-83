var touchEvent = "empty";
var last_position_of_x, last_position_of_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var width = screen.width;
var canvas_width = screen.width - 70;
var canvas_height = screen.height - 300;
if (width < 992){
canvas.width = canvas_width;
canvas.height = canvas_height;
document.body.style.overflow = "hidden";
}


canvas.addEventListener("touchstart", my_touchstart);
    
function my_touchstart(e)
{
  
color = document.getElementById("C").value;
width_of_line = document.getElementById("W").value;
ctx.strokeStyle = color;
ctx.lineWidth = width_of_line;
touchEvent = "touchstart";
}

   
  
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{

current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;

console.log("Last position of x and y coordinates = ");
console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
ctx.moveTo(last_position_of_x, last_position_of_y);

console.log("Current position of x and y coordinates = ");
console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
ctx.stroke();
        

last_position_of_x = current_position_of_mouse_x; 
last_position_of_y = current_position_of_mouse_y;
}
