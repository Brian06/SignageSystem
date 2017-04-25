import React from 'react';
import { browserHistory } from 'react-router';
import { FormGroup, FormControl, Button, Panel, ControlLabel } from 'react-bootstrap';
import axios from 'axios'

const wellStyles = { maxWidth: 400, margin: '0 auto 10px', marginTop:'5%' };
const mainPanelStyles = { background:'#A9BCF5', height:'80%' };
const projectNameStyles = { textAlign: 'center', textTransform: 'uppercase', fontWeight:'bold' };

class Rotation extends React.Component {

  constructor(props){
    super(props);
    this.state = { seconds: '', projects: '' };
    this.onChange = this.onChange.bind(this);
    this.saveData = this.saveData.bind(this);

    this.setData = () => {
          this.setState(this.state);
          axios
          .get("http://localhost:3000/panel/rotationdata")
          .then(res => {
              this.setState({ seconds: res.data.seconds,
                              projects: res.data.projectsforPage })
          })
          .catch(err => console.log(err))
    }
  }

  onChange(e){
    this.setState({ [e.target.name]: e.target.value });
  }

  componentWillMount(){
      this.setData();
  }

  saveData(e){
    e.preventDefault();
    axios.post('http://localhost:3000/panel/rotationdata', {
      seconds:           this.state.seconds,
      projectsforPage:   this.state.projects
    })
    .then(function (response) {
        console.log(response);
        alert('Data Edited');
    })
    .catch(function (error) {
        console.log(error);
        alert('Error, try again');
    });
  }

  render() {
    const nombre = (<h1 style={projectNameStyles}>Rotation Config</h1>);
    return (
      <div>
        <Panel header={nombre} bsStyle="primary" style={mainPanelStyles}>
          <div className="well" style={wellStyles}>
            <form>
              <FormGroup>
                <ControlLabel>Seconds in the view:</ControlLabel>
                <FormControl type="text" placeholder="Seconds" name="seconds" value={this.state.seconds} onChange={this.onChange}/>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Number of projects for page:</ControlLabel>
                <FormControl type="text" placeholder="Number of projects for page" name="projects" value={this.state.projects} onChange={this.onChange}/>
              </FormGroup>
              <Button bsStyle="info" bsSize="small" onClick={this.saveData}>Save</Button>
            </form>
          </div>
        </Panel>
      </div>
    );
  }
}


export default Rotation;
