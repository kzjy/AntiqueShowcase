import React, {Component} from 'react'
import {push as RevealMenu}  from 'react-burger-menu';
import {Link} from 'react-router-dom';
import Radium from 'radium';

let RadiumLink = Radium(Link);

class Menu extends Component {
    state = {
        windowWidth: window.innerWidth,
        // menuOpen: false,
    }

    // state = {
    //     menuOpen: false,
    //   }
    
    //   // This keeps your state in sync with the opening/closing of the menu
    //   // via the default means, e.g. clicking the X, pressing the ESC key etc.
    //   handleStateChange (state) {
    //     this.setState({menuOpen: state.isOpen})  
    //   }
      
    //   // This can be used to close the menu, e.g. when a user clicks a menu item
    //   closeMenu () {
    //     this.setState({menuOpen: false})
    //   }
    
      // This can be used to toggle the menu, e.g. when using a custom icon
      // Tip: You probably want to hide either/both default icons if using a custom icon
      // See https://github.com/negomi/react-burger-menu#custom-icons
    //   toggleMenu () {
    //     this.setState(state => ({menuOpen: !state.menuOpen}))
    //   }
    

    componentDidMount() {
        window.addEventListener("resize", this.updateDimension.bind(this));
        this.updateDimension();
    }

    updateDimension() {
        this.setState({windowWidth: window.innerWidth})
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
              padding: '40% 1.75em 0',
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
                width: '30px',
                height: '25px',
                left: '10px',
                top: '12px'
            }
        }
        return styles;
    }

    render() {
        var styles = this.getMenuStyle();
        return (
            <RevealMenu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} styles={styles}>
                <RadiumLink className="menu-item" to="/">
                    <i class="fas fa-home"></i>  {"  "}
                    首页 | Home                
                </RadiumLink>
                <RadiumLink className="menu-item" to="/gallery">
                    <i class="fas fa-image"></i> {"  "} 
                    收藏 | Gallery
                </RadiumLink>
                <RadiumLink  className="menu-item" to="/about">
                    <i class="fas fa-address-card"></i> {"  "} 
                    关于 | About
                </RadiumLink>
                <RadiumLink className="menu-item" to="/contact">
                    <i class="fas fa-phone"></i> {"  "} 
                    联系 | Contact
                </RadiumLink> 
            </RevealMenu>
        );
    }
}

export default Menu;
