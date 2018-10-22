var x1;
var x2;
var x3;
var x4;
var x5;
var x6;
var s;// to translate snowman
var a;//a and b are the variables to transalte the flower()
var b;
var c;//c and d are the variables to transalte the apple() 
var d; 
var r; //color of apple 
var z; // to translate basket 
var x = 0; 
var xspeed = 2;
var myState = 0;
var snowman; // snowman random translation
var basket1; //basket random translation
let snowflakes = []; //array to hold snowflake objects 

var l = 200; // Y-coordinate position for leaves 
var l1 = 300;
var l2 = 100;
var l3 = 415;
var l4 = 320;
var l5 = 250;
var l6 = 120;
var l7 = 140;
var l8 = 140;
var l9 = 290;
var l10 = 40;
var l11 = 100;

var A1 = 400; // position varibale for different apples
var B1 = 100;
var A2 = 500;
var B2 = 250;
var A3 = 600;
var B3 = 200;
var A4 = 320;
var B4 = 240;
var A5 = 200;
var B5 = 160;
var A6 = 200;
var B6 = 300;

var f = 40; // size of snowball 
var s = 100; //singleSnowflake variables y-coordinates
var s1 = 0;
var s2 = -100;
var s3 = -200;
var s4 = -300;
var s5 = -400;
var s6 = -500;
var s7 = -600;
var sSpeed = 3; //speed of fall single snowflakes

function setup() {

    createCanvas(800,600);
    ellipseMode(CENTER);
}

function draw() {
switch (myState){
        
        case 0: //summer
            background (100,175,250);

             summerSun( x = x + xspeed);

            if (x >= width || x <= 0){
                xspeed = xspeed * -1;

                myState++
                basket1 = random(-50,600);
                l = 200; // Y-coordinate position for leaves 
                 l1 = 300;
                 l2 = 100;
                 l3 = 415;
                 l4 = 320;
                 l5 = 250;
                 l6 = 120;
                 l7 = 140;
                 l8 = 140;
                 l9 = 290;
                 l10 = 40;
                 l11 = 100;
            }
            summerTree();
            grass();

        apple(A6,B6,200);
        apple(A1,B1,199);
        apple(A2,B2,198);
        apple(A3,B3,197);
        apple(A4,B4,196);
        apple(A5,B5,195);

        basket(basket1);
      
        break; 

        case 1: //fall
        background(150,200,220);

        fallSun(x = x + xspeed);
        if (x >= width || x <= 0){
            xspeed = xspeed * -1;

            myState++

            s = 100; 
            s1 = 0;
            s2 = -100;
            s3 = -200;
            s4 = -300;
            s5 = -400;
            s6 = -500;
            s7 = -600;
            f = 40;
        }
            fallTree();
            grass();
            leaves();
            
        break;  

        case 2: //winter
        
        background(185,200,230);
        winterSun(x = x + xspeed)
        winterTree();
        snow();
        snowMan(snowman); 
        snowball();  
        drawSnowflakes();
        if (x >= width || x <= 0){
            xspeed = xspeed * -1;

            myState++   
            snowman = random(-500,150);
            background(120,200,230);


        }

        

        break; 

        case 3: //spring

        fill(120,200,230);
        rect(0,0,width,230);

        fallSun(x = x + xspeed);
        if (x >= width || x <= 0){
            xspeed = xspeed * -1;
            myState = 0
                 A1 = 400; 
                 B1 = 100;
                 A2 = 500;
                 B2 = 250;
                 A3 = 600;
                 B3 = 200;
                 A4 = 320;
                 B4 = 240;
                 A5 = 200;
                 B5 = 160;
                 A6 = 200;
                 B6 = 300;
           
        }
        springTree();
        grass();
        flower1(520,280);
        flower1(150,100);
        push();
            scale(0.5);
            flower1(550,120);
            flower1(190,770);
            flower1(1400,750);
            flower1(900,220);
        pop();

        break;        
    }

}

// HERE IS THE FLOWER INTERACTIVITY 
function mousePressed(){
        
        if(myState == 3){

           if (mouseY > 500){
                translate(mouseX,mouseY);
                scale(random(0.25,0.75));
                flower(0,0);
                }   
        }    
    } 

//mouseClicked to make leaves fall 
function mouseClicked(){



    var leafDist = dist(mouseX,mouseY,200,l);
   
    if (leafDist < 30){
        
        leaf1(l = random(550,590));
       
    }

    var leafDist1 = dist(mouseX,mouseY,600,l1);

    if (leafDist1 < 30){
        
        
        leaf1(l1 = random(550,590));
       
    }
    
    var leafDist2 = dist(mouseX,mouseY,515,l2);

    if (leafDist2 < 30){
        
        
        leaf2(l2 = random(550,600));
       
    }

        var leafDist3 = dist(mouseX,mouseY,265,l3);

    if (leafDist3 < 30){
        
        
        leaf3(l3 = random(550,600));
       
    }

    var leafDist4 = dist(mouseX,mouseY,450,l4);

    if (leafDist4 < 30){
        
        
        leaf2(l4 = random(550,600));
       
    }

    var leafDist5 = dist(mouseX,mouseY,340,l5);

    if (leafDist5 < 30){
        
        
        leaf1(l5 = random(550,600));
       
    }

    var leafDist6 = dist(mouseX,mouseY,700,l6);

    if (leafDist6 < 30){
        
        
        leaf3(l6 = random(550,600));
       
    }
    var leafDist7 = dist(mouseX,mouseY,390,l7);

    if (leafDist7 < 30){
        
        
        leaf3(l7 = random(550,600));
       
    }

    var leafDist8 = dist(mouseX,mouseY,100,l8);

    if (leafDist8 < 30){
        
        
        leaf2(l8 = random(550,600));
       
    }

    var leafDist9= dist(mouseX,mouseY,170,l9);

    if (leafDist9 < 30){
        
        
        leaf3(l9 = random(550,600));
       
    }

    var leafDist10= dist(mouseX,mouseY,280,l10);

    if (leafDist10 < 30){
        
        
        leaf2(l10 = random(550,600));
       
    }
    var leafDist11= dist(mouseX,mouseY,630,l11);

    if (leafDist11 < 30){
        
        
        leaf1(l11 = random(550,600));
       
    }
}

//mouseDragged for apples in summer
function mouseDragged(){

        var mouseColor = get(mouseX,mouseY);


        var appleDist = dist(mouseX,mouseY,A6,B6)
        if (appleDist < 80 && red(mouseColor) == 200){

            A6 = mouseX;
            B6 = mouseY;

        }


        var appleDist1 = dist(mouseX,mouseY,A1,B1)
        if (appleDist1 < 80 && red(mouseColor) == 199){

            A1 = mouseX;
            B1 = mouseY;

        }
        
        var appleDist2 = dist(mouseX,mouseY,A2,B2)
        if (appleDist2 < 80 && red(mouseColor) == 198){

            A2 = mouseX;
            B2 = mouseY;

        }

        var appleDist3 = dist(mouseX,mouseY,A3,B3)
        if (appleDist3 < 80 && red(mouseColor) == 197){

            A3 = mouseX;
            B3 = mouseY;

        }

        var appleDist4 = dist(mouseX,mouseY,A4,B4)
        if (appleDist4 < 80 && red(mouseColor) == 196){

            A4 = mouseX;
            B4 = mouseY;

        }

        var appleDist5 = dist(mouseX,mouseY,A5,B5)
        if (appleDist5 < 80 && red(mouseColor) == 195){

            A5 = mouseX;
            B5 = mouseY;

        }



}

function apple(c,d,r){

push();

translate(c,d);

    stroke(90,60,45);
    strokeWeight(4);
    line(0,0,0,-30);
    noStroke();

    push();
    translate(0,0);
    rotate(PI/3);
    fill(25,90,30);
    ellipse(-20,-20,8,15);
    pop();

    stroke(100,5,5);
    strokeWeight(2);
    fill(r,10,10);

    ellipse(0,0,50,50);
pop();
}

function basket(z){ //apple basket

push();
    translate(z,0);

    stroke(100,50,20)
    strokeWeight(5);
    line(100,510,120,570);
    line(120,570,220,570);
    line(220,570,240,510);
    line(100,510,240,510);
    line(105,520,235,520);
    line(110,530,230,530);
    line(110,540,230,540);
    line(115,550,225,550);
    line(120,560,220,560);
pop();
}


function grass (){

fill(45,110,60);
        for (var t = 80; t > 0; t--){

        x4 = t * 20
        x5 = t * 20
        x6 = (t + 1)* 20

         triangle(x4,height,x5,550,x6,height);
    }

    fill(60,155,80);

    for (var i = 0; i < 80; i++){

        x1 = i * 10
        x2 = i* 10
        x3 = (i + 1) * 10

         triangle(x1,height,x2,550,x3,height);
    }

}

function leaves(){
    push();
        translate(200,l);
        rotate((5*PI)/4);
        scale(0.5);
        leaf1();
    pop();

    push();
        translate(600,l1);
        rotate((3*PI)/4);
        scale(0.75);
        leaf1();
    pop();

    push();
        translate(340,l5);
        rotate((5*PI)/4);
        scale(0.7)
        leaf1();
    pop();

    push();
        translate(630,l11);
        rotate((7*PI)/6);
        scale(0.45);
        leaf1();
    pop();

    push();
        translate(515,l2);
        rotate((5*PI)/6);
        scale(0.9);
        leaf2();
    pop();
    push();
        translate(450,l4);
        rotate((3*PI)/4);
        scale(0.7)
        leaf2();
    pop();
    push();
        translate(100,l8);
        rotate((4*PI)/3);
        leaf2();
    pop();

    push();
        translate(280,l10);
        rotate(PI/6);
        scale(0.5);
        leaf2();
    pop();
    push();
        translate(265,l3);
        rotate(PI);
        leaf3();
    pop();

    push();
        translate(700,l6);
        rotate((3*PI)/4);
        scale(0.8);
        leaf3();
    pop();
    push();
        translate(390,l7);
        rotate(PI/6);
        scale(0.75);
        leaf3();
    pop();
    push();
        translate(170,l9);
        rotate((5*PI)/6);
        scale(0.4);
        leaf3();
    pop();

}



function leaf1(){

push();
   noStroke();
  fill(245,195,65);
  rect(0, 0, 30, 31.5);

  triangle(15, -21, 23, 0, 7, 0);
  triangle(44.7, 0, 30, 16.72, 23, 0);
  triangle(30, 16.72, 48.32, 31.5, 30, 31.5);
  triangle(7, 0, -15, 0, -1.9, 16.72);
  triangle(0, 16.72, -19.68, 31.5, 0, 31.5);

  stroke(255, 206, 51);
  strokeWeight(2.5);
  strokeCap(SQUARE);

  line(15, -10.5, 15, 31.5);
  line(-10, 2.5, 15, 13.8);
  line(37.8, 2.5, 15, 13.8);
  line(-10, 28.8, 15, 20.6);
  line(38.5, 28.8, 15, 20.6);

  stroke(245,190,65);
  line(15, 31.5, 15, 56);
pop();
}

function leaf2(){

push();
   noStroke();
  fill(245,155,65);
  rect(0, 0, 30, 31.5);

  triangle(15, -21, 23, 0, 7, 0);
  triangle(44.7, 0, 30, 16.72, 23, 0);
  triangle(30, 16.72, 48.32, 31.5, 30, 31.5);
  triangle(7, 0, -15, 0, -1.9, 16.72);
  triangle(0, 16.72, -19.68, 31.5, 0, 31.5);

  stroke(200,125,50);
  strokeWeight(2.5);
  strokeCap(SQUARE);

  line(15, -10.5, 15, 31.5);
  line(-10, 2.5, 15, 13.8);
  line(37.8, 2.5, 15, 13.8);
  line(-10, 28.8, 15, 20.6);
  line(38.5, 28.8, 15, 20.6);

  stroke(200,125,50);
  line(15, 31.5, 15, 56);
pop();
}

function leaf3(){

push();
   noStroke();
  fill(255,110,65);
  rect(0, 0, 30, 31.5);

  triangle(15, -21, 23, 0, 7, 0);
  triangle(44.7, 0, 30, 16.72, 23, 0);
  triangle(30, 16.72, 48.32, 31.5, 30, 31.5);
  triangle(7, 0, -15, 0, -1.9, 16.72);
  triangle(0, 16.72, -19.68, 31.5, 0, 31.5);

  stroke(200,125,50);
  strokeWeight(2.5);
  strokeCap(SQUARE);

  line(15, -10.5, 15, 31.5);
  line(-10, 2.5, 15, 13.8);
  line(37.8, 2.5, 15, 13.8);
  line(-10, 28.8, 15, 20.6);
  line(38.5, 28.8, 15, 20.6);

  stroke(200,125,50);
  line(15, 31.5, 15, 56);
pop();
}

function snowball(){
    
    singleSnowflake(s = s + sSpeed);
    singleSnowflake1(s1 = s1 + sSpeed);
    singleSnowflake2(s2 = s2 + sSpeed);
    singleSnowflake3(s3 = s3 + sSpeed);
    singleSnowflake4(s4 = s4 + sSpeed);
    singleSnowflake5(s5 = s5 + sSpeed);
    singleSnowflake6(s6 = s6 + sSpeed);
    singleSnowflake7(s7 = s7 + sSpeed);



    if ( s >= 430 ){
         f = 50
         s = 700;
    }
    if ( s1 >= 420 ){
         f = 60
         s1 = 700;
    }
    if ( s2 >= 410 ){
         f = 70
         s2 = 700;
    }
    if ( s3 >= 400 ){
         f = 80
         s3 = 700;
    }
    if ( s4 >= 390 ){
         f = 90
         s4 = 700;
    }
    if ( s5 >= 380 ){
         f = 100
         s5 = 700;
    }
    if ( s6 >= 370 ){
         f = 110
         s6 = 700;
    }
    if ( s7 >= 360 ){
         f = 120
         s7 = 700;
    }

    push();
        

        //var distance = dist(mouseX,mouseY,250,250);
        z = map(mouseX,0,800,0,800);
        
        
        translate(z,500);

        ellipse(0,0,f,f);
        pop();
}

function singleSnowflake(s){
push();
translate(0,s);
stroke(200,250,255);
strokeCap(SQUARE);
strokeWeight(3);

        line(50,50,50,76);
        line(37,63,63,63);
        line(37,50,63,76);
        line(37,76,63,50);

        line(50,50,45,45);
        line(50,50,55,45);
        line(50,76,55,81);
        line(50,76,45,81);

        line(37,63,32,58);
        line(37,63,32,68);

        line(63,63,68,68);
        line(63,63,68,58);
pop();
}
function singleSnowflake1(s1){
push();
translate(100,s1);
stroke(200,250,255);
strokeCap(SQUARE);
strokeWeight(3);

        line(50,50,50,76);
        line(37,63,63,63);
        line(37,50,63,76);
        line(37,76,63,50);

        line(50,50,45,45);
        line(50,50,55,45);
        line(50,76,55,81);
        line(50,76,45,81);

        line(37,63,32,58);
        line(37,63,32,68);

        line(63,63,68,68);
        line(63,63,68,58);
pop();
}
function singleSnowflake2(s2){
push();
translate(300,s2);
stroke(200,250,255);
strokeCap(SQUARE);
strokeWeight(3);

        line(50,50,50,76);
        line(37,63,63,63);
        line(37,50,63,76);
        line(37,76,63,50);

        line(50,50,45,45);
        line(50,50,55,45);
        line(50,76,55,81);
        line(50,76,45,81);

        line(37,63,32,58);
        line(37,63,32,68);

        line(63,63,68,68);
        line(63,63,68,58);
pop();
}
function singleSnowflake3(s3){
push();
translate(600,s3);
stroke(200,250,255);
strokeCap(SQUARE);
strokeWeight(3);

        line(50,50,50,76);
        line(37,63,63,63);
        line(37,50,63,76);
        line(37,76,63,50);

        line(50,50,45,45);
        line(50,50,55,45);
        line(50,76,55,81);
        line(50,76,45,81);

        line(37,63,32,58);
        line(37,63,32,68);

        line(63,63,68,68);
        line(63,63,68,58);
pop();
}
function singleSnowflake4(s4){
push();
translate(450,s4);
stroke(200,250,255);
strokeCap(SQUARE);
strokeWeight(3);

        line(50,50,50,76);
        line(37,63,63,63);
        line(37,50,63,76);
        line(37,76,63,50);

        line(50,50,45,45);
        line(50,50,55,45);
        line(50,76,55,81);
        line(50,76,45,81);

        line(37,63,32,58);
        line(37,63,32,68);

        line(63,63,68,68);
        line(63,63,68,58);
pop();
}
function singleSnowflake5(s5){
push();
translate(700,s5);
stroke(200,250,255);
strokeCap(SQUARE);
strokeWeight(3);

        line(50,50,50,76);
        line(37,63,63,63);
        line(37,50,63,76);
        line(37,76,63,50);

        line(50,50,45,45);
        line(50,50,55,45);
        line(50,76,55,81);
        line(50,76,45,81);

        line(37,63,32,58);
        line(37,63,32,68);

        line(63,63,68,68);
        line(63,63,68,58);
pop();
}
function singleSnowflake6(s6){
push();
translate(220,s6);
stroke(200,250,255);
strokeCap(SQUARE);
strokeWeight(3);

        line(50,50,50,76);
        line(37,63,63,63);
        line(37,50,63,76);
        line(37,76,63,50);

        line(50,50,45,45);
        line(50,50,55,45);
        line(50,76,55,81);
        line(50,76,45,81);

        line(37,63,32,58);
        line(37,63,32,68);

        line(63,63,68,68);
        line(63,63,68,58);
pop();
}
function singleSnowflake7(s7){
push();
translate(150,s7);
stroke(200,250,255);
strokeCap(SQUARE);
strokeWeight(3);

        line(50,50,50,76);
        line(37,63,63,63);
        line(37,50,63,76);
        line(37,76,63,50);

        line(50,50,45,45);
        line(50,50,55,45);
        line(50,76,55,81);
        line(50,76,45,81);

        line(37,63,32,58);
        line(37,63,32,68);

        line(63,63,68,68);
        line(63,63,68,58);
pop();
}


//this is a duplicate flower function without randomness so that I can use it in draw to create permanent flowers
function flower1(a,b){   

fill(204, 101, 192, 180);
 push();
  noStroke();

  translate(a,b);
  for (var i = 0; i < 10; i ++) {
    rotate(PI/5);
    ellipse(0, 30, 20, 40);
    
  }
  fill(255,220,30);
  ellipse(0,0,20,20);
  pop();
}


// code for this snowfall taken from p5js.org, https://p5js.org/examples/simulate-snowflakes.html 
function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2))); // pow used for exponential increase

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}

function snow(){

    noStroke();
    

    fill(240);
    rect(0,530,800,70);
}

function snowMan(s){
noStroke();
    

    fill(240);

    push();
translate(s,0);
//snowman
    //hat
    stroke(90,60,50);
    strokeWeight(1);
    fill(210,75,50);
    ellipse(600,390,40,40);
   
    //body
    strokeWeight(1);
    stroke(200);
    fill(255);
    ellipse(600,525,100,100);
    ellipse(600,470,75,75);
    ellipse(600,420,60,60);
    //hat
    stroke(90,60,50);
    strokeWeight(1);
    fill(210,75,50);
    rect(575,389,50,10);

    fill(0);
    //buttons
    ellipse(600,457,5,5);
    ellipse(600,475,5,5);
    ellipse(600,493,5,5);
    //eyes
    ellipse(590,415,5,5);
    ellipse(610,415,5,5);
    //smile
    ellipse(585,430,4,4);
    ellipse(591,435,4,4);
    ellipse(599,438,4,4);
    ellipse(607,435,4,4);
    ellipse(615,430,4,4);

    noStroke();
    fill(230,145,20);
    triangle(600,415,603,425,578,435);

    stroke(90,80,60);
    strokeWeight(5); 
    line(570,460,540,430);
    line(630,460,660,430);
    strokeWeight(3);
    line(540,430,540,415);
    line(540,430,530,420);
    line(540,430,525,430);
    line(660,430,660,415);
    line(660,430,670,420);
    line(660,430,675,430);

pop();
}

function drawSnowflakes(){
        let t = frameCount / 40; // update time

          // create a random number of snowflakes each frame
          for (var i = 0; i < random(5); i++) {
            snowflakes.push(new snowflake()); // append snowflake object
          }

          // loop through snowflakes with a for..of loop
          for (let flake of snowflakes) {
            flake.update(t); // update snowflake position
            flake.display(); // draw snowflake
          }
}

function summerTree() {

      noStroke();

    fill(25,90,30);
        ellipse(210,190,150,150);
        ellipse(350,290,150,150);
        ellipse(520,310,150,150);
        ellipse(510,140,200,200);

    fill(110,70,30);
    rect(350,370,100,300);

    stroke(110,70,30);
    strokeWeight(50);
    line(390,390,270,270);
    line(430,430,530,270);
    strokeWeight(30);
    line(410,390,420,250)

    noStroke();

    fill(30,120,60);
        ellipse(180,260,200,200);
        ellipse(300,310,150,150);
        ellipse(460,250,200,200);
        ellipse(380,60,175,175);

    fill(35,140,70);
        ellipse(350,200,200,200);
        ellipse(610,230,200,200);
        ellipse(250,100,150,150);
        ellipse(490,110,175,175);

    fill(40,150,70);
        ellipse(270,240,150,150);
        ellipse(380,110,150,150);
        ellipse(480,220,170,170);



}


function fallTree(){


noStroke();
    fill(110,90,60);
    rect(350,370,100,300);

     stroke(110,90,60);
    strokeWeight(40);
    line(390,390,270,270);
    line(430,430,530,270);
    strokeWeight(30);
    line(410,390,420,250);
    line(270,270,200,300);
    line(270,270,250,200);
    line(530,270,600,300);
    line(525,270,550,200);
    strokeWeight(20);
    line(420,310,370,250);
    line(420,250,480,180);
    line(420,250,360,160);
    line(200,300,140,350);

    line(200,300,140,250);
    line(245,200,200,140);
    line(250,200,300,140);
    line(600,300,650,270);
    line(595,300,650,340);
    line(550,200,510,150);
    line(550,200,600,150);
    strokeWeight(10);
    line(140,350,100,340);
    line(140,350,110,390)
    line(140,250,150,200);
    line(135,250,100,230);
    line(195,140,150,100);
    line(200,140,230,90);
    line(300,140,280,80);
    line(305,140,330,90);
    line(355,160,320,140);
    line(360,160,390,100);
    line(375,250,340,200);
    line(370,250,330,260);
    line(460,190,455,130);
    line(505,150,460,110);
    line(510,150,530,90);
    line(600,150,580,90);
    line(605,150,640,120);
    line(650,270,630,200);
    line(650,275,690,250);
    line(300,320,250,360);
    line(650,340,680,320);
    line(645,340,680,380)
    strokeWeight(5);
    line(150,200,170,170);
    line(150,200,140,160);
    line(148,100,110,90);
    line(150,100,170,60);

    line(230,90,200,40);
    line(230,90,250,50);
    line(280,80,260,30);
    line(280,80,300,35);
    line(330,90,310,40);
    line(330,90,360,60);
    line(390,100,360,30);
    line(390,100,410,50);
    line(340,200,300,180);
    line(340,200,340,170);
    line(330,260,310,280);
    line(330,260,310,220);
    line(455,150,420,140);
    line(455,180,410,170);
    line(460,110,420,80);
    line(460,110,475,60);

    line(530,90,500,40);
    line(530,90,540,20);
    line(580,90,570,60);
    line(580,90,600,40);
    line(640,120,630,60);
    line(640,120,660,100);
    line(630,200,600,170);
    line(630,200,650,150);
    line(690,250,680,200);
    line(690,250,720,250);

    line(480,320,470,280);
    line(230,280,200,230);
    line(580,280,580,230);

    strokeWeight(3);
    line(140,160,120,130);
    line(140,160,150,130);
    line(170,170,150,150);
    line(170,170,180,150)
    line(200,40,180,20);
    line(200,40,220,30);
    line(250,50,240,10);
    line(260,30,250,5);
    line(260,30,280,5);
    line(300,35,280,0);
    line(300,35,310,10);
    line(320,60,330,10);
    line(360,30,350,5);
    line(360,30,380,0);
    line(410,50,400,5);
    line(410,50,420,5);
    line(300,180,280,150);
    line(300,180,270,200);
    line(420,80,400,5);
    line(420,80,440,0);
    line(475,60,450,10);
    line(475,60,490,5);
    line(510,50,530,20);
    line(540,20,520,0);
    line(540,20,560,0);
    line(600,40,590,10);
    line(600,40,620,20);
    line(470,280,460,250);
    line(470,280,490,250);
    line(200,230,180,200);
    line(200,230,220,200);
    line(580,230,570,200);
    line(580,230,600,190);

noStroke();

    fill(90,135,100); 
        ellipse(320,30,60,60);
        ellipse(630,170,60,60);
        ellipse(120,350,60,60);

    fill(245,155,65);
        
        ellipse(300,310,100,100);
        ellipse(470,220,120,120);
        ellipse(380,60,140,140);

    fill(245,190,65);

        ellipse(670,250,120,120);
        ellipse(220,80,100,100);
        

    fill(255,110,65);
        ellipse(120,220,100,100);
        ellipse(330,170,80,80);
        ellipse(590,70,90,90);

}

function winterTree(){

noStroke();
    fill(140,120,100);
    rect(350,370,100,300);

     stroke(140,120,100);
    strokeWeight(40);
    line(390,390,270,270);
    line(430,430,530,270);
    strokeWeight(30);
    line(410,390,420,250);
    line(270,270,200,300);
    line(270,270,250,200);
    line(530,270,600,300);
    line(525,270,550,200);
    strokeWeight(20);
    line(420,310,370,250);
    line(420,250,480,180);
    line(420,250,360,160);
    line(200,300,140,350);

    line(200,300,140,250);
    line(245,200,200,140);
    line(250,200,300,140);
    line(600,300,650,270);
    line(595,300,650,340);
    line(550,200,510,150);
    line(550,200,600,150);
    strokeWeight(10);
    line(140,350,100,340);
    line(140,350,110,390)
    line(140,250,150,200);
    line(135,250,100,230);
    line(195,140,150,100);
    line(200,140,230,90);
    line(300,140,280,80);
    line(305,140,330,90);
    line(355,160,320,140);
    line(360,160,390,100);
    line(375,250,340,200);
    line(370,250,330,260);
    line(460,190,455,130);
    line(505,150,460,110);
    line(510,150,530,90);
    line(600,150,580,90);
    line(605,150,640,120);
    line(650,270,630,200);
    line(650,275,690,250);
    line(300,320,250,360);
    line(650,340,680,320);
    line(645,340,680,380)
    strokeWeight(5);
    line(150,200,170,170);
    line(150,200,140,160);
    line(148,100,110,90);
    line(150,100,170,60);

    line(230,90,200,40);
    line(230,90,250,50);
    line(280,80,260,30);
    line(280,80,300,35);
    line(330,90,310,40);
    line(330,90,360,60);
    line(390,100,360,30);
    line(390,100,410,50);
    line(340,200,300,180);
    line(340,200,340,170);
    line(330,260,310,280);
    line(330,260,310,220);
    line(455,150,420,140);
    line(455,180,410,170);
    line(460,110,420,80);
    line(460,110,475,60);

    line(530,90,500,40);
    line(530,90,540,20);
    line(580,90,570,60);
    line(580,90,600,40);
    line(640,120,630,60);
    line(640,120,660,100);
    line(630,200,600,170);
    line(630,200,650,150);
    line(690,250,680,200);
    line(690,250,720,250);

    line(480,320,470,280);
    line(230,280,200,230);
    line(580,280,580,230);

    strokeWeight(3);
    line(140,160,120,130);
    line(140,160,150,130);
    line(170,170,150,150);
    line(170,170,180,150)
    line(200,40,180,20);
    line(200,40,220,30);
    line(250,50,240,10);
    line(260,30,250,5);
    line(260,30,280,5);
    line(300,35,280,0);
    line(300,35,310,10);
    line(320,60,330,10);
    line(360,30,350,5);
    line(360,30,380,0);
    line(410,50,400,5);
    line(410,50,420,5);
    line(300,180,280,150);
    line(300,180,270,200);
    line(420,80,400,5);
    line(420,80,440,0);
    line(475,60,450,10);
    line(475,60,490,5);
    line(510,50,530,20);
    line(540,20,520,0);
    line(540,20,560,0);
    line(600,40,590,10);
    line(600,40,620,20);
    line(470,280,460,250);
    line(470,280,490,250);
    line(200,230,180,200);
    line(200,230,220,200);
    line(580,230,570,200);
    line(580,230,600,190);

}

function springTree(){

noStroke();
     fill(120,90,50);
    rect(350,370,100,300);

    stroke(120,90,50);
    strokeWeight(40);
    line(390,390,270,270);
    line(430,430,530,270);
    strokeWeight(30);
    line(410,390,420,250);
    line(270,270,200,300);
    line(270,270,250,200);
    line(530,270,600,300);
    line(525,270,550,200);
    strokeWeight(20);
    line(420,310,370,250);
    line(420,250,480,180);
    line(420,250,360,160);
    line(200,300,140,350);

    line(200,300,140,250);
    line(245,200,200,140);
    line(250,200,300,140);
    line(600,300,650,270);
    line(595,300,650,340);
    line(550,200,510,150);
    line(550,200,600,150);
    strokeWeight(10);
    line(140,350,100,340);
    line(140,350,110,390)
    line(140,250,150,200);
    line(135,250,100,230);
    line(195,140,150,100);
    line(200,140,230,90);
    line(300,140,280,80);
    line(305,140,330,90);
    line(355,160,320,140);
    line(360,160,390,100);
    line(375,250,340,200);
    line(370,250,330,260);
    line(460,190,455,130);
    line(505,150,460,110);
    line(510,150,530,90);
    line(600,150,580,90);
    line(605,150,640,120);
    line(650,270,630,200);
    line(650,275,690,250);
    line(300,320,250,360);
    line(650,340,680,320);
    line(645,340,680,380);

        noStroke();

    fill(30,120,60);
        
        ellipse(300,310,100,100);
        ellipse(470,220,120,120);
        ellipse(380,60,140,140);

    fill(35,140,70);

        ellipse(660,230,120,120);
        ellipse(220,80,100,100);
        ellipse(580,90,150,150);

    fill(40,150,70);
        ellipse(150,220,150,150);
        ellipse(330,180,110,110);
        ellipse(480,100,90,90);
        ellipse(700,290,80,80);


}

//THIS IS THE FLOWER   
function flower(a,b){   

fill(random(100,204), 101, 192, 180);
 push();
  noStroke();

  translate(a,b);
  for (var i = 0; i < 10; i ++) {
    rotate(PI/5);
    ellipse(0, 30, 20, 40);
    
  }
  fill(255,220,30);
  ellipse(0,0,20,20);
  pop();
}


function summerSun (x){

     
push();
    translate(x,0);
    //sun circles
    noStroke();
    fill(255,200,30);
        ellipse(0,0,300,300);
    fill(255,210,30);
        ellipse(0,0,250,250);
    fill(255,220,30);
        ellipse(0,0,200,200);
    fill(255,230,30);
        ellipse(0,0,150,150);
pop();
}

function fallSun (x){

noStroke();
push();
    translate(x,0);

    fill(255,210,30);
        ellipse(0,100,250,250);
    fill(255,220,30);
        ellipse(0,100,200,200);
    fill(255,230,30);
        ellipse(0,100,150,150);

pop();
}

function winterSun (x){

noStroke();
push();
    translate(x,0);

    fill(255,220,30);
        ellipse(0,175,200,200);
    fill(255,230,30);
        ellipse(0,175,150,150);

pop();
}