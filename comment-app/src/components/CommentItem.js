import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CommentItem extends Component {
  static propsType = {
    comment: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      timeString: ''
    }
  }

  _updateTimeString() {
    const comment = this.props.comment
    const duration = (+Date.now() - comment.createdTime) / 1000
    // this.setState({
    //   timeString: duration > 60 ? `${Math}` 
    // })
  }

  render() {
    return (
      <div className="comment">
        <div className="comment-user">
          <span>{this.props.comment.username}</span>：
        </div>
        <p>{this.props.comment.content}</p>
        <span className="comment-createdtime">
          {this.state.timeString}
        </span>
      </div>
    );
  }
}

export default CommentItem;
