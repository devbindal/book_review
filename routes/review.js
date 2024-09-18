const  { Router } = require( "express");
const authenticate =  require("../middleware/auth.js");
const   reviewControllers = require( "../controllers/review.js");

const router = Router();

// registered users
router.put("/books/:id/reviews", authenticate, reviewControllers.addReview);
router.delete("/books/:id/reviews", authenticate, reviewControllers.deleteReview);

// general users
router.get("/:ISBN/reviews", reviewControllers.getReview);


module.exports = router;