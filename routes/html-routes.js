var path = require("path");

module.exports = function (app) {
    app.get('/', (req, res) => {
        res.render('index')
    })


    app.get("/manage", function (req, res) {
        res.render('manager');
    });
};