import React from 'react';
import './CounselingCard.css';
import career from "../../image/carrer.jpeg"
function CounselingCard({ title, description, image }) {
  // const imagePath = require(`/Users/satyam/Documents/counsellor/start-up/src/image/${image}`)
  return (
    
    <div className="counseling-card">
      
      <img src= {career} alt={title} className="counseling-card-image" />
      <div className="counseling-card-content">
        <h3 className="counseling-card-title">{title}</h3>
        <p className="counseling-card-description">{description}</p>
      </div>
    </div>
  );
}

export default CounselingCard;
