import React from 'react';
import './Home.css';
// Import images
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import img4 from '../../assets/img4.png';
import img5 from '../../assets/img5.png';
import img6 from '../../assets/img6.png';
import img7 from '../../assets/img7.png';
import img8 from '../../assets/img8.png';
import img9 from '../../assets/img9.png';

const prawns = [
  {
    name: "Whiteleg Shrimp",
    scientificName: "Penaeus vannamei",
    placeFound: "Pacific coast of Central and South America, farmed in Machilipatnam",
    image: img1,
    link: "prawn1"
  },
  {
    name: "Indian Prawn",
    scientificName: "Penaeus indicus",
    placeFound: "Indian Ocean, Red Sea, Persian Gulf, also found in Machilipatnam",
    image: img2,
    link: "prawn2"
  },
  {
    name: "Banana Prawn",
    scientificName: "Penaeus merguiensis",
    placeFound: "Indo-West Pacific, Australia, Southeast Asia, occasionally in Machilipatnam",
    image: img3,
    link: "prawn3"
  },
  {
    name: "Tiger Prawn",
    scientificName: "Penaeus semisulcatus",
    placeFound: "Indo-Pacific region, including Machilipatnam",
    image: img4,
    link: "prawn4"
  },
  {
    name: "Giant River Prawn",
    scientificName: "Macrobrachium rosenbergii",
    placeFound: "Southeast Asia, including Machilipatnam",
    image: img5,
    link: "prawn5"
  },
  {
    name: "Freshwater Prawn",
    scientificName: "Macrobrachium malcolmsonii",
    placeFound: "Freshwater and brackish waters in Southeast Asia, including Machilipatnam",
    image: img6,
    link: "prawn6"
  },
  {
    name: "Black Tiger Shrimp",
    scientificName: "Penaeus monodon",
    placeFound: "Coastal regions of the Indo-Pacific, including Machilipatnam",
    image: img7, 
    link: "prawn7"
  },
  {
    name: "Speckled Shrimp",
    scientificName: "Metapenaeus monoceros",
    placeFound: "Indian Ocean and western Pacific, including Machilipatnam",
    image: img8,  
    link: "prawn8"
  },
  {
    name: "Pink Shrimp",
    scientificName: "Metapenaeus dobsoni",
    placeFound: "Coastal waters of the Indian Ocean, including Machilipatnam",
    image: img9,  
    link: "prawn9"
  }
];

const Home = () => {
  return (
    <div className="prawn-grid">
      {prawns.map((prawn, index) => (
        <div className="prawn-card" key={index}>
          <img src={prawn.image} alt={prawn.name} className="prawn-image" />
          <h3 className='naming'>{prawn.name}</h3>
          <p><strong>Scientific Name:</strong> {prawn.scientificName}</p>
          <p><strong>Place Found:</strong> {prawn.placeFound}</p>
          <a href={prawn.link} target="_blank" rel="reference" className="prawn-button">
            Learn More
          </a>
        </div>
      ))}
    </div>
  );
};

export default Home;
