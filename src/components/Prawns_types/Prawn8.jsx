import React from 'react';
import './Prawn1.css'; 
import img1 from '../../assets/img8.png'; 

export default function Prawn8() {
  return (
    <div className="prawn-container">
      <div className="prawn-image">
        <img src={img1} alt="prawn" />
      </div>
      <div className="prawn-details">
  <h1>Speckled Shrimp</h1>
  <p><strong>Scientific Name:</strong> Metapenaeus monoceros</p>
  <p><strong>Area Found:</strong> Machilipatnam</p>
  <p><strong>Common Issues:</strong> White Spot Syndrome Virus (WSSV), bacterial infections</p>
  <p><strong>Prevention:</strong> Ensure high water quality, use disease-free juveniles, and practice good farm hygiene.</p>
  <p><strong>Farming:</strong> Suitable for brackish water farming; optimal temperature 24-28°C, salinity 5-20 ppt.</p>
</div>

    </div>
  );
}
