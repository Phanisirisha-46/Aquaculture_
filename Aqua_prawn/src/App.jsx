import { useState } from 'react';
import './App.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom" ;
import { Link } from 'react-router-dom';
import RootLayout from './RootLayout';
import RoutingError from './components/RoutingError'; 
import Home from './components/Home/Home';
import Prawn1 from './components/Prawns_types/Prawn1'
import Prawn2 from './components/Prawns_types/Prawn2';
import Prawn3 from './components/Prawns_types/Prawn3';
import Prawn4 from './components/Prawns_types/Prawn4';
import Prawn5 from './components/Prawns_types/Prawn5';
import Prawn6 from './components/Prawns_types/Prawn6';
import Prawn7 from './components/Prawns_types/Prawn7';
import Prawn8 from './components/Prawns_types/Prawn8';
import Prawn9 from './components/Prawns_types/Prawn9';
import Weather from './components/Weather/Weather';
import News from './components/News/News';
import Graph from './components/Graph/Graph';
import Forum from './components/Forum/Forum';
import Gallery from './components/Gallery/Gallery';

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
      {
        path:'/prawn1',
        element:<Prawn1/>,
      },
      {
        path:'/prawn2',
        element:<Prawn2/>,
      },
      {
        path:'/prawn3',
        element:<Prawn3/>,
      },
      {
        path:'/prawn4',
        element:<Prawn4/>,
      },
      {
        path:'/prawn5',
        element:<Prawn5/>,
      },
      {
        path:'/prawn6',
        element:<Prawn6/>,
      },
      {
        path:'/prawn7',
        element:<Prawn7/>,
      },
      {
        path:'/prawn8',
        element:<Prawn8/>,
      },
      {
        path:'/prawn9',
        element:<Prawn9/>,
      },
      {
        path:'/weather',
        element:<Weather/>,
      },
      {
        path:'/news',
        element:<News/>,
      },
      {
        path:'/graph',
        element:<Graph/>,
      },
      {
        path:'/forum',
        element:<Forum/>,
      },
      {
        path:'/gallery',
        element:<Gallery/>,
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
