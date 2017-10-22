import React, {Component} from 'react';
import CommentItem from './CommentItem';
import PropTypes from 'prop-types'

class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.array,
    onDeleteComment: PropTypes.func
  }

  static defaultProps = {
    comments: []
  }

  handleDeleteComment = index => {
    if(this.props.onDeleteComment) {
      this.props.onDeleteComment(index)
    }
  }

  render() {
    return (
      <div>
        {this
          .props
          .comments
          .map((comment, i) => <CommentItem
            onDeleteComment={this.handleDeleteComment}
            index={i}
            comment={comment}
            key={i}/>)}
      </div>
    );
  }
}

export default CommentList;
