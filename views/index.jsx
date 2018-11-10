const React = require('react')
const Footer = require('./components/footer')

const Page = () =>
    <html lang='en'>
        <head>
            <meta charSet='UTF-8' />
            <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
            <link src='https://cdnjs.cloudflare.com/ajax/libs/foundation/6.5.0/css/foundation.css' />
            <title>Document</title>
        </head>
        <body>
            <h1>HELLO WORLD</h1>
            <Footer />
            <script src='/js/app.js' />
            <script src='https://cdnjs.cloudflare.com/ajax/libs/foundation/6.5.0/js/foundation.js' />
        </body>
    </html>

module.exports = Page