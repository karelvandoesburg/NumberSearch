import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Form from './Form';
import ScreenNumbers from './ScreenNumbers';
import Warning from './Warning';
import CompanyChoice from './CompanyChoice';
import Logo from './Logo';
import Button from './Button';

class ScreenStart extends React.Component {

    render() {
        var self = this;
        var forms = this.props.forms;
        var firstform = <Form formname={forms[0]} number={0} changeState={this.props.changeState} enterPressed={this.props.enterPressed}/>
        var otherforms = [];
        for(var i = 1; i < forms.length; i++) {
          otherforms.push(forms[i]);
        }
        otherforms = otherforms.map(function(item, key){
          var form = <Form formname={item} key={key} number={key+1} changeState={self.props.changeState} enterPressed={self.props.enterPressed}/>
          return(form)
        })
        return (
            <div>
                <div id='instruction'>Kies een bedrijf en vul het dossiernummer of de volledige naam van de client en zijn/haar geboortedatum in</div>
                <CompanyChoice company={this.props.company}  changeCompany={this.props.changeCompany}/>
                <div id='firstform'>{firstform}</div>
                <div id='line'>
                  <div id='of'>OF</div>
                </div>
                <div className='container context'>
                  <ul>{otherforms}</ul>
                </div>
            </div>
        )
    }

}

export default ScreenStart
