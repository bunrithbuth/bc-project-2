const React = require('react')

const Nav = props =>
  <div className="top-bar" id="nav">
    <div className="top-bar-left">
      <ul className="dropdown menu">
        <li className="menu-text">Deez Polls</li>
        <li><a href="/createpolls">Create a Poll</a></li>
        <li><a href="#">View Polls</a></li>
        <li><a href="#">About Us</a></li>
          <div className="top-bar-right">
           <ul className="menu">
              <li><a className="top-bar-right" href="#">Log In</a></li>
           </ul>
          </div>
      </ul>
    </div>
  </div>


module.exports = Nav