import React from 'react';
import ReactDOM from 'react-dom';
import '../css/index.css';

export default class PrizeRowComponent extends React.Component {
  constructor(props) {
    super(props);

  };
  render() {
    let row_styles = {
      background : this.props.row_data.light ? 'blue' : 'white'
    }
    return (
      <div style={row_styles} className="row-box">
        <div>{this.props.row_data.key}元</div>
      </div>
    )
  }
}