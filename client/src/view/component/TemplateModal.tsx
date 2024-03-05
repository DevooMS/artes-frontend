import { Component } from "react";
import {Button,Modal,Form,InputGroup} from 'react-bootstrap';

interface Props {
  onModalMessage: (namep: string) => void;
  handleCloseModal: () => void;
  showModal: boolean;
}
interface State {
 // showModal: boolean;
  namep:string;
}

class TemplateModal extends Component<Props, State> {
  constructor(props:Props) {
    super(props)
    this.state = { 
        //showModal: boolean
      namep:''

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
    this.props.onModalMessage(this.state.namep);
    //this.setState({ showModal: false });
  };
  


  render() {
    const { showModal, handleCloseModal } = this.props;
    return (
      <>
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title className="text-dark" >Nome Protocolo</Modal.Title>
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
export default TemplateModal


