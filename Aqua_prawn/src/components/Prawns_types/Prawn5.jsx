import React from 'react';
import './Prawn1.css'; 
import img1 from '../../assets/img5.png'; 

export default function Prawn5() {
  return (
    <div className="prawn-container">
      <div className="prawn-image">
        <img src={img1} alt="prawn" />
      </div>
  
<div className="prawn-details">
  <h1>Giant River Prawn</h1>
  <p><strong>Scientific Name:</strong> Macrobrachium rosenbergii</p>
  <p><strong>Area Found:</strong> Native to South and Southeast Asia, including parts of India</p>
  <p><strong>Common Issues:</strong> Fungal infections, water quality issues</p>
  <p><strong>Prevention:</strong> Maintain good water quality, avoid overcrowding, and use disease-free stock.</p>
  <p><strong>Farming:</strong> Suitable for freshwater or brackish water; optimal temperature 28-30°C, pH 6.5-8.5.</p>
</div>
    </div>
  );
}
