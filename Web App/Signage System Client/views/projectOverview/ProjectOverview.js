import React from 'react';
import axios from 'axios'
import {Table} from 'react-bootstrap';
import { browserHistory } from 'react-router';
import ProjectRow from './ProjectRow';



//Projects to display
let projects = [];
let projectsDB = [];
let size;
//Styles
const tableStyles = { width:'100%', height:'100%', background: '#585858', borderCollapse:'separate',tableLayout: 'fixed' };
const thStyles = { background: '#4F6FFF', borderRadius:"10px" };
const headeStyles = { textAlign:'center',textTransform: 'uppercase',fontWeight:'bold', color:'#FFFFFF',textShadow: '3px 2px blue' }


class ProjectOverview extends React.Component {

  constructor(props){
      super(props);
      this.state = { projects: [], projectsDB: [], end:0, time:0, start:0 };
      this.setProjects = this.setProjects.bind(this);
      this.refresh = this.refresh.bind(this);
      this.setNumberofProjects = this.setNumberofProjects.bind(this);
      this.display = this.display.bind(this);

      this.setNumberofProjects();

/*
      this.setProjects = () => {
            this.setState(this.state);
            axios
            .get("http://localhost:3000/dashboard/getprojects")
            .then(res => {
                console.log("data"+res.data.length);
                this.setState({ projects: res.data.slice(0,8) });

            })
            .catch(err => console.log(err))
      }*/


  }

//fill the array
  componentWillMount(){
      /*this.setState({ projects: [
        { id: 1, project: "Signage System", build: "no", execution: "no", coverage: "77", commercial: "si" },
        { id: 2, project: "Code Generator", build: "si", execution: "si", coverage: "57", commercial: "si" },
        { id: 3, project: "World Animal Protection", build: "no", execution: "no", coverage: "62", commercial: "no" },
        { id: 4, project: "Automation", build: "no", execution: "si", coverage: "23", commercial: "si" },
        { id: 5, project: "Avantica Eventos", build: "no", execution: "si", coverage: "80", commercial: "si" },
      ]})*/

      //this.setProjects();

      this.setProjects();

  }

  componentDidMount(){
    //this.setNumberofProjects();
    this.interval = setInterval(this.refresh, 5000);

  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }



  //this.interval = setInterval(this.refresh(), 5000);

  /*refresh(){
    this.setState({ projects: [{id: 3, project: "World Animal Protection", build: "no", execution: "no", coverage: "62", commercial: "no" },
    { id: 4, project: "Automation", build: "no", execution: "si", coverage: "23", commercial: "si" }] });
  }*/

  refresh(){
    //console.log(this.state.projects);
    this.setState({ end:parseInt(this.state.end)+parseInt(this.state.end),start:parseInt(this.state.end)});
    //this.setState({ end:this.state.end+this.state.end})
    console.log("start " + this.state.start);
    console.log("end " + this.state.end);
    this.setState({ projects: this.state.projectsDB.slice(this.state.start,this.state.end) });
    //console.log(this.state.projectsDB);
  }


  //Fill the list of proyects
  setProjects() {
      //const projects = new Promise((resolve, reject) => {
        this.setState(this.state);
        /*axios
        .get("http://localhost:3000/dashboard/getprojects")
        .then(res => {
            console.log("data"+res.data.length);
            this.setState({ projects: res.data, projectsDB: res.data });*/
            //cambiar res.data,slice(0,numberofprojects)

            this.setState({ projectsDB: [
              { id: 1, project: "Signage System", build: "no", execution: "no", coverage: "77", commercial: "si" },
              { id: 2, project: "Code Generator", build: "si", execution: "si", coverage: "57", commercial: "si" },
              { id: 3, project: "World Animal Protection", build: "no", execution: "no", coverage: "62", commercial: "no" },
              { id: 4, project: "Automation", build: "no", execution: "si", coverage: "23", commercial: "si" },
              { id: 5, project: "Avantica Eventos", build: "no", execution: "si", coverage: "80", commercial: "si" },
              { id: 6, project: "Sexto", build: "no", execution: "si", coverage: "80", commercial: "si" },
              { id: 7, project: "Septimo", build: "no", execution: "si", coverage: "80", commercial: "si" },
              { id: 8, project: "Octavo", build: "no", execution: "si", coverage: "80", commercial: "si" },
            ] });

            this.setState({ projects: [
              { id: 1, project: "Signage System", build: "no", execution: "no", coverage: "77", commercial: "si" },
              { id: 2, project: "Code Generator", build: "si", execution: "si", coverage: "57", commercial: "si" },
            ] });

            //resolve();
      //  })
        //.catch(err => reject(err));

    //  });

      //return projects;
  }

  //display the projects in the view
  display(end,time){
    //let start = 0;
    this.time = setTimeout(function(){ this.setState({ projects: this.state.projectsDB.slice(start,end) }); }, 5000);
    console.log("a");
    let start = end;
    this.time = setTimeout(function(){ this.setState({ projects: this.state.projectsDB.slice(start,end) }); }, 5000);
    this.display(end+end,time);
  }

  //set the number of projects to show
  setNumberofProjects(){
    //this.setState(this.state);

    axios
    .get("http://localhost:3000/panel/rotationdata")
    .then(res => {
        this.setState({ end: res.data.projectsforPage, time: res.data.seconds });
        //this.display(res.data.projectsforPage,res.data.seconds);
        //this.display("2","4");
    })
    .catch(err => console.log(err));
  }





  /*this.setState({ projects: [
    { id: 1, project: "Signage System", build: "no", execution: "no", coverage: "77", commercial: "si" },
    { id: 2, project: "Code Generator", build: "si", execution: "si", coverage: "57", commercial: "si" },
    { id: 3, project: "World Animal Protection", build: "no", execution: "no", coverage: "62", commercial: "no" },
    { id: 4, project: "Automation", build: "no", execution: "si", coverage: "23", commercial: "si" },
    { id: 5, project: "Avantica Eventos", build: "no", execution: "si", coverage: "80", commercial: "si" },
    { id: 6, project: "Indeed", build: "no", execution: "si", coverage: "85", commercial: "no" },
    { id: 7, project: "Signage System", build: "no", execution: "no", coverage: "77", commercial: "si" },
    { id: 8, project: "Code Generator", build: "si", execution: "si", coverage: "57", commercial: "si" },
    { id: 9, project: "World Animal Protection", build: "no", execution: "no", coverage: "62", commercial: "no" },
    { id: 10, project: "Automation", build: "no", execution: "si", coverage: "23", commercial: "si" },
    { id: 11, project: "Avantica Eventos", build: "no", execution: "si", coverage: "80", commercial: "si" },
    { id: 12, project: "Indeed", build: "no", execution: "si", coverage: "85", commercial: "no" },
  ]})*/

  render() {

    size= this.state.projects.length

    return (
      <div>
        <Table style={tableStyles} bordered condensed responsive>
          <thead>
            <tr >
              <th style={thStyles}><h3 style={headeStyles}>&nbsp;PROJECT&nbsp;&nbsp;</h3></th>
              <th style={thStyles}><h3 style={headeStyles}>&nbsp;&nbsp;BUILD&nbsp;&nbsp;&nbsp;</h3></th>
              <th style={thStyles}><h3 style={headeStyles}>&nbsp;COVERAGE&nbsp;</h3></th>
              <th style={thStyles}><h3 style={headeStyles}>EXECUTION&nbsp;</h3></th>
              <th style={thStyles}><h3 style={headeStyles}>COMMERCIAL</h3></th>
            </tr>
          </thead>
          <tbody>
        {

          this.state.projects.map((project) => {
            return <ProjectRow key={ project.id }
                                project={ project.project }
                                coverage={ project.coverage }
                                build={ project.build }
                                execution={ project.execution }
                                commercial={ project.commercial }
                                size= {size}
                   />
          })
        }
        </tbody>
      </Table>
    </div>
    )
  }
}

export default ProjectOverview;
