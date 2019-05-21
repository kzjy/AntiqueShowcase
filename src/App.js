import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Gallery from './components/Gallery';
import Menu from './components/layout/Menu';
import About from './components/About';
import Contact from './components/Contact'
import Home from './components/Home';

class App extends React.Component {

  render () {
    return (
      <Router style={{height: '100%'}}>
        <div id="outer-container" className="App" style={{height: '100%'}}>
          <Menu 
            pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
            </Menu>
          <div id="page-wrap" style={{height: '100%', overflow: 'auto'}}>
            <div className="background"/>
            <div className="container">
            <div className="MenuWrap"/>
              <Route exact path ="/" render={props => (
                <React.Fragment>
                  <Header/>
                  <Home/>
                </React.Fragment>
              )}/>
              <Route path="/gallery" component={Gallery}/>
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
            </div>
          </div>
        </div>
      </Router>
    );
  }
  
}

export default App;
