import React from 'react';

const ViewProductButton = () => {
  const handleClick = () => {
    alert('View product clicked!');
  
  };

  return (
    <button className="view-product-button" onClick={handleClick}>
      View Product
    </button>
  );
};

export default ViewProductButton;
