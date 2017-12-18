import React from 'react';

class CompanyChoice extends React.Component {

  constructor(props) {
    super();
    this.state = {
      company : props.company
    }
  }

  render() {
    return (
      <div className='inputbutton' onClick={this.props.retrieveData}>Zoek telefoonnummers</div>
    )
  }

}

export default CompanyChoice
