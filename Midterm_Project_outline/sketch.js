function setup() {

createCanvas(800,600);

background (240);

    ellipseMode(CENTER);
    rectMode(CENTER);

    color1 = color(150,0,10);
    color2 = color(200,0,40);

	
  // put setup code here
}

function draw() {

noStroke();
//summer sky 
	fill(90,120,240)
	rect(200,150,400,300);

//fall sky
	fill(200);
	rect(600,150,400,300);

//spring sky
	fill(100,150,220);
	rect(200,450,400,300);

//winter sky 
	fill(230);
	rect(600,450,400,300);
  // put drawing code here

  tree();
  flower(); 
  snowman();
  leaves(); // will place leaves thourghout the tree and using mouseIsClicked I will program it to animate to the ground when a leaf is clicked 

}


funtion tree(){

	// I will create a full custom tree out of lines that will fit across all four rectangles 
}

function leaves (){

	//I will design one leaf template and use it for fall, setting the color random to either red, yellow or orange (fall colors)
}

function snowman (){

	fill(255);
	ellipse(600,525,100,100);
	ellipse(600,470,75,75);
	ellipse(600,420,60,60);

	fill(0);
	ellipse(600,455,5,5);
	ellipse(600,475,5,5);
	ellipse(600,495,5,5);

	//will continue to build snowman 
}



function flower(){

	//flower sample (EXAMPLE used from precious project)
	//will be used in the spring season 

	stroke(1);
    fill(90,120,240);
    ellipse(100,100,100,100);



    push();
    translate(100,100);
    y = map(mouseY,0,500,0,PI);
    rotate(y);
    fill(color1);
        rect(0,0,70,70);
    pop();


    push();
    fill(color2);
    translate(100,100);
    x = map (mouseX, 0, 600, 0, PI);
        rotate(x);
    rect(0,0,70,70);
    pop();

    push();
    translate(100,100);
    y = map(mouseY,0,500,0,PI);
    rotate(y);
    fill(color1);
        rect(0,0,60,60);
    pop();

    push();
    fill(color2);
    translate(100,100);
    x = map (mouseX, 0, 600, 0, PI);
        rotate(x);
    rect(0,0,60,60);
    pop();

    push();
    translate(100,100);
    y = map(mouseY,0,500,0,PI);
    rotate(y);
    fill(color1);
        rect(0,0,50,50);
    pop();

    push();
    fill(color2);
    translate(100,100);
    x = map (mouseX, 0, 600, 0, PI);
        rotate(x);
    rect(0,0,50,50);
    pop();

    push();
    translate(100,100);
    y = map(mouseY,0,500,0,PI);
    rotate(y);
    fill(color1);
        rect(0,0,40,40);
    pop();

    push();
    fill(color2);
    translate(100,100);
    x = map (mouseX, 0, 600, 0, PI);
        rotate(x);
    rect(0,0,40,40);
    pop();

    push();
    translate(100,100);
    y = map(mouseY,0,500,0,PI);
    rotate(y);
    fill(color1);
        rect(0,0,30,30);
    pop();

    push();
    fill(color2);
    translate(100,100);
    x = map (mouseX, 0, 600, 0, PI);
        rotate(x);
    rect(0,0,30,30);
    pop();

    push();
    translate(100,100);
    y = map(mouseY,0,500,0,PI);
    rotate(y);
    fill(color1);
        rect(0,0,20,20);
    pop();

    push();
    fill(color2);
    translate(100,100);
    x = map (mouseX, 0, 600, 0, PI);
        rotate(x);
    rect(0,0,20,20);
    pop();

}