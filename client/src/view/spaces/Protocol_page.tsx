import React, {Component} from 'react';
import MyNavbar from '../component/Navbar';
import ProtocolBar from '../component/ProtocolBar';
import '../css/style.css';
import { IProtocol } from '../../model/data/Model';
import { protocol } from '../../model/data/ProtocolModel';
interface State{
  protocols:IProtocol[];
}

export class Protocol_page extends Component<{},State> {
  username = localStorage.getItem("username");
  session = localStorage.getItem("session");
  constructor(props: State) {
    super(props);
    this.state = {
      protocols: [],
    };
  }
  componentDidMount= async()=> {
      try {
        const data = await protocol.getProtocol();
        console.log("getProtocol",data)
        this.setState({protocols:data})
  
      } catch (error) {
        console.log(error)
      } 
  }
  

  render(){
    return ( 
        <>
          <MyNavbar/>
            <div className='container'>
              <h1 className='mt-4' >Vedi Protocolo <i className="bi bi-binoculars"></i></h1>
             
                {this.state.protocols.map((array, index) => 
                    (
                    <ProtocolBar 
                      key={array.idProtocol}
                      protocolName={array.protocolName}
                      phase={array.phase}
                      idProtocol={array.idProtocol}
                      nickname_utente={array.nickname_utente}
                      idTemplate={array.idTemplate}
                      session={this.session!}
                      username={this.username!}
                    />       
                    ))
                }
              
            </div>
     
        </>
      );
    }
  
}

export default Protocol_page

