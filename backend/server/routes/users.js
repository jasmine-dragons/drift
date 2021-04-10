const express = require('express');
const router = express.Router();
const User = require('../../models/userModel');

router.get('/getFriends', async (req, res) => {
    if (!req.query.user) {
        res.status(400).json({ error: 'Invalid Input' });
    } else {
        User.findOne({ email: req.query.user }, function (err, result) {
            if (err) { res.status(400).send("Could not find a user with the given email") } else {
                res.status(200).send(result.friends);
            }
        })
    }
});

router.post('/newUser', async (req, res) => {
    if (!req.query.password || !req.query.email) {
        res.status(400).json({ error: 'Invalid Input' });
    } else {
        const newUser = new User({
            password: req.query.password,
            email: req.query.email
        })
        await User.create(newUser);
        res.status(200).json(newUser);
    }
});

router.post('/addFriend', async (req, res) => {
    if (!req.query.user || !req.query.friend) {
        res.status(400).json({ error: 'Invalid Input' });
    } else {
        if (req.query.friend.includes("@")) {
            await User.findOne({ email: req.query.friend }, async function (err, result) {
                if (err) { res.status(400).send("Could not find a friend with the given email") }
                await User.updateOne({ email: req.query.user }, {
                    $addToSet: { friends: req.query.friend }
                }, function (err, docs) {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log(docs)
                    }
                })
            })
        }
        User.findOne({ email: req.query.user }, function (err, result) {
            if (err) { res.status(400).send("Could not find a user with the given email") }
            res.status(200).json(result.friends);
        })
    }
})

router.post('/startDrift', async (req, res) => {
    if (!req.query.user || !req.query.drift) {
        res.status(400).json({ error: 'Invalid Input' });
    } else {
        User.updateOne({ email: req.query.user },
            { $set: { currentDrift: req.query.drift, driftStarted: true } }, function (err, docs) {
                if (err) {
                    console.log(err)
                } else {
                    res.status(200).json(true);
                }
            })
    }
})

router.post('/finishDrift', async (req, res) => {
    if (!req.query.user || !req.query.points) {
        res.status(400).json({ error: 'Invalid Input' });
    } else {
        User.updateOne({ email: req.query.user },
            { $set: { driftedStarted: false, currentDrift: [] } }, function (err, docs) {
                if (err) {
                    console.log(err)
                } else {
                    console.log(docs)
                }
            })
        User.updateOne({ email: req.query.user },
            { $inc: { points: req.query.points } }, function (err, docs) {
                if (err) {
                    console.log(err)
                } else {
                    console.log(docs)
                }
            })
        User.findOne({ email: req.query.user }, function(err, result) {
            if(err) {console.log(err)} 
            res.status(200).json(result.points)
        })
    }
})

module.exports = router;