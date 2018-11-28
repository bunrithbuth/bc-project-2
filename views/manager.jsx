const React = require('react')
const Nav = require('./components/nav')
const Footer = require('./components/footer')
const Head = require('./components/head')
const Script = require('./components/script')

const Manage = () =>
    <html lang='en'>
        <Head />
        <body>
            <Nav />
            <center>
                <div className="account"></div>
                <div className="change">
                    <div className="grid-container">
                        <div className="grid-x grid-padding-x full fluid align-center"></div>
                        <div className="row collapse">
                            <div className="small-10 columns">
                                <input type="text" id="photoURL" placeholder="Image URL" />
                            </div>
                            <div className="small-2 columns">
                                <a id="update" class="button postfix">Submit</a>
                            </div>
                        </div>
                    </div>
                </div>
            </center>
            <Footer />
            <Script />
        </body>
        <script src='./js/myAccount.js' />
    </html>

module.exports = Manage