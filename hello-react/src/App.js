import React, {Component} from 'react';
import InputWithUserName from './components/Input';
import './App.css';
// import LikeButton from './components/LikeButton';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="App">
        用户名：<InputWithUserName />   
      </div>
    );
  }
}

export default App;
