canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="red";


function my_mousedown(e)
{
    
    color = document.getElementById("color").value;
   width_of_line=document.getElementById("width_of_line").value;
    
    MouseEvent="mouseDown";
}

canvas.addEventListener("mouseleave", my_mouseleave);




function my_mouseleave(e)
{
    MouseEvent="mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);


function my_mouseup(e)
{
    MouseEvent="mouseUP";
}

canvas.addEventListener("mousemove", my_mousemove);


function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (MouseEvent=="mouseDown") {

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth=width_of_line;

        console.log("Last position of x and y coordinate =");
        console.log("X = " + last_position_of_x + " ,Y =  " + last_position_of_y)
        ctx.moveTo(last_position_of_x , last_position_of_y);

        console.log("Current position of x and y coordinate =");
        console.log("X = " + current_position_of_mouse_x + " ,Y =  " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }
    last_position_of_x =current_position_of_mouse_x;
    last_position_of_y= current_position_of_mouse_y;
}

canvas.addEventListener("mousedown", my_mousedown);


function clearArea()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
var width=screen.width;
new_width=screen.width - 70;
new_height=screen.height-300 ;

if (width < 992)
{
    document.getElementById("myCanvas").width= new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}

canvas.addEventListener("my_touchstart", my_touchstart);

function my_touchstart(e)
{
console.log("my_touchstart")

    last_position_of_x = e.touches[0].clientXcanvas.offsetTop;
    last_position_of_y=e.touches[0].clientY.canvas.offsetLeft ;
}

canvas.addEventListener("my_touchMove", my_touchmove);

function my_touchmove(e)
{
    console.log("my_touchMove")

    last_position_of_x = e.touches[0].clientXcanvas.offsetTop;
    last_position_of_y=e.touches[0].clientY.canvas.offsetLeft;


    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth=width_of_line;

    console.log("Last position of x and y coordinate =");
    console.log("X = " + last_position_of_x + " ,Y =  " + last_position_of_y)
    ctx.moveTo(last_position_of_x , last_position_of_y);

    console.log("Current position of x and y coordinate =");
    console.log("X = " + current_position_of_mouse_x + " ,Y =  " + current_position_of_mouse_y);
    ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
    ctx.stroke();

    last_position_of_x =current_position_of_mouse_x;
    last_position_of_y= current_position_of_mouse_y;
}