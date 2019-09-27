const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Gig = require('../models/Gig');

//Get Gigs list
router.get('/', (req, res) => {
    Gig.findAll()
        .then(gig =>{
            res.render('gigs', {
                gig
            });
        })
        .catch(err =>console.log(`err: ${err}`));
});
//display add gig form
router.get('/add', (req, res) => {
    res.render('add');
})
// Add a gig
router.post('/add',(req,res) => {
    const data = {
        title: 'looking for a react developer',
        technologies: 'react, javascript, html, css',
        budget: '3000',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea',
        contact: 'user@gmail.com'
    }

    let { title, technologies, budget, description, contact} = data;
    Gig.create({
        title,
        technologies,
        description,
        budget,
        contact
    })
    .then(gig => res.redirect('/gigs'))
    .catch(err => console.log(err))
})

module.exports = router;