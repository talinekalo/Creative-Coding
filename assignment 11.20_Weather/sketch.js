var myData; 
var url;
var apiKey;
var baseURL;
var cityName;

var temp;
var High;
var Low;

var question;
var input;
var inputButton;


function setup() {

	createCanvas(300,300);

	baseURL = "http://api.openweathermap.org/data/2.5/weather?"; 
	apiKey = "caf13db084462f507d6a6e21858c6b65";
	cityName = "London";

	url = baseURL + "q=" + cityName + "&APPID=" + apiKey;
	console.log(url);

	question = createP("What city weather would you like to know?");
	question.position(20,0);


	input = createInput("");
	input.position(20,40);
	input.style('width','150px');

	inputButton = createButton("enter");
	inputButton.position(180,40);
	inputButton.mouseClicked(city);

  // put setup code here
}

function draw() {

	text("temperature:", 20,100);
	text("High:",20,120);
	text("Low:",20,140);

text(temp,100,100);
text(High,100,120);
text(Low,100,140);

  // put drawing code here
}

function callback(myData){

	console.log(myData);
	temp = myData.main.temp;
	High = myData.main.temp_max;
	Low = myData.main.temp_min;

}

function city(){

	background(255);
	cityName = input.value();
	url = baseURL + "q=" + cityName + "&APPID=" + apiKey;
	myData = loadJSON(url, callback);
	input.value("");


}