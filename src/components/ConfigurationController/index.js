// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      return (
        <div className="control-bg">
          <h1 className="control-title">Layout</h1>
          <div className="input-container">
            <input
              id="content"
              className="checkbox"
              type="checkbox"
              onChange={onToggleShowContent}
              checked={showContent}
            />
            <label className="label" htmlFor="content">
              Content
            </label>
          </div>
          <div className="input-container">
            <input
              id="leftNavbar"
              className="checkbox"
              type="checkbox"
              onChange={onToggleShowLeftNavbar}
              checked={showLeftNavbar}
            />
            <label className="label" htmlFor="leftNavbar">
              Left Navbar
            </label>
          </div>
          <div className="input-container">
            <input
              id="rightNavbar"
              className="checkbox"
              type="checkbox"
              onChange={onToggleShowRightNavbar}
              checked={showRightNavbar}
            />
            <label className="label" htmlFor="rightNavbar">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
