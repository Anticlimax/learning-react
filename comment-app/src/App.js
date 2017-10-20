import React, {Component} from 'react';
import './App.css';
import CommentInput from './components/CommentInput';
import CommentList from './components/CommentList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    }
  }

  componentWillMount() {
    this._loadComments()    
  }
  
  _loadComments() {
    let comments = localStorage.getItem('comments')
    if (comments) {
      comments = JSON.parse(comments)
      this.setState({comments})
    }
  }

  _saveComments(comments) {
    localStorage.setItem('comments', JSON.stringify(comments))
  }

  handleSubmitComment = comment => {
    if (!comment) 
      return
    if (!comment.username) 
      return alert('请输入用户名')
    if (!comment.content) 
      return alert('请输入评论内容')
    const comments = this.state.comments
    comments.push(comment)
    this.setState({comments})
    this._saveComments(comments)
  }
  render() {
    return (
      <div className="Wrapper">
        <CommentInput onSubmit={this.handleSubmitComment}></CommentInput>
        <CommentList comments={this.state.comments}></CommentList>
      </div>
    );
  }
}

export default App;
