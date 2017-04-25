import React from 'react';
import {Image} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import { IndexLinkContainer,LinkContainer } from 'react-router-bootstrap'


//Styles
const imgStyles = {height:'90px'}
const tdStyles = {textAlign:'center', verticalAlign:'middle',background: '#A9BCF5'};
const colleagueNameStyles = {textAlign:'center',fontWeight:'bold', color:'#642EFE'}
const colleaguePositionStyles = {textAlign:'center',fontWeight:'bold', color:'#2E2E2E'}
//let height = 25;


class ColleaguesRow extends React.Component {

  constructor(props){
    super(props);

  }

  componentWillMount() {

 }

  render() {
      return(
          <td style= {tdStyles}><Image style={imgStyles} src={this.props.img} circle/><br/>
          <h4 style={colleagueNameStyles}>{this.props.name}</h4>
          <h4 style={colleaguePositionStyles}>{this.props.position}</h4></td>
      )
  }
}

//{this.props.id}

export default ColleaguesRow
