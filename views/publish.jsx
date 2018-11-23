const React = require('react')
const Nav = require('./components/nav')
const Footer = require('./components/footer')
const Head = require('./components/head')
const Script = require('./components/script')
const Multiple = require('./components/multiple')
const Stars = require('./components/stars')
const TwoChoices = require('./components/twoChoice')

const Publish = (props) =>
    <html lang='en'>
        <Head />
        <body>
            <Nav />
                <div id="cardContainer" className="grid-x grid-padding-x">
                    <div className="medium-12 cell">
                        <div class="card">
                        </div>
                    </div>
                </div>
                <div id="cardContainer" className="grid-x grid-padding-x">
                    <div className="medium-12 cell">
                        <div class="card">
                                <h3>{props.poll.name}</h3>
                                <h4></h4>
                            <div class="card-divider">
                                {props.poll.type === 'twoChoices' ? <div id={props.poll.id} className="twoChoices">
                                    <input className="radio radio-1" id="radio-1" type="radio" name="radio" />
                                    <label className="radio radio-1" htmlFor="radio-1">{props.poll.pollOptions[0].name}</label>
                                    <input className="radio radio-2" id="radio-2" type="radio" name="radio" />
                                    <label className="radio radio-2" htmlFor="radio-2">{props.poll.pollOptions[1].name}</label></div> : <h2></h2>}
                                {props.poll.type === 'stars' ? <div id={props.poll.id} div className="stars">
                                    <input className="star star-5" id="star-5" type="radio" name="star" />
                                    <label className="star star-5" htmlFor="star-5"></label>
                                    <input className="star star-4" id="star-4" type="radio" name="star" />
                                    <label className="star star-4" htmlFor="star-4"></label>
                                    <input className="star star-3" id="star-3" type="radio" name="star" />
                                    <label className="star star-3" htmlFor="star-3"></label>
                                    <input className="star star-2" id="star-2" type="radio" name="star" />
                                    <label className="star star-2" htmlFor="star-2"></label>
                                    <input className="star star-1" id="star-1" type="radio" name="star" />
                                    <label className="star star-1" htmlFor="star-1"></label></div> : <h2></h2>} 
                                {props.poll.type === 'multiple' ? <div id={props.poll.id} className="mutiple">
                                    <input className="radiomc radiomc-0" id="radiomc-0" type="radio" name="radiomc" />
                                    <label className="radiomc radiomc-0" htmlFor="radiomc-0">{props.poll.pollOptions[0].name}</label>
                                    <input className="radiomc radiomc-1" id="radiomc-1" type="radio" name="radiomc" />
                                    <label className="radiomc radiomc-1" htmlFor="radiomc-1">{props.poll.pollOptions[1].name}</label>
                                    <input className="radiomc radiomc-2" id="radiomc-2" type="radio" name="radiomc" />
                                    <label className="radiomc radiomc-2" htmlFor="radiomc-2">{props.poll.pollOptions[2].name}</label></div> : <h2></h2>}
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
            <Script />
            <script src='./js/publish.js' />

        </body>
    </html>

module.exports = Publish