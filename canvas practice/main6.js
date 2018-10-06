var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
 var c = canvas.getContext('2d');
 var mouse = {
  x:10,
  y:10
}
 addEventListener("mousemove", event => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
})
 var colors = [
  "#FF0000",
  "#FFA500",
  "#FFFF00",
  "#808000",
  "#FF00FF"
]
function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
 }
 function getDistance(x1, y1, x2, y2) {
  var xDistance = x2 - x1;
  var yDistance = y2 - y1;
  
  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
 }
 function circle(x,y,radius,color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = randomColor(colors);
  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    // c.strokeStyle = '';
    c.fillStyle = this.color;
    c.stroke();
    c.fill();
  }
  this.update = function() {
    this.draw();
  }
  }
 var circle1 = new circle(200,300,100);
 var circle2 = new circle(undefined,undefined,40);

 function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  circle2.x = mouse.x;
 circle2.y = mouse.y;
  
  if(getDistance(circle1.x,circle1.y, circle2.x, circle2.y) < circle1.radius + circle2.radius) {
    circle1.color = 'blue';
  } else {
   circle1.color = 'green';
  }
  
 
  circle1.update();
  circle2.update();
 }
 animate(); 