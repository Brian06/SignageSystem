import React from 'react';
import { browserHistory } from 'react-router';
import { FormGroup, FormControl, Button, Panel, ControlLabel, Table } from 'react-bootstrap';
import ProjectstoManage from './ProjectstoManage';

const wellStyles = {  margin: '0 auto 10px', width:'50%' };
//maxWidth: 400,
const mainPanelStyles = { background:'#A9BCF5' };
//, height:'80%'
const projectNameStyles = { textAlign: 'center', textTransform: 'uppercase', fontWeight:'bold' };
const tableStyles = {width:'100%', height:'100%', background: '#585858', borderCollapse:'separate',tableLayout: 'fixed'};
const thStyles = {background: '#4F6FFF', borderRadius:"5px"};
const headeStyles = {textAlign:'center', color:'#FFFFFF'}
//,textTransform: 'uppercase'   ,textShadow: '3px 2px blue'  ,fontWeight:'bold'
let projects = [];

let size;

class Projects extends React.Component {

  constructor(props){
      super(props);
      this.state = { projects: []};
  }

  componentWillMount(){
      this.setState({ projects: [
        { id: "1", project: "Signage System", enable: "true" },
        { id: "2", project: "Code Generator", enable: "false" },
        { id: "3", project: "World Animal Protection", enable: "true" },
        { id: "4", project: "Automation", enable: "false" },
        { id: "5", project: "Avantica Eventos", enable: "false" },
        { id: "6", project: "Signage System", enable: "false" },
        { id: "7", project: "Code Generator", enable: "true" },
        { id: "8", project: "World Animal Protection", enable: "false" },
        { id: "9", project: "Automation", enable: "true" },
        { id: "10", project: "Avantica Eventos", enable: "false" },
        { id: "11", project: "Signage System", enable: "true" },
        { id: "12", project: "Code Generator", enable: "false" },
        { id: "13", project: "World Animal Protection", enable: "true" },
        { id: "14", project: "Automation", enable: "false" },
        { id: "15", project: "Avantica Eventos", enable: "true" },
      ]})
  }

//style={tableStyles} bordered
  render() {
    size= this.state.projects.length
    console.log(size)
    const nombre = (<h1 style={projectNameStyles}>Manage Projects</h1>);
    return (
      <div>
        <Panel header={nombre} bsStyle="primary" style={mainPanelStyles}>
          <div className="well" style={wellStyles}>


            <Table bordered condensed responsive>
              <thead>
                <tr >
                  <th style={thStyles}><h4 style={headeStyles}>Projects</h4></th>
                  <th colSpan = '2' style={thStyles}><h4 style={headeStyles}>Status</h4></th>
                  <th style={thStyles}><h4 style={headeStyles}>Edit</h4></th>
                </tr>
              </thead>
              <tbody>
            {

              this.state.projects.map((project) => {
                return <ProjectstoManage key={ project.id }
                                    id={project.id}
                                    project={ project.project }
                                    enable={ project.enable }
                       />
              })
            }
            </tbody>
          </Table>



          </div>
        </Panel>
      </div>
    );
  }
}


export default Projects;
