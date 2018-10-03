
//var y;
function setup() {
	createCanvas(325,325);
	background(100);
	rectMode(CENTER);
  // put setup code here
}

function draw() {

	
/*
	for(var j=0;j<10;j++){


		y= (j*30)+20

*/

	
	for(var i=0;i<3;i++){

		push();
			translate(((i*100)+50), height/2);

			ellipse(0,0,5,5);
				rotate(PI/(i+2));

				rect(0,0,30,30);
		pop();



	}
//}

}
  // put drawing code here
