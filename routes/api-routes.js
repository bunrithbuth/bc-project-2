const db = require("../models");
const moment = require('node-moment')

const SQLZ = require ('sequelize')
const Op = SQLZ.Op


module.exports = function(app) {
    app.get('/api/poll', (req, res) => {
        db.polls.findAll({}).then(function(poll) {
            res.json(poll);
        });
    })

    app.delete('/api/poll/:id', (req, res) => {
        db.poll.destroy({
            where: {
              id: req.params.id
            }
          })
        .then(function(dbPost) {
              res.json(dbPost);
        });
    })

    app.get('/api/myPolls/:id', (req, res) => {
        db.poll.findAll({
            where: {
                userId: req.params.id
            },
            include: [
                { model: db.pollOption }
            ]
        }).then(function (poll) {
            res.json(poll);
        });
    })

    app.post('/api/signin', (req,res) => {
        console.log(req.body)
        var tempUser = req.body;
        db.user.findOne({ where: {email: tempUser.email} })
        .then(function (user){
            if(user == null){
                console.log('new User generated')
                db.user.create({
                    name: tempUser.name,
                    email: tempUser.email,
                    photoURL: tempUser.photoURL
                });
            }else{
                res.json(user);
            }
        })

    })
    
    //https://momentjs.com/docs/#/durations/
    app.post('/api/poll', (req, res) => {
        console.log('THIS IS WHAT WILL BE POSTED: ' + JSON.stringify(req.body))
        console.log(moment.utc().add(parseInt(req.body.time), req.body.duration))
        db.poll.create({
            type: req.body.type,
            name: req.body.name,
            userId: req.body.user,
            isPrivate: req.body.isPrivate,
            expiration: moment.utc().add(parseInt(req.body.time), req.body.duration)
        }).then( _poll => {
            console.log(req.body.pollOption)
            req.body.pollOption.forEach(req_pollOption => {              
                console.log(req_pollOption.name)
                db.pollOption.create({
                    pollId: (_poll).id,
                    name: req_pollOption.name,
                    description: req_pollOption.description,
                    starRating: 0,
                    starRatingCount: 0,
                    votes: 0
                })
            })
        }) 
        res.sendStatus(200)
    })

    app.get('/api/poll/active', (req, res) => {
        db.poll.findAll({
            where: {
                expiration: {
                    [Op.gte]: moment().format("MM/DD/YYYY")
                }
            }
        }).then(function(poll) {
            res.json(poll);
        });
    })

    app.get('/api/poll/expired', (req, res) => {
        db.poll.findAll({
            where: {
                expiration: {
                    [Op.lt]: moment().format("MM/DD/YYYY")
                }
            }
        }).then(function(poll) {
            res.json(poll);
        });
    })


    app.get('/poll/:id', (req, res) => {
        const _id = req.params.id
        let _poll
        // let _pollOption = []

        db.poll.findOne({
            where: {
                id: _id
            },
            include: [
                { model: db.pollOption }
            ]
        }).then(function(poll) {
            // if(poll.dataValues == undefined){
            //     res.render('index')
            // }else{
            //     console.log(poll.dataValues)
            //     _poll = poll.dataValues

            //     db.pollOption.findAll({
            //         where: {
            //             pollId: _id
            //         }
            //     }).then(function(pollOption) {
            //         pollOption.forEach(pollOption => {
            //             console.log(pollOption.dataValues)
            //             _pollOption.push(pollOption.dataValues)
            //         })

            //         let jsonAll = {
            //             poll: _poll,
            //             pollOption: _pollOption
            //         }

            res.json(poll)
            //res.render(JSX_URL,JSON)

            // })
            // }

        })
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
        db.user.create({
            name: 'mearat',
        })

        db.user.create({
            name: 'bunrith',
        })
        .then( _users => {
            console.log(moment().add(1,'days').format('YYYY-MM-DD'))
            db.poll.create({
                type: 'star',
                name: 'bun test poll',
                userName: (_users).name,
                isPrivate: 0,
                expiration: moment().add(1,'days').format('YYYY-MM-DD')
            }).then( _poll => {
                db.pollOption.create({
                    pollId: (_poll).id,
                    name: 'McDonalds',
                    description: 'Im Lovin It',
                    starRating: 3.5,
                    starRatingCount: 1,
                    votes: null
                }).then( _pollOption => {
                    db.userVote.create({
                        userName: 'mearat',
                        pollOptionId: (_pollOption).id,
                        starRating: 3.5,
                        vote: null
                    })    
                })
                db.pollOption.create({
                    pollId: (_poll).id,
                    name: 'Burger King',
                    description: 'Have it Your Way!',
                    starRating: 2.5,
                    starRatingCount: 1,
                    votes: null
                }).then( _pollOption => {
                    db.userVote.create({
                        userName: 'mearat2',
                        pollOptionId: (_pollOption).id,
                        starRating: 2.5,
                        vote: null
                    })    
                })
            })
        })

        res.render('index')
    })
};
