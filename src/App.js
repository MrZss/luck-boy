import React, { Component } from 'react';
import './css/index.css';
import PrizeShowComponent from './components/PrizeShowComponent.js'
import ButtonComponent from './components/ButtonComponent.js'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      row_state : Array.from({length:9},(v,i)=> {
          return {key: i+1,state:true,light:false}
        }
      ),
      row_num : Array.from({length:9},(v,i)=>i+1)
    };
    this.handleRowState = this.handleRowState.bind(this);
  }
  handleRowState() {
    let num = this.state.row_num[Math.floor(Math.random()*this.state.row_num.length)]
    let arr = this.state.row_state
    arr[num-1].light = true
    this.setState({
      row_state : arr
    });
  }
  render() {
    let rows = []
    // let row_state = Array.from({length:9},(v,i)=> {
    //     return {key: i+1,state:true,light:false}
    //   }
    // )
    // let row_num = Array.from({length:9},(v,i)=>i+1)

    return (
      <div className="wrap">
        <PrizeShowComponent row_state={this.state.row_state} row_num={this.state.row_num} />
        <ButtonComponent onRowState={this.handleRowState} />
      </div>
    );
  }
}


