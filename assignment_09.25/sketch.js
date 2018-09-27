function setup() {

	createCanvas(600,500);
	
  // put setup code here
}

function draw() {

strokeWeight(5);
noFill();
rect(0,0,600,500);

  // put drawing code here
}


function mouseMoved(){

	

	if (mouseX < 300 && mouseY < 167){
		background(255,0,150);
		console.log(mouseX);
	}
	else if (mouseX < 300 && mouseY > 167){

		background(0,150,150);
	}
	else if (mouseX == 500){
		background(255);
	}
	else{
	background(150,0,255);
	}
}