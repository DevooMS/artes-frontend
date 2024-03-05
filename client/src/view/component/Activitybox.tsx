import {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'; //Import bootstrap
import {IContentArray} from "../../model/data/Model"
interface localActivityI extends IContentArray {
  enableModify:boolean;
  index:number;
  
  handlerDelete: (id: number) => void;
  handlerMoveUp: (id: number) => void;
  handlerMoveDown: (id: number) => void;
}
class MyActivitybox extends Component<localActivityI,{}>{
  handleDelete=()=>{
    this.props.handlerDelete(this.props.index)
  }
  handleMoveUp=()=>{
    this.props.handlerMoveUp(this.props.index)
   //this.props.handleMoveUp(this.props.index)
  }
  handleMoveDown=()=>{
    this.props.handlerMoveDown(this.props.index)
   // this.props.handleMoveDown(this.props.index)
  }
  render(){
    return(
      <div className="container">  
        <div className='pb-4'>
          <div className="container">  
          <div className="bg-white">
            <div className="d-flex">
              <p className="text-primary p-1 flex-grow-1"> {this.props.activityName} </p>
            {this.props.enableModify ?
              <>
                <p className="btn text-primary p-1" onClick={this.handleMoveUp}> Su</p>
                <p className="btn text-primary p-1" onClick={this.handleMoveDown}> Giu </p>
                <p className="btn text-primary p-1" onClick={this.handleDelete}> Cancella </p>
              </>
            :null}  
            </div>
                <div className="form-outline">
                  <textarea disabled  className="form-control row-4" value= {this.props.activityDesc} id="ActivitytextArea"/>
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
export default MyActivitybox
