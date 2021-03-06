var wget = require("request");
var apikey = 'apikey';

exports.cricketMatches = function(callback) {
  wget.post({ 
	  url: "http://cricapi.com/api/matches/", 
		  form: { apikey: apikey }
  }, function(err, resp, body) { 
	  callback(body); 
  });
};

exports.cricketScores = function(unique_id, callback) {
  wget.post({
	  url: "http://cricapi.com/api/cricketScore/",
		  form: { unique_id: unique_id, apikey: apikey }
  }, function(err, resp, body) { 
	  callback(body); 
  });
}

exports.ballByBall = function(unique_id, callback) {
  wget.post({
	  url: "http://cricapi.com/api/ballByBall/", 
		  form: { unique_id: unique_id, apikey: apikey }
  }, function(err, resp, body) { 
	  callback(body); 
  });
}

exports.playerStats = function(pid, callback) {
  wget.post({
	  url: "http://cricapi.com/api/playerStats/",
		  form: { pid: pid, apikey: apikey }
  }, function(err, resp, body) { 
	  callback(body); 
  });
}