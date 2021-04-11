const express = require('express');
const router = express.Router();
const User = require('../../models/userModel');

router.get('/getFriends', async (req, res) => {
    if (!req.body.user) {
        res.status(400).json({ error: 'Invalid Input' });
    } else {
        User.findOne({ email: req.body.user }, function (err, result) {
            if (err) { res.status(400).send("Could not find a user with the given email") } else {
                res.status(200).send(result.friends);
            }
        })
    }
});

router.post('/newUser', async (req, res) => {
    const {password, email} = req.body
    if (!password || !email) {
        res.status(400).json({ error: 'Invalid Input' });
    } else {
        const newUser = new User({
            password: password,
            email: email
        })
        await User.create(newUser);
        res.status(200).json(newUser);
    }
});

router.post('/addFriend', async (req, res) => {
    const { user, friend } = req.body
    if (!user || !friend) {
        res.status(400).json({ error: 'Invalid Input' });
    } else {
        await User.findOne({ email: friend }, async function (err, result) {
            if (err) { res.status(400).send("Could not find a friend with the given email") }
            await User.updateOne({ email: user }, {
                $addToSet: { friends: friend }
            }, function (err, docs) {
                if (err) {
                    console.log(err)
                } else {
                    console.log(docs)
                }
            })
        })
        User.findOne({ email: user }, function (err, result) {
            if (err) { res.status(400).send("Could not find a user with the given email") }
            res.status(200).json(result.friends);
        })
    }
})

router.post('/startDrift', async (req, res) => {
    const { user, drift } = req.body
    if (!user || !drift) {
        res.status(400).json({ error: 'Invalid Input' });
    } else {
        User.updateOne({ email: user },
            { $set: { currentDrift: drift, driftStarted: true } }, function (err, docs) {
                if (err) {
                    console.log(err)
                } else {
                    res.status(200).json(true);
                }
            })
    }
})

router.post('/finishDrift', async (req, res) => {
    const { user, points } = req.body
    if (!user || !points) {
        res.status(400).json({ error: 'Invalid Input' });
    } else {
        User.updateOne({ email: user },
            { $set: { driftedStarted: false, currentDrift: [] } }, function (err, docs) {
                if (err) {
                    console.log(err)
                } else {
                    console.log(docs)
                }
            })
        User.updateOne({ email: user },
            { $inc: { points: points } }, function (err, docs) {
                if (err) {
                    console.log(err)
                } else {
                    console.log(docs)
                }
            })
        User.findOne({ email: user }, function (err, result) {
            if (err) { console.log(err) }
            res.status(200).json(result.points)
        })
    }
})

module.exports = router;