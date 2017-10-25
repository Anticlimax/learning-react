import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class Header extends Component {
  static propTypes = {
    themeColor: PropTypes.string
  }

  render() {
    return (
      <div>
        <h1 style={{
          color: this.props.themeColor
        }}>react-demo</h1>
      </div>
    );
  }
}

export default Header;
