const React = require('react')
const Nav = require('./components/nav')
const Footer = require('./components/footer')
const Head = require('./components/head')
const Script = require('./components/script')

const Publish = (props) =>
    <html lang='en'>
        <Head />
        <body className="publish">
            <Nav />
            <div className="grid-container">
                <div id="cardContainer" className="grid-x grid-padding-x">
                    <div id="userVote" className="medium-12 cell" value={props.poll.id}>
                        <div class="card voteContainer" >
                            <div className="card-divider">
                            <div className="avatarContainer text-right">
                                <img className="avatar" src="" alt="profile avatar" />
                            </div>
                                <h1>{props.poll.name}</h1>
                            </div>
                            <div className="card-section">
                                {props.poll.type === 'twoChoices' ? <div className="twoChoices">
                                    <input className="radio radio-1 options" id="radio-1" value={props.poll.pollOptions[0].id} type="radio" name="radio" />
                                    <label className="radio radio-1" htmlFor="radio-1">{props.poll.pollOptions[0].name}</label>
                                    <input className="radio radio-2 options" id="radio-2" value={props.poll.pollOptions[1].id} type="radio" name="radio" />
                                    <label className="radio radio-2" htmlFor="radio-2">{props.poll.pollOptions[1].name}</label></div> : <h2></h2>}
                                {props.poll.type === 'stars' ? <div className="stars">
                                <div data-pollOptionId={props.poll.pollOptions[0].id} className="rate">
                                    <input type="radio" id="star5" name="rate" value="5" />
                                    <label for="star5" title="text">5 stars</label>
                                    <input type="radio" id="star4" name="rate" value="4" />
                                    <label for="star4" title="text">4 stars</label>
                                    <input type="radio" id="star3" name="rate" value="3" />
                                    <label for="star3" title="text">3 stars</label>
                                    <input type="radio" id="star2" name="rate" value="2" />
                                    <label for="star2" title="text">2 stars</label>
                                    <input type="radio" id="star1" name="rate" value="1" />
                                    <label for="star1" title="text">1 star</label>
                                </div> </div> : <h2></h2>}
                                {props.poll.type === 'multiple' ? <div id={props.poll.id} className="mutiple" value={props.poll.id}> 
                                    {props.poll.pollOptions.map(i => <a><input className="radio"  id={'radiomc-' + i.id} type="radio" name="radio" value={i.id} />
                                    <label className="radio" htmlFor={'radio-' + i.id}>{i.name}</label></a>)}
                                    </div> : <h2></h2>}
                            </div>
                        {/* <div>
                            <input id="copy-link" type="text" readOnly value="" />
                        <button id="share" className="createButton button"><i class="fas fa-clipboard"></i></button>
                        </div> */}
                        <button id="submit" data-type={props.poll.type} type="submit" className="createButton button">Submit Vote</button>
                        </div>
                    </div>  
                </div>
            </div>
            <div className="grid-container">
                <div id="cardContainer" className="grid-x grid-padding-x">
                    <div id="castVote" className="medium-12 cell">
                            <div>
                                <input id="copy-link" type="text" readOnly value="" />
                                <button id="share" className="createButton button"><i class="fas fa-clipboard"></i></button>
                            </div>  
                    </div>
                </div>                
            </div>

            <Footer />
            <Script />
            <script src='/js/votes.js' />

        </body>
    </html>

module.exports = Publish