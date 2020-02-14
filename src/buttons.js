import React, { Component } from 'react'; 



class Button extends Component {
  render(){
    const fieldText = { fn: 'First Name:', ln: 'Last Name:', email: 'email:', information: 'Anything else?'};

    return (
    <>
      <div>
      <label className="form" htmlFor="name"> {fieldText.fn} </label>
        <input id="name" type="text" />
      <label className="form" htmlFor="name">{fieldText.ln}</label>
        <input id="name" type="text" />
      <label className="form" htmlFor="name">{fieldText.email}</label>
        <input id="name" type="text" />
      <label className="form" htmlFor="name">{fieldText.information}</label>
        <input id="name" type="text" />
      </div>
      <button style={{ backgroundColor: 'red', color: 'white'}}>Submit</button> 
    </>
    )
  };
}

export default Button;