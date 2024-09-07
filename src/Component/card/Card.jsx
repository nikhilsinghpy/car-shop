import React from "react";
import './card.css'
export const Card = ({cardData}) => {
  return (
    <div>
      <div className="card-list">
        {cardData.map((card) => (
          <div key={card.id} className="card-basic">
            <div className="card-basic-img">
              <img src={card.image} alt={`banner-${card.id}`} />
            </div>
            <div className="card-content p-2">
              <h6 className="text-start mb-2 text-secondary fw-bold">
                {card.title}
              </h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
