import React, { useState } from 'react';
import './Weather.css';
import m1 from '../../assets/m1.png';
import m2 from '../../assets/m2.png';
import m3 from '../../assets/m3.png';
import m4 from '../../assets/m4.png';
import m6 from '../../assets/m6.png';
import m7 from '../../assets/m7.png';

const Weather = () => {
  const [conditions, setConditions] = useState({
    temperature: '',
    salinity: '',
    humidity: '',
    season: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConditions((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const getPrawnRecommendations = () => {
    const { temperature, salinity, humidity, season } = conditions;
    const recommendations = [];

    // Recommendations logic
    if (temperature >= 24 && temperature <= 30 && salinity >= 10 && salinity <= 35) {
      recommendations.push(
        'Whiteleg Shrimp',
        'Indian Prawn',
        'Banana Prawn',
        'Tiger Prawn',
        'Black Tiger Shrimp'
      );
    }
    if (temperature >= 22 && temperature <= 28 && salinity < 10) {
      recommendations.push('Freshwater Prawn', 'Speckled Shrimp');
    }
    if (humidity === 'high' && season === 'monsoon') {
      recommendations.push('Giant River Prawn', 'Pink Shrimp');
    }
    if (season === 'dry') {
      recommendations.push(
        'Whiteleg Shrimp',
        'Indian Prawn',
        'Black Tiger Shrimp',
        'Pink Shrimp'
      );
    }
    if (temperature > 30 && salinity < 10) {
      recommendations.push('Banana Prawn', 'Speckled Shrimp');
    }

    return [...new Set(recommendations)]; // Remove duplicates
  };

  return (
    <div className="weather-container">
      <h1>Climate Information for Prawn Lakes in Machilipatnam</h1>
      <div className="flex-container">
        <div className="text-section">
          <div className="climate-detail">
            <h2 className="name">Temperature</h2>
            <p><strong>Optimal Range:</strong> 24°C to 30°C (75°F to 86°F)</p>
            <p><strong>Impact:</strong> Prawns thrive in warm water within this range. Extreme temperatures can affect their growth and health.</p>
            <label>
              <strong>Enter Temperature (°C):</strong>
              <input
                type="number"
                name="temperature"
                value={conditions.temperature}
                onChange={handleChange}
                placeholder="e.g., 25"
              />
            </label>
          </div>

          <div className="climate-detail">
            <h2 className="name">Salinity</h2>
            <p><strong>Optimal Range:</strong> 10 to 35 ppt (parts per thousand)</p>
            <p><strong>Impact:</strong> Salinity levels are crucial for prawns; they should be monitored and maintained within this range to ensure healthy growth.</p>
            <label>
              <strong>Enter Salinity (ppt):</strong>
              <input
                type="number"
                name="salinity"
                value={conditions.salinity}
                onChange={handleChange}
                placeholder="e.g., 15"
              />
            </label>
          </div>

          <div className="climate-detail">
            <h2 className="name">Humidity</h2>
            <p><strong>Impact:</strong> High humidity levels can influence water quality and management practices. Proper aeration and water management are essential to maintain optimal conditions.</p>
            <label>
              <strong>Select Humidity Level:</strong>
              <select name="humidity" value={conditions.humidity} onChange={handleChange}>
                <option value="">Select</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </label>
          </div>

          <div className="climate-detail">
            <h2 className="name">Seasonal Variations</h2>
            <p><strong>Monsoon Season:</strong> Heavy rains during the monsoon season can impact salinity and water quality, necessitating careful monitoring and adjustments.</p>
            <p><strong>Dry Season:</strong> Lower rainfall and higher temperatures can increase water evaporation, requiring additional water management measures.</p>
            <label>
              <strong>Select Season:</strong>
              <select name="season" value={conditions.season} onChange={handleChange}>
                <option value="">Select</option>
                <option value="monsoon">Monsoon</option>
                <option value="dry">Dry</option>
              </select>
            </label>
          </div>

          <div className="climate-detail">
            <h2 className="name">Recommendations</h2>
            <ul>
              {getPrawnRecommendations().length > 0 ? (
                getPrawnRecommendations().map((prawn, index) => <li key={index}>{prawn}</li>)
              ) : (
                <li>No suitable prawns for the entered conditions.</li>
              )}
            </ul>
          </div>
        </div>

        <div className="image-section">
          <img src={m1} alt="Climate Image " />
          <br /> 
          <br /> 
          <img src={m2} alt="Climate Image " />
          <br />  <br /> 
          <img src={m4} alt="Climate Image " />
          <br />  <br /> 
          <img src={m3} alt="Climate Image " />
          <br />  <br /> 
          <img src={m6} alt="Climate Image " />
          <br />  <br /> 
          <img src={m7} alt="Climate Image " />
        </div>
      </div>
    </div>
  );
};

export default Weather;
