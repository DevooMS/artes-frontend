import 'bootstrap/dist/css/bootstrap.css';
import { Component } from 'react';
import { IPhase } from '../../model/data/Model';
import MyChatbox from './Chatbox'
import MyActivityBox from './Activitybox';
import MyActivityModal from './ActivityModal';
import TimeModal from './TimeModal';
import axios from 'axios';
import { protocol } from '../../model/data/ProtocolModel';

interface Ilocalphase extends IPhase{
    savephase: (value:object,idPhase:number,timeSet:string,phaseName:string) => void;
    indexChat?:number;
    actModal?:boolean;
    contentIndex?:number;
    enableModify:boolean;
    username:string;
    session:string;

}

class MyPhaseBar extends Component<Ilocalphase,{}> {
    
    constructor(props:Ilocalphase){
        super(props)
        
        
    }
    state = {   
        timeSet:this.props.timeSet,
        ButtonOnClick: false,
        contentArray:this.props.contentArray,
        activityArray:[],
        newChatBox: '',
        indexChat:'',
        contentIndex:0,
        actModal:false,

       
    };

    getActivity= async()=>{
        try {
            const data = await protocol.getActivity();
            this.setState({activityArray:data})
        } catch (error) {
            console.log(error)
        }      
    }

    getLength =(index:number)=>{
        this.setState({ contentIndex: index });
    }
    

    chatBoxValue =(id:number,value:string)=>{
        console.log(id)
        const updatedContentArray = this.state.contentArray.map(chatbox => {
            if (chatbox.idChat === id) {
            return { ...chatbox, chat: value };
            }
            return chatbox;
        });
        this.setState({ contentArray: updatedContentArray });
    
    }

    modalMessage=(message:string)=>{
        this.setState({ timeSet: message });
        //console.log('Message from child:', this.state.timeSet);
    }    

   
    deleteOnClick=(index: number)=> {
        const newContentArray = [...this.state.contentArray];
        newContentArray.splice(index, 1);
        this.setState({ contentArray: newContentArray });
      
       
    }
     
    moveUp=(index: number)=> {
        
        if (index > 0) {
          const newContentArray = [...this.state.contentArray];
          const temp = newContentArray[index];
          newContentArray[index] = newContentArray[index - 1];
          newContentArray[index - 1] = temp;
          this.setState({ contentArray: newContentArray });
        }
    }
    
    moveDown=(index: number)=>  {
       
        if (index < this.state.contentArray.length - 1) {
          const newContentArray = [...this.state.contentArray];
          const temp = newContentArray[index];
          newContentArray[index] = newContentArray[index + 1];
          newContentArray[index + 1] = temp;
          console.log(newContentArray)
          this.setState({ contentArray: newContentArray });
        }
       
    }

    addActivity = () => {
        this.getActivity();
        this.setState({ actModal: !this.state.actModal });
    };
    
    addChatbox = () => {
        const { contentArray } = this.state;
        const newContentArray = [...contentArray, { chat:'' ,idCchat:contentArray.length}];
        this.setState({ contentArray: newContentArray });
    };


    saveOnClick=()=> {
      
        this.props.savephase(this.state.contentArray,this.props.idPhase,this.state.timeSet,this.props.phaseName)
    }

    actMessage=(actContent:any)=>{
        const activities = [actContent]
        const activityId = activities.map(activity => activity.activityId);
        const activityName = activities.map(activity => activity.activityName);
        const activityDesc = activities.map(activity => activity.activityDesc);
        const { contentArray } = this.state;
        const newContentArray = [...contentArray, { activityName:activityName[0],activityId:activityId[0],activityDesc:activityDesc[0]}];
        console.log("newContentArray",newContentArray)
        this.setState({ contentArray: newContentArray });
    }

   


    render(){
        return (
       <div className='py-3'>
            <div className="bg-success text-white p-2 mx-4">
                <div className="container"> 
                    <div className=" fw-bold d-flex justify-content-between">
                        <div className="d-flex align-items-center">{this.props.phaseName}</div>
                        <div className="d-flex align-items-center">{this.state.timeSet}  
                        
                        {this.props.enableModify ?
                            <TimeModal onModalMessage={this.modalMessage}/>
                        :null}
                        </div>
                        <button onClick={() => this.setState({ ButtonOnClick: !this.state.ButtonOnClick })} 
                                className="btn btn-success justify-content-end">Mostra
                        </button>
                    </div>

                {this.state.ButtonOnClick ?   
                            <li className="bg-white">
                            <div className="form-outline">
                            {this.state.contentArray.map((item, index) => (
                                <div key={index}>
                                {item.activityName ? (
                                <MyActivityBox
                                    index={index}
                                    enableModify={this.props.enableModify}
                                    activityName={item.activityName}
                                    activityDesc={item.activityDesc!}
                                    handlerDelete={this.deleteOnClick}
                                    handlerMoveUp={this.moveUp}
                                    handlerMoveDown={this.moveDown}
                                    
                                />
                            ):(
                                <MyChatbox 
                                    idChat={item.idChat!} 
                                    index={index}
                                    chat={item.chat!} 
                                    enableModify={this.props.enableModify}
                                    handlerDelete={this.deleteOnClick}
                                    handlerMoveUp={this.moveUp}
                                    handlerMoveDown={this.moveDown}
                                    boxstate={this.chatBoxValue}
                                />
                            )}
                            </div>
                            ))}  
                            </div>
                            <div className='bg-success text-white navbar-expand-md p-2'>
                                <div>
                                {this.props.enableModify ?
                                   <>
                                   <button onClick={this.addChatbox} type="button" className="btn btn-outline-light m-1">Aggiungi Chatbox</button>
                                   <button onClick={this.addActivity} type="button" className="btn btn-outline-light m-1">Aggiungi Activity</button>
                                   <MyActivityModal actModal={this.state.actModal} actToggleModal={this.addActivity} activityArray={this.state.activityArray} actMessage={this.actMessage}/>
                                   <button  onClick={this.saveOnClick} type="button" className="btn btn-outline-light float-end">Salva</button>
                                   </>
                                :null}    
                                </div>
                            </div>
                        </li>
                    : null
                } 
                </div>
            </div>
        </div>
        )
       
    }
   
}

export default MyPhaseBar
