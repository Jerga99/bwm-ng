const express = require('express');
const router = express.Router();
const Rental = require('../models/rental');

const UserCtrl = require('../controllers/user');

router.get('/secret', UserCtrl.authMiddleware, function(req, res) {
  res.json({"secret": true});
});

router.get('', function(req, res) {
  Rental.find({}, function(err, foundRentals) {

    res.json(foundRentals);
  });
});

router.get('/:id', function(req, res) {
  const rentalId = req.params.id;

  Rental.findById(rentalId, function(err, foundRental) {
    if (err) {

      res.status(422).send({errors: [{title: 'Rental Error!', detail: 'Could not find Rental!'}]});
    }

    res.json(foundRental);
  });
});

module.exports = router;


