const React = require('react')
const Nav = require('./components/nav')
const Content = require('./components/content')
const Footer = require('./components/footer')
const Head = require('./components/head')
const Script = require('./components/script')


const About = () =>

  <html lang='en'>

    <Head />
    <body>
      <Nav />

      <h1 className="text-center about">About Us</h1>

      <div className="grid-container">
        <div className="grid-x grid-padding-x small-up-2 medium-up-3">
          <div className="cell">
            <div className="card">
              <img className="aboutPhoto" src="assets/ben.jpg" />
              <div className="card-section">
              <h4>Ben Oh</h4>
                <p>When Ben isn't coding, he likes to eat burgers, go to the beach, blow bubbles, and play basketball.</p>
              </div>
            </div>
          </div>
          <div className="cell">
            <div className="card">
              <img className="aboutPhoto" src="assets/bunrith.jpg" />
              <div className="card-section">
                <h4>Bunrith Buth</h4>
                <p>When Mearat isn't coding, he likes to watch baseball, chew bubblegum, keep bees, and listen to kpop.</p>
              </div>
            </div>
          </div>
          <div className="cell">
            <div className="card">
              <img className="aboutPhoto" src="assets/jin.jpg" />
              <div className="card-section">
                <h4>Jin Choi</h4>
                <p>When Jin isn't coding, he likes to throw javelins, make jam, drink juice, and eat jalapenos.</p>
              </div>
            </div>
          </div>
          <div className="cell">
            <div className="card">
              <img className="aboutPhoto" src="assets/jon.jpg" />
              <div className="card-section">
                <h4>Jon Song</h4>
                <p>When Jon isn't coding, he likes to joust, juggle, eat juiper berries, and look at Jupiter.</p>
              </div>
            </div>
          </div>
          <div className="cell">
            <div className="card">
              <img className="aboutPhoto" src="assets/mearat.jpg" />
              <div className="card-section">
                <h4>Mearat Hou</h4>
                <p>When Mearat isn't coding, he likes to cook meat, judge muggles, go to museums, and knit mufflers.</p>
              </div>
            </div>
          </div>
          <div className="cell">
            <div className="card">
              <img className="aboutPhoto" src="assets/snguy.jpg" />
              <div className="card-section">
                <h4>Steve Nguy</h4>
                <p>When Steve isn't coding, he likes to stuff squash blossoms, try and catch Sasquatch, sip tea, and make sick beats.</p>
              </div>
            </div>
          </div>
          <div className="cell">
            <div className="card">
              <img className="aboutPhoto" src="assets/user-512.png" />
              <div className="card-section">
                <h4>Thomas Nguyen</h4>
                <p>Whne Thomas isn't coding, he likes to chase tornados, impersonate Thor, throw thimbles, and dodge Thwomps</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
      <Script />
    </body>
  </html>

module.exports = About 