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

      <div class="grid-container">
        <div class="grid-x grid-padding-x small-up-2 medium-up-3">
          <div class="cell">
            <div class="card">
              <img className="aboutPhoto" src="assets/ben.jpg" />
              <div class="card-section">
              <h4>Ben Oh</h4>
                <p>Ben likes coding </p>
              </div>
            </div>
          </div>
          <div class="cell">
            <div class="card">
              <img className="aboutPhoto" src="assets/bunrith.jpg" />
              <div class="card-section">
                <h4>Bunrith Buth</h4>
                <p>Stuff about Bunrith</p>
              </div>
            </div>
          </div>
          <div class="cell">
            <div class="card">
              <img className="aboutPhoto" src="assets/jin.jpg" />
              <div class="card-section">
                <h4>Jin Choi</h4>
                <p>Stuff about Jin</p>
              </div>
            </div>
          </div>
          <div class="cell">
            <div class="card">
              <img className="aboutPhoto" src="assets/jon.jpg" />
              <div class="card-section">
                <h4>Jon Song</h4>
                <p>Stuff about Jon</p>
              </div>
            </div>
          </div>
          <div class="cell">
            <div class="card">
              <img className="aboutPhoto" src="assets/mearat.jpg" />
              <div class="card-section">
                <h4>Mearat Hou</h4>
                <p>Stuff about Mearat</p>
              </div>
            </div>
          </div>
          <div class="cell">
            <div class="card">
              <img className="aboutPhoto" src="assets/user-512.png" />
              <div class="card-section">
                <h4>Steve Nguy</h4>
                <p>Stuff about Steve</p>
              </div>
            </div>
          </div>
          <div class="cell">
            <div class="card">
              <img className="aboutPhoto" src="assets/user-512.png" />
              <div class="card-section">
                <h4>Thomas Nguyen</h4>
                <p>Stuff about Thomas</p>
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