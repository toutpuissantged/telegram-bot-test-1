var axios = require("axios").default;

var options = {
  method: 'POST',
  url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'accept-encoding': 'application/gzip',
    'x-rapidapi-key': '6c64529be5mshf9771aa9df75752p1ec7c0jsn45a80fd5d3ca',
    'x-rapidapi-host': 'google-translate1.p.rapidapi.com'
  },
  data: {q: 'Hello, world!', target: 'es', source: 'en'}
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});