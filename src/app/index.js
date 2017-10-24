import React from 'react';
import ReactDOM from 'react-dom';
import logo from './images/ergatislogo.png';
import axios from 'axios';

class ScreenStart extends React.Component {

    constructor() {
        super();
        this.state = {
            forms : ['Dossier id', 'Achternaam klant', 'geboortedatum klant', 'Achternaam verwijzer', 'Bedrijf verwijzer', 'Achternaam medewerker'],
            inputdata: []
        }
        for(var i = 0; i < this.state.forms.length; i++) {
          this.state.inputdata.push('');
        }
        this.changeState.bind(this);
    }

    render() {
        var self = this;
        var forms = this.state.forms;
        var formobjects = this.state.formobjects;
        forms = forms.map(function(item, key){
          var form = <Form formname={item} key={key} number={key} changeState={self.changeState.bind(self)}/>
          return(
            form
          )
        })
        return(
            <div className='container overal'>
                <div className='inputbutton' onClick={this.retrieveData.bind(this)}>Zoek telefoonnummers</div>
                <img src={logo} />
                <div className='container context'>
                  <ul>{forms}</ul>
                </div>
            </div>
        );
    }

    changeState(value,searchnumber) {
      var array = this.state.inputdata;
      array[searchnumber]=value;
    }

    /*
    retrieveData() {
      axios.post('/api/phones.json', {
        dossierId: this.state.inputdata[0],
        clientLastName: this.state.inputdata[1],
        clientBirthDate: this.state.inputdata[2],
        referrerLastName: this.state.inputdata[3],
        referrerCompany: this.state.inputdata[4]
      })
      .then(function(response){
        console.log(response);
      })
      .catch(function(error){
        alert(error);
      })
    }
    */

    retrieveData() {
      var self = this;
      axios.get('/api/phonesnew.json').then(function(response) {
        self.processDate(response);
      }).catch(function(error){
        console.log(error);
      })
    }

    processDate(response) {
      if(response.data.length > 5) {
        ReactDOM.render(<Warning/>, document.getElementById('notenoughinformation'))
      }
      else {
        ReactDOM.render(<ScreenNumbers response={response}/>, document.getElementById('wrapper'))
      }
    }

}

class Form extends React.Component {
  render() {
    var self = this;
    return(
      <div className='formunit-container'>
        <li className="formunit">
          <div className='formtext-container'>{this.props.formname}:</div>
          <Input changeState={self.props.changeState} key={self.props.number} number={self.props.number}/>
        </li>
      </div>
    )
  }
}

class Input extends React.Component {
  render() {
    var self = this;
    return (
      <div><input type="text" className="input" onChange={this.changeInput.bind(this)}/></div>
    )
  }

  changeInput(event) {
    var value = event.target.value;
    var key = this.props.number;
    this.props.changeState(value,key);
  }
}

class Warning extends React.Component {
  render(){
    return (
      <div>Geef alstublieft meer informatie over de klant!</div>
    )
  }
}




class ScreenNumbers extends React.Component {
  render(){
    var data = this.props.response.data[0];
    var dataobject = <Number type={data.type} name={data.name} phone={data.phone}/>;
    console.log(data);

    return(
      <div className='container overal'>
          <img src={logo} />
          <div className='container context numbers'>
            <ul>{dataobject}</ul>
          </div>
          <div className='inputbutton' id='backbutton' onClick={this.goBack}>Nieuwe Zoekopdracht</div>
      </div>
    )
  }

  goBack() {
    ReactDOM.render(<ScreenStart />,document.getElementById('wrapper'));
  }
}

class Number extends React.Component {
  render() {
    return(
      <div className="number">
        <ul>
          <li><span style={{fontFamily:"Fira-Sans"}}>{this.props.type}</span></li>
          <li>naam: <span style={{marginLeft:40 + "px"}}>{this.props.name}</span></li>
          <li>telefoon: <span style={{marginLeft:21 + "px"}}>{this.props.phone}</span></li>
        </ul>
      </div>
    )
  }
}





ReactDOM.render(<ScreenStart />,document.getElementById('wrapper'));
