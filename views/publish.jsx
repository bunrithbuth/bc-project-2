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
                            
                            <div className="card-section" data-pollId={props.poll.id}>
                                {props.poll.type === 'twoChoices' ? <div className="twoChoices" id={props.poll.id}>
                                    <ul>
                                    <input className="radio radio-1 options" id="radio-1" value={props.poll.pollOptions[0].id} type="radio" name="radio" />
                                    <label className="radio radio-1" htmlFor="radio-1">{props.poll.pollOptions[0].name}</label>
                                    <div className="progress" role="progressbar" tabindex="0" aria-valuenow={Math.round((parseInt(props.poll.pollOptions[0].votes) / (parseInt(props.poll.pollOptions[1].votes) + parseInt(props.poll.pollOptions[0].votes))) * 100)} aria-valuemin="0" aria-valuetext={Math.round((parseInt(props.poll.pollOptions[0].votes) / (parseInt(props.poll.pollOptions[1].votes) + parseInt(props.poll.pollOptions[0].votes))) * 100) + ' percent'} aria-valuemax="100">
                                    <span className="progress-meter" style={ { width: Math.round((parseInt(props.poll.pollOptions[0].votes) / (parseInt(props.poll.pollOptions[1].votes) + parseInt(props.poll.pollOptions[0].votes))) * 100) + '%'} }>
                                        <p className="progress-meter-text">{parseInt(props.poll.pollOptions[0].votes) == 0 ? 0 : Math.round((parseInt(props.poll.pollOptions[0].votes) / (parseInt(props.poll.pollOptions[1].votes) + parseInt(props.poll.pollOptions[0].votes))) * 100)} %</p>
                                    </span>
                                    </div>
                                    <input className="radio radio-2 options" id="radio-2" value={props.poll.pollOptions[1].id} type="radio" name="radio" />
                                    <label className="radio radio-2" htmlFor="radio-2">{props.poll.pollOptions[1].name}</label>
                                    <div className="progress" role="progressbar" tabindex="0" aria-valuenow={Math.round((parseInt(props.poll.pollOptions[1].votes) / (parseInt(props.poll.pollOptions[1].votes) + parseInt(props.poll.pollOptions[0].votes))) * 100)} aria-valuemin="0" aria-valuetext={Math.round((parseInt(props.poll.pollOptions[1].votes) / (parseInt(props.poll.pollOptions[1].votes) + parseInt(props.poll.pollOptions[0].votes))) * 100) + ' percent'} aria-valuemax="100">
                                    <span className="progress-meter" style={ { width: Math.round((parseInt(props.poll.pollOptions[1].votes) / (parseInt(props.poll.pollOptions[1].votes) + parseInt(props.poll.pollOptions[0].votes))) * 100) + '%'} }>
                                        <p className="progress-meter-text">{parseInt(props.poll.pollOptions[1].votes) == 0 ? 0 : Math.round((parseInt(props.poll.pollOptions[1].votes) / (parseInt(props.poll.pollOptions[1].votes) + parseInt(props.poll.pollOptions[0].votes))) * 100)} %</p>
                                    </span>
                                    </div>
                                    </ul>
                                    </div> : <h2></h2>}
                                {props.poll.type === 'stars' ? <div className="stars">
                                <div data-pollOptionId={props.poll.pollOptions[0].id} id={props.poll.id} className="rate">
                                    <ul>
                                    <input className="star star-1" id="star1" type="radio" name="rate" value="1" />
                                    <label className="star star-1" htmlFor="star1" title="text"></label>
                                    <input className="star star-2" id="star2" type="radio" name="rate" value="2" />
                                    <label className="star star-2" htmlFor="star2" title="text" ></label>
                                    <input className="star star-3" id="star3" type="radio" name="rate" value="3" />
                                    <label className="star star-3" htmlFor="star3" title="text"></label>
                                    <input className="star star-4" id="star4" type="radio" name="rate" value="4" />
                                    <label className="star star-4" htmlFor="star4" title="text"></label>
                                    <input className="star star-5" id="star5" type="radio" name="rate" value="5" />
                                    <label className="star star-5" htmlFor="star5" title="text"></label>
                                    <br></br>
                                    { (parseInt(props.poll.pollOptions[0].starRating) / parseInt(props.poll.pollOptions[0].starRatingCount)) >= 1 ? <i class="fas fa-star"></i> : '' }
                                    { (parseInt(props.poll.pollOptions[0].starRating) / parseInt(props.poll.pollOptions[0].starRatingCount)) >= 1.65 ? <i class="fas fa-star"></i> : '' }
                                    { (parseInt(props.poll.pollOptions[0].starRating) / parseInt(props.poll.pollOptions[0].starRatingCount)) >= 2.65 ? <i class="fas fa-star"></i> : '' }
                                    { (parseInt(props.poll.pollOptions[0].starRating) / parseInt(props.poll.pollOptions[0].starRatingCount)) >= 3.65 ? <i class="fas fa-star"></i> : '' }
                                    { (parseInt(props.poll.pollOptions[0].starRating) / parseInt(props.poll.pollOptions[0].starRatingCount)) >= 4.65 ? <i class="fas fa-star"></i> : '' }
                                    </ul></div> </div> : <h2></h2>}
                                {props.poll.type === 'multiple' ? <div id={props.poll.id} className="mutiple" value={props.poll.id}> 
                                    {props.poll.pollOptions.map(i => <ul>
                                        <a><input className="radio"  id={'radiomc-' + i.id} type="radio" name="radio" value={i.id} />
                                        <label className="radio" htmlFor={'radio-' + i.id}>{i.name}</label>
                                        <div class="progress" role="progressbar" tabindex="0" aria-valuenow={parseInt(i.votes) / parseInt(i.votes)} aria-valuemin="0" aria-valuetext={parseInt(i.votes)} aria-valuemax="100">
                                            <span class="progress-meter">
                                                <p class="progress-meter-text">{parseInt(i.votes) == 0 ? 0 : parseInt(i.votes) / parseInt(i.votes)} %</p>
                                            </span>
                                        </div></a></ul>)}
                                    </div> : <h2></h2>}
                                <div id="voteOutput"></div>
                            </div>
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