class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.boyImg = loadImage("Walking Frame/walking_1.png");
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.umbrella);
        this.bestmanImg = loadImage("Walking Frame/batman.png");
        World.add(world, this.bestmanImg);
        this.batmanImg = loadImage("bat/Bestman-01.png");
        World.add(world, this.batmanImg);
    }

    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        image(this.boyImg,pos.x,pos.y+70,300,300);
         if(frameCount>=200){
             image(this.bestmanImg,pos.x-100,pos.y+70,300,300);
        }
        
        if(frameCount>=250){
            image(this.batmanImg,pos.x+30,pos.y+70,150,250);
       }
    }
}
