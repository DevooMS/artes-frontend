import { Component, ReactNode } from 'react';
import { Button, Col, Container, Dropdown, DropdownButton, Nav, Navbar, NavDropdown, Row, Stack } from 'react-bootstrap'
import { Routes,Link } from 'react-router-dom';
import {user} from "../../model/data/UserModel";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../css/navbar.css"
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle"
import axios from 'axios';
class MyNavbar extends Component {
    state = { 
        showElement: false,
        user:" "
       }

    componentDidMount(){
        let username = localStorage.getItem("username");
        this.setState({user: username})
        if(username){
            this.setState({showElement: true}) 
        }
    }


    userShow = () =>{
        if(this.state.showElement==true){
            return(
            <Nav className=' fw-bold'>
            <NavDropdown style={{width:'3w'}} title={this.state.user} id='my-nav'>
                <NavDropdown.Header>Account:</NavDropdown.Header>
                <NavDropdown.Item as={Link} to ={'/View_Protocol'} className='bi bi-person-circle'> Profilo</NavDropdown.Item>
                <NavDropdown.Item as={Link} to ={'/Template_protocol'} className="bi bi-sliders" > Impostazioni</NavDropdown.Item>
                <NavDropdown.Divider/>
                <NavDropdown.Item href='#' className="bi bi-box-arrow-left" onClick={this.logOut}> Esci</NavDropdown.Item>
            </NavDropdown>
            </Nav>        
            )
        }else{
            return(
            <Navbar.Text>
                <Nav.Link as={Link} to ={'/Login'}> <Navbar.Text  className='fw-bold'>Sign In Here </Navbar.Text> Login</Nav.Link>
            </Navbar.Text>
            )
        }
    }
    logOut= async() =>{
        if(this.state.user.length>0){
            localStorage.clear();
            this.setState({showElement: false});
            try {
                const data = await user.logout();
                this.setState({ notification:data.notification,error:data.error})
            } catch (error) {
                console.log(error)
            }     
        }
    }

    render(){
        const { showElement } = this.state;
        return (
            
           <Navbar className='navbar' variant='dark' bg='dark' expand='md'>
                <Container>
                    <Navbar.Brand href='#'>
                        <img
                            src='logo192.png'
                            height='30'
                            width='30'
                            className='align-top'
                            alt='logo'
                            />
                            &nbsp;
                            Artes
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id='my-nav'>
                        
                            <Nav className='me-auto fw-bold'>
                                <Nav.Link as={Link} to ={'/'}>Home</Nav.Link>
                            {showElement ?  
                                <NavDropdown style={{width:'3w'}} title='Servizi' id='my-nav'>
                                    <NavDropdown.Header>Servizi 1</NavDropdown.Header>
                                    <NavDropdown.Item as={Link} to ={'/View_Protocol'}>Vedi Protocoli</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to ={'/Template_protocol'}>Vedi Template</NavDropdown.Item>
                                    <NavDropdown.Divider/>
                                    <NavDropdown.Header>Servizi 2</NavDropdown.Header>
                                    <NavDropdown.Item href='#'>Crea Protocollo</NavDropdown.Item>
                                </NavDropdown>
                            :null
                            }
                                 <Nav.Link as={Link} to ={'/Contatti'}>Contatti</Nav.Link>
                            </Nav>
                        
                        {this.userShow()}
                        </Navbar.Collapse>
                </Container>
            </Navbar>
  
        )
    }
    
}

export default MyNavbar
