var par;
var input;
var button;
var inputText;

var slider;
var sliderVal

function setup() {
	slider = createSlider(0,255,0);


	par = createP("hello");
	par.position(200,100);

	par.style('text-decoration', 'underline');
	par.style('letter-spacing', '10px');

	//par.style('text-shadow', '200px');

	input = createInput("");
	input.position(5,40);

	button = createButton("enter");
	button.position(150,40);
	button.mousePressed(updateText);

  // put setup code here
}

function draw() {
	sliderVal = slider.value();
	par.style('color',color(sliderVal,0,0));
	
	
  // put drawing code here
}

function updateText(){

	inputText = input.value();

	input.value("");
	par.html(inputText);

}