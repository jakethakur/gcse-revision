const cations = ["calcium", "zinc", "copper(II)", "iron(II)", "iron(III)", "lithium", "sodium", "potassium"];
const anions = ["chloride", "bromide", "iodide", "carbonate", "sulphate"];

const compoundEl = document.getElementById("currentCompound");
let currentCompound = {number: 0};

const queueEl = document.getElementById("queue");
let queueLength = 0;

const resultEl = document.getElementById("resultsList");
let results = [];

newCompound();

function randomItem (array) {
	return array[Math.floor((Math.random()*array.length))];
}

function Compound() {
	this.number = currentCompound.number + 1;
	
	this.anion = randomItem(anions);
	this.cation = randomItem(cations);
}

function newCompound() {
	currentCompound = new Compound();
	
	domUpdate();
}

function domUpdate() {
	compoundEl.innerText = "You are currently analysing compound " + currentCompound.number + ".";
	
	queueEl.innerText = "Compounds in queue: " + queueLength;
	
	resultEl.innerHTML = "";
	for (let i = 0; i < results.length; i++) {
		resultEl.innerHTML += "<li>" + results[i] + "</li>";
	}
}

function flameTest() {
	switch(currentCompound.cation) {
		case "calcium":
			results.push("Flame test: the flame turns bright green.");
			break;
		case "potassium":
			results.push("Flame test: the flame turns lilac.");
			break;
		case "sodium":
			results.push("Flame test: the flame turns golden yellow.");
			break;
		case "lithium":
			results.push("Flame test: the flame turns bright red.");
			break;
		case "copper":
			results.push("Flame test: the flame turns brick red.");
			break;
		default:
			results.push("Flame test: there was no change in flame colour.");
			break;
	}
	
	domUpdate();
}