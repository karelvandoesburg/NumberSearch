import React from 'react';

class CompanyChoice extends React.Component {

  render() {
    var text;
    if(this.props.button == "backbutton") {text = "Nieuwe zoekopdracht";}
    else {text = "Zoek telefoonnummers";}
    return (
      <div id='inputbutton' className={this.props.button} onClick={this.fireButton.bind(this)}>{text}</div>
    )
  }

  fireButton() {
    var self = this;
    if(self.props.button == "backbutton") {self.props.goBack()}
    else{self.props.retrieveData()}
  }
}

export default CompanyChoice
