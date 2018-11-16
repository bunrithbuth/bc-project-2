var path = require("path");

module.exports = function(app) {
    app.get('/', (req, res) => {
        res.render('index')
    })
<<<<<<< HEAD

    app.get('/migration', (req, res) => {
        res.render('migration')
    })
=======
    app.get('/createpolls', (req, res) => {
        res.render('createPolls')
    })
    
>>>>>>> d14217272ed9581b1b4d429d15e9279fe9bac457
};