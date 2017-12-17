import React from 'react';

class CompanyChoice extends React.Component {
  render() {
    var self = this;
    return (
      <div id='company-form'>
        <form id='company-form'>
          <input type="radio" name="company" value="Ergatis" checked={true} onChange/> Ergatis <br/>
          <input type="radio" name="company" value="Sitagre" /> Sitagre
        </form>
      </div>
    )
  }
}

export default CompanyChoice
