import {Component} from 'react';
import MyPhaseBar from './PhaseBar';
import ProtocolModal from './ProtocolModal';
import 'bootstrap/dist/css/bootstrap.css';
import {IProtocol} from '../../model/data/Model'
import axios, { AxiosResponse, AxiosError } from "axios";
import { protocol } from '../../model/data/ProtocolModel';
interface Props extends IProtocol{
    username:string; 
    session:string;
}
class ProtocolBar extends Component<Props> {


    state = {
        ButtonOnClick: false,
        showModal:false,
        protocolName: this.props.protocolName,
        userModify:false,
        enableModify:false,
        protocolBarSetColor:""
    };

    dbconnection(){
   
    }
    nameMessage= async (message:string)=>{
        try {
            await protocol.changeProtocolName(this.props.idProtocol,this.props.idTemplate,this.props.phase,message);
            this.setState({ protocolName: message });
            this.setState({ showModal: false });
          } catch (error) {
            console.log(error)
          } 
    }

    copyProtocol= async (message:string)=>{
        try {
          await protocol.copyProtocol(this.props.idProtocol,this.props.idTemplate,this.props.phase,message);
        } catch (error) {
          console.log(error)
        }       
    }
    onModal(){
        return(
            <ProtocolModal changeNameModal={this.nameMessage} copyProtocolModal={this.copyProtocol} username={this.props.nickname_utente!} userModify={this.state.userModify}/>
        ) 
    };
    phaseSaveOnClick= async(contentArray:any,idPhase:number,timeSet:string,phaseName:string)=>{
        for (let i = 0; i < contentArray.length; i++) {
            contentArray[i].posizione = i;
        }
        try {
          await protocol.setContentProtocol(contentArray,idPhase,timeSet,phaseName);
        } catch (error) {
          console.log(error)
        } 
    }
    componentDidMount(){
        if(this.props.username==this.props.nickname_utente){
            this.setState({userModify: true})
        }
    }

    render(){
       
        const { ButtonOnClick,showModal,enableModify,userModify } = this.state;
       
        return (
         <>
         <div className='pt-3'>
                <div className="bg-success text-white navbar-expand-md p-3">
                    <div className="container"> 
                        <div className="fw-bold">
                            <div className="navbar-expand-md">
                                    <button className={userModify? 'btn btn-success fw-bold' : 'btn btn-success fw-bold text-warning'}  
                                        onClick={() => this.setState({showModal: !showModal })} >{this.state.protocolName}
                                        <i className="p-2">[{this.props.nickname_utente}]</i>
                                    </button>{this.state.showModal && this.onModal()}    
                                   
                                    
                                <>
                                <button 
                                    onClick={() => this.setState({  ButtonOnClick: !ButtonOnClick})} 
                                    className={userModify? 'btn btn-success fw-bold float-end' : 'btn btn-success fw-bold float-end text-warning'}  >Mostra
                                </button>

                                <button disabled={!userModify}
                                    onClick={() => this.setState({ enableModify: !enableModify})} 
                                    className="btn btn-success float-end">Modifica
                                    <i className={userModify? 'mx-1 bi bi-pencil-square float-end' : 'mx-1 bi bi-pencil-square float-end text-warning'}></i>
                                </button>
                                </>
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {ButtonOnClick 
                ?   <div className="bg-white">
                        <div className="form-outline">
                     
                        {this.props.phase.map((array,index)=>
                        (   
                            <MyPhaseBar 
                            key={this.props.phase[index].idPhase}
                            idPhase={this.props.phase[index].idPhase}  
                            contentArray={this.props.phase[index].contentArray}
                            phaseName={this.props.phase[index].phaseName}
                            timeSet={this.props.phase[index].timeSet}
                            enableModify={this.state.enableModify}
                            savephase={this.phaseSaveOnClick}
                            username={this.props.username!}
                            session={this.props.session!}
                             />
                        ))
                        }
                        </div>
                     </div>
                : null
            }
           
            </>

            
        )
       
    }
    
   
}

export default ProtocolBar

/*  <ParentComponent contentArray={[{"activityid":1,"activityName":"Attivita1", "activityDesc":"attivitatesto1"},
        {"idChat":1,"chat":"testophase0"},
        {"idChat":2,"chat":"testophase0.1"}]}/>*/