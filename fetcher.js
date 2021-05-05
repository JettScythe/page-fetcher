var myArgs = process.argv.slice(2);
const request = require('request');
const fs = require('fs');

request(myArgs[0], (error, response, body) => {
  if (error) {
    throw error
  };
  fs.writeFile(myArgs[1], JSON.stringify(body), (err) => {
    if (err) {
      throw err;
    };
    console.log(`Downloaded and saved ${response.headers['content-length']} bytes to ${myArgs[1]}`)
  });
});