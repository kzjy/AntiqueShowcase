import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Gallery from './components/Gallery';
import Menu from './components/layout/Menu';
import About from './components/About';
import Contact from './components/Contact'

class App extends React.Component {

  state = {
    menuOpen: false,
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  // handleStateChange (state) {
  //   this.setState({menuOpen: state.isOpen})  
  // }

  // toggleMenu () {
  //   this.setState(state => ({menuOpen: !state.menuOpen}))
  // }

  render () {
    return (
      <Router style={{height: '100%'}}>
        <div id="outer-container" className="App" style={{height: '100%'}}>
          <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
            <div>
              Menu
            </div>
          </Menu>
          <div id="page-wrap" style={{height: '100%', overflow: 'auto'}}>
            <div className="background"/>
            <Header/>
            <div className="container">
            <div className="MenuWrap"/>
              <Route exact path ="/" render={props => (
                <React.Fragment>
                  {/* <Gallery/> */}
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
