import axios from "axios";
import React, { Component } from "react";

interface Template {
  idTemplate: string;
  templateName: string;
  phase: {
    idPhase: string;
    phaseName: string;
  }[];
}

interface Props {}

interface State {
  templates: Template[];
}

class MyComponent extends Component<Props, State> {
    
  constructor(props: Props) {
    super(props);
    this.state = {
      templates: [],
    };
  }

  componentDidMount=()=> {
    var username = localStorage.getItem("username");
    var session = localStorage.getItem("session");
    axios.post('http://localhost/artes-backend/action_protocol.php', { 
      action:"getTemplate",
      username:username,
      session:session,
      }).then(response => {
        this.setState({templates:response.data})
      }).catch(error => {
      console.error("Errore",error);
      });
  }

  render() {
  
    return (
      <div>
        {this.state.templates.map((template) => (
          <div key={template.idTemplate}>
            <h2>{template.templateName}</h2>
            <ul>
              {template.phase.map((phase) => (
                <li key={phase.idPhase}>{phase.phaseName}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default MyComponent;