import React from 'react';

class CompanyChoice extends React.Component {

  constructor(props) {
    super();
    this.state = {company: props.company, text:"Zoek telefoonnummers"}
  }

  render() {
    return (
      <div id='inputbutton' className={this.props.button} onClick={this.props.retrieveData}>{this.state.text}</div>
    )
  }

}

export default CompanyChoice
