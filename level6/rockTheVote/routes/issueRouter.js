const express = require('express');
const issueRouter = express.Router();
const Issue = require('../models/issue');

issueRouter.get('/', (req, res, next) => {
    Issue.find((err, issues) => {
        if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(issues)
        })
})


//get issues by user id
issueRouter.get('/user', (req, res, next) => {
    Issue.find( {user: req.auth._id}, (err, issues) => {
        if(err){           
                res.status(500)
                return next(err)
            }   
            return res.status(200).send(issues)
    })
})

//add new issue
issueRouter.post('/', (req, res, next) => {
    req.body.user = req.auth._id
    const newIssue = new Issue(req.body);
    newIssue.save((err, savedIssue) => {
        if(err) {
            res.status(500);
            return next(err);
        }
        return res.status(201).send(savedIssue)
    })
})

//find a issue by id
issueRouter.get('/:issueId', (req, res, next) => {
    Issue.findById(req.params.issueId, (err, issue) => {
        if(err) {
            res.status(500);
            return next(err)
        } else if (!issue) {
            res.status(404)
            return next(new Error("no issue found."))
        }
        return res.send(issue);
    })
})

//delete issue by the Id
issueRouter.delete("/:issueId", (req, res, next) => {
    Issue.findByIdAndRemove(
        {_id: req.params.issueId, user: req.auth._id},
        (err, issue) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.send(issue)
        }
    )
})

// update issue
issueRouter.put('/issueId', (req, res, next) => {
    Issue.findByIdAndUpdate(
        {_id: req.params.issueId, user: req.auth._id},
        req.body,
        {new: true},
        (err, issue) => {
            if (err) {
                console.log("Error")
                res.status(500)
                return next(err)
            }
            return res.send(issue)
        }
    )
})

issueRouter.put("/:issueId/upvote", (req, res, next) => {
    console.log(req)
    Issue.findOneAndUpdate(
        {_id: req.params.issueId},
        { $pull: {downVotes: req.auth._id}, $addToSet: {upVotes: req.auth._id}},
        {new: true},
        (err, updatedIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(updatedIssue)
        }
    );
});

//downvote request
issueRouter.put("/:issueId/downvote", (req, res, next) => {
    Issue.findOneAndUpdate(
        {_id: req.params.issueId},
        { $pull: {upVotes: req.auth._id}, $addToSet: {downVotes: req.auth._id}},
        {new: true},
        (err, updatedIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            console.log(req)
            return res.status(200).send(updatedIssue)
        }
    );
});

//delete vote
issueRouter.put("/:issueId/remove", (req, res, next) => {
    Issue.findOneAndUpdate(
        {_id: req.params.issueId},
        { $pull: {upVotes: req.auth._id, downVotes: req.auth._id}},
        {new: true},
        (err, updatedIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(updatedIssue)
        }
    );
});

// add to set, 2 and 1 fuction create http request.
//put request updating model


module.exports = issueRouter