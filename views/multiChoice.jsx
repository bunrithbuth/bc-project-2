const React = require('react')
const Nav = require('./components/nav')
const Footer = require('./components/footer')
const Head = require('./components/head')
const Script = require('./components/script')
const MCQuestions = require('./components/mcforms')


const Page = () =>
    <html lang='en'>
            <Head />
        <body>
            <Nav />
            <MCQuestions />
            <Footer />
            <script src='/js/addmcq.js' />
            <Script />
        </body>
    </html>

module.exports = Page