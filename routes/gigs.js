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
    

    let { title, technologies, budget, description, contact} = req.body;
    let errors = [];

    if(!title){
        errors.push({text: 'Please add a title'});
    }
    if(!technologies){
        errors.push({text: 'Please add some technologies'});
    }
    if(!description){
        errors.push({text: 'Please add a description'});
    }
    if(!contact){
        errors.push({text: 'Please add a contact email'});
    }

    //check for errors
    if(errors.length > 0){
        res.render('add', {
            errors,
            title,
            technologies, 
            budget, 
            description, 
            contact
        });
    } 
    else{
        if(!budget) {
            budget = "Unknown";
        } else {
            budget = `$${budget}`;
        }

        //make lower case and space between comma
        technologies = technologies.toLowerCase().replace(/, /g, ',');
        Gig.create({
            title,
            technologies,
            description,
            budget,
            contact
        })
        .then(gig => res.redirect('/gigs'))
        .catch(err => console.log(err));
    }

    
})

module.exports = router;