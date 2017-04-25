import React from 'react';
import {Table,Image,Panel} from 'react-bootstrap';
import { browserHistory } from 'react-router';
import { IndexLinkContainer,LinkContainer } from 'react-router-bootstrap'

const tableStyles = {width:'100%', height:'20%', background: '#585858', borderCollapse:'separate',tableLayout: 'fixed'};
const thStyles = {background: '#2e6da4' };
const headeStyles = {textAlign:'center',textTransform: 'uppercase',fontWeight:'bold', color:'#FFFFFF'}
const tdStyles = {textAlign:'center', verticalAlign:'middle',background: '#A9BCF5',border: '2px solid #6E6E6E', borderRadius:'10px'};
const h3Style = {textAlign:'center',textTransform: 'uppercase',fontWeight:'bold'};
const imgStyles = {height:'65px'}
const statusNameStyles = {textAlign:'center',fontWeight:'bold', color:'#2E2E2E'}
//cursor:'pointer'

//Images
const check = './images/check.png';
const bad = './images/bad.png';

class ConfigurationPanel extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div style={{background:'#BDBDBD'}}>
        <Table style={tableStyles} bordered condensed>
            <thead>
              <tr >
                <th colSpan='5' style={thStyles}><h4 style={headeStyles}>Welcome, What would you like to do?</h4></th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <td style= {tdStyles}>
                  <IndexLinkContainer to="/jenkinsintegration">
                    <div style={{cursor:'pointer'}}><Image style={imgStyles} src='./images/jenkins.png'/><br/><h3 style={statusNameStyles}>Jenkins Integration</h3></div>
                  </IndexLinkContainer>
                </td>
                <td style= {tdStyles}>
                  <IndexLinkContainer to="/sonarintegration">
                    <div style={{cursor:'pointer'}}><Image style={imgStyles} src='./images/sonar.png'/><br/><h3 style={statusNameStyles}>Sonar Integration</h3></div>
                  </IndexLinkContainer>
                </td>
                <td style= {tdStyles}>
                  <IndexLinkContainer to="/dashintegration">
                    <div style={{cursor:'pointer'}}><Image style={imgStyles} src='./images/db.png'  /><br/><h3 style={statusNameStyles}>Dashboard Integration</h3></div>
                  </IndexLinkContainer>
                </td>
                <td style= {tdStyles}>
                  <IndexLinkContainer to="/rotation">
                    <div style={{cursor:'pointer'}}><Image style={imgStyles} src='./images/rotate.png'  /><br/><h3 style={statusNameStyles}>Rotation Configuration</h3></div>
                  </IndexLinkContainer>
                </td>
                <td style= {tdStyles}>
                  <IndexLinkContainer to="/projects">
                    <div style={{cursor:'pointer'}}><Image style={imgStyles} src='./images/projects.png' /><br/><h3 style={statusNameStyles}>Manage Projects</h3></div>
                  </IndexLinkContainer>
                </td>
              </tr>
            </tbody>
          </Table>
            {this.props.children}
        </div>
    );
  }
}


export default ConfigurationPanel;
