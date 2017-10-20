import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CommentInput extends Component {
  static propTypes = {
    onSubmit: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      content: ''
    }
  }

  componentWillMount() {
    this._loadUserName()
  }

  componentDidMount() {
    this
      .textarea
      .focus()
  }

  _saveUserName(username) {
    localStorage.setItem('username', username)
  }

  _loadUserName() {
    const username = localStorage.getItem('username')
    if (username) {
      this.setState({username})
    }
  }

  handleUsernameChange = e => {
    this.setState({username: e.target.value})
  }

  handleContentChange = e => {
    this.setState({content: e.target.value})
  }

  handleUsernameBlur = e => {
    this._saveUserName(e.target.value)
  }

  handleSubmit = _ => {
    if (this.props.onSubmit) {
      const {username, content} = this.state
      this
        .props
        .onSubmit({
          username,
          content,
          createdTime: + new Date()
        })
    }
    this.setState({content: ''})
  }

  render() {
    return (
      <div className="comment-input">
        <div className="comment-field">
          <span className="comment-field-name">用户名：</span>
          <div className="comment-field-input">
            <input
              type="text"
              value={this.state.username}
              onBlur={this.handleUsernameBlur}
              onChange={this.handleUsernameChange}/>
          </div>
        </div>
        <div className="comment-field">
          <span className="comment-field-name">评论内容：</span>
          <div className="comment-field-input">
            <textarea
              ref={textarea => this.textarea = textarea}
              value={this.state.content}
              onChange={this.handleContentChange}/>
          </div>
        </div>
        <div className="comment-field-button">
          <button onClick={this.handleSubmit}>发布</button>
        </div>
      </div>
    );
  }
}

export default CommentInput;
