const React = require('react')
const Nav = require('./components/nav')
const Footer = require('./components/footer')
const Script = require('./components/script')
const Head = require('./components/head')

const SignIn = () =>
    <html lang='en'>
            <Head />
            <Nav />
            <Script />
        <body>
            

            <div id="firebaseui-auth-container"></div>
            <div id="loader">Loading...</div>
            <Footer />

        </body>
    </html>

module.exports = SignIn
