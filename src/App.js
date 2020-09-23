import React from 'react';
import Keypad from './Keypad';
import Output from './Output';

class App extends React.Component {

  state = {
    btnValue : ''
  }

  buttonPressed = value =>{
    if(value === "=") {
      this.evaluate(); 
    } else 
    if (value === "clear") {
      this.setState({btnValue: ""});
    }  else if (value === "ce") {
      this.setState({btnValue: this.state.btnValue.slice(0,-1)});
    } 
    
    else 
      this.setState({btnValue:this.state.btnValue + value});
  };

  evaluate = () => {
    this.setState({btnValue: eval(this.state.btnValue)});
  }

  render() {
    return(
      <div>
        <Output output = {this.state.btnValue}/>
        <Keypad buttonPressed={this.buttonPressed}/>
      </div>
    );
  }
}

export default App;