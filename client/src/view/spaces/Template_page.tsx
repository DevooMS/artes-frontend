import {Component} from 'react';
import MyNavbar from '../component/Navbar';
import TemplateBar from '../component/TemplateBar';
import { ITemplate } from '../../model/data/Model';
import '../css/style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { template } from '../../model/data/TemplateModel';


interface State{
  templates:ITemplate[];
}

export class TemplateList_page extends Component<{},State> {
  username = localStorage.getItem("username");
  session = localStorage.getItem("session");
  constructor(props: ITemplate) {
    super(props);
    this.state = {
      templates: [],
    };
  }
  componentDidMount= async()=> {
    try {
      const data = await template.getTemplate();
      this.setState({templates:data})
    } catch (error) {
      console.log(error)
    } 
  }

  render(){
    return ( 
        <>
          <MyNavbar/>
            <div className='container'>
              <h1 className='mt-4' >Lista Template <i className="bi bi-calendar2-plus"></i></h1>
              {this.state.templates.map((template) => (
                   <TemplateBar
                   key={template.idTemplate}
                   templateName={template.templateName}
                   idTemplate={template.idTemplate}
                   phase={template.phase}
                   session={this.session!}
                   username={this.username!}
                 /> 
              ))}
            </div>
     
        </>
      );
    }
  
}

export default TemplateList_page
