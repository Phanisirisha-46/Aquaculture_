import React from 'react';
import './Prawn1.css'; 
import img1 from '../../assets/img4.png'; 

export default function Prawn4() {
  return (
    <div className="prawn-container4">
      <div className="prawn-image">
      <img 
          src={img1} 
          alt="prawn" 
          style={{ width: '300px', height: 'auto', borderRadius: '8px' }} 
        />
      </div>
      <div className="prawn-details">
  <h1>Tiger Prawn</h1>
  <p><strong>Scientific Name:</strong> Penaeus semisulcatus</p>
  <p><strong>Area Found:</strong> Indo-Pacific region, including Machilipatnam</p>
  <p><strong>Common Issues:</strong> White Spot Syndrome Virus (WSSV), Taura Syndrome Virus (TSV)</p>
  <p><strong>Prevention:</strong> Use disease-free larvae, maintain high water quality, and ensure proper farm management practices.</p>
  <p><strong>Farming:</strong> Suitable for extensive and semi-intensive farming; optimal temperature 24-30°C, salinity 10-35 ppt.</p>
    </div>
    </div>
  );
}
