import {Component} from 'react';
import { Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';


import  Home_page  from './view/spaces/Home_page';
import  Protocol_page  from './view/spaces/Protocol_page';
import  Login_page  from './view/spaces/Login_page';
import  Contatti_page from './view/spaces/Contatti_page';

import  MyNavbar from './view/component/Navbar';
import Template_page from './view/spaces/Template_page';
import Register_page from './view/spaces/Register_page';





class App extends Component {
 

  render(){
    return ( 
        <>
       
           <BrowserRouter>
            <Routes>          
              <Route path='/' element={ <Home_page/> }/> 
              <Route path='Login' element={ <Login_page/> }/> 
              <Route path='View_Protocol' element={ <Protocol_page/> }/> 
              <Route path='Template_protocol' element={ <Template_page/> }/> 
              <Route path='Contatti' element={ <Contatti_page/> }/> 
              <Route path='Register' element={ <Register_page/> }/> 
            </Routes>
           </BrowserRouter>

        </>
    );
  }
  
}
  


export default App;
