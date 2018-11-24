const db = require("../models");
const moment = require('node-moment')
const SQLZ = require('sequelize')
const Op = SQLZ.Op
var path = require("path");

module.exports = function(app) {
    
    app.get('/api/hasvoted/:pollid/:userid', (req, res) => {
        let _pollId = req.params.pollid
        let _userid = req.params.userid
        db.pollOption.findAll({
            where: {
                pollId: _pollId
            }
        }).then(function(pollOption) {
            console.log(pollOption)
            let _pollOptionId = []
            for (const key in pollOption) {
                    const element = pollOption[key];
                    _pollOptionId.push(element.dataValues.id);
            }

            console.log(_pollOptionId)
            
            db.userVote.findAll({
                where: {
                    pollOptionId: {in: [_pollOptionId]},
                    userId: _userid,
                }
            }).then(function(pollOption) {
                 res.json(pollOption)
            });
        });
    })

    app.get('/api/poll', (req, res) => {
        db.poll.findAll({}).then(function(poll) {
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
            // console.log(_user)
            if(_user == null){
                res.json({name: 'userid not found'})

            }else{
               res.json(_user)
            }
        })
    })

    app.post('/api/signin', (req,res) => {
        var tempUser = req.body;
        db.user.findOne({ where: {email: tempUser.email} })
        .then(function (user){
            if(user == null){
                // console.log('new User generated')
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

    app.get('/api/active', (req, res) => {
        db.poll.findAll({
            where: {
                expiration: {
                    [Op.gte]: moment.utc().format("MM/DD/YYYY")
                },
                isPrivate: 0,
            },
            order: [['expiration', 'ASC']]
        }).then(function(poll) {
            res.json(poll);
        });
    })

    const _perpage = 2
    app.get('/api/active/:page', (req, res) => {
        const _page = req.params.page

        db.poll.findAll({
            where: {
                expiration: {
                    [Op.gte]: moment.utc().format("MM/DD/YYYY HH:MM:SS")
                },
                isPrivate: 0,
            },
            offset: ((_page * _perpage) - _perpage),
            limit: _perpage,
            order: [['expiration', 'ASC']],
        }).then(function(poll) {
            console.log("HEREEEEEeeeee")
            console.log(poll)
            res.json(poll);
        });
    })

    app.get('/api/count/active', (req, res) => {
        db.poll.count({
            where: {
                expiration: {
                    [Op.gte]: moment.utc().format("MM/DD/YYYY HH:MM:SS")
                },
                isPrivate: 0,
            }
        }).then(function(_count) {
            res.json({count: _count, perpage: _perpage});
        });
    })


    app.get('/api/expired', (req, res) => {
        db.poll.findAll({
            where: {
                expiration: {
                    [Op.lt]: moment.utc().format("MM/DD/YYYY")
                },
                isPrivate: 0
            }
        }).then(function(poll) {
            res.json(poll);
        });
    })

    app.get('/api/expired/:page', (req, res) => {
        const _page = req.params.page

        db.poll.findAll({
            where: {
                expiration: {
                    [Op.lt]: moment.utc().format("MM/DD/YYYY")
                },
                isPrivate: 0,
            },
            offset: ((_page * _perpage) - _perpage),
            limit: _perpage,
            order: [['expiration', 'ASC']],
        }).then(function(poll) {
            console.log("HEREEEEEeeeee")
            console.log(poll)
            res.json(poll);
        });
    })

    app.get('/api/count/expired', (req, res) => {
        db.poll.count({
            where: {
                expiration: {
                    [Op.lt]: moment.utc().format("MM/DD/YYYY")
                },
                isPrivate: 0,
            }
        }).then(function(_count) {
            res.json({count: _count, perpage: _perpage});
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
                            res.render('publish', {poll: id_poll.dataValues})
                        }
                    }
                })
            }else{
                res.render('publish', {poll: uid_poll.dataValues})
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

    app.put('/api/pollOption/:id', (req, res) => {
        const _id = req.params.id
        console.log("UserID is" + req.body.userId + "star rating is " + req.body.starRating)

        let currentStarRating
        let currentStarRatingCount

        db.pollOption.findOne({
            where: {
                id : _id
            }
        }).then((_pollOption) => {
            if (req.body.starRating != null) {
                currentStarRatingCount = parseInt(_pollOption.starRatingCount) + 1
                currentStarRating = parseInt(_pollOption.starRating) + parseInt(req.body.starRating)
            } else {
                currentStarRating = parseInt(_pollOption.starRating)
                currentStarRatingCount = parseInt(_pollOption.starRatingCount)
            }

            db.pollOption.update({
                starRating: currentStarRating,
                starRatingCount: currentStarRatingCount,
                votes: parseInt(_pollOption.votes) + 1 
                }, {where: {id: _id}})
            })
            .then(() => {
                db.userVote.create({
                    userId: req.body.userId,
                    pollOptionId: _id,
                    starRating: req.body.starRating,
                    vote: 1
                })
            }).then(() => {
                if (req.body.starRating != null) {
                    let avg = Math.round(currentStarRating / currentStarRatingCount * 2) / 2
                    res.json({average: avg, starRatingCount: currentStarRatingCount })
                }else{
                    res.json({status: 'not a star rating'})
                }
            })
            .catch(e => console.log(e))
    })
};


