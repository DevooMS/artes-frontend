import {Component} from 'react';
import TemplateModal from './TemplateModal';
import 'bootstrap/dist/css/bootstrap.css';
import { ITemplate } from '../../model/data/Model';
import axios from 'axios';
import { template } from '../../model/data/TemplateModel';
interface Props extends ITemplate {
    username:string; 
    session:string;
}
class TemplateBar extends Component<Props> {

    constructor(props:Props) {
        super(props);  
    }   
    
    state = {
        ButtonOnClick: false,
        showModal:false,
        protocolName: this.props.templateName
    };

    modalMessage= async(message:string)=>{ 
        try {
            const data = await template.setContentProtocol(this.props.idTemplate,message);
            this.setState({ showModal: false });
            window.location.href = "http://localhost:3000/View_Protocol";
          } catch (error) {
            console.log(error)
          }
    }



    handleShowModal = () => {
        this.setState({ showModal: true });
    };
    
    handleCloseModal = () => {
        this.setState({ showModal: false });
    };

    render(){
        
        const { ButtonOnClick,showModal } = this.state;
        const phase_size=this.props.phase.length 
        return (
         <>

         <div className='pt-3'>
                <div className="bg-success text-white navbar-expand-md p-3">
                    <div className="container"> 
                        <div className="fw-bold">
                        <div className="navbar-expand-md">
                            <button className="btn btn-success fw-bold"  onClick={() => this.setState({showModal: !showModal })} >
                                {this.state.protocolName}
                            </button>
                            <button 
                                onClick={() => this.setState({showModal: !showModal })}
                                className="btn btn-success float-end">Copia
                            </button>
                            <button 
                                className="btn btn-success float-end">[FASI: {phase_size}]
                            </button>
                           
                            <TemplateModal  
                            showModal={this.state.showModal}
                            handleCloseModal={this.handleCloseModal}
                            onModalMessage={this.modalMessage}/>
                        </div>
        
                        </div>
                    </div>
                </div>
            </div>
          
            </>

            
        )
       
    }
    
   
}

export default TemplateBar
