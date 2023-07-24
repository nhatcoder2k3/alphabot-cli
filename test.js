const request = require('request');

const options = {
  method: 'GET',
  url: 'https://simsimi-message.p.rapidapi.com/',
  qs: {
    text: 'Sim ngu',
    lc: 'vi'
  },
  headers: {
    'X-RapidAPI-Key': '189a7dea59mshcb5b1ef6ffd963cp1bd4cbjsn38728e1578b7',
    'X-RapidAPI-Host': 'simsimi-message.p.rapidapi.com'
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});