const React = require('react')
const Fragment = React.Fragment

const Nav = props =>

  <Fragment>

<div className ="title-bar" data-responsive-toggle="nav" data-hide-for="medium">
<button className ="menu-icon" type="button" data-toggle="nav"></button>
<div className ="title-bar-title">Menu</div>
</div>

<div className="top-bar" id="nav">
    <div className="top-bar-left">
      <ul className="dropdown menu">
        <li className="menu-text">Deez Polls</li>
        <li><a href="/createpolls">Create a Poll</a></li>
        <li><a href="/viewpolls">View Polls</a></li>
        <li><a href="#">About Us</a></li>
          <div className="top-bar-right">
           <ul className="menu">
              <li><a className="top-bar-right" href="/signin">Log In</a></li>
           </ul>
          </div>
      </ul>
    </div>
  </div>

</Fragment>


module.exports = Nav