import React from 'react';
import './Prawn1.css'; 
import img1 from '../../assets/img9.png'; 

export default function Prawn9() {
  return (
    <div className="prawn-container9">
      <div className="prawn-image">
        <img src={img1} alt="prawn" />
      </div>
      <div className="prawn-details">
  <h1>Pink Shrimp</h1>
  <p><strong>Scientific Name:</strong> Metapenaeus dobsoni</p>
  <p><strong>Area Found:</strong> Machilipatnam</p>
  <p><strong>Common Issues:</strong> White Spot Syndrome Virus (WSSV), environmental stresses</p>
  <p><strong>Prevention:</strong> Use clean and disease-free water, implement proper farming techniques, and maintain optimal environmental conditions.</p>
  <p><strong>Farming:</strong> Best suited for brackish and coastal waters; optimal temperature 22-28°C, salinity 10-30 ppt.</p>
</div>

    </div>
  );
}
