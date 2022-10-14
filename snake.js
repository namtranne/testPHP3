class snake {
    constructor(x=0, y=0){
        this.x=x;
        this.y=y;
        this.xspeed=0;
        this.yspeed=0;
    }
    speed(xspeed,yspeed) {
        this.xspeed=xspeed;
        this.yspeed=yspeed;
    }
    show(){
        let ctx=canvas.getContext("2d");
        ctx.fillStyle="black";
        ctx.fillRect(this.x,this.y,10, 5);
        this.x=(this.x+this.xspeed*10);
        this.y=(this.y+this.yspeed*5);
        if (this.x==300) {
            this.x=0;
        }
        else if (this.x<0) {
            this.x=290;
        }
        if (this.y==150) {
            this.y=0;
        }
        else if (this.y<0) {
            this.y=145;
        }
        ctx.fillStyle="green";
        ctx.fillRect(this.x,this.y,10, 5);
    }
}