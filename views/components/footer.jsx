const React = require('react')
const Fragment = React.Fragment

const Footer = props =>
  <Fragment>
    <div className="footer">
      <div className="grid-container">
        <div className="grid-x">
          <div className="cell large-auto"><strong>Resources</strong><br />
            <p><a href="https://github.com/bunrithbuth/bc-project-2">Github</a><br />
              <a href="https://firebase.google.com/docs/auth/">Firebase</a><br />
              <a href="https://foundation.zurb.com/">Foundation</a>
            </p>
          </div>
          <div className="cell large-auto"><strong>Presented By:</strong><br />
            <p>© Shookboyz 2018</p>
          </div>
        </div>
      </div>
    </div>
  </Fragment>

module.exports = Footer