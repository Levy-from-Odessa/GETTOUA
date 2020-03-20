const express = require("express");

const app = express();
// создаем парсер для данных в формате json
const jsonParser = express.json();
let data = [{
		city: 'micky',
		type: 'micky',
		country: 'micky'
	},
	{
		city: 'gag',
		type: 'gag',
		country: 'gag'
	},
	{
		city: 'mamn',
		type: 'mamn',
		country: 'mamn'
	},
	{
		city: 'mpump',
		type: 'mpump',
		country: 'mpump'
	}

];
let hits = [];
// app.use(express.static(path.join(__dirname, 'public')));

app.post("/user", jsonParser, function (request, response) {

	if (!request.body) return response.sendStatus(400);

	// console.log(request.body.city.toString());
	let input = request.body.city;
	hits = [];
	
	for (let x = 0; x < data.length; x++) { 
		if ( data[x].city.indexOf(input) != -1) {
			console.log(data[x].city+ "   " + input);
			hits.push(data[x]);
		}

	}



	if (hits.length === 0) {
		console.log("Your name wasn't found!");
	} else {
		
		console.log(hits);

		response.json(hits);
	}


});

app.get("/", function (request, response) {
	response.sendFile(__dirname + "/public/home.html");
});

app.listen(3000);