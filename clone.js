// class to create clone instances of bouncing rectangle
class clone {

    constructor(speed, x, y) {
        // constructs clone attributes
        this.speed = speed;
        this.xcoord = x;
        this.ycoord = y;
    }

    
    bounceClone(){
        const id = setInterval(() =>
        {
            // clear the canvas to draw new rectangle (creates movement illusion)
            ctx.clearRect(this.xcoord,this.ycoord, 30, 30);
            if (dir == "right"){
            x+= this.speed;
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

}