const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')

const User = require('../../models/User')
const Post = require('../../models/Post')
const validatePostInput = require('../../validation/post')

const router = express.Router()

// @route  POST api/posts
// @desc   Create post
// @access Private
router.post('/',  passport.authenticate('jwt', {session: false}), (req, res) => {
  const { errors, isValid } = validatePostInput(req.body)
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors)
  }
  const newPost = new Post({
    ...req.body,
    user: req.user.id,
  })

  newPost
    .save()
    .then(post => res.json(post))
    .catch(err => res.status(404).json(err))
})

// @route  POST api/posts/comment/:id
// @desc   Add comment to post
// @access Private
router.post('/comment/:id',  passport.authenticate('jwt', {session: false}), (req, res) => {
  const { errors, isValid } = validatePostInput(req.body)
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors)
  }
  Post
    .findById(req.params.id)
    .then(post => {
      const newComment = {
        ...req.body,
        user: req.user.id,
      }
      post.comments
        .unshift(newComment)
      post
        .save()
        .then(post => res.json(post))
    })
    .catch(err => res.status(404).json(err))
})

// @route  GET api/posts
// @desc   Get post
// @access Public
router.get('/', (req, res) => {
  Post
    .find()
    .sort({ date: -1 })
    .then(posts =>res.json(posts))
    .catch(err => res.status(404).json({ posts: 'no posts found'}))
})

// @route  GET api/posts/:id
// @desc   Get post by id
// @access Public
router.get('/:id', (req, res) => {
  Post
    .findById(req.params.id)
    .then(post =>res.json(post))
    .catch(err => res.status(404).json({ post: 'no post found with that id'}))
})

// @route  DELETE api/posts/:id
// @desc   delete the post by id
// @access Private
router.delete('/:id',  passport.authenticate('jwt', {session: false}), (req, res) => {
  Post
    .findOneAndRemove({ _id: req.params.id, user: req.user.id })
    .then(post => {
      return !post
        ? res.status(401).json({ post: 'post not found' })
        : res.status(200).json({ post: 'post deleted' })
    })
    .catch(err => res.status(404).json({ post: 'It had a problem deleting the post' }))
})

// @route  DELETE api/posts/comment/:id/:comment_id
// @desc   delete the coment by id in post by id
// @access Private
router.delete('/comment/:id/:comment_id',  passport.authenticate('jwt', {session: false}), (req, res) => {
  Post
    .findById(req.params.id)
    .then(post => {
      const index = post.comments.findIndex( comment => comment._id.toString() === req.params.comment_id)
      index === -1
        ? res.status(401).json({ post: 'comment not found' })
        : post.comments.remove({ _id: req.params.comment_id })

      post
        .save()
        .then(post => res.status(200).json({ post: 'comment deleted' }))
    })
    .catch(err => res.status(404).json({ post: 'It had a problem deleting the comment' }))
})

// @route  POST api/posts/like/:id
// @desc   Like or Unlike post
// @access Private
router.post('/like/:id',  passport.authenticate('jwt', {session: false}), (req, res) => {
  Post
    .findById(req.params.id)
    .then(post => {
      const indexOfUser = post.likes.findIndex(like => like.user.toString() === req.user.id);
      indexOfUser === -1
        ? post.likes.unshift({user: req.user.id})
        : post.likes.splice(indexOfUser, 1);
      post
        .save()
        .then(post => res.json(post));
    })
    .catch(err => res.status(404).json({ post: 'It had a problem liking the post' }))
})

module.exports = router
