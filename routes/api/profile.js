const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')

const User = require('../../models/User')
const Profile = require('../../models/Profile')
const validateProfileInput = require('../../validation/profile')
const validateExperienceInput = require('../../validation/experience')
const validateEducationInput = require('../../validation/education')

const router = express.Router()

// @route  GET api/profile/
// @desc   get current user profile
// @access Private
router.get('/', passport.authenticate('jwt', {session: false}), (req, res) => {
  const errors = {}
  Profile.findOne({ user: req.user.id })
    .populate('user', ['name', 'avatar'])
    .then(profile => {
      if (!profile) {
        errors.noprofile = 'There is no profile for this user'
        return res.status(404).json(errors)
      }
      res.json(profile)
    })
    .catch(err => res.status(404).json(err))
})

// @route  GET api/profile/handle/:handle
// @desc   Get profile by handle
// @access Public
router.get('/handle/:handle', (req, res) => {
  const errors = {}
  Profile.findOne({ handle: req.params.handle })
    .populate('user', ['name', 'avatar'])
    .then(profile => {
      if (!profile) {
        errors.noprofile = 'There is no profile for this user'
        res.status(404).json(errors)
      }
      res.json(profile)
    })
    .catch(err => res.status(404).json(err))
})

// @route  GET api/profile/user/:user_id
// @desc   Get profile by user ID
// @access Public
router.get('/user/:user_id', (req, res) => {
  const errors = {}
  Profile.findOne({ user: req.params.user_id })
    .populate('user', ['name', 'avatar'])
    .then(profile => {
      if (!profile) {
        errors.noprofile = 'There is no profile for this user'
        res.status(404).json(errors)
      }
      res.json(profile)
    })
    .catch(err => res.status(404).json({profile: 'There is no profile for this user'}))
})

// @route  GET api/profile/users
// @desc   Get all profiles list
// @access Public
router.get('/all', (req, res) => {
  const errors = {}
  Profile.find()
    .populate('user', ['name', 'avatar'])
    .then(profiles => {
      if (!profiles) {
        errors.noprofile = 'There are no profiles'
        return res.status(404).json(errors)
      }
      res.json(profiles)
    })
    .catch(err => res.status(404).json({profiles: 'There are no profiles'}))
})

// @route  POST api/profile/
// @desc   Create or edit user profile
// @access Private
router.post('/', passport.authenticate('jwt', {session: false}), (req, res) => {
  const { errors, isValid } = validateProfileInput(req.body)
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors)
  }
  //Get fields
  const { skills, youtube, twitter, facebook, linkedin, instagram } = req.body
  const profileFields = {
    ...req.body,
    user: req.user.id,
    skills: skills.split(','),
    social: { youtube, twitter, facebook, linkedin, instagram },
  }

  Profile.findOne({ user: req.user.id }).then(profile => {
    if (profile) {
      // Update
      Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true }
      ).then(profile => res.json(profile))
    } else {
      // Create
      // Check if handle exists
      Profile.findOne({ handle: profileFields.handle }).then(profile => {
        if (profile) {
          errors.handle = 'That handle already exists'
          res.status(400).json(errors)
        }
        // Save Profile
        new Profile(profileFields).save().then(profile => res.json(profile))
      })
    }
  })
})

// @route  POST api/profile/experience
// @desc   Add experience to profile
// @access Private
router.post('/experience', passport.authenticate('jwt', {session: false}), (req, res) => {
  const { errors, isValid } = validateExperienceInput(req.body)
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors)
  }
  // Get fields
  Profile.findOne({ user: req.user.id})
    .then(profile => {
      const newExp = {
        ...req.body,
      }

      // Add to exp array
      profile.experience.unshift(newExp)
      profile.save().then(profile => res.json(profile))
    })
    .catch(err => res.status(404).json(errors))
})

// @route  POST api/profile/education
// @desc   Add education to profile
// @access Private
router.post('/education', passport.authenticate('jwt', {session: false}), (req, res) => {
  const { errors, isValid } = validateEducationInput(req.body)
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors)
  }
  // Get fields
  Profile.findOne({ user: req.user.id})
    .then(profile => {
      const newEdu = {
        ...req.body,
      }

      // Add to exp array
      profile.education.unshift(newEdu)
      profile.save().then(profile => res.json(profile))
    })
    .catch(err => res.status(404).json(errors))
})


// @route  DELETE api/profile/experience/:exp_id
// @desc   delete experience from profile
// @access Private
router.delete('/experience/:exp_id', passport.authenticate('jwt', {session: false}), (req, res) => {
  Profile.findOne({ user: req.user.id })
    .then(profile => {
      // Remote profile experience
      profile.experience
        .remove({ _id: req.params.exp_id })
      // Save
      profile
        .save()
        .then(profile => res.json(profile))
    })
    .catch(err => res.status(404).json(err))
})

// @route  DELETE api/profile/education/:exp_id
// @desc   delete education from profile
// @access Private
router.delete('/education/:edu_id', passport.authenticate('jwt', {session: false}), (req, res) => {
  Profile.findOne({ user: req.user.id })
    .then(profile => {
      // Remote profile experience
      profile.education
        .remove({ _id: req.params.edu_id })
      // Save
      profile
        .save()
        .then(profile => res.json(profile))
    })
    .catch(err => res.status(404).json(err))
})

// @route  DELETE api/profile/
// @desc   delete user and profile
// @access Private
router.delete('/', passport.authenticate('jwt', {session: false}), (req, res) => {
  Profile.findOneAndRemove({ user: req.user.id })
    .then(() => {
      // Remote user
      User.findOneAndRemove({ _id: req.user.id })
        .then(() => res.json({ success: true }))
    })
    .catch(err => res.status(404).json(err))
})

module.exports = router
