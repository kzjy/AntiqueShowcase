import React, {Component} from 'react'
import {reveal as  RevealMenu}  from 'react-burger-menu';
import {Link} from 'react-router-dom';
import Radium from 'radium';
import Avatar from './Avatar';

let RadiumLink = Radium(Link);

class Menu extends Component {

    state = {
        windowWidth: window.innerWidth,
        menuOpen: false,
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimension.bind(this));
        this.updateDimension();
    }

    updateDimension() {
        this.setState({windowWidth: window.innerWidth})
    }

    getMenuWidth() {
        return (this.state.windowWidth <= 900) ? 250: 300;
    }

    getMenuStyle() {
        var styles = {
            bmBurgerButton: {
              position: 'absolute',
              width: '36px',
              height: '30px',
              left: '36px',
              top: '36px'
            },
            bmBurgerBars: {
              background: '#3f3f3f'
            },
            bmMenu: {
              background: '#ffffff',
              padding: '10% 1.75em 0',
              height: '100%'
            },
            bmItemList: {
                color: '#b8b7ad',
                padding: '0.8em'
              },
            bmOverlay: {
              background: 'rgba(0, 0, 0, 0.3)'
            }
        }
        if (this.state.windowWidth <= 900) {
            styles.bmBurgerButton = {
                position: 'absolute',
                width: '33px',
                height: '27px',
                left: '15px',
                top: '16px'
            };
            styles.bmMenu = {
                background: '#ffffff',
                padding: '10%',
            };
        }
        return styles;
    }
    
      handleStateChange = (state) => {
        console.log(this.state.menuOpen)
        this.setState({menuOpen: state.isOpen})  
      }
    
      closeMenu = (e) => {
        this.setState({menuOpen: false});
      }

    render() {
        var menuWidth = this.getMenuWidth();
        var styles = this.getMenuStyle();
        return (
            <RevealMenu  width={menuWidth} onStateChange={(state) => this.handleStateChange(state)} isOpen={this.state.menuOpen} pageWrapId={"page-wrap"} outerContainerId={"outer-container"} styles={styles}>
                <Avatar/>
                <div style={{height:'0.2em', margin: '10px 0px', backgroundColor: '#e5e5e5'}}/>
                <h1 style={{fontSize: '1.8em', color: '#525252', margin: "10px 0 10px 10px "}}>菜单 | Menu</h1>
                <RadiumLink onClick={this.closeMenu}   className="menu-item" to="/">
                    <i className="fas fa-home"></i>  {"  "}
                    首页 | Home                
                </RadiumLink>
                <RadiumLink onClick={this.closeMenu}     className="menu-item" to="/gallery">
                    <i className="fas fa-image"></i> {"  "} 
                    收藏 | Gallery
                </RadiumLink>
                <RadiumLink onClick={this.closeMenu}    className="menu-item" to="/about">
                    <i className="fas fa-address-card"></i> {"  "} 
                    关于 | About
                </RadiumLink>
                <RadiumLink onClick={this.closeMenu}    className="menu-item" to="/contact">
                    <i className="fas fa-phone"></i> {"  "} 
                    联系 | Contact
                </RadiumLink> 
            </RevealMenu>
        );
    }
}

export default Menu;
