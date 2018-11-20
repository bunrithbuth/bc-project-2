const React = require('react')
const Fragment = React.Fragment

const Poll = () =>

    <Fragment>
        <div className="grid-container">
            <div id="showForm"></div>
            <a href="/createpolls" id="createNew" class="button">Create New Poll</a>
        </div>
    </Fragment>

module.exports = Poll