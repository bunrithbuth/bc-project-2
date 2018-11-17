const React = require('react')

const PollsOptions = () =>
    <div id="pollsOptions">
        <h1>Please select one of the following</h1>
        <a id="starForm" href="#">
            <div className="callout large">
                <h3>Star Rating</h3>
                <p>Will put a thumbnail preview of the star rating card here</p>
            </div>
        </a>
        <a id="multipleForm" href="#">
            <div className="callout large">
                <h3>Multiple Options</h3>
                <p>Will put a thumbnail preview of the multiple options card here</p>
            </div>
        </a>
        <a id="twoChoicesForm" href="#">
            <div className="callout large">
                <h3>2 Choices</h3>
                <p>Will put a thumbnail preview of the 2 choices card here</p>
            </div>
        </a>
    </div>

module.exports = PollsOptions