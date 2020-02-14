import './style.scss';
import React, { Component } from 'react';
import Button from './buttons';

class ContactUs extends Component {
  render(props){
    return (
      <>
        <div>Contact our Agents</div>
        <div>Our team would be happy to answer your sales questions. Fill out the form and we will be in touch as soon as possible</div>
        <div id="form">
         <Button />
        </div>
      </>
    )
  }
}

export default ContactUs;
