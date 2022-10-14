class food{
    constructor(){
        this.x=Math.floor(Math.random()*29);
        this.y=Math.floor(Math.random()*29);
    }
    show(){
        let draw=canvas.getContext("2d");
        draw.fillStyle="red";
        draw.fillRect(this.x*10,this.y*5,10, 5);
    }
    update(){
        this.x=Math.floor(Math.random()*29);
        this.y=Math.floor(Math.random()*29);
    }
}