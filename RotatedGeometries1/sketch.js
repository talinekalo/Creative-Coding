function setup() {
	createCanvas (600,600);
	background(255);

  // put setup code here
}

function draw() {




push();
	translate(200,200);
	rotate(PI/4);
	rect(0,0,30,30);
pop();
push();
	translate(300,200);
	rotate(PI/3);
	rect(0,0,30,30);
pop();
push();
	translate(400,200);
	rotate(PI/6);
	rect(0,0,30,30)

pop();



  // put drawing code here
}