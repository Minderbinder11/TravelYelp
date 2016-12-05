var React = require('react');

var StoreTile = ({shop}) =>{

  return (
      <div style={{width: '50px', height: '50px', display: 'inline-block'}}>
        <p>One Tile for a Restaurat Review</p>
        <p>{shop.name}</p>
        <p>{shop.review_count} reviews by customers</p>
        <p>Average Review <img src={shop.rating_img_url}/></p>
      </div>
    );
};

module.exports = StoreTile;
