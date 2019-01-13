import React, { Component } from 'react';
import '../style/main.css';

import BottomBar from './bottomBar'
import TopBar from './topBar'
class Main extends Component {
  render() {
    return (
      <div className="main">
        <TopBar/>
        <BottomBar/>
      </div>
    );
  }
}

export default Main;
