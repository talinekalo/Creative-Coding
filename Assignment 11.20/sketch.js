
var myData;
var globalData;
var url; 
var baseUrl;
var apiKey;

var tag;
var tags;

var tagIndex = 0; 

var xPos;
var yPos;

var images = [];

var question;
var input;
var inputButton;

function setup() {

	createCanvas(1000,400);
	frameRate(30);


	baseUrl ="https://pixabay.com/api/?"
	apiKey = "10685489-53d502d68089258dc63a673a2"

	url = baseUrl + "key=" + apiKey + "&q=" + tag + "&image_type=photo";

	question = createP("What would you like to see?");
	question.position(20,0);


	input = createInput("");
	input.position(20,40);
	input.style('width','150px');

	inputButton = createButton("enter");
	inputButton.position(180,40);
	inputButton.mousePressed(tagDescription);

  // put setup code here
}

function draw() {

	if (tagIndex > 18){
 	tagIndex = 1;
 }

if (myData && frameCount % 30 == 0){
 	tagIndex++;
	xPos = random(0,850);
 	yPos = random(50,300);

 	 if(myData && images.length < 20){
 	tags = globalData.hits[tagIndex].largeImageURL;
 	loadImage(tags, function(img) {
 	image(img,xPos,yPos,img.width*0.15,img.height*0.15);
 	images.push(img);
 	console.log(images.length);
 });
 	
 }
else {
	image(images[tagIndex],xPos,yPos,images[tagIndex].width*0.1,images[tagIndex].height*0.1);
}
 }
  // put drawing code here
}
function callBack(myData){

globalData = myData; 
	 
}

function tagDescription(){

		background(255);
		tag = input.value();
		url = baseUrl + "key=" + apiKey + "&q=" + tag + "&image_type=photo";
		images = [];
		myData = loadJSON(url, callBack);
		
		input.value("");


}





