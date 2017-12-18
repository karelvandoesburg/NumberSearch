import React from 'react';

class CompanyChoice extends React.Component {

  render() {
    var self = this;
    return (
      <div id='inputbutton' className={this.props.company} onClick={this.props.retrieveData}>Zoek telefoonnummers</div>
    )
  }

}

export default CompanyChoice
