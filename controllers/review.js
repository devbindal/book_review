const { reviews } = require("../data/reviews.js");

async function addReview(req, res) {
    try {
        // data to be stored
        const { username } = req.user;
        const ISBN = req.params.ISBN;
        const { review_text } = req.body;

        const foundReview = await reviews.filter(review => review.username == username && review.ISBN == ISBN)

        if (foundReview.length) {
            reviews.forEach(review => {
                if (review.ISBN === ISBN) {
                    review.review_text = review_text;

                }
            });
            return res.json({ message: `Review updated successfully!` });
        }


        const newReview = await reviews.push({ username: username, ISBN: ISBN, review_text: review_text });
        res.json({ message: `Review added successfully!` });
    } catch (error) {

        res.status(500).json({ message: "Internal Server Error!!" });

    }
}

async function getReview(req, res) {
    try {
        const { ISBN } = req.params;
        const bookReview = await reviews.filter(review => review.ISBN == ISBN)

        if (!bookReview.length) {
            return res.json({ message: "No review found for this book!" });
        }

        res.json({ message: "review found for this book", bookReview });

    } catch (error) {

        res.status(500).json({ message: "Internal Server Error!!" });

    }
}

 async function deleteReview(req, res) {
    try {

        const { username } = req.user;
        const { ISBN } = req.params;

        const index = reviews.findIndex(review => review.ISBN === ISBN);

        if (index === -1) {
            return res.json({ message: "No review found for that user to delete!" });
            
        } 

        reviews.splice(index, 1);
        return res.json({ message: "review deleted for that user successfully!" });

        

        

    } catch (error) {

        res.status(500).json({ message: "Internal Server Error!!" });

    }
}

module.exports = { addReview, getReview,deleteReview };