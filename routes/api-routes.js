var db = require("../models");

module.exports = function (app) {
    app.get('/api/polls', (req, res) => {
        db.Todo.findAll({}).then(function (dbTodo) {
            // We have access to the todos as an argument inside of the callback function
            res.json(dbTodo);
        }); res.render('index')
    })

    app.get('/api/myPolls', (req, res) => {
        db.polls.findAll({}).then(function (dbTodo) {
            res.json(dbTodo);
        });
    })

    app.post('/api/signin', (req,res) => {
        console.log('ping')
        var tempUser = req.body;
        db.users.findOne({ where: {email: tempUser.email} })
        .then(function (user){
            if(user == null){
                console.log('new User generated')
                db.users.create({
                    name: tempUser.name,
                    email: tempUser.email
                });
            }else{
                res.json(user);
            }
        })
    })

    app.get('/api/migrate', (req, res) => {
        db.users.create({
            name: 'mearat',
        })

        db.users.create({
            name: 'bunrith',
        })
            .then(_users => {
                db.polls.create({
                    type: 'star',
                    user_name: (_users).name,
                    is_private: 0
                }).then(_polls => {
                    db.poll_entry.create({
                        poll_id: (_polls).id,
                        name: 'McDonalds',
                        description: 'Im Lovin It',
                        star_rating: 3.5,
                        star_rating_count: 1,
                        votes: null
                    }).then(_pollEntry => {
                        db.user_votes.create({
                            user_name: 'mearat',
                            poll_entry_id: (_pollEntry).id,
                            star_rating: 3.5,
                            vote: null
                        })
                    })
                })
            })

        res.render('index')
    })
};
