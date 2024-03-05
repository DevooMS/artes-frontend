import React, {Component} from 'react';
import MyNavbar from '../component/Navbar';



//import {AiFillPlusCircle} from "react-icons/ai";


export class Home_page extends Component {

 
  render(){
   
    return ( 
      <>
        <MyNavbar/>
     
        <div className='container'>HOME PAGE</div>
      </>
    );
  }
  
}

export default Home_page 