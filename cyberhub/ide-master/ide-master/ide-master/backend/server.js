import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://judge0-extra-ce.p.rapidapi.com/about',
  headers: {
    'x-rapidapi-key': 'dccf9190eemshe09e74e8939eafbp1e5c18jsna89a0c4fe7b3',
    'x-rapidapi-host': 'judge0-extra-ce.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
