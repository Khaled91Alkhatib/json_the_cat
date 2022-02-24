const request = require("request");

const userSpecifiedBreed = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${userSpecifiedBreed}`;

request(url, (error, response, body) => {
  if (error) {
    console.log("ERROR: ", error);
  }
  const data = JSON.parse(body);
  if (data.length !== 1) {
    console.log("Breed not found");
  } else {
    console.log(data[0].description);
  }
});