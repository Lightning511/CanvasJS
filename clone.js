var c = document.getElementById("mainCanvas");
var ctx = c.getContext("2d");

// class to create clone instances of bouncing rectangle
class clone {

    constructor(x, y, speed, dir) {
        // constructs clone attributes
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.dir = dir;
        this.angle = 150;

        ctx.fillStyle = "#000000";
        ctx.fillRect(this.xcoord, this.ycoord, 30, 30);

    }

    checkCollision()
    {
        if(rectEdgeL < this.x+20 <rectEdgeR || rectEdgeL < this.x < rectEdgeR)
        {
            if(rectEdgeT < this.y < rectEdgeB || rectEdgeT< this.y+20 < rectEdgeB)
            {
                cancelAnimationFrame(animate);
                clearInterval(id);
            }
        }
        if(rectEdgeT < this.y-20 <rectEdgeB || rectEdgeT < this.y < rectEdgeB)
        {
            if(rectEdgeL < this.x < rectEdgeR || rectEdgeL< this.x+20 < rectEdgeR)
            {
                cancelAnimationFrame(animate);
                clearInterval(id);
            }
        }
        if(rect2EdgeL < this.x+20 <rect2EdgeR || rect2EdgeL < this.x < rect2EdgeR)
        {
            if(rect2EdgeT < this.y < rect2EdgeB || rect2EdgeT< this.y+20 < rect2EdgeB)
            {
                cancelAnimationFrame(animate);
                clearInterval(id);
            }
        }
        if(rect2EdgeT < this.y-20 <rect2EdgeB || rect2EdgeT < this.y < rect2EdgeB)
        {
            if(rect2EdgeL < this.x < rect2EdgeR || rect2EdgeL< this.x+20 < rect2EdgeR)
            {
                cancelAnimationFrame(animate);
                clearInterval(id);
            }
        }
    }

    
    bounceClone(){
        const id = setInterval(() =>
        {
            // clear the canvas to draw new rectangle (creates movement illusion)
            // ctx.clearRect(this.x,this.y, 30, 30);
            if (this.dir == "right"){
                var angleRad = this.angle * (Math.PI/180);
                this.x+= this.speed * Math.cos(angleRad);
                this.y-= this.speed * Math.sin(angleRad);
                ctx.fillStyle = "#000000";
                ctx.fillRect(this.x,this.y,20,20);
            }
            if (this.dir == "left") {
                var angleRad = this.angle * (Math.PI/180);
                this.x-= this.speed * Math.cos(angleRad);
                this.y+= this.speed * Math.sin(angleRad);
                ctx.fillStyle = "#000000";
                ctx.fillRect(this.x,this.y,20,20);
            }
            if (this.dir == "up") {
                var angleRad = this.angle * (Math.PI/180);
                this.x-= this.speed * Math.cos(angleRad);
                this.y-= this.speed * Math.sin(angleRad);
                ctx.fillStyle = "#000000";
                ctx.fillRect(this.x,this.y,20,20);
            }
            if (this.dir == "down") {
                var angleRad = this.angle * (Math.PI/180);
                this.x+= this.speed * Math.cos(angleRad);
                this.y+= this.speed * Math.sin(angleRad);
                ctx.fillStyle = "#000000";
                ctx.fillRect(this.x,this.y,20,20);
            }
            if (this.x >= c.width) {
                this.dir = "left";
                this.angle = 30 * Math.random();
            }
            if (this.x <= 0) {
                this.dir = "right";
                this.angle = 30 * Math.random();
            }
            if (this.y <= 0) {
                this.dir = "down";
                this.angle = 30 * Math.random();
            }
            if (this.y >= c.height) {
                this.dir = "up";
                this.angle = 30 * Math.random();
            }

        }, 75);
    }

}