import { Skill } from '../models/skill.js'

function index (req, res) {
    Skill.find({})
    .then( skills => {
        res.render('skills/index', {
            skills: skills,
            time: req.time,
            date: req.date,
        })
    })
    .catch(error => {
        console.log(error)
        res.redirect('/')
    })
}

function newSkill(req, res) {
    res.render('skills/new')
}

function create(req, res) {
    req.body.learned = false
    Skill.create(req.body)
    .then(skill => {
        res.redirect('/skills')
    })
    .catch(error => {
        console.log(error)
        res.redirect('/')
    })
}

function show(req, res) {
    Skill.findById(req.params.id)
    .then(skill => {
        res.render('skills/show', {
            skill: skill
        })    
    })
    .catch(error => {
        console.log(error)
        res.redirect('/skills')
    }) 
}

function deleteSkill(req, res) {
    Skill.findByIdAndDelete(req.params.id)
    .then(skill => {
        res.redirect('/skills')
    })
    .catch(error => {
        console.log(error)
        res.redirect('/skills')
    })
}

function update(req, res) {
    Skill.findById(req.params.id)
    .then(skill => {
        res.render('skills/update', {
            skill: skill
        })    
    })
    .catch(error => {
        console.log(error)
        res.redirect('/skills')
    })
}

function modify(req, res) {
    console.log(req.body)
    Skill.findByIdAndUpdate(req.params.id, {
        text: req.body.text,
        learned: req.body.learned === 'on' ? true : false,
    })
    .then(skill => {
        res.redirect(`/skills/${skill._id}`)
    })
    .catch(error => {
        console.log(error)
        res.redirect(`/skills/${skill._id}`)
    })
}

export {
    index,
    newSkill as new,
    create,
    show,
    deleteSkill as delete,
    update,
    modify,
}