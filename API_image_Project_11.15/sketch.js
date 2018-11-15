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

 // added this in for the start screen to give some guidance



function setup() {



	createCanvas(1000,400);
	frameRate(30);
	textSize(20);
	textFont('Georgia');
	text("Choose: 1 2 3 4 5 6 7",350,200,300,100);

	baseUrl ="https://pixabay.com/api/?"
	apiKey = "10685489-53d502d68089258dc63a673a2"

	url = baseUrl + "key=" + apiKey + "&q=" + tag + "&image_type=photo";

	console.log(url);


	
  // put setup code here
}

function draw() {

if (tagIndex > 18){
 	tagIndex = 1;
 }
// set up the images so that they would be saved into an array and redrawn once all images from API are loaded in (loop)
if (myData && frameCount % 30 == 0){
 	tagIndex++;
	xPos = random(0,900);
 	yPos = random(0,300);

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
 
}

function callBack(myData){

globalData = myData; //globalData used so I can use myData outside of the callBack function

console.log(tags);

	 
}

function keyPressed(){


	// created up to 7 keys to press which will give 7 different image themes
	if(key=='1'){
		background(121, 185, 234);
		tag = "blue+ocean";
		url = baseUrl + "key=" + apiKey + "&q=" + tag + "&image_type=photo";
		images = [];
		myData = loadJSON(url, callBack);
		
				textSize(90);
		textFont('Georgia');
		text("Ocean",360,150,100,100);
		
	

	}
	if(key=='2'){
		background(130, 110, 75);
		tag = "mountain";
		url = baseUrl + "key=" + apiKey + "&q=" + tag + "&image_type=photo";
		images = [];
		myData = loadJSON(url, callBack);
		textSize(90);
		textFont('Georgia');
		text("Mountain",300,150,100,100);
	
	}
	if(key=='3'){
		background(188);
		tag = "city";
		url = baseUrl + "key=" + apiKey + "&q=" + tag + "&image_type=photo";
		images = [];
		myData = loadJSON(url, callBack);
		textSize(90);
		textFont('Georgia');
		text("City",400,150,100,100);

	}
	if(key=='4'){
		background(198, 155, 99);
		tag = "desert";
		url = baseUrl + "key=" + apiKey + "&q=" + tag + "&image_type=photo";
		images = [];
		myData = loadJSON(url, callBack);
		textSize(90);
		textFont('Georgia');
		text("Desert",360,150,100,100);

	}
	if(key=='5'){
		background(133, 186, 128);
		tag = "green+forest";
		url = baseUrl + "key=" + apiKey + "&q=" + tag + "&image_type=photo";
		images = [];
		myData = loadJSON(url, callBack);
		textSize(90);
		textFont('Georgia');
		text("Forest",360,150,100,100);

	}
	if(key=='6'){
		background(237, 218, 149);
		tag = "rural";
		url = baseUrl + "key=" + apiKey + "&q=" + tag + "&image_type=photo";
		images = [];
		myData = loadJSON(url, callBack);
		textSize(90);
		textFont('Georgia');
		text("Rural",360,150,100,100);

	}
	if(key=='7'){
		background(2, 86, 26);
		tag = "jungle";
		url = baseUrl + "key=" + apiKey + "&q=" + tag + "&image_type=photo";
		images = [];
		myData = loadJSON(url, callBack);
		textSize(90);
		textFont('Georgia');
		text("Jungle",360,150,100,100);

	}



	
	
}



