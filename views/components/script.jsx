const React = require('react')
const Fragment = React.Fragment

const Script = props =>

        <Fragment>
        <script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossOrigin="anonymous" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.5.0/js/foundation.js" />
        <script src='./js/index.js' />
        </Fragment>

module.exports = Script
