const React = require('react')
const Fragment = React.Fragment

const Nav = props =>
<Fragment>
  <div className="top-bar" id="nav">
    <div className="top-bar-left">
      <ul className="dropdown menu">
        <li className="menu-text">Deez Polls</li>
        <li><a href="/createpolls">Create a Poll</a></li>
        <li><a href="#">View Polls</a></li>
        <li><a href="#">About Us</a></li>
      </ul>
    </div>
  </div>
</Fragment>

module.exports = Nav