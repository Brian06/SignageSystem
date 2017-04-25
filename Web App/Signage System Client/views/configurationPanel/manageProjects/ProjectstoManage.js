import React from 'react';
import {Image} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import { IndexLinkContainer,LinkContainer } from 'react-router-bootstrap'


//Styles
const tdStyles = {textAlign:'center', verticalAlign:'middle',background: '#A9BCF5'};
const h3Style = {textAlign:'center',textTransform: 'uppercase',fontWeight:'bold'};

//let height = 25;

class ProjectstoManage extends React.Component {
  constructor(props){
    super(props);

  }

  componentWillMount() {

 }

  render() {
      return(
        <tr>
          <td style= {tdStyles}><font size="4" style={h3Style}>{this.props.project}</font></td>
          <td style= {tdStyles}><Button bsStyle={this.props.enable == "false" ?  "success" : " "} bsSize="small" onClick={this.saveUser}>Enable</Button></td>
          <td style= {tdStyles}><Button bsStyle={this.props.enable == "true" ?  "danger" : " "} bsSize="small" onClick={this.saveUser}>Disable</Button></td>
          <td style= {tdStyles}><IndexLinkContainer to="/edit"><Button bsStyle="warning" bsSize="small" onClick={this.saveUser}>Edit</Button></IndexLinkContainer></td>
        </tr>
      )
  }
}

//{this.props.id}

export default ProjectstoManage
