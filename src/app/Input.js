import React from 'react';

class Input extends React.Component {
  render() {
    var self = this;
    return (
      <div><input placeholder={this.props.placeholder} type="text" className="input" onChange={this.changeInput.bind(this)}/></div>
    )
  }

  changeInput(event) {
    var value = event.target.value;
    var key = this.props.number;
    this.props.changeState(value,key);
  }
}

export default Input
