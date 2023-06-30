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
              className="checkbox"
              type="checkbox"
              onChange={onToggleShowLeftNavbar}
              checked={showLeftNavbar}
            />
            <label className="label" htmlFor="content">
              Left Navbar
            </label>
          </div>
          <div className="input-container">
            <input
              className="checkbox"
              type="checkbox"
              onChange={onToggleShowRightNavbar}
              checked={showRightNavbar}
            />
            <label className="label" htmlFor="content">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
