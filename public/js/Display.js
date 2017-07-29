import React from 'react';
import ReactDOM from 'react-dom';
//import DonutChart from 'react-donut-chart';
import propTypes from 'prop-types';
import {DonutChart} from './DonutChart.js';


class Display extends React.Component{
	
  constructor(props){
    super(props);
    this.state={
    	num:this.props.data,
    	value:0
    }
  
  }
  render(){
  	console.log(this.state.num);
  	if(this.props.isClicked===true){
    	return(<DonutChart data={this.state.num}/>)
    }else{
     	return(<DonutChart data={this.state.value}/>)
      }     
  }
}

Display.propTypes={
  data:React.PropTypes.number.isRequired,
  num:React.PropTypes.number.isRequired
}

module.exports={
	Display:Display
}

