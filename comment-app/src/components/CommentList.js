import React, { Component } from 'react';
import CommentItem from './CommentItem';

class CommentList extends Component {
  static defaultProps = {
    comments: []
  }
  render() {
    return (
      <div>
        {this.props.comments.map((comment, i) => <CommentItem comment={comment} key={i} />)}
      </div>
    );
  }
}

export default CommentList;
