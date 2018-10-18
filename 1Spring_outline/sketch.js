
var brown; 
var green;
var green1;
var green2;
var green3;
function setup() {

	createCanvas(800,600);

	background(120,200,230);
	ellipseMode(CENTER);
	brown = color(120,90,50,255);
	green = color(30,120,60);
	green1 = color(35,140,70);
	green2 = color(40,150,70);
	green3 = color(60,155,80);
  // put setup code here
}

function draw() {

	springTree();
	grass();
	

	
}
  // put drawing code here

  	function mouseClicked(){
		
		var mouseColor;
		
		mouseColor = get(mouseX,mouseY);

		
		if (mouseColor == brown){
					console.log(mouseColor);

		flower();
		

		}
		
	}


function flower(){	

fill(204, 101, 192, 180);

  noStroke();
  translate(mouseX,mouseY);
  for (var i = 0; i < 10; i ++) {
    ellipse(0, 30, 20, 40);
    rotate(PI/5);
  }
  fill(255,220,30);
  ellipse(0,0,20,20);
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
        x2 = i *  10
        x3 = (i + 1) * 10

         triangle(x1,height,x2,550,x3,height);
    }




}