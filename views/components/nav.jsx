const React = require('react')
const Fragment = React.Fragment

const Nav = props =>

  <Fragment>

  <div className ="title-bar" data-responsive-toggle="nav1" data-hide-for="medium">
  <button className ="menu-icon" type="button" data-toggle="nav1"></button>
  <div className ="title-bar-title">Menu</div>
  </div>

  <div className="top-bar" id="nav1">
      <div className="top-bar-left">
        <ul className="dropdown menu" id="nav2">
          <li className="menu-text" id="deez"><a href="/">Deez Polls</a></li>
          <li><a href="/createpolls">Create a Poll</a></li>
          <li><a href="/mypolls">My Polls</a></li>
          <li><a href="/aboutus">About Us</a></li>
          <li><a href="/polls">Community Polls</a></li>
            <div className="top-bar-right">
            <ul className="menu">
                <li><a className="top-bar-right" id="nav3" href="/signin">Log In</a></li>
            </ul>
            </div>
        </ul>
      </div>
    </div>

  </Fragment>


module.exports = Nav