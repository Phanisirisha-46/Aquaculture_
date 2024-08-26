import React from 'react';
import './Weather.css';
import m1 from '../../assets/m1.png'; 
import m2 from '../../assets/m2.png'; 
import m3 from '../../assets/m3.png'; 
import m4 from '../../assets/m4.png'; 
import m6 from '../../assets/m6.png'; 
import m7 from '../../assets/m7.png'; 
const Weather = () => {
  return (
    <div className="weather-container">
      <h1>Climate Information for Prawn Lakes in Machilipatnam</h1>
      <div className="flex-container">
        <div className="text-section">
          <div className="climate-detail">
            <h2 className='name'>Temperature</h2>
            <p><strong>Optimal Range:</strong> 24°C to 30°C (75°F to 86°F)</p>
            <p><strong>Impact:</strong> Prawns thrive in warm water within this range. Extreme temperatures can affect their growth and health.</p>
          </div>
          <div className="climate-detail">
            <h2 className='name'>Salinity</h2>
            <p><strong>Optimal Range:</strong> 10 to 35 ppt (parts per thousand)</p>
            <p><strong>Impact:</strong> Salinity levels are crucial for prawns; they should be monitored and maintained within this range to ensure healthy growth.</p>
          </div>
          <div className="climate-detail">
            <h2 className='name'>Humidity</h2>
            <p><strong>Impact:</strong> High humidity levels can influence water quality and management practices. Proper aeration and water management are essential to maintain optimal conditions.</p>
          </div>
          <div className="climate-detail">
            <h2 className='name'>Rainfall</h2>
            <p><strong>Impact:</strong> Seasonal rainfall can affect water levels and salinity in prawn ponds. Effective drainage and water management practices are needed to handle variations in rainfall.</p>
          </div>
          <div className="climate-detail">
            <h2 className='name'>Seasonal Variations</h2>
            <p><strong>Monsoon Season:</strong> Heavy rains during the monsoon season can impact salinity and water quality, necessitating careful monitoring and adjustments.</p>
            <p><strong>Dry Season:</strong> Lower rainfall and higher temperatures can increase water evaporation, requiring additional water management measures.</p>
          </div>
          <div className="climate-detail">
            <h2 className='name'>Recommendations</h2>
            <p><strong>Regular Monitoring:</strong> Regularly check water temperature, salinity, and other environmental factors to ensure they remain within optimal ranges.</p>
            <p><strong>Water Management:</strong> Implement practices to manage water levels and quality, especially during seasonal changes.</p>
            <p><strong>Disease Prevention:</strong> Maintain good water quality and manage environmental conditions to reduce the risk of diseases.</p>
          </div>
        </div>
        <div className="image-section">
          <img src={m1} alt="Climate Image " />
          <br /> <br />
          <img src={m2} alt="Climate Image " />
          <br /> <br />
          <img src={m4} alt="Climate Image " />
          <br /> <br />
          <img src={m3} alt="Climate Image " />
          <br /> <br />
          <img src={m6} alt="Climate Image " />
          <br /> <br />
          <img src={m7} alt="Climate Image " />
          
        </div>
      </div>
    </div>
  );
};

export default Weather;
