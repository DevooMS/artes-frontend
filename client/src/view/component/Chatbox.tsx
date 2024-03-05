import {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'; //Import bootstrap
import {IContentArray} from "../../model/data/Model"
interface IlocalContent extends IContentArray{
  boxstate: (id: number,value: string) => void;


  handlerDelete: (id: number) => void;
  handlerMoveUp: (id: number) => void;
  handlerMoveDown: (id: number) => void;
  index:number;
  enableModify:boolean;
}

class MyChatbox extends Component<IlocalContent,{}>{
  constructor(props:IlocalContent){
    super(props);
  }

  changeHandler= (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const updateChat = event.target.value
    const indexChat = this.props.idChat
    this.setState({ chat: updateChat});
    this.props.boxstate(indexChat!,updateChat)

  }
  handleDelete=()=>{
       this.props.handlerDelete(this.props.index)
   }
  handleMoveUp=()=>{
       this.props.handlerMoveUp(this.props.index)
   }
  handleMoveDown=()=>{
       this.props.handlerMoveDown(this.props.index)
   }

 
  render(){
    return(
      <div className="container">  
        <div className='pb-4'>
          <div className="container">  
          <div className="bg-white">
            <div className="d-flex">
              <p className="text-primary p-1 flex-grow-1"> Chatbox </p>
            {this.props.enableModify?
            <>  
              <p className="btn text-primary p-1" onClick={this.handleMoveUp}> Su</p>
              <p className="btn text-primary p-1" onClick={this.handleMoveDown}> Giu </p>
              <p className="btn text-primary p-1" onClick={this.handleDelete}> Cancella </p>
            </>
             :null} 
            </div>
                <div className="form-outline">
                  <textarea className="form-control row-4" value={this.props.chat} id="BoxtextArea" placeholder='Insert text' onChange={this.changeHandler} disabled={!this.props.enableModify}/>
                <div className="form-notch">
                    <div className="form-notch-leading w-"></div>
                    <div className="form-notch-middle"></div>  
                <div className="form-notch-trailing"></div></div></div>
            </div>
          </div>
        </div>   
      </div>
  
      )
  }
}
export default MyChatbox
