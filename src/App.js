import React, {Component} from 'react';
import './css/index.css';
import PrizeShowComponent from './components/PrizeShowComponent.js'
import ButtonComponent from './components/ButtonComponent.js'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      row_state: Array.from({length: 9}, (v, i) => {
          return {key: i + 1, state: true, light: false}
        }
      ),
      row_num: Array.from({length: 9}, (v, i) => i + 1),
    };
    this.handleRowState = this.handleRowState.bind(this);
    this.handleRefreshState = this.handleRefreshState.bind(this)
  }

  handleRowState() {
    let num = this.state.row_num[Math.floor(Math.random() * this.state.row_num.length)]
    let state_arr = this.state.row_state
    let num_arr = this.state.row_num
    let index = num_arr.indexOf(num)
    if (num_arr.length == 0) {
      alert("请重置抽奖")
    } else {
      console.log(num_arr.length)
      num_arr.splice(index, 1)
      state_arr[num - 1].light = true
      this.setState({
        row_state: state_arr
      });
      this.setState({
        row_num: num_arr
      })
      alert('恭喜你抽中' + num + '元')
    }
  }

  handleRefreshState() {
    let refresh_state = Array.from({length: 9}, (v, i) => {
        return {key: i + 1, state: true, light: false}
      }
    )
    let refresh_num = Array.from({length: 9}, (v, i) => i + 1)
    this.setState({
      row_state: refresh_state
    });
    this.setState({
      row_num: refresh_num
    })
  }

  componentDidUpdate() {
    console.log(this.state.row_num)
  }

  render() {
    let rows = []
    // let row_state = Array.from({length:9},(v,i)=> {
    //     return {key: i+1,state:true,light:false}
    //   }
    // )
    // let row_num = Array.from({length:9},(v,i)=>i+1)=
    return (
      <div className="wrap">
        <PrizeShowComponent row_state={this.state.row_state}/>
        <ButtonComponent onRowState={this.handleRowState} onRefreshState={this.handleRefreshState} />
      </div>
    );
  }
}


