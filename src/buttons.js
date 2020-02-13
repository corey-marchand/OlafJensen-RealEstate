import React, { Component } from 'react'; 



class Button extends Component {
  render(){
    const buttonText = { text: 'click me'};

    return (
      <div>
        <label className="label" htmlFor="name">Enter Name:</label>
        <input id="name" type="text" />
        <button style={{ backgroundColor: 'red', color: 'white'}}>{buttonText.text}</button>
      </div>
    )
  };
}

export default Button;