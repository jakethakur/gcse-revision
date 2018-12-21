// init canvas
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// variables
let height = 0; // score

let questionCorrect = false; // is the rocket currently moving upwards?

// import questions from js file (imported for speed)
const questions = data;
// address of current question
let questionTopic = topics[randomNum(topics.length)];
let questionSubtopic = null;
let questionNumber = null;
let suddenDeath = false; // if the question is sudden death or not

let topicPractice = JSON.parse(localStorage.getItem("topicPractice"));
if (topicPractice === null) {
	topicPractice = {};
}

// define player object
let rocket = {
	x: canvas.width/2,
	y: 100,
	
	// rate of falling
	speed: 0.1, // initial speed is a bit slower
	baseSpeed: 0.3,
	
	imageSize: {
		x: 53,
		y: 91,
	}
};

// stop image smoothing (makes images look low quality)
ctx.mozImageSmoothingEnabled = false;
ctx.webkitImageSmoothingEnabled = false;
ctx.msImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;

// load in pictures
// rocket
rocket.picture1 = new Image();
rocket.picture1.src = "./assets/rocket1.png";
rocket.picture2 = new Image();
rocket.picture2.src = "./assets/rocket2.png";
rocket.currentPicture = rocket.picture1;
// danger (currently unused)
const dangerImg = new Image();
dangerImg.src = "./assets/danger.png";

// set canvas background colour
let canvasColour = "#d1f3ff";

// verify answer on enter keypress
document.addEventListener("keydown", checkKeyPress, false);

function checkKeyPress(event) {
let keyCode = event.keyCode;
	if(keyCode === 13) { //enter keypress
		verifyAnswer();
	}
}

// wait for pictures to load
// then start the game
rocket.picture2.onload = function() {
	// display high scores
	displayScores();
	// start update interval
	updateInterval = setInterval(update, 10);
	// choose a question
	pickQuestion();
}

// question correct
function gainHeight (heightGained, displayMoreAnswers) {
	height += heightGained;
	questionCorrect = true;
	rocket.currentPicture = rocket.picture2;
	rocket.speed = rocket.baseSpeed; // update rocket speed
	
	if (displayMoreAnswers) {
		// more possible correct answers
		displayAnswer();
	}
	else {
		document.getElementById("correctAnswer").innerText = ""; // remove any currently displayed answers
	}
	
	// canvas colour darken
	canvasColour = darkenColour(canvasColour, heightGained/1000);
	
	pickQuestion();
}


// thanks to https://stackoverflow.com/a/13542669
function darkenColour (color, percent) {
	percent = -percent; // darken colour instead of lighten
    let f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
    return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
}

// pick a new question
function pickQuestion () {
	// select random topic
	questionTopic = topics[randomNum(topics.length)];
	
	// chance of giving a boolean logic question instead of a pre-written question
	if(questionTopic == "logic" && randomNum(2) == 0) {
		let booleanLogic = booleanQuestion(4);
		document.getElementById("question").innerHTML = "Evaluate: " + booleanLogic.question + "<br><h5><img src='./assets/danger.png' height=30px>  Question is sudden death - get it wrong and you're out!</h5>";
		questionNumber = "exact" + booleanLogic.answer;
		questionSubtopic = "boolean logic";
		suddenDeath = true; // boolean logic questions are all sudden death
	}
	
	// data questions are special...
	else if(questionTopic == "data") {
		let random = randomNum(7); // number of possible data question types (outside of prewritten questions)
		let foo;
		let question;
		let answer;
		
		switch(random) {
			case 0: // denary to binary
				foo = binaryToDenary(5);
				question = "Denary to binary: " + foo.denary;
				answer = "exact" + foo.binary;
				questionSubtopic = "denary to binary";
				break;
			case 1: // binary to denary
				foo = binaryToDenary(5);
				question = "Binary to denary: " + foo.binary;
				answer = "exact" + foo.denary;
				questionSubtopic = "binary to denary";
				break;
			case 2: // denary to hex
				foo = denaryToHex(2);
				question = "Denary to hexadecimal: " + foo.denary;
				answer = "exact" + foo.hex;
				questionSubtopic = "denary to hexadecimal";
				break;
			case 3: // hex to denary
				foo = denaryToHex(2);
				question = "Hexadecimal to denary: " + foo.hex;
				answer = "exact" + foo.denary;
				questionSubtopic = "hexadecimal to denary";
				break;
			case 4: // add binary
				foo = addBinary(randomNum(6), randomNum(6));
				question = "Add the binary values: " + foo.binary1 + " and " + foo.binary2;
				answer = "exact" + foo.answer;
				questionSubtopic = "binary addition";
				break;
			default: // questions (currently twice as likely to appear)
				answer = randomNum(questions[questionTopic].length); // question number
				question = questions[questionTopic][answer].question;
				questionSubtopic = questions[questionTopic][answer].topic;
		}
		
		document.getElementById("question").innerHTML = question;
		questionNumber = answer;
		suddenDeath = false;
	}
	
	// get a question from questions.js
	else {
		questionNumber = randomNum(questions[questionTopic].length);
		document.getElementById("question").innerHTML = questions[questionTopic][questionNumber].question;
		questionSubtopic = questions[questionTopic][questionNumber].topic;
		if (questions[questionTopic][questionNumber].suddenDeath === true) {
			// sudden death question
			suddenDeath = true;
			document.getElementById("question").innerHTML += "<br><h5><img src='./assets/danger.png' height=30px>  Question is sudden death - get it wrong and you're out!</h5>"
		}
		else {
			suddenDeath = false;
		}
	}
	
	// reset input
	document.getElementById("answer").value = null;
}

// generate random number between 0 and upper limit (upper limit will never be reached)
function randomNum(upper) {
	let foo = Math.random();
	foo *= upper;
	let bar = Math.floor(foo);
	return bar;
}

// make evaluate boolean statement question - part of logic
function booleanQuestion(items) {
	let operators = [" AND "," OR "," XOR "];
	let operatorsJs = ["&","|","^"];
	
	let question = "";
	let questionEval = "";
	
	let unclosedBracket = 0;
	
	for(let i = 0; i < items; i++) {
		// not (currently broken)
		/*if(randomNum(3) == 0) {
			question += "NOT";
			questionEval += "~";
		}*/
		
		// brackets
		if(randomNum(2) == 0 && unclosedBracket == 0 && i < items - 1) {
			question += "(";
			questionEval += "(";
			unclosedBracket = 2;
		}
		
		// value (0 or 1)
		if(randomNum(2) == 0) {
			question += "0";
			questionEval += "0";
		}
		else {
			question += "1";
			questionEval += "1";
		}
		
		// close unclosed bracket
		if(unclosedBracket == 1) {
			question += ")";
			questionEval += ")";
		}
		
		unclosedBracket--;
		
		// boolean operator
		if(i < items - 1) {
			let foo = randomNum(operators.length);
			question += operators[foo];
			questionEval += operatorsJs[foo];
		}
		
		// finished
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

// make binary to denary question - part of data
function binaryToDenary(binaryDigits) { //5
	// build binary number
	let binary = "1";
	for(let i = 1; i < binaryDigits; i++) {
		binary += randomNum(2);
	}
	//binary = parseInt(binary);
	
	// convert to denary
	let denary = parseInt(binary, 2);
	
	// return
	return({
		binary: binary,
		denary: denary,
	});
}

// make denary to hex question - part of data
function denaryToHex(denaryDigits) { //2
	// build denary number
	let denary = "";
	for(let i = 0; i < denaryDigits; i++) {
		let random = randomNum(10);
		while(denary.length == 0 && random == 0) {
			random = randomNum(10);
		}
		denary += random.toString();
	}
	denary = parseInt(denary);
	
	// convert to hex
	let hex = denary.toString(16);
	
	// return
	return({
		denary: denary,
		hex: hex,
	});
}

// make binary addition question - part of data
function addBinary(binaryDigits1, binaryDigits2) {
	// build binary number 1
	let binary1 = "1";
	for(let i = 1; i < binaryDigits1; i++) {
		binary1 += randomNum(2);
	}
	
	// build binary number 2
	let binary2 = "1";
	for(let i = 1; i < binaryDigits2; i++) {
		binary2 += randomNum(2);
	}
	
	// add the two binary values
	let answer = (parseInt(binary1, 2) + parseInt(binary2, 2)).toString(2);
	
	// return
	return({
		binary1: binary1,
		binary2: binary2,
		answer: answer,
	});
}

// verify user's answer is correct
function verifyAnswer() {
	// question generated by main.js (hence questionNumber = "exact"+answer) - e.g: bool or data
	if (questionNumber.toString().includes("exact")) {
		questionNumber = questionNumber.slice(5); // remove the "exact" before the answer
		if (document.getElementById("answer").value == questionNumber) { // correct
			gainHeight(Math.round((canvas.height - rocket.y) / (canvas.height / 100)));
		}
		else { // incorrect
			questionNumber = "exact" + questionNumber; // reset answer so it works with displayAnswer
			if (suddenDeath) {
				loseGame();
			}
			else {
				rocket.speed *= 2;
			}
		}
	}
	
	// exact answer
	else if (questions[questionTopic][questionNumber].answerType == "exact") {
		if (document.getElementById("answer").value.toLowerCase() == questions[questionTopic][questionNumber].answer) { // correct
			gainHeight(Math.round((canvas.height - rocket.y) / (canvas.height / 100)));
		}
		else { // incorrect
			if (suddenDeath) {
				loseGame();
			}
			else {
				rocket.speed *= 2;
			}
		}
	}
	
	// keyword answer
	else if (questions[questionTopic][questionNumber].answerType == "match") {
		let timesScored = 0; // answers correct
		for (let i = 0; i < questions[questionTopic][questionNumber].answer.length; i++) {
			if (document.getElementById("answer").value.toLowerCase().includes(questions[questionTopic][questionNumber].answer[i])) {
				// count times scored
				timesScored++;
			}
		}
		
		if (timesScored >= questions[questionTopic][questionNumber].required) { // correct
			let displayMoreAnswers = timesScored !== questions[questionTopic][questionNumber].answer.length; // if not all the answers were found, display the rest
			gainHeight(Math.round((canvas.height - rocket.y) / (canvas.height / 100)) * (timesScored + 1 - questions[questionTopic][questionNumber].required), displayMoreAnswers);
		}
		else { // incorrect
			if (suddenDeath) {
				loseGame();
			}
			else {
				rocket.speed *= 2;
			}
		}
	}
}

// update game state
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

// render images and text on canvas
function render() {
	// wipe canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	// background colour
	ctx.fillStyle = canvasColour;
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	// rocket
	ctx.drawImage(rocket.currentPicture, 0, 0, rocket.imageSize.x, rocket.imageSize.y, rocket.x - rocket.imageSize.x / 2, rocket.y - rocket.imageSize.y / 2, rocket.imageSize.x, rocket.imageSize.y);
	
	// score text
	if (height > 750) {
		// if the score is too high hence the background is too dark, make the score text white
		ctx.fillStyle = "white";
	}
	else {
		ctx.fillStyle = "black";
	}
	ctx.font = "18px Arial";
	ctx.fillText("Height: " + height, 10, 20);
}

// check the player hasn't lost
function checkLoss() {
	if(rocket.y > canvas.height) {
		loseGame();
	}
}

// end game due to player loss
function loseGame() {
	//stop game updates
	clearInterval(updateInterval);
	
	//text to tell the player they lost
	if (height > 750) {
		// if the score is too high hence the background is too dark, make the score text white
		ctx.fillStyle = "white";
	}
	else {
		ctx.fillStyle = "black";
	}
	ctx.font = "18px Arial";
	ctx.fillText("You died; refresh to play again!", 10, 50);
	
	// reveal correct answer
	displayAnswer();
	
	// high scores
	checkHighScore(height);
	displayScores();
	
	// topics that need practice
	updateTopicPractice();
}

function displayAnswer() {
	let correctAnswer;
	
	// question generated by main.js (hence questionNumber = "exact"+answer) - e.g: bool or data
	if (questionNumber.toString().includes("exact")) {
		questionNumber = questionNumber.slice(5); //remove the "exact" before the answer
		correctAnswer = "The correct answer was: " + questionNumber;
	}
	
	// exact answer
	else if (questions[questionTopic][questionNumber].answerType == "exact") {
		questionNumber = questions[questionTopic][questionNumber].answer;
		correctAnswer = "The correct answer was: " + '"' + questionNumber + '"';
	}
	
	// keyword answer (must say all keywords)
	else if (questions[questionTopic][questionNumber].answerType == "match" && questions[questionTopic][questionNumber].answer.length == questions[questionTopic][questionNumber].answer.required) {
		correctAnswer = "The answers were: ";
		
		for(let i = 0; i < questions[questionTopic][questionNumber].answer.length - 1; i++) {
			correctAnswer += '"' + questions[questionTopic][questionNumber].answer[i] + '", ';
		}
		correctAnswer += '"' + questions[questionTopic][questionNumber].answer[questions[questionTopic][questionNumber].answer.length - 1] + '"';
	}
	
	// keyword answer (doesn't have to say all keywords)
	else if (questions[questionTopic][questionNumber].answerType == "match" && questions[questionTopic][questionNumber].answer.length !== questions[questionTopic][questionNumber].answer.required) {
		correctAnswer = "Some answers you could have said: ";
		
		for(let i = 0; i < questions[questionTopic][questionNumber].answer.length - 1; i++) {
			correctAnswer += '"' + questions[questionTopic][questionNumber].answer[i] + '", ';
		}
		correctAnswer += '"' + questions[questionTopic][questionNumber].answer[questions[questionTopic][questionNumber].answer.length - 1] + '"';
	}
	
	document.getElementById("correctAnswer").innerText = correctAnswer;
}

// check/save high score
function checkHighScore(score) {
	let scoreArray = parseArray(localStorage.getItem("highScoreArray"));
	let scoreChanged = false;
	if (scoreArray !== null) {
		scoreArray.forEach((savedScore, i) => {
			if (parseInt(score, 10) > parseInt(savedScore, 10)) { // parsed to int because scores are saved as string by default in local storage which messes up > operator
				let oldSavedScore = savedScore;
				scoreArray[i] = score;
				score = oldSavedScore; // save old saved score for being reinserted below
				scoreChanged = true;
			}
		});
		// trim array to only 5 scores
		scoreArray.length = 5
	}
	else {
		// init progress saving
		scoreArray = [0,0,0,0,0];
		scoreChanged = "init"; // add score to array later
	}
	localStorage.setItem("highScoreArray", stringifyArray(scoreArray));
	if (scoreChanged === "init") {
		scoreChanged = checkHighScore(score); // now actually add the high score (and save if it was added or not to scoreChanged)
	}
	return scoreChanged;
}

// display high scores
function displayScores() {
	scoreArray = parseArray(localStorage.getItem("highScoreArray"));
	let textToDisplay = "No high scores yet";
	if (scoreArray !== null) {
		textToDisplay = "Your High Scores\n";
		scoreArray.forEach((score, i) => {
			if (i+1 < 6) {
				// only display 5 scores
				textToDisplay += (i+1) + ": " + score + "\n"
			}
		});
	}
	document.getElementById("highScores").innerText = textToDisplay;
}

// JSON stringify for array
function stringifyArray(array) {
	let string = "";
	array.forEach(element => {
		string += element + ",";
	});
	return string;
}

// JSON parse for array (for use with stringifyArray)
function parseArray(JSON) {
	if (JSON !== null) {
		let array = [];
		let elements = JSON.split(",");
		return elements;
	}
	return JSON;
}

// add a new topic to the list of topics that need practice
function updateTopicPractice() {
	if (topicPractice[questionSubtopic] === undefined) {
		topicPractice[questionSubtopic] = 1;
	}
	else {
		topicPractice[questionSubtopic]++;
		// notify the user if they should practice it
		if (topicPractice[questionSubtopic] % 3 === 0) {
			alert("You have made a few mistakes on questions of the topic '" + questionSubtopic + "'. Perhaps consider revising it?");
		}
	}
	// update localStorage
	localStorage.setItem("topicPractice", JSON.stringify(topicPractice));
}

//
// Settings
//

function settingsToggle() {
	document.getElementById("settingsDiv").hidden = !document.getElementById("settingsDiv").hidden;
}

function settingsSave() {
	// update topics array
	let topicsArray = []
	let checkboxes = document.querySelectorAll('input[type=checkbox]:checked'); // maybe change to just the checkboxes for topic? TBD

	for (let i = 0; i < checkboxes.length; i++) {
		topicsArray.push(checkboxes[i].value);
	}
	topics = topicsArray;
	
	// update local storage
	localStorage.setItem("topicsSelected", stringifyArray(topics));
}

// update setting selection when page is refreshed (to what is saved in local storage)
// all checked is default (for if there is no local storage because user hasn't changed settings before)
function settingsUpdate() {
	let storedTopics = localStorage.getItem("topicsSelected");
	if (storedTopics !== null) {
		// settings have been altered before
		storedTopics = parseArray(storedTopics); // now we know it is an array, it can be parsed
		let checkboxes = document.querySelectorAll('input[type=checkbox]'); // maybe change to just the checkboxes for topic? TBD
		for (let i = 0; i < checkboxes.length; i++) {
			if (!storedTopics.includes(checkboxes[i].value)) {
				checkboxes[i].checked = false;
			}
		}
	}
}

settingsUpdate();
