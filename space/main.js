//init canvas
var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

//variables
var height = 0; //score

var questionCorrect = false; //is the rocket currently moving upwards?

//import questions from json file
var questions = data;
//address of current question
var questionTopic = null; 
var questionNumber = null;

//define player object
var rocket = {
	x: canvas.width/2,
	y: 100,
	
	imageSize: {
		x: 53,
		y: 91,
	}
};

//stop image smoothing (makes images look low quality)
ctx.mozImageSmoothingEnabled = false;
ctx.webkitImageSmoothingEnabled = false;
ctx.msImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;

//load in pictures
//rocket
rocket.picture1 = new Image();
rocket.picture1.src = "./assets/rocket1.png";
rocket.picture2 = new Image();
rocket.picture2.src = "./assets/rocket2.png";
rocket.currentPicture = rocket.picture1;
//danger (currently unused)
var danger = new Image();
danger.src = "./assets/danger.png";

//set canvas background colour
var canvasColour = "#d1f3ff";

//pick a new question
function pickQuestion() {
	questionTopic = "hardware";
	questionNumber = randomNum(questions.hardware.length);
	document.getElementById("question").innerHTML = questions[questionTopic][questionNumber].question;
}

//generate random number between 0 and upper limit (upper limit will never be reached)
function randomNum(upper) {
	var foo = Math.random();
	foo *= upper;
	var bar = Math.floor(foo);
	return bar;
}

//verify user's answer is correct
function verifyAnswer() {
	if(document.getElementById("answer").value == questions[questionTopic][questionNumber].answer) {
		//correct answer
		questionCorrect = true;
		height += Math.round((canvas.height - rocket.y) / (canvas.height / 100));
	}
}

//wait for pictures to load
rocket.picture2.onload = function() {
	//start update interval
	updateInterval = setInterval(update, 10);
	//choose a question
	pickQuestion();
}

//update game state
function update() {
	//move rocket
	move();
	
	//render images and text on canvas
	render();
	
	//check if the game has been lost
	checkLoss();
}

//move rocket
function move() {
	rocket.y++;
	
	if(questionCorrect) {
		rocket.y -= 5
		if(rocket.y < 100) {
			questionCorrect = false;
		}
	}
}

//render images and text on canvas
function render() {
	//wipe canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	//background colour
	ctx.fillStyle = canvasColour;
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	//rocket
	ctx.drawImage(rocket.currentPicture, 0, 0, rocket.imageSize.x, rocket.imageSize.y, rocket.x - rocket.imageSize.x / 2, rocket.y - rocket.imageSize.y / 2, rocket.imageSize.x, rocket.imageSize.y);
	
	//score text
	ctx.fillStyle = "black";
	ctx.font = "18px Arial";
	ctx.fillText("Height: " + height, 10, 20);
}

//check the player hasn't lost
function checkLoss() {
	if(rocket.y > canvas.height) {
		loseGame();
	}
}

//end game due to player loss
function loseGame() {
	//stop game updates
	clearInterval(updateInterval);
	
	//text to tell the player they lost
	ctx.fillStyle = "black";
	ctx.font = "18px Arial";
	ctx.fillText("You died; refresh to play again!", 10, 50);
}
