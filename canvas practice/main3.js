var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
var mouse = {
  x : undefiened,
  y : undefiened
}
window.addEventListener('mousemove',function(event){
  mouse.x = event.x;
  mouse.y = event.y;
});
function Circle(x, y, dx, dy, radius){
 this.x = x;
this.y = y;
this.dx = dx;
this.dy = dy;
this.radius = radius;

 this.draw = function(){
    c.beginPath();
    c.arc(this.x, this.y,this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = "red";
    c.stroke();
  };
  this.update = function(){
     if(this.x + this.radius > innerWidth ||this.x- this.radius < 0) {
    this.dx = -this.dx
  }
  if(this.y + this.radius > innerHeight || this.y- this.radius < 0){
    this.dy = -this.dy;
  }
  this.x += this.dx;
  this.y += this.dy;
    this.draw();
 }
};
 var circleArray =[];
for(var i =0; i<150; i++) {
    var x = Math.random() *innerWidth;
    var y = Math.random() *innerHeight;
    var dx = ( Math.random()- 0.5) * 10;
    var dy = (Math.random()- 0.5) * 3;
 var radius = 30;
  circleArray.push(new Circle(x, y, dx, dy, radius));
}
 // var circle = new Circle(200, 200, 3, 3, 30);
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0,innerWidth,innerHeight);
  for (var i =0; i < circleArray.length; i++){
    circleArray[i].update();
  }
    // circle.update();
}
animate();