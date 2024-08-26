import React from 'react';
import './Prawn1.css'; 
import img1 from '../../assets/img2.png'; 

export default function Prawn2() {
  return (
    <div className="prawn-container">
      <div className="prawn-image">
        <img src={img1} alt="prawn" />
      </div>
      <div className="prawn-details">
  <h1>Indian Prawn</h1>
  <p><strong>Scientific Name:</strong> Penaeus indicus</p>
  <p><strong>Area Found:</strong> Coastal regions of India, including Machilipatnam</p>
  <p><strong>Common Issues:</strong> White Spot Syndrome Virus (WSSV), bacterial infections</p>
  <p><strong>Prevention:</strong> Use disease-free larvae, maintain proper water quality, and implement biosecurity measures.</p>
  <p><strong>Farming:</strong> Suitable for extensive and semi-intensive farming; optimal temperature 24-30°C, salinity 10-35 ppt.</p>
</div>
    </div>
  );
}
