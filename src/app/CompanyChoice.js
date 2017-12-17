import React from 'react';

class CompanyChoice extends React.Component {
  render() {
    var self = this;
    return (
      <div id='company-form'>
        <form id='company-form'>
          <input type="radio" name="company" value="Ergatis" onChange={this.changeCompany.bind(this)}/> Ergatis <br/>
          <input type="radio" name="company" value="Sitagre" onChange={this.changeCompany.bind(this)}/> Sitagre
        </form>
      </div>
    )
  }

  changeCompany(event) {
    console.log("dit pakt ie wel");
    console.log(event.target.value);
    var selectedcompany = event.target.value;
    this.props.changeCompany(selectedcompany);
  }
}

export default CompanyChoice
