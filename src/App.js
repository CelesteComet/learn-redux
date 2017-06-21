import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import HeaderContainer from './components/header.container';
import BodyContainer from './components/body.container';


import { Provider } from 'react-redux';
import Store from './store/store';

class App extends Component {
  render() {
    return (
      <Provider store={ Store }>
        <div>
          <HeaderContainer />
          <BodyContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
