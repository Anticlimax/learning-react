import React, { Component } from 'react';
import Header from './containers/Header';
import Content from './containers/Content';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header></Header>
          <Content></Content>
        </div>
      </Provider>
    );
  }
}

const themeReducer = (state, action) => {
  if(!state) {
    return {themeColor: 'red'}
  }
  switch (action.type) {
    case 'CHANGE_COLOR':
      return {
        ...state,
        themeColor: action.themeColor
      }
  
    default:
      return state
  }
}

const store = createStore(themeReducer)

export default App;
