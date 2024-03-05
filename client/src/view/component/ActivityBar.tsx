import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'; //Import bootstrap
import 'bootstrap/dist/js/bootstrap';


class MyActivityBar extends Component{
   
    render(){
        return(
            <div className='d-flex justify-content-between'>
                <div className='container'>
                <div className="dropdown">
                        <button className="btn bg-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown button
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>     
                </div>
            </div>
        )
    }
}
export default MyActivityBar