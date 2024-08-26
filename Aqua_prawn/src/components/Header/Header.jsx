import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
import { TiWeatherCloudy } from "react-icons/ti";
import { IoMdInformationCircle } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import logo from '../../assets/logo.jpg';

function Header() {
 
  return (
    <div className='d-flex flex-wrap justify-content-around header'>
        <img src={logo} alt="logo" className="logo-image"  />
      <h1
      className='text-dark'>AquaCulture</h1>
    <ul className='nav fs-5 p-3'>
    <li>
        <Link to="home" className='nav-link '>
        <FaHome className='fs-4 text-black'/>   Home</Link>
      </li>
        
      <li className='nav-item'>
        <Link to="weather" className='nav-link '>
        <TiWeatherCloudy className='fs-4 text-black'/>Weather</Link>
      </li>
      <li className='nav-item'>
        <Link to="news" className='nav-link '>
        <FaRegNewspaper   className='fs-4 text-black'/>News</Link>
      </li>
      <li className='nav-item'>
        <Link to="graph" className='nav-link '>
        <GoGraph className='fs-4 text-black'/>Graphs</Link>
      </li>
      <li className='nav-item'>
        <Link to="forum" className='nav-link '>
        <IoMdInformationCircle  className='fs-4 text-black'/>Community Forum</Link>
      </li>
     
    </ul>
  </div>
  )
}

export default Header