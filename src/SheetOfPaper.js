import React, { Component } from 'react';

class SheetOfPaper extends Component {
  constructor(props) {
    super(props);
    this.state = { formComplete: false };
  }
  render() {
    return (
      <div className="sheet-of-paper">
        <h1 id={this.props.id} >{this.props.title}</h1>
      </div>
    );
  }
}

export default SheetOfPaper;