function populateDocument() {
	let el = document.getElementById("answerPane")
	
	topics.forEach(topic => {
		// iterate through topics
		
		el.innerHTML += "<h2>" + topic + "</h2>";
		
		data[topic].forEach(q => {
			// iterate through questions
			el.innerHTML += "<p>" + q.question + "</p>";
			el.innerHTML += "<p>Answer: " + q.answer + "</p><br>";
		});
		
		el.innerHTML += "<br><br>";
		
	});
}

populateDocument();
