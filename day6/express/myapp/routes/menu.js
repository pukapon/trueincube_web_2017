var express = require('express');
var router = express.Router();
var model = require('../model/model')

router.get('/', function (req, res, next) {
    model.Menu.find({}).
    populate('category_id').
    exec(function (err, data) {
        if (err) {
            next(err)
        } else {
            res.send({ code: 0, data: data });
        }
    })
});

router.get('/:id', function (req, res, next) {
    model.Menu.findOne({ _id: req.params.id }).
    populate('category_id').
    exec( function (err, data) {
        if (err) {
            next(err)
        } else {
            res.send({ code: 0, data: data });
        }
    })
});

router.post('/', function (req, res, next) {
    var menu = new model.Menu(
        req.body
    )
    menu.save(function (err, data) {
        if (err) {
            next(err)
        } else {
            res.send({ code: 0, data: data });
        }
    })
});

module.exports = router;
