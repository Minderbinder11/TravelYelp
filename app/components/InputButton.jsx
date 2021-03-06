var React = require('react');

var InputButton = React.createClass({

  onFormSubmit: function(e){
    e.preventDefault();

    var location = this.refs.location.value;

    if (location.length >0){
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },

  render: function () {

    return (
      <div>
        <p> This is my placeholder for a button </p>
        <form onSubmit={this.onFormSubmit}>
          <input type="text"  ref="location" placeholder="Name"/>
          <button>Submit</button>
        </form>
      </div>
    );
  }
});

module.exports = InputButton;