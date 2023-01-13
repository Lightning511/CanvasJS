var c = document.getElementById("mainCanvas");
var ctx = c.getContext("2d");

// declares variables and values
var moveX = 200;
var moveY = 50;

var moveX2 = 50;
var moveY2 = 50;

var rectEdgeL;
var rectEdgeT;

var rect2EdgeL;
var rect2EdgeT;

var dir = "right";


// attracts the attention of the computer, to notify if key is pressed
window.addEventListener("keydown", keysPressed);
//window.addEventListener("keyup", keysPressed);



function keysPressed(e)
{

  var keys = e.keyCode;
  console.log(keys);
  // left
  if(keys == 37 && moveX > 20) { moveX -= 10 }
  // right
  if(keys == 39 && moveX < c.width - 20) { moveX += 10;}
  //down
  if(keys == 38 && moveY > 20) { moveY -= 10;}
  //up
  if(keys == 40 && moveY < c.height - 20) { moveY += 10;}
  //left key2
  if(keys == 65 && moveX2 > 20) { moveX2 -= 10;}
  //right key2
  if(keys == 68 && moveX2 < c.width - 20) {moveX2 += 10;}
  //up key2
  if(keys == 87 && moveY2 > 20) { moveY2 -= 10; }
  //down key2
  if(keys == 83 && moveY2 < c.height - 20) { moveY2 += 10; }
  e.preventDefault();

}

function drawRectangle(x, y, width, height)
{
  ctx.fillRect(x,y,width,height);

  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  ctx.fillStyle = "rgba(r, g, b, .5)";
}

function animate()
{
  ctx.clearRect(rectEdgeL, rectEdgeT, 40, 40);
  ctx.clearRect(rect2EdgeL, rect2EdgeT, 40, 40);
  
  rectEdgeL = moveX - 20;
  rectEdgeT = moveY - 20;
  rect2EdgeL = moveX2 - 20;
  rect2EdgeT = moveY2 - 20;

  drawRectangle(rectEdgeL, rectEdgeT, 40, 40);
  drawRectangle(rect2EdgeL, rect2EdgeT, 40, 40);

  requestAnimationFrame(animate);
  console.log("requestAnimationFrame called");
}

function bounceRect()
{
  var x = 100;
  var y = 100;
  var speed = 25;
  drawRectangle(x,y,20,20);
  const id = setInterval(() =>
  {
    // clear the canvas to draw new rectangle (creates movement illusion)
    ctx.clearRect(x,y,20, 20);
    if (dir == "right"){
      x+= speed;
      drawRectangle(x,y,20,20);
    }
    if (dir == "left") {
      x -= speed;
      drawRectangle(x,y,20,20);
    }
    if (dir == "up") {
      y -= speed;
      drawRectangle(x,y,20,20);
    }
    if (dir == "down") {
      y += speed;
      drawRectangle(x,y,20,20);
    }
    if (x >= c.width) {dir = "left";}
    if (x <= 0) {dir = "right";}
    if (y <= 0) {dir = "down";}
    if (y >= c.height) {dir = "up";}

  }, 75);
}

function doStuff(){

  animate();
  bounceRect();
  
}
