var myImage;
var squareSound;
var squareSound1;
var popSound;
var square;
var balls = [];

function preload(){

	myImage = loadImage("assets/sunsetgradient.png");
	squareSound = loadSound("assets/RotatingSquares.mp3");
	squareSound1 = loadSound("assets/squareDown.mp3")
	popSound = loadSound("assets/pop.ogg")
}

function setup() {
	createCanvas(900,650);
	background(60,30,200);
	rectMode(CENTER);
	angleMode(DEGREES);

square = new square(width/2,height/2,1,3,0)




for (var i = 0; i <50; i++){

	x = (i*50);

	size = random(10,100);

	balls[i] = new Ball(x,height/2,size,0.25)

}


}

function draw() {
	
	image(myImage,0,0);

square.animate();
square.display();



for(var i=0; i < balls.length;i++){
	balls[i].animate();
	balls[i].displayBall();

}


}

function square(xPos,yPos,size,Up){

this.x = xPos
this.y = yPos
this.size = size
this.sizeUp = Up
this.rot = random(45,180);
this.rotStep = random(1,3);


this.animate = function(){


	this.size += this.sizeUp
	this.rot += this.rotStep

	if(this.rot >=360){
			this.rot = 0;
	}

	if (this.size >= 1000 || this.size < 1){
		this.sizeUp *= -1
	}
	if(this.size == 1){
		squareSound.play(); 
	
	}
	if(this.size == 1000){
		squareSound1.play();
	}
}

this.display = function(){
	noStroke();
	fill(0, 150);

		
		push();
		translate(this.x,this.y)
		rotate(this.rot);
		rect(0,0,this.size,this.size);
		pop();
			

}

};

function Ball(xVal, yVal,size,up){

	this.x = xVal;
	this.y = yVal;
	this.size = size;
	this.sizeUp = up;

	
	this.animate = function(){

		this.size += this.sizeUp;

		
		if (this.size >= 150){
			this.size = 0;
		}

		if (this.size == 149){
			popSound.play();
		}
	}

	this.displayBall = function(){
		noStroke();
		fill(255, 100);
		ellipse(this.x,this.y,this.size,this.size);
	}

};