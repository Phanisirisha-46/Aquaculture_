import { useState } from 'react';
import './App.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom" ;
import { Link } from 'react-router-dom';
import RootLayout from './RootLayout';
import RoutingError from './components/RoutingError'; 
import Home from './components/Home/Home';
function App() {
  
  const browserRouter= createBrowserRouter([
    {
      path:'',
      element:<RootLayout/>,
      errorElement:<RoutingError/>,
      
    children:[
      {
        path:'/home',
        element:<Home/>,
      },
    ]
  }
  
  ])
  return (
    <div>
      <div className='main'>
    
        
        <RouterProvider router={browserRouter}/>
  
      </div>
      

    </div>
  )

}

export default App
