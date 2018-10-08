var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var paddleHeight =10;
var paddleWidth =75;
var paddleX =(canvas.width-paddleWidth)/2;
var rightpress =false;
var leftpress = false;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawPaddle(){
ctx.beginPath();
ctx.rect(paddleWidth,canvas.height-paddleHeight,paddleWidth,paddleHeight);
ctx.fillStyle ="red"
ctx.fill();
ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle()
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
    if(rightpressed && paddleX < canves.width-paddleHeight) {
        paddleX +=7;
    }
    elseif {

    }
    x += dx;
    y += dy;
}
setInterval(draw, 10);
document.addEventListener("keydown",keyDownHandler,false);
document.addEventListener("keyup",keyUpHandler,false);

function keyDownHandler (e){
    if (e.keyCode ==39) {
        rightpressed = true;        
    }
    else if (e.keyCode == 37) {
        leftpressed =true;
    }
}
function keyUpHandler (e){
    if (e.keyCode == 39){
        rightpressed = false;
    }
    else if(e.keyCode == 37){
        leftpressed = false;
    }
}