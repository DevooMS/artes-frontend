import React, {Component} from 'react';
import MyNavbar from '../component/Navbar';
import Login from '../component/Login';


//import {AiFillPlusCircle} from "react-icons/ai";


export class Home_page extends Component {

 
  render(){
   
    return ( 
      <>
        <MyNavbar/>
        <Login/>
      </>
    );
  }
  
}

export default Home_page 