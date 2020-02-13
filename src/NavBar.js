import './style.scss';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render(){
    return(
      <>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/aboutUs'>About us</NavLink></li>
          <li><NavLink to='/house'>Houses</NavLink></li>
          <li><NavLink to='/investments'>Invest</NavLink></li>
          <li><NavLink to="/contactUs">Contact Us</NavLink></li>
        </ul>
      </>
    )
  }
}

export default NavBar;
