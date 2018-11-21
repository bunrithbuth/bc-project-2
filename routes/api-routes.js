const db = require("../models");
const moment = require('node-moment')

const SQLZ = require('sequelize')
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
    app.get('/api/poll/:id', (req, res) => {
        db.poll.findAll({
            where: {
                id: req.params.id
            },
            include: [
                { model: db.pollOption }
            ]
        }).then(function (poll) {
            console.log(poll)
            res.json(poll);
        });
    })

    app.get('/api/user/:id', (req, res) => {
        const _id = req.params.id

        db.user.findOne({
            where: {
                id: _id
            }
        }).then(function(_user) {
            console.log(_user)
            if(_user == null){
                res.json({name: 'userid not found'})

            }else{
               res.json(_user)
            }
        })
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
               res.json(user)
            }
        })
    })

    function guid() {
        function s4() {
          return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }
    
    //https://momentjs.com/docs/#/durations/
    app.post('/api/poll', (req, res) => {

        let _uId = null
        if(req.body.isPrivate){
            _uId = guid()
        }

        console.log('THIS IS WHAT WILL BE POSTED: ' + JSON.stringify(req.body))
        console.log(moment.utc().add(parseInt(req.body.time), req.body.duration))
        db.poll.create({
            type: req.body.type,
            name: req.body.name,
            userId: req.body.user,
            isPrivate: req.body.isPrivate,
            uId: _uId,
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
                });

            })
            res.json(_poll)
        }) 
    })

    app.get('/api/poll/active', (req, res) => {
        db.poll.findAll({
            where: {
                expiration: {
                    [Op.gte]: moment().format("MM/DD/YYYY")
                },
                isPrivate: 0
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

        console.log(' ')

        db.poll.findOne({
            where: {
                uId: _id
            },
            include: [
                { model: db.pollOption }
            ]
        }).then(function(uid_poll) {
            if(uid_poll === null) {
                db.poll.findOne({
                    where: {
                        id: _id
                    },
                    include: [
                        { model: db.pollOption }
                    ]
                }).then(function(id_poll) {
                    if(id_poll === null){
                        res.json({noPollExists: 1})
                    }else{
                        if(id_poll.isPrivate === true){
                            res.json({isPrivate: 1})
                        }else{
                            res.render('publish', {poll: JSON.stringify(id_poll)})
                        }
                    }
                })
            }else{
                res.json('publish', {poll: JSON.stringify(uid_poll)})
            }     
        })
        
    })

    app.get('/api/poll/:id/option', (req, res) => {
        const _id = req.params.id
        let _poll

        console.log(' ')

        db.poll.findOne({
            where: {
                uId: _id
            },
            include: [
                { model: db.pollOption }
            ]
        }).then(function(uid_poll) {
            if(uid_poll === null) {
                db.poll.findOne({
                    where: {
                        id: _id
                    },
                    include: [
                        { model: db.pollOption }
                    ]
                }).then(function(id_poll) {
                    if(id_poll === null){
                        res.json({noPollExists: 1})
                    }else{
                        if(id_poll.isPrivate === true){
                            res.json({isPrivate: 1})
                        }else{
                            res.json(id_poll.pollOptions)
                        }
                    }
                })
            }      
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
            email: 'meart@test.com',
            photoURL: null
        })

        db.user.create({
            name: 'mearat2',
            email: 'mearat2@test.com',
            photoURL: null
        })

        db.user.create({
            name: 'bunrith',
            email: 'bunrith@test.com',
            photoURL: null
        })
        .then( _users => {
            console.log(moment().add(1,'days').format('YYYY-MM-DD'))
            db.poll.create({
                type: 'star',
                name: 'bun test poll',
                userId: (_users).id,
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
                        userId: 1,
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
                        userId: 2,
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
