// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Layout = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="layout-bg">
          <h1 className="header">Header</h1>
          <div className="layout-body">
            {showLeftNavbar && (
              <div className="left-navbar">
                <h1 className="navbar-title">Left Navbar Menu</h1>
                <ul className="left-menu-list">
                  <li className="menu-list-item">Item 1</li>
                  <li className="menu-list-item">Item 2</li>
                  <li className="menu-list-item">Item 3</li>
                  <li className="menu-list-item">Item 4</li>
                </ul>
              </div>
            )}
            {showContent && (
              <div className="content">
                <h1 className="navbar-title">Content</h1>
                <p className="navbar-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus semper euismod dapibus. Nam sit amet faucibus felis.
                  Donec porttitor mauris mi, id gravida ipsum vehicula sed.
                  Mauris a nisl ex. Donec sagittis nibh sed purus luctus congue.
                  Mauris molestie augue sed nunc porta, ac laoreet lacus varius.
                  Fusce blandit tristique massa, eget tristique neque commodo
                  in. Donec semper, nisi ac bibendum sodales, dolor dolor
                  facilisis massa, in dictum leo eros eu ligula. Nullam lacinia
                  augue odio, et tempor ipsum pretium id. Nulla tempor justo
                  magna, eu laoreet sapien lacinia eu.
                </p>
              </div>
            )}
            {showRightNavbar && (
              <div className="left-navbar">
                <h1 className="navbar-title">Right Navbar Menu</h1>
                <div className="left-menu-list ">
                  <p className="menu-list-item box">Ad 1</p>
                  <p className="menu-list-item box">Ad 2</p>
                </div>
              </div>
            )}
          </div>
          <h1 className="header">Footer</h1>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Layout
