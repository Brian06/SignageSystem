import React from 'react';
import { browserHistory } from 'react-router';
import { FormGroup, FormControl, Button, Panel, ControlLabel } from 'react-bootstrap';

const wellStyles = { maxWidth: 400, margin: '0 auto 10px', marginTop:'5%' };
const mainPanelStyles = { background:'#A9BCF5', height:'80%' };
const projectNameStyles = { textAlign: 'center', textTransform: 'uppercase', fontWeight:'bold' };


class Edit extends React.Component {

  constructor(props){
    super(props);
    this.state = { logo: '', clientDescription: '', projectDescription: ''};
    this.onChange = this.onChange.bind(this);
    this.saveData = this.saveData.bind(this);
  }

  onChange(e){
    this.setState({ [e.target.name]: e.target.value });
  }

  componentWillMount(){
      this.setState({logo:"./images/sa.jpg", clientDescription: "Client Description Client Description Client Description", projectDescription:"Project Description Project Description Project Description"});
  }

  saveData(e){
    e.preventDefault();
    console.log(this.state.logo);
    console.log(this.state.clientDescription);
    console.log(this.state.projectDescription);
  }



  render() {
    const nombre = (<h1 style={projectNameStyles}>Edit Project</h1>);
    return (
      <div>
        <Panel header={nombre} bsStyle="primary" style={mainPanelStyles}>
          <div className="well" style={wellStyles}>
            <form>
              <FormGroup>
                <ControlLabel>Customer Logo:</ControlLabel>
                <FormControl type="text" placeholder="Logo" name="logo" value={this.state.logo} onChange={this.onChange}/>
              </FormGroup>
              <FormGroup controlId="formControlsTextarea">
                <ControlLabel>Client Description:</ControlLabel>
                <FormControl componentClass="textarea" placeholder="Client Description" name="clientDescription" value={this.state.clientDescription} onChange={this.onChange}/>
              </FormGroup>
              <FormGroup controlId="formControlsTextarea">
                <ControlLabel>Project Description:</ControlLabel>
                <FormControl componentClass="textarea" placeholder="Project Description" name="projectDescription" value={this.state.projectDescription} onChange={this.onChange}/>
              </FormGroup>
              <Button bsStyle="info" bsSize="small" onClick={this.saveData}>Save</Button>
              <Button bsStyle="info" bsSize="small" onClick={browserHistory.goBack}>Back</Button>
            </form>
          </div>
        </Panel>
      </div>
    );
  }
}


export default Edit;
