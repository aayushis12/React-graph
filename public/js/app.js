import React from 'react';
import ReactDOM from 'react-dom';
//import DonutChart from 'react-donut-chart';
import propTypes from 'prop-types';
import {Display} from './Display.js';
import {DonutChart} from './DonutChart.js'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
     text:0,
     label:'',
     value:'',
     isClicked:false,
     num:0,
     isChecked:true,
     list:[],
     updateComponent:true
    }
    this.changeText=this.changeText.bind(this);
    ///this.display=this.display.bind(this);
    this.check=this.check.bind(this);
  }

  changeText(e){
    this.setState({
      label:e.target.value,   
    })     
  }
  display(){
    var num=document.getElementById('number').value; 
    var text=parseInt(num);
    var label=document.getElementById('label').value;
    this.setState({
      isClicked:true,
      text:text,
      label:label
    })
    document.getElementById('number').value='';
    document.getElementById('label').value=''
  }
  componentDidMount(){
    this.setState({updateComponent:false})
  }
  check(){
    var start_date=document.getElementById("start_date").value;
    var end_date=document.getElementById("end_date").value;
    
    
    if(new Date(start_date)>new Date(end_date)){
      alert("Please enter valid dates");
          this.setState({
            isChecked:false
      })
    }else{
      this.setState({
        isChecked:true
      })
      this.display();
    }

  }
  render(){
    var listElements=[];
    listElements.push(<DonutChart updateComponent={this.state.updateComponent} data={this.state.text} label={this.state.label}/>);
    return(
      <div className="row">
        <div className="col-md-6">
          <input type="text" placeholder="Enter name" id='label' defaultValue={this.state.label}/> 
          <input type='number' id='number'/>
          <label>Start Date:<input type="date" id="start_date"/></label>
          <label>End Date:<input type="date" id="end_date"/></label>
          <button onClick={this.check}>Click here</button>
        </div>
        <div className="col-md-6">
          {listElements}   
        </div>
      </div>
      )

  }
}

App.propTypes={
  text:propTypes.number,
  num:propTypes.number
}



ReactDOM.render(<App/>,document.getElementById('container'));
