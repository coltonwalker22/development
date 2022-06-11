const express = require('express');
const issueRouter = express.Router();
const Issue = require('../models/issue');

issueRouter.get('/', (req, res, next) => {
    Issue.find((err, issues) => {
        if(err){
            if(er){
                res.status(500)
                return next(err)
            }
            return res.status(20).send(issues)
        }
    })
})

//get issues by user id
issueRouter.get('/user', (req, res, next) => {
    Issue.find( {user: req.auth._id}, (err, issues) => {
        if(err){
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(issues)
        }
    })
})

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

//delete issue
issueRouter.delete("/:issueId", (req, res, next) => {
    Issue.findByAndRemove(
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
            if (err){
            console.log("error");
            res.status(500)
            return next(err)
            }
            return res.send(issue)
        }
    )
})

module.exports = issueRouter