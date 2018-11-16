const React = require('react')
const Fragment = React.Fragment

const Footer = props =>
  <Fragment>
    <div className="grid-container fluid footer">
      <div className="row large-12">
        <div className="column text-center"><a href="https://github.com/bunrithbuth/bc-project-2">Github</a></div>
        <div className="column text-center">© Shookboyz 2018</div>
      </div>
    </div>
  </Fragment>

module.exports = Footer