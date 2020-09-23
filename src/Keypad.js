import React from 'react';
import './Keypad.css'

class Keypad extends React.Component {

  buttonPress = event => {
  this.props.buttonPressed(event.target.name);
}


  render() {
    return(
      <div class="container">
        <div>
        <button name = "clear"  class="clearbutton"  onClick = {this.buttonPress}>CLEAR</button>
        <button name = "ce"  class="clearbutton"  onClick = {this.buttonPress}>CE</button>
        </div>
        <button class="buttons" name = "7" onClick = {this.buttonPress}>7</button>
            <button class="buttons"  name = "8" onClick = {this.buttonPress}>8</button>
            <button class="buttons"  name = "9" onClick = {this.buttonPress}>9</button>
            <button class="clrbutton"  name = "/" onClick = {this.buttonPress}>&divide;</button><br></br>
            <button class="buttons"  name = "4" onClick = {this.buttonPress}>4</button>
            <button class="buttons"  name = "5" onClick = {this.buttonPress}>5</button>
            <button class="buttons"  name = "6" onClick = {this.buttonPress}>6</button>
            <button class="clrbutton"  name = "*" onClick = {this.buttonPress}>&times;</button><br></br>
            <button class="buttons"  name = "1" onClick = {this.buttonPress}>1</button>
            <button class="buttons"  name = "2" onClick = {this.buttonPress}>2</button>
            <button class="buttons"  name = "3" onClick = {this.buttonPress}>3</button>
            <button class="clrbutton"  name = "+" onClick = {this.buttonPress}>+</button><br></br>
            <button class="buttons"  name = "." onClick = {this.buttonPress}>.</button>
            <button class="buttons"  name = "0" onClick = {this.buttonPress}>0</button>
            <button class="clrbutton"  name = "=" onClick = {this.buttonPress}>=</button>
            <button class="clrbutton"  name = "-" onClick = {this.buttonPress}>&minus;</button><br></br>
      </div>
    );
  }
}

export default Keypad;
