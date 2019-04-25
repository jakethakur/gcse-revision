function populateDocument() {
	let el = document.getElementById("answerPane")
	
	topics.forEach(topic => {
		// iterate through topics
		
		el.innerHTML += "<h1>" + topic + "</h1>";
		
		data[topic].forEach(q => {
			// iterate through questions
			el.innerHTML += "<p>" + q.question + "</p>";
			displayAnswer(q.answer, el);
		});
		
		el.innerHTML += "<br><br>";
		
	});
}

function displayAnswer(ansList, el) {
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
		el.innerHTML += "<p>Answer: <xmp>" + output + "</xmp></p><br>";
	}
	else {
		el.innerHTML += "<p>Answer: " + output + "</p><br>";
	}
	
	return output;
}

populateDocument();
