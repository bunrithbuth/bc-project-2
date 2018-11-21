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
            <div className="grid-container">
                <div id="cardContainer" className="grid-x grid-padding-x">
                {props.poll}
                </div>
            </div>
            <Footer />
            <Script /> 
            <script src='./js/app.js' />      
        </body>
    </html>

module.exports = Publish