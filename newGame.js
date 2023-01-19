var c = document.getElementById("mainCanvas");
var ctx = c.getContext("2d");

// declares variables and values
var moveX = 900;
var moveY = 280;

var moveX2 = 300;
var moveY2 = 280;

var rectEdgeL;
var rectEdgeT;
var rectEdgeR;
var rectEdgeB;

var rect2EdgeL;
var rect2EdgeT;
var rect2EdgeR;
var rect2EdgeB;


var dir = "right";
// array for the speed and dir to randomize clone movement
var dirs = ["right", "left", "up", "down"];
var speeds = [5, 10, 15, 20];



// attracts the attention of the computer, to notify if key is pressed
window.addEventListener("keydown", keysPressed);
//window.addEventListener("keyup", keysPressed);
window.addEventListener("keydown", restartGame);



function keysPressed(e)
{

  var keys = e.keyCode;
  console.log(keys);
  // left
  if(keys == 37 && moveX > 20) { moveX -= 15 }
  // right
  if(keys == 39 && moveX < c.width - 20) { moveX += 15;}
  //down
  if(keys == 38 && moveY > 20) { moveY -= 15;}
  //up
  if(keys == 40 && moveY < c.height - 20) { moveY += 15;}
  //left key2
  if(keys == 65 && moveX2 > 20) { moveX2 -= 15;}
  //right key2
  if(keys == 68 && moveX2 < c.width - 20) {moveX2 += 15;}
  //up key2
  if(keys == 87 && moveY2 > 20) { moveY2 -= 15; }
  //down key2
  if(keys == 83 && moveY2 < c.height - 20) { moveY2 += 15; }
  e.preventDefault();

}
//calls do stuff again if r is pressed, essentially restarts the game
function restartGame(e)
{
  var keys = e.keyCode;
  if(keys == 82)
  {
    doStuff();
  }
}
// draws the first movable square to be controlled by user
function drawMover1(rectEdgeL, rectEdgeT)
{
  this.ctx.fillStyle = "#0000FF";
  ctx.fillRect(rectEdgeL, rectEdgeT, 40, 40);
  ctx.strokeStyle = "#000000";
  ctx.strokeRect(rectEdgeL, rectEdgeT, 40, 40);
  console.log("red");
}
// draws the second movable square to be controlled by user
function drawMover2(rect2EdgeL, rect2EdgeT)
{
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(rect2EdgeL, rect2EdgeT, 40, 40);
  ctx.strokeStyle = "#000000";
  ctx.strokeRect(rect2EdgeL, rect2EdgeT, 40, 40);
  console.log("blue");
}
// draws bouncing rectangle that creates clones as it hits the walls of the canvas
function drawBouncingRect(x, y)
{
  ctx.fillStyle = "#000000";
  ctx.fillRect(x, y, 20, 20);
  console.log("black");
}
// animates the entire canvas and code 
function animate()
{
  //ctx.clearRect(rectEdgeL, rectEdgeT, 40, 40);
  //ctx.clearRect(rect2EdgeL, rect2EdgeT, 40, 40);
  
  rectEdgeL = moveX - 20;
  rectEdgeT = moveY - 20;
  rect2EdgeL = moveX2 - 20;
  rect2EdgeT = moveY2 - 20;

  //ctx.fillStyle = color1;
  //ctx.fillRect(rectEdgeL, rectEdgeT, 40, 40);
  drawMover1(rectEdgeL, rectEdgeT);
  //ctx.fillStyle = color2;
  //ctx.fillRect(rect2EdgeL, rect2EdgeT, 40, 40);
  drawMover2(rect2EdgeL, rect2EdgeT);

  requestAnimationFrame(animate);
  console.log("requestAnimationFrame called");
}

function checkCollision(x, y)
{
  rectEdgeR = rectEdgeL + 40;
  rectEdgeB = rectEdgeT - 40;
  rect2EdgeR = rect2EdgeL + 40;
  rect2EdgeB = rect2EdgeT - 40;

  if(rectEdgeL < x+20 <rectEdgeR || rectEdgeL < x < rectEdgeR)
  {
    if(rectEdgeT < y < rectEdgeB || rectEdgeT< y+20 < rectEdgeB)
    {
      cancelAnimationFrame(animate);
      //clearInterval(period);
    }
  }
  if(rectEdgeT < y-20 <rectEdgeB || rectEdgeT < y < rectEdgeB)
  {
    if(rectEdgeL < x < rectEdgeR || rectEdgeL< x+20 < rectEdgeR)
    {
      cancelAnimationFrame(animate);
      //clearInterval(period);
    }
  }
  if(rect2EdgeL < x+20 <rect2EdgeR || rect2EdgeL < x < rect2EdgeR)
  {
    if(rect2EdgeT < y < rect2EdgeB || rect2EdgeT< y+20 < rect2EdgeB)
    {
      cancelAnimationFrame(animate);
      //clearInterval(period);
    }
  }
  if(rect2EdgeT < y-20 <rect2EdgeB || rect2EdgeT < y < rect2EdgeB)
  {
    if(rect2EdgeL < x < rect2EdgeR || rect2EdgeL< x+20 < rect2EdgeR)
    {
      cancelAnimationFrame(animate);
      //clearInterval(period);
    }
  }

}

function bounceRect()
{
  var x = 100;
  var y = 100;
  var speed = 25;
  var angle = 150;
  drawBouncingRect(x,y);
  const id = setInterval(() =>
  {
    // clear the canvas to draw new rectangle (creates movement illusion)
    ctx.clearRect(0,0,c.width, c.height);
    if (dir == "right"){
      var angleRad = angle * (Math.PI/180);
      x+= speed * Math.cos(angleRad);
      y-= speed * Math.sin(angleRad);
      drawBouncingRect(x,y);
      checkCollision(x,y);
    }
    if (dir == "left") {
      var angleRad = angle * (Math.PI/180);
      x-= speed * Math.cos(angleRad);
      y+= speed * Math.sin(angleRad);
      drawBouncingRect(x,y);
      checkCollision(x,y);
    }
    if (dir == "up") {
      var angleRad = angle * (Math.PI/180);
      x-= speed * Math.cos(angleRad);
      y-= speed * Math.sin(angleRad);
      drawBouncingRect(x,y);
      checkCollision(x,y);
    }
    if (dir == "down") {
      var angleRad = angle * (Math.PI/180);
      x+= speed * Math.cos(angleRad);
      y+= speed * Math.sin(angleRad);
      drawBouncingRect(x,y);
      checkCollision(x,y);
    }
    if (x >= c.width-10) {
      dir = "left";
      angle = 30 * Math.random();
      var cloneDir = dirs[0];
      var cloneSpeed = speeds[Math.floor(Math.random() * 4)]
      var C = new clone(x,y, cloneSpeed, cloneDir);
      C.bounceClone();
      C.checkCollision();
    }
    if (x <= 10) {
      dir = "right";
      angle = 30 * Math.random();
      var cloneDir = dirs[1];
      var cloneSpeed = speeds[Math.floor(Math.random() * 4)]
      var C = new clone(x,y, cloneSpeed, cloneDir);
      C.bounceClone();
      C.checkCollision();
    }
    if (y <= 10) {
      dir = "down";
      angle = 30 * Math.random();
      var cloneDir = dirs[2];
      var cloneSpeed = speeds[Math.floor(Math.random() * 4)]
      var C = new clone(x,y, cloneSpeed, cloneDir);
      C.bounceClone();
      C.checkCollision();
    }
    if (y >= c.height-10) {
      dir = "up";
      angle = 30 * Math.random();
      var cloneDir = dirs[3];
      var cloneSpeed = speeds[Math.floor(Math.random() * 4)]
      var C = new clone(x,y, cloneSpeed, cloneDir);
      C.bounceClone();
      C.checkCollision();
  }

  }, 75);
}

function doStuff(){

  animate();
  bounceRect();
  
}
