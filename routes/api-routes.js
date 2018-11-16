const db = require("../models");
const moment = require('node-moment')

const SQLZ = require ('sequelize')
const Op = SQLZ.Op


module.exports = function(app) {
    app.get('/api/polls', (req, res) => {
        db.polls.findAll({}).then(function(polls) {
            res.json(polls);
        });
    })

    app.post('/api/polls', (req, res) => {
        console.log(req.body)
        db.polls.create({
            type: req.body.type,
            name: req.body.name,
            user_name: req.body.user,
            is_private: req.body.is_private,
            expiration: moment().add(req.body.duration_days,'days').format('YYYY-MM-DD')
        }).then( _polls => {
            console.log(req.body.poll_options)
            req.body.poll_options.forEach(req_poll_options => {              
                console.log(req_poll_options.name)
                db.poll_options.create({
                    poll_id: (_polls).id,
                    name: req_poll_options.name,
                    description: req_poll_options.description,
                    star_rating: 0,
                    star_rating_count: 0,
                    votes: 0
                })
            })
        })
    })

    app.get('/api/polls/active', (req, res) => {
        db.polls.findAll({
            where: {
                expiration: {
                    [Op.gte]: moment().format("MM/DD/YYYY")
                }
            }
        }).then(function(polls) {
            res.json(polls);
        });
    })

    app.get('/api/polls/expired', (req, res) => {
        db.polls.findAll({
            where: {
                expiration: {
                    [Op.lt]: moment().format("MM/DD/YYYY")
                }
            }
        }).then(function(polls) {
            res.json(polls);
        });
    })


    app.get('/polls/:id', (req, res) => {
        const _id = req.params.id
        let _poll
        db.polls.findOne({
            where: {
                id: _id
            }
        }).then(function(poll) {
            _poll = poll.dataValues
            console.log(_poll)
            res.json(_poll)
            //res.render(JSX_URL,JSON)
        });
    })

    // app.get('/api/user_votes/:poll_id', (req, res) => {
    //     db.polls.findAll({}).then(function(polls) {
    //         res.json(polls);
    //     });
    // })

    // app.post('/api/user_votes/:poll_id', (req, res) => {
    //     db.user_votes.create({
    //         user_name: 'mearat',
    //         poll_options_id: (_pollEntry).id,
    //         star_rating: 3.5,
    //         vote: null
    //     })
    //  //need to update poll_options as well
    // })

    app.get('/api/migrate', (req, res) => {
        db.users.create({
            name: 'mearat',
        })

        db.users.create({
            name: 'bunrith',
        })
        .then( _users => {
            console.log(moment().add(1,'days').format('YYYY-MM-DD'))
            db.polls.create({
                type: 'star',
                name: 'bun test poll',
                user_name: (_users).name,
                is_private: 0,
                expiration: moment().add(1,'days').format('YYYY-MM-DD')
            }).then( _polls => {
                db.poll_options.create({
                    poll_id: (_polls).id,
                    name: 'McDonalds',
                    description: 'Im Lovin It',
                    star_rating: 3.5,
                    star_rating_count: 1,
                    votes: null
                }).then( _pollOption => {
                    db.user_votes.create({
                        user_name: 'mearat',
                        poll_options_id: (_pollOption).id,
                        star_rating: 3.5,
                        vote: null
                    })    
                })
            })
        })

        res.render('index')
    })
};
