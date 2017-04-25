import React from 'react';
import axios from 'axios'
import { browserHistory } from 'react-router';
import { FormGroup, FormControl, Button, Panel, ControlLabel } from 'react-bootstrap';

const wellStyles = { maxWidth: 400, margin: '0 auto 10px', marginTop:'5%' };
const mainPanelStyles = { background:'#A9BCF5', height:'80%' };
const projectNameStyles = { textAlign: 'center', textTransform: 'uppercase', fontWeight:'bold' };

class DashboardIntegration extends React.Component {

  constructor(props){
    super(props);
    this.state = { username: '', password: '', server: '', database: ''};
    this.onChange = this.onChange.bind(this);
    this.saveData = this.saveData.bind(this);

    this.setData = () => {
          this.setState(this.state);
          axios
          .get("http://localhost:3000/panel/dashboarddata")
          .then(res => {
              this.setState({ username: res.data.username,
                              password: res.data.password,
                              server:   res.data.server,
                              database: res.data.database })
          })
          .catch(err => console.log(err))
    }
  }

  saveData(e){
    e.preventDefault();
    axios.post('http://localhost:3000/panel/dashboarddata', {
      username: this.state.username,
      password: this.state.password,
      server:   this.state.server,
      database: this.state.database
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

  onChange(e){
    this.setState({ [e.target.name]: e.target.value });
  }

  componentWillMount(){
      this.setData();
  }

  render() {
    const nombre = (<h1 style={projectNameStyles}>Dashboard Integration</h1>);
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
                <ControlLabel>Server:</ControlLabel>
                <FormControl type="text" placeholder="Server" name="server" value={this.state.server} onChange={this.onChange}/>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Database:</ControlLabel>
                <FormControl type="text" placeholder="Database" name="database" value={this.state.database} onChange={this.onChange}/>
              </FormGroup>

              <Button bsStyle="info" bsSize="small" onClick={this.saveData}>Save</Button>
            </form>
          </div>
        </Panel>
      </div>
    );
  }
}


export default DashboardIntegration;
