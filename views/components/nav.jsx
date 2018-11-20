const React = require('react')
const Fragment = React.Fragment

const Nav = props =>

  <Fragment>
    <div className="title-bar nav" data-responsive-toggle="example-menu" data-hide-for="medium">
      <button className="menu-icon" type="button" data-toggle="example-menu"></button>
      <div className="title-bar-title">Menu</div>
    </div>

    <div className="top-bar nav" id="nav">
      <div className="top-bar-left">
        <ul className="dropdown menu nav" data-dropdown-menu>
          <li className="menu-text">Deez Polls</li>
          <li><a href="#">One</a></li>
          <li><a href="#">Two</a></li>
          <li><a href="#">Three</a></li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu nav">
            <li><a href="#">Log In</a></li>
        </ul>
      </div>
    </div>
  </Fragment>

module.exports = Nav