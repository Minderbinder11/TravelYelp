/* require the modules needed */
//var envs            = require('envs');


var oauthSignature  = require('oauth-signature');
var n               = require('nonce')();
var request         = require('browser-request');
var qs              = require('querystring');
var _               = require('lodash');

/* This needs to be added as soon as possible,  when I reintegrate to webpack,  I will probably need to add to the loader */
//require('dotenv').config();

/* Function for yelp call
 * ------------------------
 * set_parameters: object with params to search
 * callback: callback(error, response, body)
 */

var apiOpenYelp = function(set_parameters, callback) {

  /* The type of request */
  var httpMethod = 'GET';

  /* The url we are using for the request */
  var url = 'http://api.yelp.com/v2/search';

  /* We can setup default parameters here */
  var default_parameters = {
    location: 'San+Francisco',
    sort: '2',
    category_filter: 'sushi'
  };

  /* We set the require parameters here */
  var required_parameters = {
    oauth_consumer_key : 'RT0DIat-Mf3pVED4QmNPqQ',
    oauth_token : 'mgZ7dsRUDVZBRCkZQenE_RCKoCZyeTWm',
    oauth_nonce : n(),
    oauth_timestamp : n().toString().substr(0,10),
    oauth_signature_method : 'HMAC-SHA1',
    oauth_version : '1.0'
  };

  /* We combine all the parameters in order of importance */
  var parameters = _.assign(default_parameters, set_parameters, required_parameters);



  /* Then we call Yelp's Oauth 1.0a server, and it returns a signature */
  /* Note: This signature is only good for 300 seconds after the oauth_timestamp */
  var signature = oauthSignature.generate(httpMethod, url,
    parameters, '1Ds2x1WW_kiur0kg8ciw4Pc3H60', 'SoRyMeGlJCiArpIeJcGHQgv9loI', { encodeSignature: false});

  /* We add the signature to the list of paramters */
  parameters.oauth_signature = signature;

  /* Then we turn the parameters object, to a query string */
  var paramURL = qs.stringify(parameters);

  /* Add the query string to the url */
  var apiURL = url+'?'+paramURL;

  /*console.log(apiURL); */

  /* Then we use request to send make the API Request */
  request(apiURL, function(error, response, body){
    return callback(error, response, body);
  });

};

module.exports = apiOpenYelp;
