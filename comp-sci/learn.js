function populateDocument() {
	let el = document.getElementById("answerPane")
	
	topics.forEach(topic => {
		// iterate through topics
		
		el.innerHTML += "<h1>" + topic + "</h1>";
		
		data[topic].forEach(q => {
			// iterate through questions
			el.innerHTML += "<p>" + q.question + "</p>";
			el.innerHTML += "<p>Answer: " + displayAnswer(q.answer) + "</p><br>";
		});
		
		el.innerHTML += "<br><br>";
		
	});
}

function displayAnswer(ansList) {
	let output = "";
	if (Array.isArray(ansList)) {
		ansList.forEach((ans, i) => {
			if (Array.isArray(ans)) {
				// only display first of similar answers
				output += ans[0];
			}
			else {
				output += ans;
			}
			
			if (i !== ansList.length - 1) { // no comma for last answer
				output += ", ";
			}
		});
	}
	else {
		// only one answer
		output = ansList;
	}
	
	// check for HTML
	if (output[0] === "<" && output[output.length - 1] === ">") {
		// TBD
	}
	
	return output;
}

populateDocument();
