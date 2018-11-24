const React = require('react')
const Nav = require('./components/nav')
const Content = require('./components/content')
const Footer = require('./components/footer')
const Head = require('./components/head')
const Script = require('./components/script')


const Page = props =>
    <html lang='en'>
        <Head />
        <body>
            <Nav />
            <div className="grid-x grid-padding-x  align-middle">
                <div className="medium-12 cell">
                    <center>
                        <img src="./assets/pollLogoBig.png" id="logo" />
                        <p><a id="commH1">Community Polls</a></p>
                        <a href="/active_polls">
                            <button className="button large" id="hpbutton1">Active Community Polls</button>
                        </a>
                        <a href="/expired_polls">
                            <button className="button large" id="hpbutton2">Expired Community Polls</button>
                        </a>
                    </center>
                </div>
                <div className="medium-12 cell">
                    <center className="commBody">
                        <div className="masonry-css">
                            <div className="masonry-css-item">
                                <a href="/createpolls">
                                <img src="/assets/createpoll.png" className="createpoll" height="" width="" alt=""/>
                                </a>
                            </div>  
                        </div>
                    </center>
                </div>
                <div className="medium-12 cell">
                    <nav aria-label="Pagination">
                        <ul className="pagination text-center">
                            {/* pagination from js triggered here */}
                        </ul>
                    </nav>
                </div>
            </div>

            <Script />
            <script src='https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.js' />
            {props.status === 'expired' ? <script src='/js/communityPollsExpired.js' /> : <script src='/js/communityPolls.js' />}
        </body>
    </html>

module.exports = Page