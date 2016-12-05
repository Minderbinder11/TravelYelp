var Yelp = require('yelp');

var yelp = new Yelp({
  consumer_key: 'RT0DIat-Mf3pVED4QmNPqQ',
  consumer_secret: '1Ds2x1WW_kiur0kg8ciw4Pc3H60',
  token: 'mgZ7dsRUDVZBRCkZQenE_RCKoCZyeTWm',
  token_secret: 'SoRyMeGlJCiArpIeJcGHQgv9loI',
});

// See http://www.yelp.com/developers/documentation/v2/search_api
yelp.search({ term: 'food', location: 'Montreal' })
.then(function (data) {
  console.log(data);
})
.catch(function (err) {
  console.error(err);
});

  // yelp.business('tonys-pizza-napoletana-san-francisco')
  // .then(console.log)
  // .catch(console.error);
  