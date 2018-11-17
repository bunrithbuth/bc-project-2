var path = require("path");

module.exports = function(app) {
    app.get('/', (req, res) => {
        res.render('index')
    })

    app.get('/migration', (req, res) => {
        res.render('migration')
    })
    app.get('/createpolls', (req, res) => {
        res.render('createPolls')
    })
};