const express = require('express');
const app = express();
var request = require('request');

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  next();
});

app.get('/birds', (req, res) => {
	// const url = 'https://www.xeno-canto.org/api/2/recordings?query=gen:Procnias';
	const url = 'https://www.xeno-canto.org/api/2/recordings?query=cnt:russia';
  request(url, (error, response, body) => {
		console.log('statusCode:', response && response.statusCode);
		if (error) {
			console.log(error);
		} else {
			data = JSON.parse(body).recordings;
			res.json(removeDuplicates(data, 'en'));
		}
  });
});

app.get("*", function(req, res){
	res.redirect("/birds");
});


const PORT = 3000;
app.listen(PORT, process.env.IP, function () {
  console.log('Server has started on PORT ' + PORT);
});


function removeDuplicates(myArr, prop) {
	return myArr.filter((obj, pos, arr) => {
		return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
	});
}