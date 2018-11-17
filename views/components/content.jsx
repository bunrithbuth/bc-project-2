const React = require('react')
const Fragment = React.Fragment

const Content = props =>
  <Fragment>
    <div className="grid-container fluid content">
      <div className="grid-x">
        <div className="row large-12 text-center"><h1 id='main'>Welcome to Deez Polls</h1></div>
          <p className="row large-12 text-center">The purpose of this app is to allow users to create polls to share publicly or privately. Guest users will able to participate in public polls but will have to register to participate in private polls.</p>
      </div>
    </div>
  </Fragment>

module.exports = Content