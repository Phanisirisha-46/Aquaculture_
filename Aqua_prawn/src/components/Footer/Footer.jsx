import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'
import { MdContactPhone } from "react-icons/md";
import { TfiGallery } from "react-icons/tfi";
import { MdOutlinePlace } from "react-icons/md";
function Footer() {
 
  return (
    <div className='d-flex flex-wrap justify-content-around header'>
    <ul className='nav fs-5 p-3'>
    <li className='nav-item'>
        <Link to="https://fisheries.ap.gov.in/" className='nav-link '>
        <MdContactPhone  className='fs-4 text-black'/>   Contact Details</Link>
      </li>
        
      
    
      <li className='nav-item'>
        <Link to="aboutus" className='nav-link '>
        <TfiGallery  className='fs-4 text-black'/>Gallery</Link>
      </li>
      <li className='nav-item'>
        <Link to="https://maps.app.goo.gl/f5hxZp5iHz5ssNWt5" className='nav-link '>
        <MdOutlinePlace className='fs-4 text-black'/>Venue : Machilipatnam AquaCulture</Link>
      </li>
     
    </ul>
  </div>
  )
}

export default Footer