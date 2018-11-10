var db = require("../models");

module.exports = function(app) {
    app.get('/api/polls', (req, res) => {
        res.render('index')
    })

    app.get('/api/migrate', (req, res) => {
        db.users.create({
            name: 'bunrith',
        })
        .then( _users => {
            db.polls.create({
                type: 'star',
                user_id: (_users).id,
                is_private: 0
            }).then( _polls => {
                console.log(' yoooo ' + (_polls).id)
                db.poll_entry.create({
                    poll_id: (_polls).id,
                    name: 'McDonalds',
                    description: 'Im Lovin It',
                    star_rating: 3.5,
                    star_rating_count: 1,
                    votes: null
                })

                db.poll_entry.create({
                    poll_id: (_polls).id,
                    name: 'Burger King',
                    description: 'Have It Your Way',
                    star_rating: 2.5,
                    star_rating_count: 2,
                    votes: null
                })
            })
        })

        res.render('index')
    })
};
