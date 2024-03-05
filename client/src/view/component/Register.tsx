import React, { Component } from 'react';
import MyNavbar from '../component/Navbar';
import { IUtente } from '../../model/data/Model';
import { Col, Button, Row, Container, Card, Form, Nav } from "react-bootstrap";
import { Link, } from 'react-router-dom';
import axios from 'axios';
import { user } from '../../model/data/UserModel';


class Register extends Component<IUtente,{}> {

  state = {
    username: "",
    nome: "",
    cognome: "",
    email: "",
    password: "",
    confirm_password:"",
    notification:"Inserire tutti i dati",
    error:false
  };

  handleSubmit = async (event:any) => {
    event.preventDefault();
    const { username, nome, cognome, email, password, confirm_password } = this.state;
    if (username!==" " && nome!==" " && cognome!==" " && email!==" " && password!==" " && confirm_password!==" ") {
       if(password.length > 5){
        if (password === confirm_password) {
            try {
              const data = await user.register(username,nome,cognome,email,password);
              this.setState({ notification:data.notification,error:data.error})
              console.log(data)
              if(data.error==false){
                localStorage.setItem('username',data.username);
                localStorage.setItem('session',data.session);
                window.location.href = "http://localhost:3000/View_Protocol";
              }
            } catch (error) {
              console.log(error)
              this.setState({ error: 'Invalid username or password' });
            } 
        } else {
          this.setState({ notification: "Password e Conferma Password non sono uguali",error:true});
          console.log("error")
        }
       }else{
        this.setState({ notification: "La password deve essere composta da almeno 7 caratteri",error:true});
       }
       
    } else {
      this.setState({ notification: "Perfavore inserire tutti i dati e verificare che non ci sia spazio davanti al testo",error:true });
    }
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [event.target.name]: event.target.value});
  };

 
  

  render() {
    const { username, nome, cognome, email, password, confirm_password,error } = this.state;

    return (
      <>
       <MyNavbar/>
       <div>
        <Container>
          <Row className="mt-5 d-flex justify-content-center align-items-center">
            <Col md={8} lg={6} xs={12}>
              <div className="border border-3 border-primary"></div>
              <Card className="shadow">
                <Card.Body>
                  <div className="mb-3 mt-md-4">
                    <h2 className="fw-bold mb-2 text-uppercase text-black ">Artes Register</h2>
                    <p className=" mb-4" style={{ color: error ? 'red' : 'black' }} >{this.state.notification}</p>
                    <div className="mb-2">
                      <Form  onSubmit={this.handleSubmit}>
                  
               
                         <Form.Group as={Col} controlId="formEmail">
                          <Form.Label className=' mb-3 text-black'>Email Address:</Form.Label>
                          <Form.Control 
                            type="email" 
                            name="email"
                            placeholder="Inserire email" 
                            value={email}
                            onChange={this.handleChange}
                            required
                            />
                           
                          </Form.Group>

                          <Form.Group as={Col} controlId="formUsername">
                          <Form.Label className='mb-3 mt-3 text-black'>Username: </Form.Label>
                          <Form.Control 
                            type="text" 
                            placeholder="Inserire username"
                            value={username}
                            name="username"
                            onChange={this.handleChange}
                            required

                            />
                            <Form.Control.Feedback type="invalid">
                            Please provide a valid city.
                            </Form.Control.Feedback>
                         </Form.Group>
                  

                        <Row className="mb-3 mt-3 text-black">
                          <Form.Group as={Col} controlId="formName">
                          <Form.Label>Nome:</Form.Label>
                          <Form.Control 
                            type="text" 
                            placeholder="Inserire nome"
                            value={nome}
                            name="nome"
                            onChange={this.handleChange} 
                            required 
                            />
                          </Form.Group>

                          <Form.Group as={Col} controlId="formCognome">
                          <Form.Label>Cognome:</Form.Label>
                          <Form.Control 
                            type="text" 
                            placeholder="Inserire cognome"
                            value={cognome}
                            name="cognome"
                            onChange={this.handleChange}
                            required
                             />
                         </Form.Group>
                        </Row>
              

                        <Row className="mb-3 text-black">
                          <Form.Group as={Col} controlId="formName">
                          <Form.Label>Password:</Form.Label>
                          <Form.Control 
                            type="text" 
                            placeholder="Inserire Password"
                            value={password}
                            name="password"
                            onChange={this.handleChange} 
                            required 
                            />
                          </Form.Group>

                          <Form.Group as={Col} controlId="formCognome">
                          <Form.Label>Confirm Password:</Form.Label>
                          <Form.Control 
                            type="text" 
                            placeholder="Inserire Confirm Password"
                            value={confirm_password}
                            name="confirm_password"
                            onChange={this.handleChange}
                            required
                             />
                         </Form.Group>
                        </Row>
          
                        <Form.Group
                          className="mb-3"
                          controlId="formCheckbox"
                        ></Form.Group>

                        <div className="d-grid">
                          <Button variant="primary" type="submit">
                            Registrati
                          </Button>
                      
                        </div>
                      </Form>

                      <div className="mt-3">
                        <p className="mb-0  text-center text-black">
                          Hai gia un Account?{" "}
                          <Nav.Link  className="text-black fw-bold"  as={Link} to ={'/Login'}>
                             Effetua Login!
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

export default Register;



