var myBall1;
var myBall2;
var myBall3;
var myBall4;
var myBall5

function setup() {
	createCanvas(500,500);

	myBall1 = new Ball(50,100,2,3,5,1,color(0));
	myBall2 = new Ball(50,300,3,1,10,2,color(100,200,100));
	myBall3 = new Ball(150,100,1,1,15,1,color(100,50,200));
	myBall4 = new Ball(400,400,3,2,20,3,color(50,25,100));
	myBall5 = new Ball(250,250,2,1,25,4,color(200,0,100));

  // put setup code here
}

function draw() {
	background(230,100,150);

	myBall1.displayBall();
	myBall2.displayBall();
	myBall3.displayBall();
	myBall4.displayBall();
	myBall5.displayBall();

	myBall1.animate();
	myBall2.animate();
	myBall3.animate();
	myBall4.animate();
	myBall5.animate();
  // put drawing code here
}

function Ball(xVal, yVal, xVel, yVel,size,up,color){

	this.x = xVal;
	this.y = yVal;
	this.Xvel = xVel;
	this.Yvel = yVel;
	this.size = size;
	this.sizeUp = up;
	this.color = color;
	
	this.animate = function(){
		this.x += this.Xvel;
		this.y += this.Yvel;
		this.size += this.sizeUp;

		if(this.x <=0 || this.x >= width){
			this.Xvel *= -1;
		}
		if(this.y <=0 || this.y >= height){
			this.Yvel *= -1;
		}
		if (this.size >= 70 || this.size <= 5){
			this.sizeUp *= -1;
		}
	}

	this.displayBall = function(){
		noStroke();
		fill(this.color);
		ellipse(this.x,this.y,this.size,this.size);
	}

};