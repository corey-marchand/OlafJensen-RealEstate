// Import the React and ReactDOM libraries 
import React from 'react';
import ReactDOM from 'react-dom';
import css from './App.scss';

// Create a react component 
const App = () => {
  return (
    <>
      <h1>Title</h1>
      <ul>
        <li>About Us</li>
        <li>Listings</li>
        <li>Investments</li>
        <li>Contact Us</li>
      </ul>
    </>
  )
};

// Take the react component and show it on the screen 
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);