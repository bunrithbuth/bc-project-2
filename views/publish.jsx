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

                    <div id="cardContainer" className="grid-x grid-padding-x">
                   
                    <h1>Q: {Object.values(JSON.parse(props.poll))[2]} </h1>
                        <br></br>
                
                    </div>
                
            </div>
            <div className="grid-container">
                <div id="cardContainer" className="grid-x grid-padding-x"></div>
            </div>
            
            <Footer />
            <Script />
            <script src='./js/publish.js' />  
            <script src='./js/mypolls.js' />  

            
        </body>
    </html>

module.exports = Publish