import React, { Component } from "react";
import { Modal, InputGroup, FormControl, ListGroup } from "react-bootstrap";
import {Iactivity} from '../../model/data/Model';
interface Props extends Iactivity {
  actToggleModal:()=>void;
  actMessage:(contentActivity:object)=> void;
  actModal:boolean;
  
}

interface State {
  searchActivity: string;
  selectedActivity: string | null;
}

class MyActivityModal extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      searchActivity: "",
      selectedActivity: null,
    };
    this.saveOnClick = this.saveOnClick.bind(this)
  }

  handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchActivity: event.target.value });
  };

  selectedActivity = (item: string) => {
    this.setState({ selectedActivity: item });
  };
  saveOnClick(){
    const contentActivity = this.props.activityArray
    const searchedActivity = contentActivity.find(contentActivity => contentActivity.activityName === this.state.selectedActivity);
    //console.log(typeof(searchedActivity))
    this.props.actMessage(searchedActivity!)
    this.props.actToggleModal()
  }
  render() {
    const { activityArray} = this.props;
    const { searchActivity, selectedActivity } = this.state;
    const filteredActivities = activityArray.filter((activityArray) => 
      activityArray.activityName.toLowerCase().includes(searchActivity.toLowerCase())
    );
    const filtredMap= filteredActivities.slice(0,4)
    return (
      <Modal show={this.props.actModal} onHide={this.props.actToggleModal}>
        <Modal.Header closeButton>
          <Modal.Title className="text-black">Activity List :</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search"
              value={searchActivity}
              onChange={this.handleSearchChange}
            />
          </InputGroup>
          <ListGroup>
            {filtredMap.map((activityArray) => (
              <ListGroup.Item key={activityArray.activityId}  active={selectedActivity === activityArray.activityName}
                onClick={() => this.selectedActivity(activityArray.activityName)}
              > 
              {activityArray.activityName} 
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={this.props.actToggleModal}>
            Close
          </button>
          <button className="btn btn-secondary" onClick={this.saveOnClick}>
            Save
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default MyActivityModal;