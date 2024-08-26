import React from 'react';
import './News.css'; 
import m1 from '../../assets/n1.png'; 
import m2 from '../../assets/n2.png'; 
import m3 from '../../assets/n3.png';


const News = () => {
  return (
    <div className="news-grid">
      <div className="news-card">
        <img src="https://images.thefishsite.com/fish/articles/Shrimp/closeup-of-white-spot-syndrome-virus-shrimp-credit-genics.jpg?width=2680&height=0" alt="Prawn News 1" />
        <div className="news-content">
          <h2>Disease Outbreaks</h2>
          <p><strong>Recent Issue:</strong> White Spot Syndrome Virus (WSSV) has been reported in several prawn farms, causing significant losses.</p>
          <p><strong>Prevention:</strong> Implement biosecurity measures and use disease-free larvae. Regularly monitor water quality and maintain proper farm management.</p>
        </div>
      </div>
      <div className="news-card">
        <img src="https://www.nutraingredients-usa.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/nutraingredients-usa.com/article/2020/12/21/probiotics-for-immunity-online-reviews-surged-26-in-first-half-of-2020/12053580-1-eng-GB/Probiotics-for-immunity-Online-reviews-surged-26-in-first-half-of-2020.jpg" alt="Prawn News 2" />
        <div className="news-content">
          <h2>Effective Remedies</h2>
          <p><strong>New Treatment:</strong> Recent studies have shown that certain probiotics can help mitigate the impact of Vibrio infections in prawns.</p>
          <p><strong>Application:</strong> Probiotics should be introduced into the water system as part of a comprehensive disease management plan.</p>
        </div>
      </div>
      <div className="news-card">
        <img src="https://i.ytimg.com/vi/XR9VWvIRQ3Q/maxresdefault.jpg" alt="Prawn News 3" />
        <div className="news-content">
          <h2>Mortality Reports</h2>
          <p><strong>Recent Data:</strong> There has been an increase in prawn mortality rates due to environmental stress and disease outbreaks.</p>
          <p><strong>Recommendations:</strong> Improve water management practices and invest in advanced monitoring systems to detect issues early.</p>
        </div>
      </div>
      <div className="news-card">
      <img src={m1} alt="Prawn News 4" />
      <div className="news-content">
      <h2>Price Increase Alert</h2>
          <p><strong>Recent Trend:</strong> Prices of prawns have significantly increased due to supply chain disruptions and higher demand.</p>
          <p><strong>Impact:</strong> The rise in prices affects both consumers and the prawn farming industry. It is crucial to monitor market trends and adjust pricing strategies accordingly.</p>
      </div>
        </div>
      <div className="news-card">
        <img src={m2} alt="Prawn News 5" />
      </div>
      <div className="news-card">
        <img src={m3} alt="Prawn News 6" />
        <div className="news-content">
          <h2>Price Drop Alert</h2>
          <p><strong>Recent Trend:</strong> Prices of prawns have recently dropped due to an oversupply in the market and reduced demand.</p>
          <p><strong>Impact:</strong> The decrease in prices benefits consumers but can challenge prawn farmers and suppliers. It may affect their revenue and market strategies.</p>
        </div>
      </div>
    </div>
  );
};

export default News;
