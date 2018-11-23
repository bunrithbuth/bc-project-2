const React = require('react')
const Nav = require('./components/nav')
const Footer = require('./components/footer')
const Head = require('./components/head')
const Script = require('./components/script')

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
                    <div id="userVote" className="medium-12 cell" value={props.poll.id}>
                        <div class="card" >
                                <h3>{props.poll.name}</h3>
                            <div class="card-divider">
                                {props.poll.type === 'twoChoices' ? <div id={props.poll.id} className="twoChoices" value={props.poll.id}>
                                    <input className="radio radio-1 options" id="radio-1" value="1" type="radio" name="radio" />
                                    <label className="radio radio-1" htmlFor="radio-1">{props.poll.pollOptions[0].name}</label>
                                    <input className="radio radio-2 options" id="radio-2" value="1" type="radio" name="radio" />
                                    <label className="radio radio-2" htmlFor="radio-2">{props.poll.pollOptions[1].name}</label></div> : <h2></h2>}
                                {props.poll.type === 'stars' ? <div id={props.poll.id} div className="stars" value={props.poll.id}>
                                    <input className="star star-1 options" id="star-1" value="1" type="radio" name="star" />
                                    <label className="star star-1" htmlFor="star-1"></label>
                                    <input className="star star-2 options" id="star-2" value="2" type="radio" name="star" />
                                    <label className="star star-2" htmlFor="star-2"></label>
                                    <input className="star star-3 options" id="star-3" value="3" type="radio" name="star" />
                                    <label className="star star-3" htmlFor="star-3"></label>
                                    <input className="star star-4 options" id="star-4" value="4" type="radio" name="star" />
                                    <label className="star star-4" htmlFor="star-4"></label>
                                    <input className="star star-5 options" id="star-5" value="5" type="radio" name="star" />
                                    <label className="star star-5" htmlFor="star-5"></label></div> : <h2></h2>}
                                {props.poll.type === 'multiple' ? <div id={props.poll.id} className="mutiple" value={props.poll.id}> 
                                    {props.poll.pollOptions.map(i => <a><input className="radio radiomc-0" id="radiomc-0" type="radio" name="radiomc" value="1" />
                                    <label className="radio radiomc-0 options" htmlFor="radiomc-0">{i.name}</label></a>)}
                                    </div> : <h2></h2>}
                            </div>
                            
                        </div>
                        <button id="submit" type="submit" className="createButton button">Submit Vote</button>
                    </div>
                    
                </div>
                <div id="cardContainer" className="grid-x grid-padding-x">
                    <div id="castVote" className="medium-12 cell">
                        <div class="card">
                            <div class="card-divider">
                                <div id="castRoute"></div>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
            <Script />
            <script src='./js/votes.js' />

        </body>
    </html>

module.exports = Publish