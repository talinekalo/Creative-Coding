var x;
var y;
var z;

function setup() {
	createCanvas(500,500);
	rectMode(CENTER);
	noStroke();
  // put setup code here
}

function draw() {


background(175,0,175);
	push();
		translate(100,250);
		
		x = map(mouseX,0,500,0,PI);
		
		rotate(x);

		rect(0,0,30,30);
	pop();


	push();
		translate(250,250);

		var distance = dist(mouseX,mouseY,250,250);
		z = map(distance,0,250,0,PI);
		console.log(distance);
		rotate(z);

		rect(0,0,30,30);
	pop();

	push();
		translate(400,250);

		y = map(mouseY,0,500,0,PI);

		rotate(y);

		rect(0,0,30,30);
	pop();
  // put drawing code here
}