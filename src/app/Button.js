import React from 'react';

class CompanyChoice extends React.Component {

  constructor(props) {
    super();
    this.state = {button: props.company, text:"Zoek telefoonnummers"}
    if(props.backbutton == "true"){
      this.state ={button:"backbutton", text:"Nieuwe zoekopdracht"};
    }
  }

  render() {
    return (
      <div id='inputbutton' className={this.props.company} onClick={this.props.retrieveData}>{this.state.text}</div>
    )
  }

}

export default CompanyChoice
