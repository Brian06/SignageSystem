import React from 'react';
import {Image} from 'react-bootstrap';


//Images
const check = './images/check.png';
const bad = './images/bad.png';

//Styles
const tdStyles = {textAlign:'center', verticalAlign:'middle',borderRadius:'10px',background: '#A9BCF5'};
const h3Style = {textAlign:'center',textTransform: 'uppercase',fontWeight:'bold'};

//let height = 25;
let imgStyles = {}




class ProjectRow extends React.Component {
  constructor(props){
    super(props);


  }

  componentWillMount() {
    let size = this.props.size
    let height = function(){
      if(size<=2){
        return 60
      }
      return 100 / size +25
    };
    console.log(height());
    imgStyles = {height: height()+"px"};
 }

  render() {
      return(
        <tr>
          <td style= {tdStyles}><font size="4" style={h3Style}>{this.props.project}</font></td>
          <td style= {tdStyles}><Image style={imgStyles} src={this.props.build == "no" ?  bad : check}  circle  /></td>
          <td style= {tdStyles}><Image style={imgStyles} src={parseInt("10") < 70 ?  bad : check}  circle  /></td>
          <td style= {tdStyles}><Image style={imgStyles} src={this.props.execution == "no" ?  bad : check}  circle  /></td>
          <td style= {tdStyles}><Image style={imgStyles} src={this.props.commercial == "no" ?  bad : check}  circle  /></td>
        </tr>
      )
  }
}

export default ProjectRow
