import React from 'react';
import { browserHistory } from 'react-router';
import { FormGroup, FormControl, Button, Panel, ControlLabel } from 'react-bootstrap';
import axios from 'axios'

const wellStyles = { maxWidth: 400, margin: '0 auto 10px', marginTop:'5%' };
const mainPanelStyles = { background:'#A9BCF5', height:'80%' };
const projectNameStyles = { textAlign: 'center', textTransform: 'uppercase', fontWeight:'bold' };

class JenkinsIntegration extends React.Component {

  constructor(props){
    super(props);
    this.state = { username: '', password: '', site: '', token: ''};
    this.onChange = this.onChange.bind(this);
    this.saveData = this.saveData.bind(this);

    this.setData = () => {
          this.setState(this.state);
          axios
          .get("http://localhost:3000/panel/jenkinsdata")
          .then(res => {
              this.setState({ username: res.data.username,
                              password: res.data.password,
                              site:     res.data.site,
                              token:    res.data.token })
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
    axios.post('http://localhost:3000/panel/jenkinsdata', {
      username: this.state.username,
      password: this.state.password,
      site:     this.state.site,
      token:    this.state.token
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
    const nombre = (<h1 style={projectNameStyles}>Jenkins Integration</h1>);
    return (
      <div>
        <Panel header={nombre} bsStyle="primary" style={mainPanelStyles}>
          <div className="well" style={wellStyles}>
            <form>
              <FormGroup>
                <ControlLabel>Username:</ControlLabel>
                <FormControl type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.onChange}/>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Password:</ControlLabel>
                <FormControl type="text" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange}/>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Your Site:</ControlLabel>
                <FormControl type="text" placeholder="Your Site" name="site" value={this.state.site} onChange={this.onChange}/>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Token:</ControlLabel>
                <FormControl type="text" placeholder="Token" name="token" value={this.state.token} onChange={this.onChange}/>
              </FormGroup>
              <Button bsStyle="info" bsSize="small" onClick={this.saveData}>Save</Button>
            </form>
          </div>
        </Panel>
      </div>
    );
  }
}


export default JenkinsIntegration;
