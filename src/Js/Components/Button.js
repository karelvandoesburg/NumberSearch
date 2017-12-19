import React from 'react';

class CompanyChoice extends React.Component {

  constructor() {
    super();
    this.state = {text:''}
  }

  render() {
    if(this.props.button == "backbutton") {this.state.text = "Nieuwe zoekopdracht";}
    else {this.state.text = "Zoek telefoonnummers";}
    return (
      <div id='inputbutton' className={this.props.button} onClick={this.fireButton.bind(this)}>{this.state.text}</div>
    )
  }

  fireButton() {
    var self = this;
    if(self.props.button == "backbutton") {self.props.goBack()}
    else{self.props.retrieveData()}
  }
}

export default CompanyChoice
