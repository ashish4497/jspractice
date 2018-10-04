var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d')
var gravity = 1;

var colorArray =['red','green','yellow','purpel','blue']
window.addEventListener('resize',function(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
})
function Ball (x, y, dx, dy, radius){
 this.x = x;
this.y = y;
this.dx = dx;
this.dy = dy;
this.radius = radius;
 this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y,this.radius, 0, Math.PI * 2, false);
      c.fillStyle = colorArray[Math.floor(Math.random() * colorArray.length)];
   c.fill();
    c.stroke();

 }
 
  this.update = function() {
  if(this.y + this.radius > canvas.height){
    this.dy =-this.dy * 0.99;
  } else{
    this.dy += gravity
  }
    this. y+= this.dy;
    this.draw();
    }
}

var ballArray = [];
for(var i = 0; i<800; i++) {
  var radius = 20;
  
  var x = Math.floor(Math.random() * innerWidth);
  var y = Math.floor(Math.random() * innerHeight);
  ballArray.push(new Ball(x, y, 3, 3, radius));
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0 , innerWidth, innerHeight);
  
  for(var i =0; i < ballArray.length; i++ ) {
    ballArray[i].update();
  }
}
animate();