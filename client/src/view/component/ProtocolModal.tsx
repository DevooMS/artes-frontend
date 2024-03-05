import { Component } from "react";
import {Button,Modal,Form,InputGroup} from 'react-bootstrap';

interface Props {
  copyProtocolModal: (namep: string) => void;
  changeNameModal: (namep: string) => void;
  username:string
  userModify:boolean
}
interface State {
  showModal:boolean;
  namep:string;
  titleName:string;
}

class ProtocolModal extends Component<Props, State> {
  username = localStorage.getItem("username");
  constructor(props:Props) {
    super(props)
    this.state = { 
      titleName:"",
      showModal: false,
      namep:'',

      
     }
     this.inputHandler = this.inputHandler.bind(this);
     this.saveHandler = this.saveHandler.bind(this);
  }

  inputHandler(event: React.ChangeEvent<HTMLInputElement>){
 
    //console.log(typeof(event.target.value ))
    //console.log(event.target.value)
    this.setState({ namep: event.target.value});
  }
  saveHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submitted name:', this.state.namep);
    if(this.props.userModify==true){
      this.props.changeNameModal(this.state.namep);
    }else{
      this.props.copyProtocolModal(this.state.namep);
    }
    
    
    this.setState({ showModal: false });
    
  };
  
  handleShow = () => {
    this.setState({ showModal: true });
  };

  handleClose = () => {
    this.setState({ showModal: false });
  };


  copyProtocolModal=()=> {
    this.setState({titleName: "Copia Protocollo"});
    this.setState({showModal: true})
  }
  changeNameModal=()=> {
    this.setState({titleName: "Rinomina Protocollo"});
    this.setState({showModal: true})
  }



  render() {
    return (
        <> 
        {this.props.userModify ? (
         <> <button className="btn btn-success" onClick={this.changeNameModal}>
         Modifica
        </button></>

        ) : (
        <><button className="btn btn-success text-warning" onClick={this.copyProtocolModal}>
          Copia
        </button></>
        )}
          <Modal show={this.state.showModal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="text-dark" >{this.state.titleName}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.saveHandler}>
              <InputGroup hasValidation>
                  <InputGroup.Text>Nome</InputGroup.Text>
                  <Form.Control placeholder="Per favore inserire nome" type="text" onChange={this.inputHandler} required isInvalid />
                  <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </InputGroup>
                <Button className="float-end" variant="primary" type="submit">
                  Invia
                </Button>
            </Form>
          </Modal.Body>
        </Modal>        
        </>
          
       
    );
  }
}    
export default ProtocolModal


