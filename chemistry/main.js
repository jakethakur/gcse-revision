const cations = ["calcium", "zinc", "copper", "iron(II)", "iron(III)", "lithium", "sodium", "potassium"];
const anions = ["chloride", "bromide", "iodide", "carbonate", "sulphate"];

const compoundEl = document.getElementById("currentCompound");
let currentCompound = {number: 0};

const queueEl = document.getElementById("queue");
let queueLength = 0;

const resultEl = document.getElementById("resultsList");
let results = [];

const anionAnswerEl = document.getElementById("anion");
const cationAnswerEl = document.getElementById("cation");

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
	results = [];
	
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
			results.push("Flame test: no visible change.");
			break;
	}
	
	domUpdate();
}

function sodiumHydroxide() {
	switch(currentCompound.cation) {
		case "iron(II)":
			results.push("Sodium hydroxide added: a green precipitate is formed.");
			break;
		case "iron(III)":
			results.push("Sodium hydroxide added: an orange-brown precipitate is formed.");
			break;
		case "copper":
			results.push("Sodium hydroxide added: a blue precipitate is formed.");
			break;
		case "calcium":
			if (results.includes("Sodium hydroxide added: a white precipitate is formed.")) {
				results.push("More sodium hydroxide added: no change.");
			}
			else {
				results.push("Sodium hydroxide added: a white precipitate is formed.");
			}
			break;
		case "zinc":
			if (results.includes("Sodium hydroxide added: a white precipitate is formed.")) {
				results.push("More sodium hydroxide added: the white precipitate redissolves.");
			}
			else {
				results.push("Sodium hydroxide added: a white precipitate is formed.");
			}
			break;
		default:
			results.push("Sodium hydroxide added: no visible change.");
			break;
	}
	
	domUpdate();
}

function acid(type) {
	switch(type) {
		case "Hydrochloric":
			results.push("Hydrochloric acid added: no visible change.");
			if (currentCompound.anion === "carbonate") {
				results.push("Hydrochloric acid added: gas released.");
			}
			break;
		case "Nitric":
			results.push("Nitric acid added: no visible change.");
			if (currentCompound.anion === "carbonate") {
				results.push("Nitric acid added: gas released.");
			}
			break;
		case "Sulphuric":
			results.push("Sulphuric acid added: no visible change.");
			if (currentCompound.anion === "carbonate") {
				results.push("Sulphuric acid added: gas released.");
			}
			break;
		default:
			results.push(type + " acid unknown.");
			break;
	}
	
	domUpdate();
}

// carbonate test
function limewater() {
	if (currentCompound.anion === "carbonate" && (results.includes("Hydrochloric acid added: gas released.") || results.includes("Nitric acid added: gas released.") || results.includes("Sulphuric acid added: gas released."))) {
		results.push("Gas bubbled through limewater: limewater turns cloudy.");
	}
	else {
		results.push("Nothing to bubble through limewater.");
	}
	
	domUpdate();
}

// sulphate test
function bariumChloride() {
	if (currentCompound.anion === "carbonate" && !(results.includes("Hydrochloric acid added: gas released.") || results.includes("Nitric acid added: gas released.") || results.includes("Sulphuric acid added: gas released."))) {
		// false positive
		results.push("Barium chloride added: a white precipitate is formed.");
	}
	else if (results.includes("Sulphuric acid added: no visible change.") || results.includes("Sulphuric acid added: gas released.")) {
		// false positive
		results.push("Barium chloride added: a white precipitate is formed.");
	}
	else if (currentCompound.anion === "sulphate") {
		results.push("Barium chloride added: a white precipitate is formed.");
	}
	else {
		results.push("Barium chloride added: no visible change.");
	}
	
	domUpdate();
}

// halide test
function silverNitrate() {
	if (results.includes("Hydrochloric acid added: gas released.") || results.includes("Hydrochloric acid added: no visisble change.")) {
		// false positive
		results.push("Silver nitrate added: a white precipitate is formed.");
	}
	else {
		switch(currentCompound.anion) {
			case "carbonate":
				if (!(results.includes("Hydrochloric acid added: gas released.") || results.includes("Nitric acid added: gas released.") || results.includes("Sulphuric acid added: gas released."))) {
					// false positive
					results.push("Silver nitrate added: a white precipitate is formed.");
				}
				break;
				
			case "chloride":
				results.push("Silver nitrate added: a white precipitate is formed.");
				break;
				
			case "bromide":
				results.push("Silver nitrate added: a cream precipitate is formed.");
				break;
				
			case "iodide":
				results.push("Silver nitrate added: a yellow precipitate is formed.");
				break;
				
			default:
				results.push("Silver nitrate added: no visible change.");
				break;
		}
	}
	
	domUpdate();
}

function verifyAnswer() {
	if (cationAnswerEl.value === currentCompound.cation && anionAnswerEl.value === currentCompound.anion) {
		// correct
		cationAnswerEl.value = "";
		anionAsnwerEl.value = "";
		newCompound();
	}
	else {
		// incorrect
	}
}