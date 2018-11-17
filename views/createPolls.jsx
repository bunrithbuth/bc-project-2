const React = require('react')
const Nav = require('./components/nav')
const Footer = require('./components/footer')
const StarRating = require('./components/starRating')
const Form1 = require("./components/twoChoice")


const CreatePolls = () =>
    <html lang='en'>
        <head>
            <meta charSet='UTF-8' />
            <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.5.0/css/foundation.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.min.css" />
            <link rel="stylesheet" href="./css/app.css" />
            <title>Create Polls</title>
        </head>
        <body>
            <Nav />
            {/* <StarRating /> */}
            <Form1 />
            <Footer />
            <script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossOrigin="anonymous" />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.5.0/js/foundation.js" />
            <script src='./js/app.js' />
        </body>
    </html>

module.exports = CreatePolls