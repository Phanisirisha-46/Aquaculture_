import React from 'react';
import './Prawn1.css'; 
import img1 from '../../assets/img1.png'; 

export default function Prawn1() {
  return (
    <div className="prawn-container">
      <div className="prawn-image">
        <img src={img1} alt="prawn" />
      </div>
      <div className="prawn-details">
  <h1>Whiteleg Shrimp</h1>
  <p><strong>Scientific Name:</strong> Litopenaeus vannamei</p>
  <p><strong>Area Found:</strong> Native to the eastern Pacific, commonly farmed in various regions including Machilipatnam</p>
  <p><strong>Common Issues:</strong> Early Mortality Syndrome (EMS), Vibrio infections</p>
  <p><strong>Prevention:</strong> Use high-quality feed, maintain good water quality, and practice biosecurity measures.</p>
  <p><strong>Farming:</strong> Ideal for intensive farming; optimal temperature 25-30°C, salinity 15-30 ppt.</p>
    </div>
    </div>
  );
}
