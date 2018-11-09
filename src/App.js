import React, { Component } from 'react';
import SheetOfPaper from './SheetOfPaper.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        I'm App.js!
        <SheetOfPaper id="title" title="Survey Form" />
      </div>
    );
  }
}

export default App;
