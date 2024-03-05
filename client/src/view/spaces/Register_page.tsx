import React, {Component} from 'react';
import MyNavbar from '../component/Navbar';
import Register from '../component/Register';


//import {AiFillPlusCircle} from "react-icons/ai";


export class Home_page extends Component {

 
  render(){
   
    return ( 
      <>
        <MyNavbar/>
        <Register/>
      </>
    );
  }
  
}

export default Home_page 