var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch: function (e) {
    e.preventDefault();
    alert('Not yet wired up!');
  },

  render: function () {
    return (
      <div>
        <h2>Yelp Travel Planner Using React</h2>
        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Yelp Recommendations</IndexLink>
        <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About Us</Link>
        <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Something Else</Link>
      </div>
    );
  }
});

module.exports = Nav;
