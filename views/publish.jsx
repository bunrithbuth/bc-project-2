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
                    <div id="cardContainer" className="grid-x grid-padding-x" key={props.poll.id}>
                    {props.poll}
                        <h1>Q: {Object.values(JSON.parse(props.poll))[2]} </h1>
                        <br></br>
                        <h1>Q: {Object.keys(JSON.parse(props.poll)).map(key => (
                            <h2 key={key} details={props.poll[key]} />
                            
                        ))} </h1>
                    </div>
                </div>
            </div>
            <Footer />
            <Script /> 
            <script src='./js/app.js' />      
        </body>
    </html>

module.exports = Publish