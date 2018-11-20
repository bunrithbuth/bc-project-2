const React = require('react')
const Nav = require('./components/nav')
const Footer = require('./components/footer')
const Head = require('./components/head')
const Script = require('./components/script')


const ViewPolls = () =>
    <html lang='en'>
        <Head />
        <body>
            <Nav />
            <div className="grid-container">
                <div id="cardContainer" className="grid-x grid-padding-x"></div>
            </div>
            <Footer />
            <Script /> 
            <script src='./js/viewpolls.js' />      
        </body>
    </html>

module.exports = ViewPolls