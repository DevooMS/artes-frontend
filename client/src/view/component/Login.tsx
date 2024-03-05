import React, {Component} from 'react';
import { IUtente } from '../../model/data/Model';
import { Col, Button, Row, Container, Card, Form, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import axios from 'axios';
import {user} from "../../model/data/UserModel";
import { rejects } from 'assert';


export class Login extends Component<IUtente,{}> {
  constructor(props:IUtente) {
    super(props);
   /* alert("rimuovere la linea 16 in Login_page.tsx!!")
    localStorage.setItem('username',"User123");*/
  }
  state = {
    error:false,
    email: "",
    utente:"",
    password: "",
    notification:"Inserire Email e Password"
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [event.target.name]: event.target.value});
  };

  handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const data = await user.login(this.state.email,this.state.password);
      this.setState({ notification:data.notification,error:data.error})
      console.log(data)
      if(data.error==false){
        localStorage.setItem('username',data.username);
        localStorage.setItem('session',data.session);
        window.location.href = "http://localhost:3000/View_Protocol";
      }
    } catch (error) {
      console.log(error)
    } 
       
  };

  render() {
    const {email,password,error}=this.state;
    return (
      <>
      
       <div>
        <Container>
          <Row className="mt-5 d-flex justify-content-center align-items-center">
            <Col md={8} lg={6} xs={12}>
              <div className="border border-3 border-primary"></div>
              <Card className="shadow">
                <Card.Body>
                  <div className="mb-3 mt-md-4">
                    <h2 className="fw-bold mb-2 text-uppercase text-black ">Artes Login</h2>
                    <p className=" mb-4 " style={{ color: error ? 'red' : 'black' }} >{this.state.notification}</p>
                    <div className="mb-2">
                      <Form onSubmit={this.handleSubmit}>
                        <Form.Group className="mb-3" controlId="formEmail">
                          <Form.Label className="text-center text-black">
                            Email address :
                          </Form.Label>
                          <Form.Control 
                          type="email" 
                          name="email"
                          value={email}
                          onChange={this.handleChange}
                          placeholder="Enter email" />
                        </Form.Group>
  
                        <Form.Group
                          className="mb-3"
                          controlId="formPassword"
                        >
                          <Form.Label className='text-black'>Password :</Form.Label>
                          <Form.Control 
                          type="password" 
                          placeholder="Password" 
                          value={password}
                          name="password"
                          onChange={this.handleChange}
                          required/>
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formCheckbox"
                        >
                        </Form.Group>
                        <div className="d-grid">
                          <Button variant="primary" type="submit">
                            Login
                          </Button>
                        </div>
                      </Form>
                      <div className="mt-3">
                        <p className="mb-0  text-center text-black">
                          Non hai un Account?{" "}
                          <Nav.Link  className="text-black fw-bold"  as={Link} to ={'/Register'}>
                             Crea un Account!
                          </Nav.Link >
                        </p>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
       </>
      
    );
  }
}
  export default Login
  