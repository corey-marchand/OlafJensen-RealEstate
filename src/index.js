// Import the React and ReactDOM libraries 
import ReactDOM from 'react-dom';
import { Route, HashRouter, Switch, BrowserRouter } from 'react-router-dom';
import './style.scss';
import React, { Component } from 'react';
import AboutUs from './aboutUs';
import Footer from './footer';
import NavBar from './NavBar';
import House from './houses';
import Investments from './investments';
import ContactUs from './contactUs';

class App extends Component {
  render(){
    return(
      <>
        <HashRouter>
          <main>
            <header>
              <div className="title">
                Sound Property Investments
              </div>
              <div className="navigationBar">
                <NavBar id="navigation-bar"/>
                <Switch>
                  <ul>
                    <li><Route className="route" exact path="/aboutUs" component={AboutUs} /></li>
                    <li><Route className="route" exact path="/house" component={House} /></li>
                    <li><Route className="route" exact path="/investments" component={Investments} /></li>
                    <li><Route className="route" exact path="/contactUs" component={ContactUs} /></li>
                  </ul>
                </Switch>
              </div>
            </header>
          <body>
          </body>
          <House />
          <Investments />
          <ContactUs /> 
          <Footer className="footer" />
          </main>
        </HashRouter>
      </>
      )
    }
  }

  ReactDOM.render(
    <BrowserRouter>
      <App /> 
    </BrowserRouter>,
    document.querySelector('#root')
    );



                