import React from 'react';

import './ProductCard.css';
export const ProductCard = ({ data }) => {

  const trimContent = (content, maxLength) => {
    if (!content) {
      return 'This content is not available'; // Return message if content is undefined or null
    }
    if (content.length > maxLength) {
      return content.substring(0, maxLength) + "..."; // Trim content if it exceeds maxLength
    }
    return content; // Return original content if it doesn't exceed maxLength
  };
  return (
    <div className="container">
      <div className="row">
        {data.map((item) => (
          <div className="col-md-3 mb-4" key={item.id}>
            <div className="card">
              <div className="product-img">
              <img src={item.image} className="card-img-top " alt={`banner-${item.id}`} />
              </div>
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{trimContent(item.description, 55)}</p>
                <p className="card-text"><strong>Price:</strong> {item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
