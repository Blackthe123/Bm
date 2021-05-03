class Drops {
    constructor(x,y){
        var options = {
            isStatic:false,
            density:0.5,
            friction:0.1
        }

        this.rain = Bodies.circle(x,y,5,options);
        this.radius = 5;
        World.add(world, this.rain)
        
        
    }

    rand = Math.round(random(1,400));

    update(){
        if(this.rain.position.y>height){
            Matter.Body.setPosition(this.rain, {x:random(0, 400), y:random(0, 700)})
        }

    }
    show(){
        var rainpos = this.rain.position;
        fill("Blue");
        ellipseMode(RADIUS);
        ellipse(rainpos.x, rainpos.y, this.radius, this.radius);
        
    }
    }
