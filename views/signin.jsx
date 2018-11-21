const React = require('react')

const SignIn = () =>
    <html lang='en'>
        <head>
            <meta charSet='UTF-8' />
            <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
            <script
                src="https://code.jquery.com/jquery-3.3.1.js"
                integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
                crossOrigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
                crossOrigin="anonymous"></script>
            <script src="https://www.gstatic.com/firebasejs/5.4.1/firebase-app.js"></script>
            <script src="https://www.gstatic.com/firebasejs/5.4.1/firebase-auth.js"></script>
            <script src="https://www.gstatic.com/firebasejs/5.4.1/firebase-database.js"></script>
            <script src="https://www.gstatic.com/firebasejs/5.4.1/firebase-functions.js"></script>
            <script src="https://cdn.firebase.com/libs/firebaseui/3.1.1/firebaseui.js"></script>
            <link type="text/css" rel="stylesheet" href="https://cdn.firebase.com/libs/firebaseui/3.1.1/firebaseui.css" />
            <script src='/js/signin.js' />

        </head>
        <body>

            <div id="firebaseui-auth-container"></div>
            <div id="loader">Loading...</div>
            <center>


                <button onclick="signOut()" id="signout-button">Sign Out</button>

            </center>

        </body>
    </html>

module.exports = SignIn