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

            <Footer />
            <Script />       
        </body>
    </html>

module.exports = ViewPolls