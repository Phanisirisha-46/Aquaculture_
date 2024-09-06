import React from 'react'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {Outlet } from "react-router-dom";
 import './RootLayout.css';
function RootLayout() {
  return (
    <div>
        <Header/>
          <h4 className="heading-prawn">Aquaculture - Prawn</h4>
            <div style={{minHeight:"57.5vh"}} className='container'> 
                <Outlet/>
            </div>
        <Footer/>
    </div>
  )
}

export default RootLayout