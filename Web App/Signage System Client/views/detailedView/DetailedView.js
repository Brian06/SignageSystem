import React from 'react';
import { Table,Image,Grid,Row,Col,Panel,FormGroup,ControlLabel,FormControl } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import ColleaguesRow from './ColleaguesRow';

//const wellStyles = {maxWidth: 400, margin: '0 auto 10px', marginTop:'5%'};

//const container = {backgroundColor:'#A9BCF5'}
//const halfHeight = {flex: .5,backgroundColor: '#FF3366'}
//const quarterHeight = {flex: .25,backgroundColor: '#000'}

//const divMediaStyles = {width:'20%'};

//const panelStyles = { background: '#A9BCF5'};
//const divStyles = {marginLeft:'30%', marginTop:'50%', marginRight:'30%', marginBottom:'50%'};

//const divStyles = {marginLeft:'30%', marginTop:'5%', marginRight:'30%', marginBottom:'5%'};


//const raro = { float: 'none', maxHeight:'33%'};


//const grid = { display: 'table'};
//const row = { display: 'tableRow'};
const tableStyles = {width:'100%', height:'100%', background: '#FFFFFF', borderCollapse:'separate'};
const tableStyles2 = {width:'100%', height:'100%', background: '#FFFFFF', borderCollapse:'separate',tableLayout: 'fixed'};
const thStyles = {background: '#4F6FFF'};
const headeStyles = {textAlign:'center',textTransform: 'uppercase',fontWeight:'bold', color:'#FFFFFF',textShadow: '2px 1px blue'}
const tdStyles = {textAlign:'center', verticalAlign:'middle',background: '#A9BCF5'};
const h3Style = {textAlign:'center',textTransform: 'uppercase',fontWeight:'bold'};
const imgStyles = {height:'90px'}
const statusNameStyles = {textAlign:'center',fontWeight:'bold', color:'#2E2E2E'}
const wellStyles = {maxWidth: '400', margin: '0 auto 10px', float:'right'};
const descriptionImgStyles = {paddingTop:'70%'};

//<textarea className="formControl" rows="100%" id="comment"></textarea>


//Images
const check = './images/check.png';
const bad = './images/bad.png';

let project;
let colleagues = [];
let size;


class DetailedView extends React.Component {

  constructor(props){
      super(props);
      this.state = { project: {}, colleagues: [], clientDescription: '', projectDescription: ''};
      this.onChange = this.onChange.bind(this);

      this.setData = () => {
            this.setState(this.state);
            this.setState({
              clientDescription: this.project.clientDescription,
              projectDescription:  this.project.projectDescription
            })
      }
  }

  componentWillMount(){
      this.setState({project: { id: 1, project: "Signage System", client: "Avantica", clientDescription: "Avantica is a great company of software development",
      projectDescription: "Signage System is a project to improve the visibility in the company",build: "si", execution: "si", coverage: "20", commercial: "no" }})

      this.setState({ colleagues: [
        { id: "1", img: "./images/c1.jpg", name: "Brian Salazar", position: "Developer" },
        { id: "2", img: "./images/c3.jpg", name: "Carlos Mejias", position: "Qa" },
        { id: "3", img: "./images/c6.jpg", name: "Allan Alleman", position: "PM" },
        { id: "4", img: "./images/c5.jpg", name: "Carolina Castro", position: "Developer" },
        { id: "5", img: "./images/c4.jpg", name: "Fabiana Loaiza", position: "Developer" },
        { id: "6", img: "./images/c6.jpg", name: "Allan Alleman", position: "PM" },
        { id: "7", img: "./images/c5.jpg", name: "Carolina Castro", position: "Developer" },
        { id: "8", img: "./images/c4.jpg", name: "Fabiana Loaiza", position: "Developer" }
      ]})

    //  this.setData();
  }

  onChange(e){
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <Grid fluid={true}>
    <Row className="show-grid" >
      <Col style={{backgroundColor:'#A9BCF5', height:'33%'}}  xs={1} md={1} lg={1} sm={1}>
        <div style={descriptionImgStyles}><Image style={imgStyles} src='./images/jenkins.png'/></div>
      </Col>

      <Col style={{backgroundColor:'#A9BCF5', height:'33%'}}  xs={5} md={5} lg={5} sm={5}>
        <h4 style={headeStyles}>{this.state.project.client}</h4>
        <FormGroup controlId="formControlsTextarea">
          <FormControl componentClass="textarea" style={{ height: '80%' }} placeholder="Client Description" name="clientDescription" value={this.state.clientDescription} onChange={this.onChange}/>
        </FormGroup>
      </Col>

      <Col style={{backgroundColor:'#A9BCF5', height:'33%'}}  xs={1} md={1} lg={1} sm={1}>
        <div style={descriptionImgStyles}><Image style={imgStyles} src='./images/case.png' /></div>
      </Col>
      <Col style={{backgroundColor:'#A9BCF5', height:'33%'}} xs={5} md={5} lg={5} sm={5}>
        <h4 style={headeStyles}>{this.state.project.project}</h4>
        <FormGroup controlId="formControlsTextarea">
          <FormControl componentClass="textarea" style={{ height: '80%' }} placeholder="Project Description" name="projectDescription" value={this.state.projectDescription} onChange={this.onChange}/>
        </FormGroup>
      </Col>
    </Row>

    <Row className="show-grid">
      <Col style={{backgroundColor:'#A9BCF5',height:'33%'}} xs={12} md={12} lg={12} sm={12}>
        <Table style={tableStyles} bordered condensed>
          <thead>
            <tr >
              <th colSpan="20" style={thStyles}><h4 style={headeStyles}>TEAM MEMBERS</h4></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {
                this.state.colleagues.map((colleague) => {
                  return <ColleaguesRow key={ colleague.id }
                                      img={colleague.img}
                                      name={ colleague.name }
                                      position={ colleague.position }
                         />
                })
              }
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>

    <Row className="show-grid">
      <Col style={{ backgroundColor:'#A9BCF5',height:'33%'}} xs={12} md={12} lg={12} sm={12}>

        <Table style={tableStyles2} bordered condensed>
          <thead>
            <tr >
              <th colSpan='4' style={thStyles}><h4 style={headeStyles}>PROJECT DETAILS</h4></th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td style= {tdStyles}><Image style={imgStyles} src={this.state.project.build == "no" ?  bad : check}  circle  /><br/><h3 style={statusNameStyles}>BUILD</h3></td>
              <td style= {tdStyles}><Image style={imgStyles} src={parseInt("10") < 70 ?  bad : check}  circle  /><br/><h3 style={statusNameStyles}>COVERAGE</h3></td>
              <td style= {tdStyles}><Image style={imgStyles} src={this.state.project.execution == "no" ?  bad : check}  circle  /><br/><h3 style={statusNameStyles}>EXECUTION</h3></td>
              <td style= {tdStyles}><Image style={imgStyles} src={this.state.project.commercial == "no" ?  bad : check}  circle  /><br/><h3 style={statusNameStyles}>COMMERCIAL</h3></td>
            </tr>
          </tbody>
        </Table>

      </Col>
    </Row>
  </Grid>
    );
  }
}


export default DetailedView;


 /*<table style={wellStyles}  cellSpacing="1" cellPadding="3" border="1px" bgcolor="#1E679A">
          <tr>
             <td >
             <font face="arial, verdana, helvetica">
             Este es el interior del recuadro. Esperamos que os resulte elegante... es muy sencillo.Este es el interior del recuadro. Esperamos que os resulte elegante... es muy sencillo.Este es el interior del recuadro. Esperamos que os resulte elegante... es muy sencillo.Este es el interior del recuadro. Esperamos que os resulte elegante... es muy sencillo.Este es el interior del recuadro. Esperamos que os resulte elegante... es muy sencillo.Este es el interior del recuadro. Esperamos que os resulte elegante... es muy sencillo.Este es el interior del recuadro. Esperamos que os resulte elegante... es muy sencillo.Este es el interior del recuadro. Esperamos que os resulte elegante... es muy sencillo.Este es el interior del recuadro. Esperamos que os resulte elegante... es muy sencillo.Este es el interior del recuadro. Esperamos que os resulte elegante... es muy sencillo.
             </font>
             </td>
          </tr>
        </table>*/
