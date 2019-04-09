import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}

          {/* <img className="shipImage" src='img/test1.jpg' />
                <img className="shipImage" src={require('./img/test2.jpg')} />
                <img className="shipImage" src={require('./img/test3.jpg')} />
                <img className="shipImage" src={require('./img/test4.jpg')} />
                <img className="shipImage" src={require('./img/test5.jpg')} />
                <img className="shipImage" src={require('./img/test6.jpg')} />
                <img className="shipImage" src={require('./img/test7.jpg')} /> */}

                <img className="shipImage" src={require('./img/test1.jpg')} />
                <img className="shipImage" src='img/test2.jpg' />
                <img className="shipImage" src='img/test3.jpg' />
                <img className="shipImage" src='img/test4.jpg' />
                <img className="shipImage" src='img/test5.jpg' />
                <img className="shipImage" src='img/test6.jpg' />
                <img className="shipImage" src='img/test7.jpg' />
                <img className="shipImage" src='img/test8.jpg' />
                <img className="shipImage" src='img/test9.jpg' />
                <img className="shipImage" src='img/test10.jpg' />
                <img className="shipImage" src='img/test11.jpg' />
                <img className="shipImage" src='img/1.webp' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
