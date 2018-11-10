const React = require('react')
const Fragment = React.Fragment

const Nav = props =>
<Fragment>
  <div className="top-bar" id="example-menu">
    <div className="top-bar-left">
      <ul className="dropdown menu" data-dropdown-menu>
        <li className="menu-text">Site Title</li>
        <li>
          <a href="#">One</a>
        </li>
        <li><a href="#">Two</a></li>
        <li><a href="#">Three</a></li>
      </ul>
    </div>
  </div>
</Fragment>

module.exports = Nav