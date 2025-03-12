
import React from 'react';
import ViewProductButton from '../components/button'; 

const Productcard = () => {
  const productImage = 'https://via.placeholder.com/200'; 
  const productName = 'Awesome Product';
  const productPrice = '$29.99';

  return (
    <div className="productcard">
      <img src={productImage} alt={productName} className="productcard__image" />
      <div className="productcard__details">
        <h3 className="productcard__name">{productName}</h3>
        <p className="productcard__price">{productPrice}</p>
      </div>
      <ViewProductButton /> {}
    </div>
  );
};

export default Productcard;
