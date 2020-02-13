// Import the React and ReactDOM libraries 
import ReactDOM from 'react-dom';
import { Link, Route, HashRouter, Switch } from 'react-router-dom';
import './style.scss';
import React, { Component } from 'react';
import AboutUs from './aboutUs';
import Footer from './footer';
import NavBar from './NavBar';
import House from './houses';
import Investments from './investments';
import Button from './buttons';
import ContactUs from './contactUs';
import faker from 'faker';

class App extends Component {
  render(){
    return(
      <>
        <HashRouter>
          <h1>Puget Sound Investments</h1>
          <img src={faker.image.avatar()} />
          <div>
            <NavBar />
            <Switch>
              <Route exact path="/aboutUs" component={AboutUs} />
              <Route exact path="/house" component={House} />
              <Route exact path="/investments" component={Investments} />
              <Route exact path="/contactUs" component={ContactUs} />
            </Switch>
          </div>
          <img src="../assets/house.jpg" alt="house"></img> 
          <Button />
          <Footer />
        </HashRouter>
      </>
      )
    }
  }

  // Take the react component and show it on the screen 
  ReactDOM.render(
      <App />, 
    document.querySelector('#root')
    );



                {/* <Link to="/">Home</Link>
            <Link to={{pathname: '/aboutUs'}}>About Us</Link>
            <Link to={{pathname: '/house'}}>Houses</Link>
            <Link to={{pathname: '/investments'}}>Investments</Link>
            <Link to={{pathname: '/contactUs'}}>Contact Us</Link> */}