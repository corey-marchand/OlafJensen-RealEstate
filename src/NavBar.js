import './style.scss';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render(){
    return(
      <>
        <ul>
          <NavLink className="a" to='/'>Home</NavLink>
          <NavLink className="a" to='/aboutUs'>About</NavLink>
          <NavLink className="a" to='/house'>Houses</NavLink>
          <NavLink className="a" to='/investments'>Invest</NavLink>
          <NavLink className="a" to="/contactUs">Contact Us</NavLink>
        </ul>
      </>
    )
  }
}

export default NavBar;
