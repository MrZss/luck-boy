import React from 'react';
import ReactDOM from 'react-dom';
import '../css/index.css';

export default class ButtonComponent extends React.Component {
  constructor(props) {
    super(props);
  };
  handleRowStateChange(){
    this.props.onRowState();
  }

  render() {
    return (
      <div className="bottom-box">
        <div onClick={this.handleRowStateChange.bind(this)}>开始</div>
        <div>重置</div>
      </div>
    )
  }
}