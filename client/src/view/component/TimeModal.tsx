import { Component } from "react";
import {Button,Modal,Form,InputGroup} from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
interface Props {
  onModalMessage: (timeSet: string) => void;
}
interface State {
  showModal:boolean;
  timeSet:string;
}



class TimeModal extends Component<Props, State> {
  constructor(props:Props) {
    super(props)
    this.state = { 
      showModal: false,
      timeSet:'',
     }
     this.inputHandler = this.inputHandler.bind(this);
     this.saveHandler = this.saveHandler.bind(this);
  }

  inputHandler(event: React.ChangeEvent<HTMLInputElement>){
 
    //console.log(typeof(event.target.value ))
    //console.log(event.target.value)
    this.setState({ timeSet: event.target.value});
  }
  saveHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submitted time:', this.state.timeSet);
    this.props.onModalMessage(this.state.timeSet);
    this.setState({ showModal: false });
  };
  
  handleShow = () => {
    this.setState({ showModal: true });
  };

  handleClose = () => {
    this.setState({ showModal: false });
  };

 

  renderModal() {

    return (
      <>
        <Modal show={this.state.showModal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="text-dark" >Aggiungi Tempo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.saveHandler}>
              <InputGroup hasValidation>
                  <InputGroup.Text>Tempo</InputGroup.Text>
                  <Form.Control placeholder="Per favore inserire tempo" type="text" onChange={this.inputHandler} required isInvalid />
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

  render() {
   
    return (

      <> 
        <i className="bi bi-clock-history mx-1" onClick={() => this.setState({showModal: true})} ></i>{this.state.showModal && this.renderModal()}
      </>
       
    );
  }
}    
export default TimeModal


/*<button className="btn btn-outline-light m-1" onClick={() => this.setState({showModal: true})}>
        Aggiungi Tempo
        </button>{this.state.showModal && this.renderModal()}*/
