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
                        <h3>{props.poll.name}</h3>
                    <div className="star">
                        <input className="star star-5" id="star-5" type="radio" name="star" />
                        <label className="star star-5" for="star-5">{props.poll.pollOptions[0].name}</label>
                        <input className="star star-4" id="star-4" type="radio" name="star" />
                        <label className="star star-4" for="star-4">{props.poll.pollOptions[1].name}</label>
                        <input className="star star-3" id="star-3" type="radio" name="star" />
                        <label className="star star-3" for="star-3">{props.poll.pollOptions[2].name}</label>
                        <input className="star star-2" id="star-2" type="radio" name="star" />
                        <label className="star star-2" for="star-2">{props.poll.pollOptions[3].name}</label>
                        <input className="star star-1" id="star-1" type="radio" name="star" />
                        <label className="star star-1" for="star-1">{props.poll.pollOptions[4].name}</label>
                    </div>
                </div>
            
            <Footer />
            <Script />
        </body>
    </html>

module.exports = Publish