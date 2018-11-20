const React = require('react')
const Nav = require('./components/nav')
const Content = require('./components/content')
const Footer = require('./components/footer')
const Head = require('./components/head')
const Script = require('./components/script')


const Page = () =>
    <html lang='en'>

        <Head />
        <body>
            <Nav />
            <Content />
            <Footer />
            <Script />
            <script src='/js/app.js' />
            <script src='js/index.js' />
        </body>
    </html>

module.exports = Page