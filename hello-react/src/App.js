import React, {Component} from 'react';
import './App.css';
// import LikeButton from './components/LikeButton';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '<h1>React.js</h1>',
      color: 'blue'
    }
  }

  changeColor = e =>{
    this.setState({
      color: 'yellow'
    })
  }
  
  render() {
    console.log(this.props.children)
    return (
      <div className="card" style={{fontSize: '12px', color: this.state.color}}>
        {this.state.content}
        <button onClick={this.changeColor}></button>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowHeader: true
    }
  }

  handleShowOrHide = () => {
    this.setState({
      isShowHeader: !this.state.isShowHeader
    })
  }
  render() {
    return (
      <div className="App">
        <Card>
        </Card>
      </div>
    );
  }
}

export default App;
