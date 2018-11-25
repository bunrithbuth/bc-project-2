const React = require('react')
const Nav = require('./components/nav')
const Footer = require('./components/footer')
const Head = require('./components/head')
const Script = require('./components/script')


const MyPolls = () =>
    <html lang='en'>
        <Head />
        <body>
            <Nav />
            <div className="grid-container">
                <center>
                    <a id="commH1">My Polls</a>
                </center>
                <div id="cardContainer" className="grid-x grid-padding-x mypollcontainer"></div>
            </div>
            <Footer />
            <Script /> 
            <script src='./js/mypolls.js' />      
        </body>
    </html>

module.exports = MyPolls