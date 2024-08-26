import React from 'react';
import './Prawn1.css'; 
import img1 from '../../assets/img7.png'; 

export default function Prawn7() {
  return (
    <div className="prawn-container">
      <div className="prawn-image">
      <img 
          src={img1} 
          alt="prawn" 
          style={{ width: '300px', height: 'auto', borderRadius: '8px' }} 
        />
      </div>
      <div className="prawn-details">
  <h1>Black Tiger Shrimp</h1>
  <p><strong>Scientific Name:</strong> Penaeus monodon</p>
  <p><strong>Area Found:</strong> Machilipatnam</p>
  <p><strong>Common Issues:</strong> White Spot Syndrome Virus (WSSV), Vibrio infections</p>
  <p><strong>Prevention:</strong> Use disease-free larvae, maintain good water quality, and follow biosecurity measures.</p>
  <p><strong>Farming:</strong> Suitable for both intensive and extensive farming; optimal temperature 26-30°C, salinity 10-35 ppt.</p>
</div>

    </div>
  );
}
