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
      <div>
        <form id='company-form'>
          <div className='input-container'>
            <input type="radio" name="company" value="Ergatis" onClick={this.changeCompany.bind(this)}  id="radioCompanyErgatis" defaultChecked/>
            <label htmlFor="radioCompanyErgatis"> Ergatis </label><br/>
          </div>
          <div className='input-container'>
            <input type="radio" name="company" value="Sitagre" onClick={this.changeCompany.bind(this)} id="radioCompanySitagre"/>
            <label htmlFor="radioCompanySitagre"> Sitagre </label>
          </div>
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
