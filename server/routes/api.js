const express = require('express');
const router = express.Router();
const _ = require('underscore');
var rp = require('request-promise');

var cricapi = require('../routes/cric-api');

const countries = ['India', 'Australia','England','South Africa',
                  'Pakistan','Sri Lanka','New Zealand','West Indies',
                  'Bangladesh'];


/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/current-matches', (req, res) => {
  console.log('now-in-node: ', _.now());
  cricapi.cricketMatches(function( data ){
    var jsonData = JSON.parse( data );
    var activeMatches = _.filter( jsonData.matches, function( item ){
      return (
      _.contains(countries, item['team-1']) &&
      _.contains( countries, item['team-2']) );
    });
    
    //getting all scores and seeing if the match is started
    getScoreForAllMatches(activeMatches).then( function( scores ){
      scores.forEach( function(item){
        // console.log( item.unique_id );
      });
      activeMatches = _.sortBy( activeMatches, function( am ){ return am.date } );
      var n = 3;
      activeMatches = _.chain(activeMatches).groupBy(function(element, index){
        return Math.floor(index/n);
      }).toArray()
      .value();
      // activeMatches = activeMatches.slice(Math.max(activeMatches.length - 3, 1));
      res.status(200).json( activeMatches );
    });
  },
  function( error ){
    res.status(500).json( JSON.parse(data) );
  });
});

function getScoreForAllMatches( matches ){
  var promises = [];
  matches.forEach(function(match){
    promises.push( new Promise(function(resolve, reject){
      return cricapi.cricketScores( match.unique_id,function( data) {
        data = JSON.parse(data);
        if(match.matchStarted){
          _.extend( match, {score: data.score });
        }
        else{
          _.extend( match, {score: 'Yet to Start!!!' });
        }
        resolve(match);
      }, function( error ){
        reject( error );
      } );
    }));
  });

  return Promise.all( promises );

};

module.exports = router;