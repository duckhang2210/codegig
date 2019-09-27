const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Gig = require('../models/Gig');

router.get('/', (req, res) => {
    Gig.findAll()
        .then(gig =>{
            console.log(gig);
            res.sendStatus(200);
        })
        .catch(err =>console.log(`err: ${err}`));
});

module.exports = router;