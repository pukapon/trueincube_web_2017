var express = require('express');
var router = express.Router();
var model = require('../model/model')

/* GET category listing. */
router.get('/', function (req, res, next) {
  model.Category.find({}, function (err, data) {
    if (err) {
      next(err)
    } else {
      res.send({ code: 0, data: data });
    }
  })
});


router.get('/:id', function (req, res, next) {
  model.Category.findOne({ _id: req.params.id }, function (err, data) {
      if (err) {
          next(err)
      } else {
          res.send({ code: 0, data: data });
      }
  })
});


router.post('/', function (req, res, next) {
  var menu = new model.Category(
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

router.get('/:name/menu', function (req, res, next) {
  console.log(req.params.name)
  model.Category.findOne({ name: req.params.name }, function (err, category) {
    if (err) {
      next(err)
    } else {
      if (!category) {
        res.send({ code: 404, data: [] })
      } else {
        var ObjectId = require('mongoose').Types.ObjectId; 
        model.Menu.find( { category_id: (category._id) } , function (err2, menu) {
          if (err2) {
            next(err2)
          } else {
            res.send({ code: 0, data: menu });
          }
        })
      }
    }
  })
});



module.exports = router;
