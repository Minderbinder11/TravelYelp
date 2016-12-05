var React       = require('react');
var InputButton = require('InputButton');
var StoreTile   = require('StoreTile');
var Yelp        = require('yelp');
var merge       = require('merge');

var TripPlanner = React.createClass({


  getInitialState: function () {
    return {
      location: 'New Jersey'
    }
  },

  handleSearch: function (location) {

    this.setState({
      location  : location,
      businesses: new_data.businesses
    });

    var options = {
      consumer_key   : 'RT0DIat-Mf3pVED4QmNPqQ',
      consumer_secret: '1Ds2x1WW_kiur0kg8ciw4Pc3H60',
      token          : 'mgZ7dsRUDVZBRCkZQenE_RCKoCZyeTWm',
      token_secret   : 'SoRyMeGlJCiArpIeJcGHQgv9loI'

    };

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
  },


  renderTiles: function () {

    return new_data.businesses.map(function (shop) {
      return <StoreTile shop={shop}/>
    });
  },

  render: function () {

    return (
      <div>
        <h4>Here is where the magic will happen</h4>
        <InputButton onSearch={this.handleSearch}/>
        {this.renderTiles()};
      </div>
    );
  }

});

module.exports = TripPlanner;


var new_data = {
  region    : {
    span  : {
      latitude_delta : 0.054223606566040417,
      longitude_delta: 0.04920883260479059
    },
    center: {
      latitude : 37.77680350610635,
      longitude: -122.425151651184
    }
  },
  total     : 40,
  businesses: [
    {
      is_claimed          : true,
      rating              : 5,
      mobile_url          : "http://m.yelp.com/biz/the-temporarium-coffee-and-tea-san-francisco?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=RT0DIat-Mf3pVED4QmNPqQ",
      rating_img_url      : "https://s3-media1.fl.yelpcdn.com/assets/2/www/img/f1def11e4e79/ico/stars/v1/stars_5.png",
      review_count        : 57,
      name                : "The Temporarium Coffee & Tea",
      rating_img_url_small: "https://s3-media1.fl.yelpcdn.com/assets/2/www/img/c7623205d5cd/ico/stars/v1/stars_small_5.png",
      url                 : "http://www.yelp.com/biz/the-temporarium-coffee-and-tea-san-francisco?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=RT0DIat-Mf3pVED4QmNPqQ",
      categories          : [
        [
          "Coffee & Tea",
          "coffee"
        ]
      ],
      phone               : "4155470616",
      snippet_text        : "How do I love thee? Allow me to count the ways..... +The best espresso drinks that the city has to offer. No refuting this fact. Artfully crafted with...",
      image_url           : "https://s3-media1.fl.yelpcdn.com/bphoto/Toe3RYpB4gy50YQPhRYzoQ/ms.jpg",
      snippet_image_url   : "http://s3-media1.fl.yelpcdn.com/photo/rntiXA-7Ss_0-lGLsCfBzQ/ms.jpg",
      display_phone       : "+1-415-547-0616",
      rating_img_url_large: "https://s3-media3.fl.yelpcdn.com/assets/2/www/img/22affc4e6c38/ico/stars/v1/stars_large_5.png",
      id                  : "the-temporarium-coffee-and-tea-san-francisco",
      is_closed           : false,
      location            : {
        cross_streets  : "Ames St & Guerrero St",
        city           : "San Francisco",
        display_address: [
          "3414 22nd St",
          "Mission",
          "San Francisco, CA 94110"
        ],
        geo_accuracy   : 9.5,
        neighborhoods  : [
          "Mission"
        ],
        postal_code    : "94110",
        country_code   : "US",
        address        : [
          "3414 22nd St"
        ],
        coordinate     : {
          latitude : 37.7552289543874,
          longitude: -122.423587217172
        },
        state_code     : "CA"
      }
    },
    {
      is_claimed          : true,
      rating              : 5,
      mobile_url          : "http://m.yelp.com/biz/sweet-aha-san-francisco-2?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=RT0DIat-Mf3pVED4QmNPqQ",
      rating_img_url      : "https://s3-media1.fl.yelpcdn.com/assets/2/www/img/f1def11e4e79/ico/stars/v1/stars_5.png",
      review_count        : 30,
      name                : "Sweet Aha!",
      rating_img_url_small: "https://s3-media1.fl.yelpcdn.com/assets/2/www/img/c7623205d5cd/ico/stars/v1/stars_small_5.png",
      url                 : "http://www.yelp.com/biz/sweet-aha-san-francisco-2?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=RT0DIat-Mf3pVED4QmNPqQ",
      categories          : [
        [
          "Vegan",
          "vegan"
        ],
        [
          "Bakeries",
          "bakeries"
        ],
        [
          "Cupcakes",
          "cupcakes"
        ]
      ],
      phone               : "4158392138",
      snippet_text        : "My son is a vegan and I wanted to surprise him on his birthday with cupcakes for everyone in his office (40 people). I contacted Sweet Aha! late on a...",
      image_url           : "https://s3-media3.fl.yelpcdn.com/bphoto/xJmuxbAp66GMmgsFSVmtiw/ms.jpg",
      snippet_image_url   : "https://s3-media4.fl.yelpcdn.com/assets/srv0/yelp_styleguide/cc4afe21892e/assets/img/default_avatars/user_medium_square.png",
      display_phone       : "+1-415-839-2138",
      rating_img_url_large: "https://s3-media3.fl.yelpcdn.com/assets/2/www/img/22affc4e6c38/ico/stars/v1/stars_large_5.png",
      id                  : "sweet-aha-san-francisco-2",
      is_closed           : false,
      location            : {
        city           : "San Francisco",
        display_address: [
          "SoMa",
          "San Francisco, CA 94103"
        ],
        geo_accuracy   : 5,
        neighborhoods  : [
          "SoMa"
        ],
        postal_code    : "94103",
        country_code   : "US",
        address        : [],
        coordinate     : {
          latitude : 37.7731018066406,
          longitude: -122.411277770996
        },
        state_code     : "CA"
      }
    },
    {
      is_claimed          : true,
      rating              : 5,
      mobile_url          : "http://m.yelp.com/biz/song-tea-and-ceramics-san-francisco-2?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=RT0DIat-Mf3pVED4QmNPqQ",
      rating_img_url      : "https://s3-media1.fl.yelpcdn.com/assets/2/www/img/f1def11e4e79/ico/stars/v1/stars_5.png",
      review_count        : 39,
      name                : "Song Tea & Ceramics",
      rating_img_url_small: "https://s3-media1.fl.yelpcdn.com/assets/2/www/img/c7623205d5cd/ico/stars/v1/stars_small_5.png",
      url                 : "http://www.yelp.com/biz/song-tea-and-ceramics-san-francisco-2?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=RT0DIat-Mf3pVED4QmNPqQ",
      categories          : [
        [
          "Coffee & Tea",
          "coffee"
        ]
      ],
      phone               : "4158852118",
      snippet_text        : "I've been waiting a couple of years to visit. I was waiting on a friend of mine who is a tea connoisseur, but we never quite made it, so I popped in...",
      image_url           : "https://s3-media3.fl.yelpcdn.com/bphoto/jswkxMdPBVvOf06aYTF7kw/ms.jpg",
      snippet_image_url   : "http://s3-media2.fl.yelpcdn.com/photo/yy4IyNbTu50IxAGXw71BBw/ms.jpg",
      display_phone       : "+1-415-885-2118",
      rating_img_url_large: "https://s3-media3.fl.yelpcdn.com/assets/2/www/img/22affc4e6c38/ico/stars/v1/stars_large_5.png",
      id                  : "song-tea-and-ceramics-san-francisco-2",
      is_closed           : false,
      location            : {
        cross_streets  : "Steiner St & Pierce St",
        city           : "San Francisco",
        display_address: [
          "2120 Sutter St",
          "Lower Pacific Heights",
          "San Francisco, CA 94115"
        ],
        geo_accuracy   : 9.5,
        neighborhoods  : [
          "Lower Pacific Heights"
        ],
        postal_code    : "94115",
        country_code   : "US",
        address        : [
          "2120 Sutter St"
        ],
        coordinate     : {
          latitude : 37.7859464,
          longitude: -122.4353888
        },
        state_code     : "CA"
      }
    },
    {
      is_claimed          : false,
      rating              : 5,
      mobile_url          : "http://m.yelp.com/biz/papa-november-san-francisco?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=RT0DIat-Mf3pVED4QmNPqQ",
      rating_img_url      : "https://s3-media1.fl.yelpcdn.com/assets/2/www/img/f1def11e4e79/ico/stars/v1/stars_5.png",
      review_count        : 76,
      name                : "Papa November",
      rating_img_url_small: "https://s3-media1.fl.yelpcdn.com/assets/2/www/img/c7623205d5cd/ico/stars/v1/stars_small_5.png",
      url                 : "http://www.yelp.com/biz/papa-november-san-francisco?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=RT0DIat-Mf3pVED4QmNPqQ",
      categories          : [
        [
          "Coffee & Tea",
          "coffee"
        ]
      ],
      snippet_text        : "Cute coffee truck in a neighborhood desperately in need of some fancy coffee. I am on mostly decaf these days and would love a decaf latte, but they have...",
      image_url           : "https://s3-media4.fl.yelpcdn.com/bphoto/wgdUOQF61Hb2F6lf7mve_g/ms.jpg",
      snippet_image_url   : "http://s3-media4.fl.yelpcdn.com/photo/exhpjmjcHUrcsv7Tk8ecfg/ms.jpg",
      rating_img_url_large: "https://s3-media3.fl.yelpcdn.com/assets/2/www/img/22affc4e6c38/ico/stars/v1/stars_large_5.png",
      id                  : "papa-november-san-francisco",
      is_closed           : false,
      location            : {
        city           : "San Francisco",
        display_address: [
          "15th & Kansas SE Corner",
          "SoMa",
          "San Francisco, CA 94103"
        ],
        geo_accuracy   : 9.5,
        neighborhoods  : [
          "SoMa"
        ],
        postal_code    : "94103",
        country_code   : "US",
        address        : [
          "15th & Kansas SE Corner"
        ],
        coordinate     : {
          latitude : 37.7672036024795,
          longitude: -122.403616905212
        },
        state_code     : "CA"
      }
    },
    {
      is_claimed          : false,
      rating              : 5,
      mobile_url          : "http://m.yelp.com/biz/balmy-street-murals-san-francisco?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=RT0DIat-Mf3pVED4QmNPqQ",
      rating_img_url      : "https://s3-media1.fl.yelpcdn.com/assets/2/www/img/f1def11e4e79/ico/stars/v1/stars_5.png",
      review_count        : 87,
      name                : "Balmy Street Murals",
      rating_img_url_small: "https://s3-media1.fl.yelpcdn.com/assets/2/www/img/c7623205d5cd/ico/stars/v1/stars_small_5.png",
      url                 : "http://www.yelp.com/biz/balmy-street-murals-san-francisco?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=RT0DIat-Mf3pVED4QmNPqQ",
      categories          : [
        [
          "Local Flavor",
          "localflavor"
        ]
      ],
      snippet_text        : "This short Street is an out door musium if murals. There is everything from memorials to Where the Wild Things Are. It's kind of amazing. There are...",
      image_url           : "https://s3-media2.fl.yelpcdn.com/bphoto/W5pDIQoJKrP2hl4Is3FuFg/ms.jpg",
      snippet_image_url   : "http://s3-media2.fl.yelpcdn.com/photo/ATmQFOAyfrVinrXNhZ27ZA/ms.jpg",
      rating_img_url_large: "https://s3-media3.fl.yelpcdn.com/assets/2/www/img/22affc4e6c38/ico/stars/v1/stars_large_5.png",
      id                  : "balmy-street-murals-san-francisco",
      is_closed           : false,
      location            : {
        city           : "San Francisco",
        display_address: [
          "1-100 Balmy St",
          "Mission",
          "San Francisco, CA 94110"
        ],
        geo_accuracy   : 6,
        neighborhoods  : [
          "Mission"
        ],
        postal_code    : "94110",
        country_code   : "US",
        address        : [
          "1-100 Balmy St"
        ],
        coordinate     : {
          latitude : 37.7526092529297,
          longitude: -122.412460327148
        },
        state_code     : "CA"
      }
    },
    {
      is_claimed          : true,
      rating              : 4.5,
      mobile_url          : "http://m.yelp.com/biz/t-we-tea-san-francisco?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=RT0DIat-Mf3pVED4QmNPqQ",
      rating_img_url      : "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
      review_count        : 77,
      name                : "T-We Tea",
      rating_img_url_small: "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
      url                 : "http://www.yelp.com/biz/t-we-tea-san-francisco?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=RT0DIat-Mf3pVED4QmNPqQ",
      categories          : [
        [
          "Tea Rooms",
          "tea"
        ],
        [
          "Coffee & Tea",
          "coffee"
        ]
      ],
      phone               : "4155002097",
      snippet_text        : "I'd been hearing about this shop from various people: all of them urged me to go check it out. One day I was having lunch at a place in the Crocker Galleria...",
      image_url           : "https://s3-media4.fl.yelpcdn.com/bphoto/SeznMifru5dUbKlcdJn1DQ/ms.jpg",
      snippet_image_url   : "http://s3-media3.fl.yelpcdn.com/photo/xDgeYN6OcHy6fn_APyHb0A/ms.jpg",
      display_phone       : "+1-415-500-2097",
      rating_img_url_large: "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
      id                  : "t-we-tea-san-francisco",
      is_closed           : false,
      location            : {
        city           : "San Francisco",
        display_address: [
          "Crocker Galleria",
          "50 Post St Level 1",
          "Financial District",
          "San Francisco, CA 94104"
        ],
        geo_accuracy   : 9.5,
        neighborhoods  : [
          "Financial District"
        ],
        postal_code    : "94104",
        country_code   : "US",
        address        : [
          "Crocker Galleria",
          "50 Post St Level 1"
        ],
        coordinate     : {
          latitude : 37.789574,
          longitude: -122.402784
        },
        state_code     : "CA"
      }
    },
    {
      is_claimed          : true,
      rating              : 4.5,
      mobile_url          : "http://m.yelp.com/biz/truffle-man-san-francisco?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=RT0DIat-Mf3pVED4QmNPqQ",
      rating_img_url      : "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
      review_count        : 84,
      name                : "Truffle Man",
      rating_img_url_small: "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
      url                 : "http://www.yelp.com/biz/truffle-man-san-francisco?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=RT0DIat-Mf3pVED4QmNPqQ",
      categories          : [
        [
          "Local Flavor",
          "localflavor"
        ]
      ],
      snippet_text        : "alrhgit guys, I'm working from home right now....BUT some pals and i were in town this afternoon and it was obvi the day was gonna stear us towards DP. I...",
      image_url           : "https://s3-media1.fl.yelpcdn.com/bphoto/gxjcptcAAFjsVwhYd1-XYg/ms.jpg",
      snippet_image_url   : "https://s3-media4.fl.yelpcdn.com/assets/srv0/yelp_styleguide/cc4afe21892e/assets/img/default_avatars/user_medium_square.png",
      rating_img_url_large: "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
      id                  : "truffle-man-san-francisco",
      is_closed           : false,
      location            : {
        city           : "San Francisco",
        display_address: [
          "566 Dolores St",
          "Castro",
          "San Francisco, CA 94199"
        ],
        geo_accuracy   : 9.5,
        neighborhoods  : [
          "Castro"
        ],
        postal_code    : "94199",
        country_code   : "US",
        address        : [
          "566 Dolores St"
        ],
        coordinate     : {
          latitude : 37.7597799,
          longitude: -122.4260268
        },
        state_code     : "CA"
      }
    },
    {
      is_claimed          : false,
      rating              : 4.5,
      mobile_url          : "http://m.yelp.com/biz/graffeo-coffee-roasting-company-san-francisco?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=RT0DIat-Mf3pVED4QmNPqQ",
      rating_img_url      : "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
      review_count        : 126,
      name                : "Graffeo Coffee Roasting Company",
      rating_img_url_small: "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
      url                 : "http://www.yelp.com/biz/graffeo-coffee-roasting-company-san-francisco?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=RT0DIat-Mf3pVED4QmNPqQ",
      categories          : [
        [
          "Coffee & Tea",
          "coffee"
        ]
      ],
      phone               : "4159862420",
      snippet_text        : "Coffee the way coffee should be! I am coffee snub, OK? I heat up my coffee mug before I pour coffee in it! I toss the coffee out if it is too weak or if it...",
      image_url           : "https://s3-media3.fl.yelpcdn.com/bphoto/-lCPU5qTZY4rPTn9iA96_w/ms.jpg",
      snippet_image_url   : "http://s3-media2.fl.yelpcdn.com/photo/rst2_M4SyphpmGf2KSTP1w/ms.jpg",
      display_phone       : "+1-415-986-2420",
      rating_img_url_large: "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
      id                  : "graffeo-coffee-roasting-company-san-francisco",
      is_closed           : false,
      location            : {
        cross_streets  : "Via Buffano & Filbert St",
        city           : "San Francisco",
        display_address: [
          "735 Columbus Ave",
          "Russian Hill",
          "San Francisco, CA 94133"
        ],
        geo_accuracy   : 8,
        neighborhoods  : [
          "Russian Hill",
          "North Beach/Telegraph Hill"
        ],
        postal_code    : "94133",
        country_code   : "US",
        address        : [
          "735 Columbus Ave"
        ],
        coordinate     : {
          latitude : 37.80133,
          longitude: -122.41201
        },
        state_code     : "CA"
      }
    },
    {
      is_claimed          : true,
      rating              : 5,
      mobile_url          : "http://m.yelp.com/biz/tadu-ethiopian-kitchen-san-francisco-3?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=RT0DIat-Mf3pVED4QmNPqQ",
      rating_img_url      : "https://s3-media1.fl.yelpcdn.com/assets/2/www/img/f1def11e4e79/ico/stars/v1/stars_5.png",
      review_count        : 306,
      name                : "Tadu Ethiopian Kitchen",
      rating_img_url_small: "https://s3-media1.fl.yelpcdn.com/assets/2/www/img/c7623205d5cd/ico/stars/v1/stars_small_5.png",
      url                 : "http://www.yelp.com/biz/tadu-ethiopian-kitchen-san-francisco-3?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=RT0DIat-Mf3pVED4QmNPqQ",
      categories          : [
        [
          "Ethiopian",
          "ethiopian"
        ]
      ],
      menu_date_updated   : 1463688477,
      phone               : "4154096649",
      snippet_text        : "Kitfo special and gomen besega are my jam and they definitely delivered here! The spices and ghee were so indulgent against the tender meat and stewed...",
      image_url           : "https://s3-media4.fl.yelpcdn.com/bphoto/ClnhSWG3puv1_NsL3retiw/ms.jpg",
      snippet_image_url   : "http://s3-media4.fl.yelpcdn.com/photo/Nhsy8iz8tAeoOswapLdMMA/ms.jpg",
      display_phone       : "+1-415-409-6649",
      rating_img_url_large: "https://s3-media3.fl.yelpcdn.com/assets/2/www/img/22affc4e6c38/ico/stars/v1/stars_large_5.png",
      menu_provider       : "eat24",
      id                  : "tadu-ethiopian-kitchen-san-francisco-3",
      is_closed           : false,
      location            : {
        cross_streets  : "Jones St & Leavenworth St",
        city           : "San Francisco",
        display_address: [
          "484 Ellis St",
          "Tenderloin",
          "San Francisco, CA 94102"
        ],
        geo_accuracy   : 9.5,
        neighborhoods  : [
          "Tenderloin"
        ],
        postal_code    : "94102",
        country_code   : "US",
        address        : [
          "484 Ellis St"
        ],
        coordinate     : {
          latitude : 37.7847191,
          longitude: -122.414172
        },
        state_code     : "CA"
      }
    },
    {
      is_claimed          : false,
      rating              : 4.5,
      mobile_url          : "http://m.yelp.com/biz/el-gallo-giro-taco-truck-san-francisco-2?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=RT0DIat-Mf3pVED4QmNPqQ",
      rating_img_url      : "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
      review_count        : 120,
      name                : "El Gallo Giro Taco Truck",
      rating_img_url_small: "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
      url                 : "http://www.yelp.com/biz/el-gallo-giro-taco-truck-san-francisco-2?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=RT0DIat-Mf3pVED4QmNPqQ",
      categories          : [
        [
          "Mexican",
          "mexican"
        ],
        [
          "Food Stands",
          "foodstands"
        ]
      ],
      snippet_text        : "I came here for the tacos initially and then kept coming back for the al pastor super burrito. There are weeks I've come every other day just for the al...",
      image_url           : "https://s3-media4.fl.yelpcdn.com/bphoto/MV4qJI_NGu_DiIsZ8Vby7Q/ms.jpg",
      snippet_image_url   : "http://s3-media3.fl.yelpcdn.com/photo/QN5qUEDIyTxpQno0091Kkg/ms.jpg",
      rating_img_url_large: "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
      id                  : "el-gallo-giro-taco-truck-san-francisco-2",
      is_closed           : false,
      location            : {
        city           : "San Francisco",
        display_address: [
          "23rd St & Treat Ave",
          "Mission",
          "San Francisco, CA 94110"
        ],
        geo_accuracy   : 7,
        neighborhoods  : [
          "Mission"
        ],
        postal_code    : "94110",
        country_code   : "US",
        address        : [
          "23rd St & Treat Ave"
        ],
        coordinate     : {
          latitude : 37.75417,
          longitude: -122.41312
        },
        state_code     : "CA"
      }
    },
    {
      is_claimed          : false,
      rating              : 4.5,
      mobile_url          : "http://m.yelp.com/biz/twin-peaks-san-francisco?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=RT0DIat-Mf3pVED4QmNPqQ",
      rating_img_url      : "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
      review_count        : 902,
      name                : "Twin Peaks",
      rating_img_url_small: "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
      url                 : "http://www.yelp.com/biz/twin-peaks-san-francisco?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=RT0DIat-Mf3pVED4QmNPqQ",
      categories          : [
        [
          "Parks",
          "parks"
        ],
        [
          "Landmarks & Historical Buildings",
          "landmarks"
        ]
      ],
      phone               : "4158316331",
      snippet_text        : "Pretty great view of the city of San Francisco, I must admit. I got lost once on the way to the Power Exchange and somehow ended up here. I think it was a...",
      image_url           : "https://s3-media3.fl.yelpcdn.com/bphoto/M4Wlag1DV2R2kv2EJKTa4g/ms.jpg",
      snippet_image_url   : "http://s3-media3.fl.yelpcdn.com/photo/1TsvR2A6pWvN5NLH78yeYA/ms.jpg",
      display_phone       : "+1-415-831-6331",
      rating_img_url_large: "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
      id                  : "twin-peaks-san-francisco",
      is_closed           : false,
      location            : {
        cross_streets  : "Christmas Tree Point Rd & Burnett Ave",
        city           : "San Francisco",
        display_address: [
          "501 Twin Peaks Blvd",
          "Twin Peaks",
          "San Francisco, CA 94114"
        ],
        geo_accuracy   : 9.5,
        neighborhoods  : [
          "Twin Peaks"
        ],
        postal_code    : "94114",
        country_code   : "US",
        address        : [
          "501 Twin Peaks Blvd"
        ],
        coordinate     : {
          latitude : 37.7521564122127,
          longitude: -122.447519302368
        },
        state_code     : "CA"
      }
    },
    {
      is_claimed          : true,
      rating              : 4.5,
      mobile_url          : "http://m.yelp.com/biz/bowld-acai-san-francisco-2?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=RT0DIat-Mf3pVED4QmNPqQ",
      rating_img_url      : "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
      review_count        : 226,
      name                : "Bowl'D Acai",
      rating_img_url_small: "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
      url                 : "http://www.yelp.com/biz/bowld-acai-san-francisco-2?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=RT0DIat-Mf3pVED4QmNPqQ",
      categories          : [
        [
          "Food Trucks",
          "foodtrucks"
        ],
        [
          "Juice Bars & Smoothies",
          "juicebars"
        ],
        [
          "Hawaiian",
          "hawaiian"
        ]
      ],
      phone               : "4157707000",
      snippet_text        : "BOMB. DOT. COM. This is my go to acai place. These guys don't sell acai... they DEAL it, cuz this ish is like crack! I keep coming back for more. I'm all...",
      image_url           : "https://s3-media4.fl.yelpcdn.com/bphoto/-t5W3oOeKDSsRqAHlZzN4A/ms.jpg",
      snippet_image_url   : "http://s3-media1.fl.yelpcdn.com/photo/_PogNDpjbW7vf0e1qMprLQ/ms.jpg",
      display_phone       : "+1-415-770-7000",
      rating_img_url_large: "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
      id                  : "bowld-acai-san-francisco-2",
      is_closed           : false,
      location            : {
        cross_streets  : "Jessie St",
        city           : "San Francisco",
        display_address: [
          "14 Mint Plaza",
          "Union Square",
          "San Francisco, CA 94103"
        ],
        geo_accuracy   : 9.5,
        neighborhoods  : [
          "Union Square",
          "SoMa"
        ],
        postal_code    : "94103",
        country_code   : "US",
        address        : [
          "14 Mint Plaza"
        ],
        coordinate     : {
          latitude : 37.7827576494972,
          longitude: -122.407829469394
        },
        state_code     : "CA"
      }
    },
    {
      is_claimed          : false,
      rating              : 5,
      mobile_url          : "http://m.yelp.com/biz/lyon-street-steps-san-francisco?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=RT0DIat-Mf3pVED4QmNPqQ",
      rating_img_url      : "https://s3-media1.fl.yelpcdn.com/assets/2/www/img/f1def11e4e79/ico/stars/v1/stars_5.png",
      review_count        : 275,
      name                : "Lyon Street Steps",
      rating_img_url_small: "https://s3-media1.fl.yelpcdn.com/assets/2/www/img/c7623205d5cd/ico/stars/v1/stars_small_5.png",
      url                 : "http://www.yelp.com/biz/lyon-street-steps-san-francisco?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=RT0DIat-Mf3pVED4QmNPqQ",
      categories          : [
        [
          "Local Flavor",
          "localflavor"
        ],
        [
          "Hiking",
          "hiking"
        ]
      ],
      snippet_text        : "Wanna workout? Wanna spot one of those amazing San Fran Heart sculptures? Wanna beautiful panoramic view of the Bay? Wanna capture some of San Fran's...",
      image_url           : "https://s3-media1.fl.yelpcdn.com/bphoto/CDPDV0qMXs9jvntVqJ-Bxw/ms.jpg",
      snippet_image_url   : "http://s3-media4.fl.yelpcdn.com/photo/9ZEfLIIZJ2nZ5pQ-93X_VQ/ms.jpg",
      rating_img_url_large: "https://s3-media3.fl.yelpcdn.com/assets/2/www/img/22affc4e6c38/ico/stars/v1/stars_large_5.png",
      id                  : "lyon-street-steps-san-francisco",
      is_closed           : false,
      location            : {
        city           : "San Francisco",
        display_address: [
          "Lyon Street & Green St",
          "Pacific Heights",
          "San Francisco, CA 94123"
        ],
        geo_accuracy   : 7,
        neighborhoods  : [
          "Pacific Heights",
          "Presidio",
          "Marina/Cow Hollow"
        ],
        postal_code    : "94123",
        country_code   : "US",
        address        : [
          "Lyon Street & Green St"
        ],
        coordinate     : {
          latitude : 37.7946895603657,
          longitude: -122.446746957741
        },
        state_code     : "CA"
      }
    },
    {
      is_claimed          : true,
      rating              : 4.5,
      mobile_url          : "http://m.yelp.com/biz/the-boys-deli-san-francisco?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=RT0DIat-Mf3pVED4QmNPqQ",
      rating_img_url      : "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
      review_count        : 193,
      name                : "The Boy's Deli",
      rating_img_url_small: "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
      url                 : "http://www.yelp.com/biz/the-boys-deli-san-francisco?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=RT0DIat-Mf3pVED4QmNPqQ",
      categories          : [
        [
          "Delis",
          "delis"
        ],
        [
          "Meat Shops",
          "meats"
        ],
        [
          "Sandwiches",
          "sandwiches"
        ]
      ],
      phone               : "4157763099",
      snippet_text        : "Generous portions, reasonable prices, well hidden, but most importantly: this is perhaps the most delicious sandwich spot in the city. I moved here from a...",
      image_url           : "https://s3-media2.fl.yelpcdn.com/bphoto/s_hDwelSbnK-lk3xudHGog/ms.jpg",
      snippet_image_url   : "http://s3-media1.fl.yelpcdn.com/photo/yYoM-jtrvhkEWb8O9ZBPAQ/ms.jpg",
      display_phone       : "+1-415-776-3099",
      rating_img_url_large: "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
      id                  : "the-boys-deli-san-francisco",
      is_closed           : false,
      location            : {
        city           : "San Francisco",
        display_address: [
          "Polk & Green Produce Market",
          "2222 Polk St",
          "Russian Hill",
          "San Francisco, CA 94109"
        ],
        geo_accuracy   : 8,
        neighborhoods  : [
          "Russian Hill"
        ],
        postal_code    : "94109",
        country_code   : "US",
        address        : [
          "Polk & Green Produce Market",
          "2222 Polk St"
        ],
        coordinate     : {
          latitude : 37.7971784770489,
          longitude: -122.421957179904
        },
        state_code     : "CA"
      }
    },
    {
      is_claimed          : false,
      rating              : 4.5,
      mobile_url          : "http://m.yelp.com/biz/hookers-sweet-treats-san-francisco?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=RT0DIat-Mf3pVED4QmNPqQ",
      rating_img_url      : "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
      review_count        : 240,
      name                : "Hooker's Sweet Treats",
      rating_img_url_small: "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
      url                 : "http://www.yelp.com/biz/hookers-sweet-treats-san-francisco?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=RT0DIat-Mf3pVED4QmNPqQ",
      categories          : [
        [
          "Chocolatiers & Shops",
          "chocolate"
        ],
        [
          "Coffee & Tea",
          "coffee"
        ]
      ],
      phone               : "4154414628",
      snippet_text        : "Amazing Chocolates / Scones and coffee. There owner Paul is very friendly and the other people working their are also. Limited seating, Pet friendly for...",
      image_url           : "https://s3-media1.fl.yelpcdn.com/bphoto/SKVfRL0wQBN80DHY2AeaQA/ms.jpg",
      snippet_image_url   : "http://s3-media3.fl.yelpcdn.com/photo/B94xBCQvhh9C-vLFSibGtA/ms.jpg",
      display_phone       : "+1-415-441-4628",
      rating_img_url_large: "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
      id                  : "hookers-sweet-treats-san-francisco",
      is_closed           : false,
      location            : {
        cross_streets  : "Ellis St & Ofarrell St",
        city           : "San Francisco",
        display_address: [
          "442 Hyde St",
          "Tenderloin",
          "San Francisco, CA 94109"
        ],
        geo_accuracy   : 8,
        neighborhoods  : [
          "Tenderloin"
        ],
        postal_code    : "94109",
        country_code   : "US",
        address        : [
          "442 Hyde St"
        ],
        coordinate     : {
          latitude : 37.7852285,
          longitude: -122.4160527
        },
        state_code     : "CA"
      }
    },
    {
      is_claimed          : true,
      rating              : 4.5,
      mobile_url          : "http://m.yelp.com/biz/kusakabe-san-francisco?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=RT0DIat-Mf3pVED4QmNPqQ",
      rating_img_url      : "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
      review_count        : 418,
      name                : "KUSAKABE",
      rating_img_url_small: "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
      url                 : "http://www.yelp.com/biz/kusakabe-san-francisco?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=RT0DIat-Mf3pVED4QmNPqQ",
      categories          : [
        [
          "Sushi Bars",
          "sushi"
        ],
        [
          "Japanese",
          "japanese"
        ]
      ],
      menu_date_updated   : 1442203432,
      phone               : "4157570155",
      snippet_text        : "I really want to tell you not to go here, so those that know it can keep it to ourselves. I'd hate to see this little place become overrun & impossible to...",
      image_url           : "https://s3-media1.fl.yelpcdn.com/bphoto/G2S8Lk72iXwnd35Yr86k_g/ms.jpg",
      snippet_image_url   : "http://s3-media1.fl.yelpcdn.com/photo/h7gcU1UL3Nac4jZwsx4E3A/ms.jpg",
      display_phone       : "+1-415-757-0155",
      rating_img_url_large: "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
      menu_provider       : "single_platform",
      id                  : "kusakabe-san-francisco",
      is_closed           : false,
      location            : {
        cross_streets  : "Columbus Ave & Hotaling St",
        city           : "San Francisco",
        display_address: [
          "584 Washington St",
          "Financial District",
          "San Francisco, CA 94111"
        ],
        geo_accuracy   : 9.5,
        neighborhoods  : [
          "Financial District"
        ],
        postal_code    : "94111",
        country_code   : "US",
        address        : [
          "584 Washington St"
        ],
        coordinate     : {
          latitude : 37.7956615,
          longitude: -122.4028902
        },
        state_code     : "CA"
      }
    },
    {
      is_claimed          : true,
      rating              : 4.5,
      mobile_url          : "http://m.yelp.com/biz/b-patisserie-san-francisco-2?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=RT0DIat-Mf3pVED4QmNPqQ",
      rating_img_url      : "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
      review_count        : 1256,
      name                : "b. Patisserie",
      rating_img_url_small: "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
      url                 : "http://www.yelp.com/biz/b-patisserie-san-francisco-2?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=RT0DIat-Mf3pVED4QmNPqQ",
      categories          : [
        [
          "Bakeries",
          "bakeries"
        ],
        [
          "Coffee & Tea",
          "coffee"
        ]
      ],
      menu_date_updated   : 1442113714,
      phone               : "4154401700",
      snippet_text        : "I'm not a huge pastry person these days.. but b. patisserie had me raving about pastries for the days following my visit. I stopped by one Sunday morning...",
      image_url           : "https://s3-media1.fl.yelpcdn.com/bphoto/F7ido-iqXCw-R0-XhkeHiA/ms.jpg",
      snippet_image_url   : "http://s3-media4.fl.yelpcdn.com/photo/ssTnlskYZYkiv2p0FgSpBg/ms.jpg",
      display_phone       : "+1-415-440-1700",
      rating_img_url_large: "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
      menu_provider       : "single_platform",
      id                  : "b-patisserie-san-francisco-2",
      is_closed           : false,
      location            : {
        cross_streets  : "Divisadero St & Broderick St",
        city           : "San Francisco",
        display_address: [
          "2821 California St",
          "Pacific Heights",
          "San Francisco, CA 94115"
        ],
        geo_accuracy   : 9.5,
        neighborhoods  : [
          "Pacific Heights",
          "Lower Pacific Heights"
        ],
        postal_code    : "94115",
        country_code   : "US",
        address        : [
          "2821 California St"
        ],
        coordinate     : {
          latitude : 37.7879217,
          longitude: -122.4409499
        },
        state_code     : "CA"
      }
    },
    {
      is_claimed          : true,
      rating              : 4.5,
      mobile_url          : "http://m.yelp.com/biz/shizen-vegan-sushi-bar-and-izakaya-san-francisco?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=RT0DIat-Mf3pVED4QmNPqQ",
      rating_img_url      : "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
      review_count        : 450,
      name                : "Shizen Vegan Sushi Bar & Izakaya",
      rating_img_url_small: "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
      url                 : "http://www.yelp.com/biz/shizen-vegan-sushi-bar-and-izakaya-san-francisco?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=RT0DIat-Mf3pVED4QmNPqQ",
      categories          : [
        [
          "Sushi Bars",
          "sushi"
        ],
        [
          "Japanese",
          "japanese"
        ],
        [
          "Vegan",
          "vegan"
        ]
      ],
      menu_date_updated   : 1447932443,
      phone               : "4156785767",
      snippet_text        : "Gluten free and vegan options that will make you want to come back daily! GF ramen is so fresh & well spiced. Sushi rolls are beautiful, fresh, & so well...",
      image_url           : "https://s3-media1.fl.yelpcdn.com/bphoto/qNBc17KOonteVfaVCGj0HQ/ms.jpg",
      snippet_image_url   : "http://s3-media2.fl.yelpcdn.com/photo/IU4uc7dNIYPVspIrp2o5EA/ms.jpg",
      display_phone       : "+1-415-678-5767",
      rating_img_url_large: "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
      menu_provider       : "single_platform",
      id                  : "shizen-vegan-sushi-bar-and-izakaya-san-francisco",
      is_closed           : false,
      location            : {
        cross_streets  : "Julian Ave & Stevenson St",
        city           : "San Francisco",
        display_address: [
          "370 14th St",
          "Mission",
          "San Francisco, CA 94103"
        ],
        geo_accuracy   : 8,
        neighborhoods  : [
          "Mission"
        ],
        postal_code    : "94103",
        country_code   : "US",
        address        : [
          "370 14th St"
        ],
        coordinate     : {
          latitude : 37.7682280540466,
          longitude: -122.421650066972
        },
        state_code     : "CA"
      }
    },
    {
      is_claimed          : true,
      rating              : 4.5,
      mobile_url          : "http://m.yelp.com/biz/city-hall-san-francisco?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=RT0DIat-Mf3pVED4QmNPqQ",
      rating_img_url      : "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
      review_count        : 312,
      name                : "City Hall",
      rating_img_url_small: "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
      url                 : "http://www.yelp.com/biz/city-hall-san-francisco?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=RT0DIat-Mf3pVED4QmNPqQ",
      categories          : [
        [
          "Landmarks & Historical Buildings",
          "landmarks"
        ],
        [
          "Venues & Event Spaces",
          "venues"
        ]
      ],
      phone               : "4157012311",
      snippet_text        : "The civil wedding that we had there was magic! The staff is friendly and very organized - through the application process we hardly had to wait in line....",
      image_url           : "https://s3-media1.fl.yelpcdn.com/bphoto/5lpkas3QHr69qAmmyxx47w/ms.jpg",
      snippet_image_url   : "http://s3-media3.fl.yelpcdn.com/photo/QwA53ekYyt0o16B2mvl6Aw/ms.jpg",
      display_phone       : "+1-415-701-2311",
      rating_img_url_large: "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
      id                  : "city-hall-san-francisco",
      is_closed           : false,
      location            : {
        city           : "San Francisco",
        display_address: [
          "1 Dr Carlton B Goodlett Pl",
          "Civic Center",
          "San Francisco, CA 94102"
        ],
        geo_accuracy   : 9.5,
        neighborhoods  : [
          "Civic Center"
        ],
        postal_code    : "94102",
        country_code   : "US",
        address        : [
          "1 Dr Carlton B Goodlett Pl"
        ],
        coordinate     : {
          latitude : 37.7793900915108,
          longitude: -122.418615818024
        },
        state_code     : "CA"
      }
    },
    {
      is_claimed          : false,
      rating              : 4.5,
      mobile_url          : "http://m.yelp.com/biz/seward-street-slides-san-francisco?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=RT0DIat-Mf3pVED4QmNPqQ",
      rating_img_url      : "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
      review_count        : 511,
      name                : "Seward Street Slides",
      rating_img_url_small: "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
      url                 : "http://www.yelp.com/biz/seward-street-slides-san-francisco?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=RT0DIat-Mf3pVED4QmNPqQ",
      categories          : [
        [
          "Parks",
          "parks"
        ]
      ],
      snippet_text        : "I found it! When I first read about it online, since it was listed as a hidden gem I thought it would be difficult to find. However, the slides are part...",
      image_url           : "https://s3-media4.fl.yelpcdn.com/bphoto/GOorcdseOmdoGwZxppZPkQ/ms.jpg",
      snippet_image_url   : "http://s3-media1.fl.yelpcdn.com/photo/wB_OVFqq1bDpvyfHgIRfvQ/ms.jpg",
      rating_img_url_large: "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
      id                  : "seward-street-slides-san-francisco",
      is_closed           : false,
      location            : {
        city           : "San Francisco",
        display_address: [
          "Seward St",
          "Castro",
          "San Francisco, CA 94114"
        ],
        geo_accuracy   : 9.5,
        neighborhoods  : [
          "Castro"
        ],
        postal_code    : "94114",
        country_code   : "US",
        address        : [
          "Seward St"
        ],
        coordinate     : {
          latitude : 37.7579189398193,
          longitude: -122.439813773941
        },
        state_code     : "CA"
      }
    }
  ]
}
