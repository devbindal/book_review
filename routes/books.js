const { Router } = require("express");
const bookControllers = require("../controllers/book.js");

const router = Router();

router.get("/", bookControllers.getAllBooks);
router.post("/byISBN", bookControllers.getBooksByISBN);
router.post("/byTitle", bookControllers.getBooksByTitle);
router.post("/byAuthor", bookControllers.getBooksByAuthor);


module.exports = router;
