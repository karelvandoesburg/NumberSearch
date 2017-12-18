import React from 'react';

class CompanyChoice extends React.Component {

  constructor(props) {
    super();
    this.state = {
      radio: props.company
    }
  }

  render() {
    var self = this;
    return (
      <div id='company-form'>
        <form id='company-form'>
          <input type="radio" name="company" value="Ergatis" onClick={this.changeCompany.bind(this)} defaultChecked/> Ergatis <br/>
          <input type="radio" name="company" value="Sitagre" onClick={this.changeCompany.bind(this)}/> Sitagre
        </form>
      </div>
    )
  }

  changeCompany(event) {
    var selectedcompany = event.target.value;
    this.state.radio = selectedcompany;
    this.props.changeCompany(selectedcompany);
  }
}

export default CompanyChoice
