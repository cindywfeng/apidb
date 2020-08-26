const express = require('express');
const { index, create } = require('../db');

const router = express.Router();

//index route
router.get('/', (req,res) => {
    index()
        .then(result => {
            const dishes = result.map(d=> ({ 
                name: d.name,
                origin: d.origin,
                category: d.category
            }))
        })
})

// dish show route
router.get('/:id', (req, res) => {
    show(req.params.id)
        .then(result => {
            const dish = { 
                name: result.name,
                origin: result.origin,
                category: result.category
            }
            res.json({dish})
        })
        .catch(err => res.status(500).end())
})

//create dish route



//delete dish route
router.delete('/:id', (req, res) => {
    destroy(req.params.id)
        .then(res.status(204))
        .catch(err => res.status(500).end())
})