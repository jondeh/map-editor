const router = require('express').Router();
let Map = require('../models/map.model');

router.route('/').get((req, res) => {
    Map.find()
        .then(maps => res.json(maps))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    console.log("ding1", req.body)
    const style = req.body.style
    const map = req.body.grid;
    console.log("ding2", style)
    const newMap = new Map({
        map,
        style,
        // title
    })

    newMap.save()
        .then(() => res.json('Map added!'))
        .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;

