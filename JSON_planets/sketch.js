var myData;
var stars;

function preload(){
 myData = loadJSON("assets/planets.json");
 stars = loadImage("assets/starry.png");
}

function setup() {
	createCanvas(1500,800);
	

	console.log(myData.planets.length);

	ellipseMode(CORNER);
	background(0);
	image(stars,0,0,1500,800)
	fill(255);
	textSize(90);
	textFont('Georgia');
	textStyle(ITALIC)
	text("Number of Moons",20,580,500,250);
	rectMode(CENTER);
	for (var i = 0; i <myData.planets.length; i++){

		var planetName = myData.planets[i].name;
		var planetMoons = myData.planets[i].numberOfMoons; 
  
		var x = (i * 100) +50;
	 
		noStroke();

		ellipse((i*110)+70,100,40,planetMoons*10);
		fill(255);
		textSize(20);
		textStyle(BOLD)
		text(planetName,(i*110)+85,90,50,100)
		text(planetMoons,(i*110)+100,95,50,50)

	}


	
  // put setup code here
}

function draw() {

  // put drawing code here
}