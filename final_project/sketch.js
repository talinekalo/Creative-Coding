var r = 200;
var g = 50;
var b= 100;


function setup(){

}
function draw(){
	if(frameCount % 200 == 0){
		r = random(0,255)
        g = random(0,255)
        b = random(0,255)
	}
}
function hideImages(){
  m.myCanvas.hide();
  n.myCanvas.hide();
  t.myCanvas.hide();
  o.myCanvas.hide();
  q.myCanvas.hide();
  c.myCanvas.hide();
  g.myCanvas.hide();
  w.myCanvas.hide();
}



var sketch1 = function( p ) {

p.x = 0;
p.y = 0;
p.size = 5;
p.square1;
p.myCanvas;

  p.setup = function() {
  p.myCanvas = p.createCanvas(500, 500);
  p.myCanvas.position(0,0)
  p.myCanvas.mouseOver(hideImages)

 
    p.background(0);
      p.noFill();
  p.frameRate(10);

  p.rectMode(p.CENTER);
  p.angleMode(p.DEGREES);
  p.square1 = new square(p,0,0);
  };

  p.draw = function() {
 
    stroke(0)
        for(p.j = 0; p.j < 7; p.j++){

      p.y = (p.j*70)+40

      for(p.i = 0; p.i < 7; p.i++){

        p.x = (p.i*70)+40

        for(p.k = 9; p.k >= 0; p.k--){
          
          p.size = p.k * 10

          p.blueVal = b * p.k/3; 
          p.greenVal = g * p.k/3;
          p.redVal = r * p.k/3;
      
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

            p.blueVal = b * p.c/2; 
            p.greenVal = g * p.c/2;
            p.redVal = r * p.c/2;
        
            p.fill(p.redVal,p.greenVal,p.blueVal, 150)
            
            p.ellipse(p.x,p.y,p.size,p.size);
          }
        }
      }

  p.square1.display();
  p.square1.animate();
  
	p.fill(r,g,b);
	p.noStroke();
  p.rect(250,5,500,15);
  p.rect(5,250,15,500);
  p.rect(250,495,500,15);
  p.rect(495,250,15,500);

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
      this.canvas.fill(r,g,b,170)
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
//some code borrowed from https://p5js.org/examples/math-sine-wave.html
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

m.myCanvas;
  m.setup = function() {
    m.myCanvas = m.createCanvas(500, 500);
    m.myCanvas.position(500,0)
      m.w = m.width+16;
      m.dx = ((2*m.PI) / m.period) * m.xspacing;
      m.yvalues = new Array(m.floor(m.w/m.xspacing));
      m.rectMode(m.CENTER)
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
m.fill(0);
  m.rect(250,10,500,30);
  m.rect(10,250,30,500);
  m.rect(250,490,500,30);
  m.rect(490,250,30,500);
};

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
  n.angleUp = 0.3


  n.myCanvas;
n.setup = function(){
    n.myCanvas = n.createCanvas(500,500);  
    n.myCanvas.position(1000,0)
   // n.frameRate(10);
    n.rectMode(n.CENTER)
}

n.draw = function(){

    n.background(255);
  
  for (n.i = 0; n.i<10;n.i++){
    n.fill(r,g,b);

    n.stroke(0)
  
    n.strokeWeight(n.angle/15)
    n.triangle(n.i*n.angle, 250,500 -(n.i*n.angle),250,250,0);
    n.triangle(n.i*n.angle, 250,500 -(n.i*n.angle),250,250,500);
    n.fill(r/2,g/2,b/2);
    n.triangle(0,250,250,n.i*n.angle,0,0)
    n.triangle(250,500-(n.i*n.angle),0,250,0,500);
    n.triangle(250,n.i*n.angle,500,250,500,0);
    n.triangle(500,250,250,500-(n.i*n.angle),500,500);
  }

  n.angle += n.angleUp

  if (n.angle>55 || n.angle < -20){

    n.angleUp *= -1;

  }



n.fill(r,g,b);
n.noStroke();
  n.rect(250,5,500,15);
  n.rect(5,250,15,500);
  n.rect(250,495,500,15);
  n.rect(495,250,15,500);
  
}
  
  
};

var myp5 = new p5(sketch6);

var sketch5 = function(t){

  t.strk = 1;
  t.myCanvas

  t.setup = function(){

    t.myCanvas = t.createCanvas(500,500);
    t.myCanvas.position(0,500)

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

  t.fill(0);
  t.rect(250,10,500,30);
  t.rect(10,250,30,500);
  t.rect(250,490,500,30);
  t.rect(490,250,30,500);
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

  o.myCanvas;
  o.setup = function(){
      o.myCanvas = o.createCanvas(500,500, o.WEBGL);
      o.myCanvas.position(500,500)
      o.angleMode(o.DEGREES)

  }
  
  o.draw = function(){

        o.background(r/2,g/2,b/2);

        o.directionalLight(r,g,b,0,0,-1);

        //normalMaterial(255);
        o.noStroke();
        o.translate(-10,-110)
        o.scale(1.5)
        o.rotateY(o.angle);
        o.tk();
        
        o.angle += o.angleUp
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

    q.myCanvas;
    q.setup = function(){
      q.myCanvas = q.createCanvas(500,500);
      q.myCanvas.position(1000,500)

      q.angleMode(q.DEGREES);
     // q.rectMode(q.CENTER)

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

q.noStroke();
      q.fill(0);
  q.rect(-250,-170,500,30);
  q.rect(-250,-170,30,500);
  q.rect(-250,300,500,30);
  q.rect(220,-170,30,500);

q.stroke(q.strok)
      q.push();
      q.translate(240,-160);
      q.rotate(-135)
      q.branch(60,0.6);
      q.pop();

      q.push();
      q.translate(-240,-160);
      q.rotate(135)
      q.branch(60,0.6);
      q.pop();

      q.push();
      q.translate(-240,320);
      q.rotate(45)
      q.branch(60,0.6);
      q.pop();

      q.push();
      q.translate(240,320);
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

    c.myCanvas;

    c.redVal;
    c.greenVal;
    c.blueVal;

    c.redVal1;
    c.greenVal1;
    c.blueVal1;
    
    c.redVal2;
    c.greenVal2;
    c.blueVal2;

  c.setup = function(){
    c.angleMode(c.DEGREES);
    c.myCanvas = c.createCanvas(500,500);
    c.myCanvas.position(0,1000)
    c.background(0);


    for (c.i = 0; c.i < 90; c.i ++){

      c.squares[c.i] = new square(c,c.random(0,500), c.random(0,500),c.random(1,3),c.random(1,3),c.color(c.redVal,c.greenVal1,c.blueVal2),0,15);
    } //100,50,150,100

    for (c.i = 0; c.i < 90; c.i ++){

      c.squares1[c.i] = new square(c,c.random(0,500), c.random(0,500),c.random(1,4),c.random(1,4), c.color(c.redVal1,c.greenVal2,c.blueVal),0,10);
    }//150,50,100,100

    for (c.i = 0; c.i < 90; c.i ++){

      c.squares2[c.i] = new square(c,c.random(0,500), c.random(0,500),c.random(1,2),c.random(1,2),c.color(c.redVal2,c.greenVal,c.blueVal1),0,5);
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
        c.fill(r,g,b);
	c.noStroke();
  c.rect(0,0,500,15);
  c.rect(0,0,15,500);
  c.rect(0,485,500,15);
  c.rect(485,0,15,500);

    c.redVal = r;
    c.greenVal = g;
    c.blueVal = b;

    c.redVal1 = r/5;
    c.greenVal1 = g/5;
    c.blueVal1 = b/5;

    c.redVal2 = r*2;
    c.greenVal2 = g*2;
    c.blueVal2 = b*2;

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
        this.canvas.stroke(0);
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

g.w = 20;
g.l = 50;
g.wUp =-0.5;
g.lUp=2.5;
g.strokee = 255;
g.colr = 0;
g.weight = 1;
g.weightUp = 0.005;

g.rot = 36
g.rotStep = 1;

g.myCanvas;
  g.setup = function(){

    g.myCanvas = g.createCanvas(500,500);
    g.myCanvas.position(500,1000);
    g.angleMode(g.DEGREES)
    g.rectMode(g.CENTER)
  }

  g.draw = function(){
    g.background(g.colr);
    g.strokeWeight(g.weight)

g.weight+= g.weightUp
if(g.weight>5 || g.weight<1){
  g.weightUp*=-1
}

g.l+=g.lUp;

  if(g.l>500){
    g.lUp*=-1
    g.colr = 255
    g.strokee = 0
  }
  if(g.l<10){
  g.lUp*=-1
  g.colr = 0
    g.strokee = 255
  }

  g.w+=g.wUp;

  if(g.w>100||g.w<10){
    g.wUp*=-1
  }

  g.rot += g.rotStep
  if(g.rot>180|| g.rot< 36){
    g.rotStep*=-1
  }
  g.flower(250,250,g.w,g.l)

  g.fill(0);
  g.rect(250,10,500,30);
  g.rect(10,250,30,500);
  g.rect(250,490,500,30);
  g.rect(490,250,30,500);
};
  

g.flower = function(a,b,q,f){
  g.noFill();
  g.push();
  g.stroke(g.strokee);

  g.translate(a,b);
  for (g.i = 0; g.i < 10; g.i ++) {
    g.rotate(g.rot);
    g.ellipse(0, 30, q, f);
    
  }
  g.pop();
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

        w.myCanvas;

        w.back1;
        w.back2;
        w.back3;
  w.setup = function(){

        w.myCanvas = w.createCanvas(500,500);
        w.myCanvas.position(1000,1000)
        
        w.strokeWeight(1);

        //w.frameRate(15);
        w.rectMode(w.CENTER);
        w.angleMode(w.DEGREES);

        w.element1 = new zoom(w,0,0,15,15,45,550,-50,600,-100);
        w.element2 = new zoom(w,0,250,15,0,0,550,-50,550,0);
        w.element3 = new zoom(w,0,125,15,7,22,550,-50,550,0);
        w.element4 = new zoom(w,250,0,0,15,90,550,-50,550,-50);
        w.element5 = new zoom(w,125,0,7,15,68,550,-50,550,-50);
        w.element6 = new zoom(w,375,0,-7,15,-68,550,-50,550,-50);
        w.element7 = new zoom(w,500,0,-15,15,-45,550,-50,600,-100);
        w.element8 = new zoom(w,0,500,15,-15,-45,550,-50,600,-100);
        w.element9 = new zoom(w,0,375,15,-7,-22,550,-50,600,-100);
        w.element10 = new zoom(w,500,125,-15,7,-22,550,-50,600,-100);
        w.element11 = new zoom(w,500,250,-15,0,0,550,-50,600,-100);
        w.element12 = new zoom(w,500,375,-15,-7,22,550,-50,600,-100);
        w.element13 = new zoom(w,500,500,-15,-15,45,550,-50,600,-100);
        w.element14 = new zoom(w,125,500,7,-15,-68,550,-50,550,-50);
        w.element15 = new zoom(w,250,500,0,-15,90,550,-50,550,-50);
        w.element16 = new zoom(w,375,500,-7,-15,68,550,-50,550,-50);



        w.square1 = new square(w,0,10);
        w.square2 = new square(w,0,-10);

      w.background(r/2,g/2,b/2); 
 

  }

  w.draw = function(){



          w.element1.display();
          w.element1.animate();

          w.element2.display();
          w.element2.animate();

          w.element3.display();
          w.element3.animate();

          w.element4.display();
          w.element4.animate();

          w.element5.display();
          w.element5.animate();
          
          w.element6.display();
          w.element6.animate();

          w.element7.display();
          w.element7.animate();

          w.element8.display();
          w.element8.animate();

          w.element9.display();
          w.element9.animate();

          w.element10.display();
          w.element10.animate();

          w.element11.display();
          w.element11.animate();

          w.element12.display();
          w.element12.animate();

          w.element13.display();
          w.element13.animate();

          w.element14.display();
          w.element14.animate();

          w.element15.display();
          w.element15.animate();

          w.element16.display();
          w.element16.animate();

          w.square1.display();
          w.square1.animate();
          w.square2.display();
          w.square2.animate();

          w.fill(r,g,b);
        	w.noStroke();
          w.rect(250,5,495,15);
          w.rect(5,250,15,500);
          w.rect(250,495,500,15);
          w.rect(495,250,15,500);

          if(frameCount % 200 == 0){
          w.background(r/2,g/2,b/2);

        }

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

            }
            if(this.y >= this.c || this.y <= this.d){
              this.x = xVal
              this.y = yVal

            }
            
          }

          this.display = function(){
            this.canvas.noStroke();
            this.canvas.push();
            this.canvas.fill(r/2,g/2,b/2);
            this.canvas.translate(this.x,this.y);
            this.canvas.rotate(this.rot);
            this.canvas.rect(0,0,20,10);
            this.canvas.pop();
          }
  };

  function square(canvas,rot,rotStep,size){

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
            
              red = k/8 * r
              green = k/8 *g
              blue = k/8 *b

              this.canvas.fill(red,green,blue,20);
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



