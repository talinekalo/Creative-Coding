
var x = 0;
var y = 0;
var width = 24;
var height = 24;
var m = 45;

function setup() {
	createCanvas(600,600);
	background(255);
	
	fill(0);


  // put setup code here
}

function draw() {

for(var j = 0; j<12; j++){

	y = 2^(j*40) +20
	height = (j-23)^1.5


	for(var i = 0; i < 11; i++){

		x = 2^(i*m) +20

		width = (i + 2) * 2
		
		ellipse(x,y,width,height);

	}
}

for(var j = 0; j<11; j++){

	y = 2^(j*40) +43.5
	height = (j-23)^1.5


	for(var i = 0; i < 11; i++){

		x = 2^(i*m) -5

		width = (i + 2) * 2
		
		ellipse(x,y,width,height);
	}
}



  // put drawing code here
}