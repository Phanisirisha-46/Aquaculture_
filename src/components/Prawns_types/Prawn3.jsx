import React from 'react';
import './Prawn1.css'; 
import img1 from '../../assets/img3.png'; 

export default function Prawn3() {
  return (
    <div className="prawn-container">
      <div className="prawn-image">
        <img src={img1} alt="prawn" />
      </div>
      <div className="prawn-details">
  <h1>Banana Prawn</h1>
  <p><strong>Scientific Name:</strong> Penaeus merguiensis</p>
  <p><strong>Area Found:</strong> Indo-Pacific region, including parts of India</p>
  <p><strong>Common Issues:</strong> White Spot Syndrome Virus (WSSV), Vibrio infections</p>
  <p><strong>Prevention:</strong> Maintain clean water, use disease-free stock, and follow biosecurity practices.</p>
  <p><strong>Farming:</strong> Suitable for brackish and coastal waters; optimal temperature 25-30°C, salinity 10-30 ppt.</p>
    </div>
    </div>
  );
}
