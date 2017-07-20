"use strict";
const request = require('request');
const apiStuffz = require('./env.js');

function get(movieTitle) {

  var url = 'https://www.googleapis.com/customsearch/v1?key=' + apiStuffz.apiKey + '&cx=' + apiStuffz.projectID + '&q=' + movieTitle;

  request(url, function(err, res, body) {
    if(err) throw err;
    console.log(JSON.parse(body).items[0].snippet);
  });
}

module.exports = get;