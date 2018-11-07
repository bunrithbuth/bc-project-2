const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')

const app = express()

var PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jsx')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine('jsx', require('express-react-views').createEngine())

//require('./routes/api-routes')(app)
require('./routes/html-routes')(app)


var db = require("./models");

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT: " + PORT);
    });
});
  
