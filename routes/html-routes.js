var path = require("path");
 
module.exports = function (app) {
    app.get('/', (req, res) => {
        res.render('index')
    })

    app.get('/polls', (req, res) => {
        res.render('communityPolls')
    })

    app.get('/active_polls', (req, res) => {
        res.render('communityPolls')
    })

    app.get('/expired_polls', (req, res) => {
        res.render('communityPolls', {status: 'expired'})
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

    app.get('/viewpolls', (req, res) => {
        res.render('viewpolls')
    })
};