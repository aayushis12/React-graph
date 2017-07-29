import React from 'react';
import ReactDOM from 'react-dom';
//import DonutChart from 'react-donut-chart';
import propTypes from 'prop-types';


class DonutChart extends React.Component{
  constructor(props){
    super(props);
    
  }
  // shouldComponentUpdate(nextProps){
  //   //console.log(nextProps.updateComponent);
  //   return nextProps.updateComponent;
  // }
  render(){
    var halfsize=(this.props.size*0.5);
    var radius=halfsize-(this.props.strokeWidth*0.5);
    var circumference=2*Math.PI*radius;
    var strokevalue=((this.props.data*circumference)/100);
    var dashval=(strokevalue+' '+circumference);
    var trackstyle={strokeWidth:this.props.strokeWidth};
    var indicatorstyle={strokeWidth:this.props.strokeWidth,strokeDasharray:dashval};
    return(
      <div>
        <svg height={this.props.size} width={this.props.size}>
          <circle r={radius} stroke='black' cx={halfsize} cy={halfsize} strokeWidth='3' className="donutchart-track" style={trackstyle}></circle>
          <circle r={radius} stroke='black' cx={halfsize} cy={halfsize} strokeWidth='3' className="donutchart-indicator" style={indicatorstyle}></circle>
          
        </svg>
        <span>{this.props.label}</span>
      </div>
      )
  }
}

DonutChart.propTypes={
  data:React.PropTypes.number,
  strokeWidth:React.PropTypes.number,
  size:React.PropTypes.number,
  label:React.PropTypes.string
}
DonutChart.defaultProps={
  
    value:0,
    strokeWidth:26,
    size:116
  
}


module.exports={
	DonutChart:DonutChart
}

