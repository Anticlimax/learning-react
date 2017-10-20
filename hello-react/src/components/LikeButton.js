import React, {Component} from 'react';

class LikeButton extends Component {
  static defaultProps = {
    likedText: '取消',
    unlikedText: '点赞'
  }

  constructor() {
    super()
    this.state = {
      isLiked: false
    }
  }

  handleClickOnLikeButton = () => {
    this.setState({
      isLiked: !this.state.isLiked
    })
    if(this.props.onClick) {
      this.props.onClick()
    }
  }
  render() {
    const wordings = this.props.wordings || {
      likedText: '取消',
      unlikedText: '点赞'
    }
    return (
      <div>
        <button onClick={this.handleClickOnLikeButton}>
          {this.state.isLiked
            ? this.props.likedText
            : this.props.unlikedText}👍
        </button>
      </div>
    );
  }
}

export default LikeButton;
