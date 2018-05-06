//init canvas
var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

//variables
var height = 0; //score

var questionCorrect = false; //is the rocket currently moving upwards?

//import questions from json file (imported for speed)
var questions = data;
//address of current question
var questionTopic = topics[randomNum(topics.length)]; 
var questionNumber = null;

//define player object
var rocket = {
	x: canvas.width/2,
	y: 100,
	
	speed: 0.5, //rate of falling
	
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
	//select random topic
	questionTopic = topics[randomNum(topics.length)];
	
	//chance of giving a boolean logic question instead of a pre-written question
	if(questionTopic == "logic" && randomNum(2) == 0) {
		var booleanLogic = booleanQuestion(4);
		document.getElementById("question").innerHTML = "Evaluate: " + booleanLogic.question;
		questionNumber = "bool" + booleanLogic.answer;
	}
	
	//data questions are special...
	else if(questionTopic == "data") {
		var random = randomNum(4); //number of possible question types
		var foo;
		var question;
		var answer;
		
		switch(random) {
			case 0: //denary to binary
				foo = binaryToDenary(5);
				question = "Denary to binary: " + foo.denary;
				answer = foo.binary;
				break;
			case 1: //binary to denary
				foo = binaryToDenary(5);
				question = "Binary to denary: " + foo.binary;
				answer = foo.denary;
				break;
			case 2: //denary to hex
				foo = denaryToHex(2);
				question = "Denary to hexadecimal: " + foo.denary;
				answer = foo.hex;
				break;
			case 3: //hex to denary
				foo = denaryToHex(2);
				question = "Hexadecimal to denary: " + foo.hex;
				answer = foo.denary;
				break;
			default: //error
				console.error("random number out of bounds");
				question = "Error";
				answer = "continue";
		}
		
		document.getElementById("question").innerHTML = question;
		questionNumber = answer;
	}
	
	//get a question from questions.js
	else {
		questionNumber = randomNum(questions[questionTopic].length);
		document.getElementById("question").innerHTML = questions[questionTopic][questionNumber].question;
	}
	
	//reset input
	document.getElementById("answer").value = null;
}

//generate random number between 0 and upper limit (upper limit will never be reached)
function randomNum(upper) {
	var foo = Math.random();
	foo *= upper;
	var bar = Math.floor(foo);
	return bar;
}

/*for(var i = 2; i < 6; i++) {
	booleanQuestion(i)
}*/

//make evaluate boolean statement question - part of logic
function booleanQuestion(items) {
	var operators = [" AND "," OR "," XOR "];
	var operatorsJs = ["&","|","^"];
	
	var question = "";
	var questionEval = "";
	
	var unclosedBracket = 0;
	
	for(var i = 0; i < items; i++) {
		//not (currently broken)
		/*if(randomNum(3) == 0) {
			question += "NOT";
			questionEval += "~";
		}*/
		
		//brackets
		if(randomNum(2) == 0 && unclosedBracket == 0 && i < items - 1) {
			question += "(";
			questionEval += "(";
			unclosedBracket = 2;
		}
		
		//value (0 or 1)
		if(randomNum(2) == 0) {
			question += "0";
			questionEval += "0";
		}
		else {
			question += "1";
			questionEval += "1";
		}
		
		//close unclosed bracket
		if(unclosedBracket == 1) {
			question += ")";
			questionEval += ")";
		}
		
		unclosedBracket--;
		
		//boolean operator
		if(i < items - 1) {
			var foo = randomNum(operators.length);
			question += operators[foo];
			questionEval += operatorsJs[foo];
		}
		
		//finished
		if(i == items - 1) {
			/*console.log(question);
			console.log(questionEval);
			console.log(eval(questionEval));
			console.log("");*/
			
			return({
				question: question,
				answer: eval(questionEval),
			});
		}
	}
}

//make binary to denary question - part of data
function binaryToDenary(binaryDigits) { //5
	//build binary number
	var binary = "1";
	for(var i = 1; i < binaryDigits; i++) {
		binary += randomNum(2);
	}
	//binary = parseInt(binary);
	
	console.log(binary);
	
	//convert to denary
	var denary = parseInt(binary, 2);
	
	console.log(denary);
	
	//return
	return({
		binary: binary,
		denary: denary,
	});
}

//make denary to hex question - part of data
function denaryToHex(denaryDigits) { //2
	//build denary number
	var denary = "";
	for(var i = 0; i < denaryDigits; i++) {
		var random = randomNum(10);
		while(denary.length == 0 && random == 0) {
			random = randomNum(10);
		}
		denary += random.toString();
	}
	denary = parseInt(denary);
	
	//convert to hex
	var hex = denary.toString(16);
	
	//return
	return({
		denary: denary,
		hex: hex,
	});
}

//verify user's answer is correct
function verifyAnswer() {
	//boolean question
	if(questionNumber.toString().includes("bool")) {
		questionNumber = questionNumber.slice(4); //remove the "bool" before the answer
		//console.log(questionNumber);
		if(document.getElementById("answer").value == questionNumber) {
			questionCorrect = true;
			rocket.currentPicture = rocket.picture2;
			height += Math.round((canvas.height - rocket.y) / (canvas.height / 100));
			pickQuestion();
		}
		else {
			questionNumber = "bool" + questionNumber;
		}
	}
	
	//data question
	else if(questionTopic == "data") {
		if(document.getElementById("answer").value == questionNumber) {
			questionCorrect = true;
			rocket.currentPicture = rocket.picture2;
			height += Math.round((canvas.height - rocket.y) / (canvas.height / 100));
			pickQuestion();
		}
	}
	
	//exact answer
	else if(document.getElementById("answer").value.toLowerCase() == questions[questionTopic][questionNumber].answer && questions[questionTopic][questionNumber].answerType == "exact") {
		questionCorrect = true;
		rocket.currentPicture = rocket.picture2;
		height += Math.round((canvas.height - rocket.y) / (canvas.height / 100));
		pickQuestion();
	}
	
	//keyword answer
	else if(questions[questionTopic][questionNumber].answerType == "match") {
		var timesScored = 0; //answers correct
		for(var i = 0; i < questions[questionTopic][questionNumber].answer.length; i++) {
			if(document.getElementById("answer").value.toLowerCase().includes(questions[questionTopic][questionNumber].answer[i])) {
				timesScored++;
			}
		}
		console.log(timesScored);
		if(timesScored >= questions[questionTopic][questionNumber].required) {
			height += (Math.round((canvas.height - rocket.y) / (canvas.height / 100))) * (timesScored + 1 - questions[questionTopic][questionNumber].required);
			questionCorrect = true;
			rocket.currentPicture = rocket.picture2;
			pickQuestion();
		}
	}
}

//verify answer on enter keypress
document.addEventListener("keydown", checkKeyPress, false);

function checkKeyPress(event) {
var keyCode = event.keyCode;
	if(keyCode == 13) { //enter keypress
		verifyAnswer();
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
	rocket.y += rocket.speed;
	
	if(questionCorrect) {
		rocket.y -= 5
		if(rocket.y < 100) {
			questionCorrect = false;
			rocket.currentPicture = rocket.picture1;
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
