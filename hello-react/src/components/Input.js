import React, { Component } from 'react';
import wrapWithLoadData from './wrapWithLoadData';

class InputWithUserName extends Component {
  render() {
    return (
      <div>
        <input type="text" value={this.props.data}/>
      </div>
    );
  }
}
InputWithUserName = wrapWithLoadData(InputWithUserName, 'username')

export default InputWithUserName;