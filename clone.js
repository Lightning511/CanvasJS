// class to create clone instances of bouncing rectangle
class clone {

    constructor(x, y, speed, dir) {
        // constructs clone attributes
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.dir = dir;
        this.angle = 150;

        ctx.fillRect(this.xcoord, this.ycoord, 30, 30);
    }

    
    bounceClone(){
        const id = setInterval(() =>
        {
            // clear the canvas to draw new rectangle (creates movement illusion)
            ctx.clearRect(this.x,this.y, 30, 30);
            if (this.dir == "right"){
                var angleRad = this.angle * (Math.PI/180);
                this.x+= this.speed * Math.cos(angleRad);
                this.y-= this.speed * Math.sin(angleRad);
            ctx.fillRect(this.x,this.y,20,20);
            }
            if (this.dir == "left") {
                var angleRad = this.angle * (Math.PI/180);
                this.x-= this.speed * Math.cos(angleRad);
                this.y+= this.speed * Math.sin(angleRad);
            ctx.fillRect(this.x,this.y,20,20);
            }
            if (this.dir == "up") {
                var angleRad = this.angle * (Math.PI/180);
                this.x-= this.speed * Math.cos(angleRad);
                this.y-= this.speed * Math.sin(angleRad);
            ctx.fillRect(this.x,this.y,20,20);
            }
            if (this.dir == "down") {
                var angleRad = this.angle * (Math.PI/180);
                this.x+= this.speed * Math.cos(angleRad);
                this.y+= this.speed * Math.sin(angleRad);
            ctx.fillRect(this.x,this.y,20,20);
            }
            if (this.xcoord >= c.width) {
                this.dir = "left";
                this.angle = 30 * Math.random();
            }
            if (this.xcoord <= 0) {
                this.dir = "right";
                this.angle = 30 * Math.random();
            }
            if (this.ycoord <= 0) {
                this.dir = "down";
                this.angle = 30 * Math.random();
            }
            if (this.ycoord >= c.height) {
                this.dir = "up";
                this.angle = 30 * Math.random();
            }

        }, 75);
    }

}