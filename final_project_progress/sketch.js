
var sketch1 = function( p ) {

p.x = 0;
p.y = 0;
p.size = 5;
p.square1;


  p.setup = function() {
  p.createCanvas(500, 500);
 
    p.background(0);
      p.noFill();
  p.frameRate(10);

  p.rectMode(p.CENTER);
  p.angleMode(p.DEGREES);
  p.square1 = new square(p,0,0);
  };

  p.draw = function() {
    
        for(p.j = 0; p.j < 7; p.j++){

      p.y = (p.j*70)+40

      for(p.i = 0; p.i < 7; p.i++){

        p.x = (p.i*70)+40

        for(p.k = 9; p.k >= 0; p.k--){
          
          p.size = p.k * 10

          p.blueVal = p.random(0,100); 
          p.greenVal = p.random(0,50);
          p.redVal = p.random(0,50);
      
          p.fill(p.redVal,p.greenVal,p.blueVal,150)
          
          p.ellipse(p.x,p.y,p.size,p.size);
        }
      }
    }
          for(p.a = 0; p.a < 8; p.a++){

        p.y = (p.a*70)+40

        for(p.b = 0; p.b < 8; p.b++){

          p.x = (p.b*70)+40

          for(p.c = 4; p.c >= 0; p.c--){
            
            p.size = p.c * 10

            p.blueVal = p.random(0,255); 
            p.greenVal = p.random(0,100);
            p.redVal = p.random(0,100);
        
            p.fill(p.redVal,p.greenVal,p.blueVal, 150)
            
            p.ellipse(p.x,p.y,p.size,p.size);
          }
        }
      }

  p.square1.display();
  p.square1.animate();
  };

  //p.square = function(canvas,xPos, yPos){
  function square(canvas,xPos,yPos){
        this.canvas = canvas 
        this.x = xPos
        this.y = yPos
        this.size = 5;
        this.sizeUp = this.canvas.random(5,10);
        this.rot = this.canvas.random(45,180);
        this.rotStep = this.canvas.random(1,4);

        this.animate = function(){

        this.size += this.sizeUp;

        if (this.size >= 60 || this.size <= 5){
            this.sizeUp *= -1;
          }

          this.rot += this.rotStep

        if(this.rot >=360){
            this.rot = 0;
        }

      }
      this.display = function(){
  this.canvas.fill(0);

  for(var d = 0; d < 8; d++){

  y = this.y + (d*71) +1

  for(var e = 0; e < 8; e++){

    x = this.x +(e*71)+1

    this.canvas.push();
      this.canvas.noStroke();
      this.canvas.fill(0,0,0,170)
      this.canvas.translate(x,y);
      this.canvas.rotate(this.rot);
      this.canvas.rect(0,0,this.size,this.size);
    this.canvas.pop();
      
  }
}

}
};


};

var myp5 = new p5(sketch1);


var sketch3 = function( m ) {

m.xspacing = 10;    // Distance between each horizontal location
m.w;                // Width of entire wave
m.theta = 0.0;      // Start angle at 0
m.amplitude = 25.0; // Height of wave
m.period = 300.0;   // How many pixels before the wave repeats
m.dx;               // Value for incrementing x
m.yvalues;  // Using an array to store height values for the wave

m.slider;
m.sliderVal;

m.size; 
m.size1 = 5;
m.sizeUp = 0.05;
m.colr = 10;
m.eColr = 255;

  m.setup = function() {
    m.createCanvas(500, 500);
      m.w = m.width+16;
      m.dx = ((2*m.PI) / m.period) * m.xspacing;
      m.yvalues = new Array(m.floor(m.w/m.xspacing));
  };

  m.draw = function() {
  m.background(m.colr);
 
  m.calcWave();
  m.renderWave();

  m.size1 += m.sizeUp 

  if (m.size1 > 30 ){
    m.sizeUp*= -1
    m.colr = 255
    m.eColr = 0
  }

  if(m.size1 < 1){
    m.sizeUp*= -1
    m.colr = 0
    m.eColr = 255
  }

  };

  function calcWave() {
  // Increment theta (try different values for 
  // 'angular velocity' here)
  theta += 0.05;

  // For every x value, calculate a y value with sine function
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
} 

m.calcWave = function() {
  // Increment theta (try different values for 
  // 'angular velocity' here)
  m.theta += 0.05;

  // For every x value, calculate a y value with sine function
  m.x = m.theta;
  for (m.i = 0; m.i < m.yvalues.length; m.i++) {
    m.yvalues[m.i] = m.sin(m.x)*m.amplitude;
    m.x+=m.dx;
  }
}

m.renderWave = function() {
  m.noStroke();
  
  // A simple way to draw the wave with an ellipse at each location
  for (m.x = 0; m.x < m.yvalues.length; m.x++) {

    m.size = m.size1 

  m.fill(m.eColr);
   m.ellipse(m.x*m.xspacing, 10+m.yvalues[m.x], m.size, m.size);
    m.ellipse(m.x*m.xspacing, 50+m.yvalues[m.x], m.size, m.size);
    m.ellipse(m.x*m.xspacing, 100+m.yvalues[m.x], m.size, m.size);
    m.ellipse(m.x*m.xspacing, 150+m.yvalues[m.x], m.size, m.size);
    m.ellipse(m.x*m.xspacing, 200+m.yvalues[m.x], m.size, m.size);
    m.ellipse(m.x*m.xspacing, 250+m.yvalues[m.x], m.size, m.size);
    m.ellipse(m.x*m.xspacing, 300+m.yvalues[m.x], m.size, m.size);
    m.ellipse(m.x*m.xspacing, 350+m.yvalues[m.x], m.size, m.size);
    m.ellipse(m.x*m.xspacing, 400+m.yvalues[m.x], m.size, m.size);
    m.ellipse(m.x*m.xspacing, 450+m.yvalues[m.x], m.size, m.size);
    m.ellipse(m.x*m.xspacing, 500+m.yvalues[m.x], m.size, m.size);


    m.ellipse(10+m.yvalues[m.x], m.x*m.xspacing, m.size, m.size);
    m.ellipse(50+m.yvalues[m.x], m.x*m.xspacing, m.size, m.size);
    m.ellipse(100+m.yvalues[m.x], m.x*m.xspacing, m.size, m.size);
    m.ellipse(150+m.yvalues[m.x], m.x*m.xspacing, m.size, m.size);
    m.ellipse(200+m.yvalues[m.x], m.x*m.xspacing, m.size, m.size);
    m.ellipse(250+m.yvalues[m.x], m.x*m.xspacing, m.size, m.size);
    m.ellipse(300+m.yvalues[m.x], m.x*m.xspacing, m.size, m.size);
    m.ellipse(350+m.yvalues[m.x], m.x*m.xspacing, m.size, m.size);
    m.ellipse(400+m.yvalues[m.x], m.x*m.xspacing, m.size, m.size);
    m.ellipse(450+m.yvalues[m.x], m.x*m.xspacing, m.size, m.size);
    m.ellipse(500+m.yvalues[m.x], m.x*m.xspacing, m.size, m.size);
    
   

  }
}
 


};
var myp5 = new p5(sketch3);


var sketch6 = function( n ) {
  n.angle = 0;
  n.color;
  n.strokeColor;
  n.angleUp = 1.2

n.setup = function(){
    n.createCanvas(500,500);  
    n.frameRate(3);
}

n.draw = function(){

    n.background(255);
  
  for (n.i = 0; n.i<10;n.i++){
    n.fill(n.random(0,130),n.random(0,130),n.random(0,130));
    n.stroke(0)
  
    //strokeWeight(angle/15)
    n.triangle(n.i*n.angle, 250,500 -(n.i*n.angle),250,250,0);
    n.triangle(n.i*n.angle, 250,500 -(n.i*n.angle),250,250,500);

    n.triangle(0,250,250,n.i*n.angle,0,0)
    n.triangle(250,500-(n.i*n.angle),0,250,0,500);
    n.triangle(250,n.i*n.angle,500,250,500,0);
    n.triangle(500,250,250,500-(n.i*n.angle),500,500);
  }

  n.angle += n.angleUp

  if (n.angle>55 || n.angle < -20){

    n.angleUp *= -1;

  }

}
  
  
};

var myp5 = new p5(sketch6);

var sketch5 = function(t){

  t.strk = 1;

  t.setup = function(){

    t.createCanvas(500,500);

    t.rectMode(t.CENTER)
    t.angleMode(t.DEGREES);
    t.frameRate(10);

  }
  t.draw = function(){
        t.background(200);
        t.noStroke();
        t.fill(0);
        t.triangle(0,0,250,250,125,0);
        t.triangle(250,0,250,250,375,0);
        t.triangle(500,0,250,250,500,125);
        t.triangle(500,250,250,250,500,375);
        t.triangle(500,500,250,250,375,500);
        t.triangle(250,500,250,250,125,500);
        t.triangle(0,500,250,250,0,375);
        t.triangle(0,250,250,250,0,125);
        

        t.fill(255);
        t.triangle(125,0,250,0,250,250);
        t.triangle(375,0,500,0,250,250);
        t.triangle(500,125,500,250,250,250);
        t.triangle(500,375,250,250,500,500);
        t.triangle(375,500,250,250,250,500);
        t.triangle(125,500,250,250,0,500);
        t.triangle(0,375,250,250,0,250);
        t.triangle(0,125,250,250,0,0);

  t.star(t.random(1,15),600, t.random(36,50),250,255);

  t.star(t.random(1,15),400, t.random(36,50),250,255);
  
  t.star(t.random(1,15),300, t.random(36,50),250,255);

  t.star(t.random(1,15),600, t.random(36,50),250,0);

  t.star(t.random(1,15),400, t.random(36,50),250,0);
  
  t.star(t.random(1,15),300, t.random(36,50),250,0);
  }

  t.star = function(width,length,rot,pos,strokee){
    t.fill(255, 180);
    t.push();
    t.stroke(strokee)
    t.strokeWeight(3);
      t.translate(pos,pos);
      for (t.i = 0; t.i < 10; t.i ++) {
        t.rotate(rot);
        t.noFill();
        t.rect(0, 30, width, length);
    
  }
 t.pop();
  }

}

var myp5 = new p5(sketch5);

var centerSketch = function(o){
   o.angle = 0;

  o.r = 200;
  o.g = 50;
  o.b= 100;

  o.angleUp = 1;

  o.setup = function(){
      o.createCanvas(500,500, o.WEBGL);
      o.angleMode(o.DEGREES)

  }
  
  o.draw = function(){

        o.background(o.r/2,o.g/2,o.b/2);

        o.directionalLight(o.r,o.g,o.b,0,0,-1);

        //normalMaterial(255);
        o.noStroke();
        o.translate(-10,-110)
        o.scale(1.5)
        o.rotateY(o.angle);
        o.tk();
        
        o.angle += o.angleUp

        if(o.frameCount % 200 == 0){
          
          o.r = o.random(0,255)
          o.g = o.random(0,255)
          o.b = o.random(0,255)

    
  }
  }

  o.tk = function(){

  o.push();
  o.translate(40,50,0);
  o.rotateZ(50);
  o.box(20,90,75)
  o.pop();
  o.push();
  o.translate(50,110,0);
  o.rotateZ(-50);
  o.box(20,120,75)
  o.pop();
  o.push();
  o.box(150,20,75);
  o.translate(0,85)
  o.box(20,150,75);
  o.pop();

  }
}

var myp5 = new p5(centerSketch);

var sketch8 = function(q){
    q.angle = 45;
    q.colr;

    q.setup = function(){
      q.createCanvas(500,500);
      q.angleMode(q.DEGREES);

      q.colr = 255;
      q.strok = 0;

    }

    q.draw = function(){
      q.background(q.colr);
      q.stroke(q.strok);

      q.strokeWeight(q.angle/100)
      q.translate(250,250);
      q.branch(80,0.67);

      q.push();
      q.translate(0,80);
      q.rotate(90)
      q.branch(80,0.67);
      q.pop();

      q.push();
      q.translate(0,80);
      q.rotate(270)
      q.branch(80,0.67);
      q.pop();

      q.push();
      q.translate(0,80);
      q.rotate(180)
      q.branch(80,0.67);
      q.pop();

      q.push();
      q.translate(0,80);
      q.rotate(45)
      q.branch(50,0.67);
      q.pop();

      q.push();
      q.translate(0,80);
      q.rotate(135)
      q.branch(50,0.67);
      q.pop();

      q.push();
      q.translate(0,80);
      q.rotate(-135)
      q.branch(50,0.67);
      q.pop();

      q.push();
      q.translate(0,80);
      q.rotate(-45)
      q.branch(50,0.67);
      q.pop();

      q.push();
      q.translate(250,-170);
      q.rotate(-135)
      q.branch(60,0.6);
      q.pop();

      q.push();
      q.translate(-250,-170);
      q.rotate(135)
      q.branch(60,0.6);
      q.pop();

      q.push();
      q.translate(-250,330);
      q.rotate(45)
      q.branch(60,0.6);
      q.pop();

      q.push();
      q.translate(250,330);
      q.rotate(-45)
      q.branch(60,0.6);
      q.pop();
    }

    q.branch = function(len,multiple){
        q.line(0,0,0,-len)
          q.translate(0,-len)
          
          q.strokeWeight(q.angle/50);
          if (len>5){
          
          q.push();
          q.rotate(q.angle);
            q.branch(len*multiple)
          q.pop();
          q.push();
          q.rotate(-q.angle);
            q.branch(len*0.67)
          q.pop();
          }

          q.angle += 0.004

          if (q.angle>360){
            q.angle = 0 

            q.colr= 0;
            q.strok = 255;

          }

          if (q.angle>180){
             q.colr =250;
            q.strok = 0;

          }
    }
}
var myp5 = new p5(sketch8)

  var sketch4 = function(c){

    c.squares = [] 
    c.squares1 = []
    c.squares2 = []

  c.setup = function(){
    c.angleMode(c.DEGREES);
    c.createCanvas(500,500);
    c.background(255);


    for (c.i = 0; c.i < 100; c.i ++){

      c.squares[c.i] = new square(c,c.random(0,500), c.random(0,500),c.random(1,3),c.random(1,3),c.color(c.random(0,255),50,100),0,15);
    } //100,50,150,100

    for (c.i = 0; c.i < 100; c.i ++){

      c.squares1[c.i] = new square(c,c.random(0,500), c.random(0,500),c.random(1,4),c.random(1,4), c.color(50,50,c.random(0,255)),0,10);
    }//150,50,100,100

    for (c.i = 0; c.i < 100; c.i ++){

      c.squares2[c.i] = new square(c,c.random(0,500), c.random(0,500),c.random(1,2),c.random(1,2), c.color(50,c.random(0,255),150),0,5);
    }//150,50,200,100

  }

  c.draw = function(){

        for (c.i=0;c.i<c.squares.length;c.i++){

          c.squares[c.i].animate();
          c.squares[c.i].display();
        }

        for (c.i=0;c.i<c.squares1.length;c.i++){

          c.squares1[c.i].animate();
          c.squares1[c.i].display();
        }

        for (c.i=0;c.i<c.squares2.length;c.i++){

          c.squares2[c.i].animate();
          c.squares2[c.i].display();
        }
  }

function square(canvas,xPos,yPos,xVel,yVel,color, rot, rotStep){
      this.canvas = canvas
      this.x = xPos
      this.y = yPos
      this.xVel = xVel 
      this.yVel = yVel
      this.colr = color
      this.rot = rot
      this.rotStep = rotStep

      this.animate = function(){
        this.x += this.xVel
        this.y += this.yVel
        this.rot+=this.rotStep


        if (this.x > 500 || this.x < 0){
          this.xVel *= -1;
        }

        if (this.y > 500 || this.y < 0){
          this.yVel *= -1;
        }

        if (this.rot > 360){
          this.rot = 0;
        }
      }
      this.display = function(){
        this.canvas.noStroke();
        this.canvas.fill(this.colr);

        this.canvas.push();
        this.canvas.translate(this.x,this.y);
        this.canvas.rotate(this.rot)
        this.canvas.rect(0,0,20,5)
        this.canvas.pop();
      }

};

}

var myp5 = new p5(sketch4)

var sketch7 = function(g){

    g.xPos = 250;
    g.yPos =250;

    g.xSpeed= 5;
    g.ySpeed =4;
  g.setup = function(){

    g.createCanvas(500,500);

  }

  g.draw = function(){
        g.fill(g.random(150));
        g.ellipse(g.xPos,g.yPos,50,50);

        g.xPos+=g.xSpeed
        g.yPos+= g.ySpeed

        if(g.xPos>g.width || g.xPos <0){
          g.xSpeed *= -1
        }

        if(g.yPos>g.height || g.yPos <0){
          g.ySpeed *= -1
        }

  }


}

var myp5 = new p5(sketch7)

var sketch2 = function(w){
        w.x;
        w.y;

        w.element1;
        w.element2;
        w.element3;
        w.element4;
        w.element5;
        w.element6;
        w.element7;
        w.element8;
        w.element9;
        w.element10;
        w.element11;
        w.element12;
        w.element13;
        w.element14;
        w.element15;
        w.element16;

        w.square1;
        w.square2;
  w.setup = function(){

        w.createCanvas(500,500);
        w.background(0);
        w.strokeWeight(1);

        w.frameRate(10);
        w.rectMode(w.CENTER);
        w.angleMode(w.DEGREES);

        w.element1 = new zoom(w,0,0,30,30,45,550,-50,600,-100);
        w.element2 = new zoom(w,0,250,30,0,0,550,-50,550,0);
        w.element3 = new zoom(w,0,125,30,15,22,550,-50,550,0);
        w.element4 = new zoom(w,250,0,0,30,90,550,-50,550,-50);
        w.element5 = new zoom(w,125,0,15,30,68,550,-50,550,-50);
        w.element6 = new zoom(w,375,0,-15,30,-68,550,-50,550,-50);
        w.element7 = new zoom(w,500,0,-30,30,-45,550,-50,600,-100);
        w.element8 = new zoom(w,0,500,30,-30,-45,550,-50,600,-100);
        w.element9 = new zoom(w,0,375,30,-15,-22,550,-50,600,-100);
        w.element10 = new zoom(w,500,125,-30,15,-22,550,-50,600,-100);
        w.element11 = new zoom(w,500,250,-30,0,0,550,-50,600,-100);
        w.element12 = new zoom(w,500,375,-30,-15,22,550,-50,600,-100);
        w.element13 = new zoom(w,500,500,-30,-30,45,550,-50,600,-100);
        w.element14 = new zoom(w,125,500,15,-30,-68,550,-50,550,-50);
        w.element15 = new zoom(w,250,500,0,-30,90,550,-50,550,-50);
        w.element16 = new zoom(w,375,500,-15,-30,68,550,-50,550,-50);



        w.square1 = new square(w,0,10);
        w.square2 = new square(w,0,-10);

  }

  w.draw = function(){
        for(w.j = 0; w.j<17; w.j++){
          
          w.y =(w.j*30)+15
          w.greenVal = w.j *15
          
        for(w.i = 0; w.i< 17; w.i++){

          w.x = (w.i*30)+15
          w.redVal = w.i * w.random(20,30); 

          w.noStroke();
          w.fill(w.redVal,w.greenVal,100);
          w.rect(w.x,w.y,30,30);
        }
        }


          w.element1.display();
          w.element1.animate();

          w.element2.display();
          w.element2.animate();

          //element3.display();
          //element3.animate();

          w.element4.display();
          w.element4.animate();

          //element5.display();
          //element5.animate();
          
          //element6.display();
          //element6.animate();

          w.element7.display();
          w.element7.animate();

          w.element8.display();
          w.element8.animate();

          //element9.display();
          //element9.animate();

          //element10.display();
          //element10.animate();

          w.element11.display();
          w.element11.animate();

          //element12.display();
          //element12.animate();

          w.element13.display();
          w.element13.animate();

          //element14.display();
          //element14.animate();

          w.element15.display();
          w.element15.animate();

          //element16.display();
          //element16.animate();

          w.square1.display();
          w.square1.animate();
          w.square2.display();
          w.square2.animate();

  }

  function zoom(canvas,xVal, yVal, xVel, yVel,rot ,a, b,c, d){
          this.canvas = canvas
          this.x = xVal;
          this.y = yVal;
          this.Xvel = xVel;
          this.Yvel = yVel;

          this.rot = rot

          this.a = a 
          this.b = b
          this.c = c 
          this.d = d

          
          this.animate = function(){
            this.x += this.Xvel;
            this.y += this.Yvel;
          

            if( this.x >= this.a || this.x <= -50){
              this.x = xVal
              this.y = yVal

              //this.Xvel *= -1;
              //this.Yvel *= -1;
            }
            if(this.y >= this.c || this.y <= this.d){
              this.x = xVal
              this.y = yVal

              //this.Yvel *= -1;
              //this.Xvel *= -1;
            }
            
          }

          this.display = function(){
            this.canvas.noStroke();
            this.canvas.push();
            this.canvas.fill(10,10,10,100);
            this.canvas.translate(this.x,this.y);
            this.canvas.rotate(this.rot);
            this.canvas.rect(0,0,20,10);
            this.canvas.pop();
          }
  };

  function square(canvas,rot,rotStep){

          this.canvas = canvas
          this.rot = rot;
          this.rotStep = rotStep;

          this.animate = function(){


            this.rot += this.rotStep

          if(this.rot >=360){
              this.rot = 0;
          }

        }

        this.display = function(){
          this.canvas.fill(0);

          for(k = 8; k >= 0; k--){
              
              size = k * 50
            
              grey = k * 3

              this.canvas.fill(grey,grey,grey,40);
              this.canvas.push();
              this.canvas.translate(250,250);
              this.canvas.rotate(this.rot)
              this.canvas.rect(0,0,size,size);
              this.canvas.pop();
            }

        }
  };
}

var myp5 = new p5(sketch2)
