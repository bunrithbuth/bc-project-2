const React = require('react')
const Fragment = React.Fragment

const Nav = props =>
<Fragment>
    <div className="top-bar" id="nav">
      <div className="top-bar-left">
        <ul className="dropdown menu" id="nav2">
          <li className="menu-text">Deez Polls</li>
          <li><a href="#">Create a Poll</a></li>
          <li><a href="#">View Polls</a></li>
          <li><a href="#">About Us</a></li>
          <div className="top-bar-right">
           <ul className="menu">
              <li><a className="top-bar-right" id="nav3" href="#">Log In</a></li>
           </ul>
          </div>
      </ul>
    </div>
  </div>
</Fragment>

module.exports = Nav