import React from 'react';
import ReactDOM from 'react-dom';
import PrizeRowComponent from '../components/PrizeRowComponent'
import '../css/index.css';

export default class PrizeShowComponent extends React.Component {
  constructor(props) {
    super(props);

  };
  render() {
    let rows = []

    this.props.row_state.forEach((data)=>{
      rows.push(<PrizeRowComponent row_data={data} key={data.key} />)
    })
    return (
      <div className="top-box">
        {rows}
      </div>
    )
  }
}