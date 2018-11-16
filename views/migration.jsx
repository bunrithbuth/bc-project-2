const React = require('react')
const Nav = require('./components/nav')
const Content = require('./components/content')
const Footer = require('./components/footer')


const Page = () =>
    <html lang='en'>
        <head>
            <meta charSet='UTF-8' />
            <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
            <link rel="stylesheet" href="/css/app.css" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites@6.5.0/dist/css/foundation.min.css" integrity="sha256-VEEaOnBKVRoYPn4AID/tY/XKVxKEqXstoo/xZ6nemak= sha384-D46t32f421/hB30qwnim2pIcisNN5GU9+6m2Mfnd3dKpTSFidZLa08/1StEiCFId sha512-WkgzH8VKemDfwrp18r+wgbx+oHXOkfd2kJs7ocAXdGDgonXDXh88E90IRtRZRXtO0IHprxYHYlY14h+wyTsUDA==" crossOrigin="anonymous" />
            <title>Deez Polls</title>
        </head>
        <body>
            <Nav />
            <Content />
            <Footer />
            <script src='/js/app.js' />
            <script src="https://cdn.jsdelivr.net/npm/foundation-sites@6.5.0/dist/js/foundation.min.js" integrity="sha256-GZq6aeugpWo25iH//1eKmeK6FHCf+6KXTfoUpkCqPCA= sha384-vjxUQtbGw5FJMigaaFpXYyxoHHLb7LbvRywnMZOiPJeh5j9sl2rnmQ3iucuegRm8 sha512-h7tIMIX/opZXfWkcTDbkO+nT0LePyAAwDacfYhWtgGUidV+Kkh3eesW52fPSxKEsw3rgywKhQvghNLT4eDuUyw==" crossOrigin="anonymous" />
            <script src='js/migration.js' />
        </body>
    </html>

module.exports = Page