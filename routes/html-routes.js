var path = require("path");
 
module.exports = function (app) {
    app.get('/', (req, res) => {
        res.render('index')
    })

    app.get('/migration', (req, res) => {
        res.render('migration')
    })
    app.get('/createpolls', (req, res) => {
        res.render('createPolls')
    })

    app.get('/migration2', (req, res) => {
        res.render('migration2')
    })

    app.get("/manage", function (req, res) {
        res.render('manager');
    });

    app.get("/signin", function (req, res){
        res.render('signin');
    })
    app.get("/viewpolls", function (req, res){
        res.render('viewpolls');
    })
    app.get("/poll", function (req, res){
        res.render('poll');
    })
    app.get("/poll:id", function (req, res){
        res.render('poll');
    })
};