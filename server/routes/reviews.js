const express = require('express');
const router = express.Router();

const UserCtrl = require('../controllers/user');
const ReviewCtrl = require('../controllers/review');

router.get('', ReviewCtrl.getReviews);
router.get('/:id/rating', ReviewCtrl.getRentalRating);
router.post('', UserCtrl.authMiddleware, ReviewCtrl.createReview);

module.exports = router;


