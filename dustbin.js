class Dustbin{
    constructor(x, y) {
        
        this.x = x;
        this.y= y;
        this.width = 205;
        this.heigth= 200;
        this.thickness=17;
        this.image=loadImage("dustbin.png");
    this.boxb=Bodies.rectangle(this.x,this,y,this.width,this.thickness,{isStatic:true})
    this.boxr=Bodies.rectangle(this.x+this.width/2,this,y-this.height/2,this.thickness,this.height,{isStatic:true})
    this.boxl=Bodies.rectangle(this.x-this.width/2,this,y-this.height/2,thickness,this.height,{isStatic:true})
        World.add(world, this.boxb);
        World.add(world, this.boxr);
        World.add(world, this.boxl);
    }
      display(){
        var posBottom=this.boxb.position;
        var posRight=this.boxr.position;
        var posLeft=this.boxl.position;

        push();
        translate(posLeft.x,posLeft.y);
        fill("green");
        rotate(this.angle);
       angleMode(RADIANS);
        rectMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
        push();
        translate(posRight.x,posRight.y);
        fill("green");
        rotate(-1*angle);
        angleMode(RADIANS);
        rectMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
        push();
        translate(posBottom.x,posBottom.y);
        fill("green");
        imageMode(CENTER);
        angleMode(RADIANS);
        rectMode(CENTER);
        image(this.image, 0, -this.height/2, this.width, this.height);
        pop();
      }
    }
  
