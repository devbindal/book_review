const  {books} = require( "../data/books.js");

async function getAllBooks(req, res) {
    try {
        
        res.json({ message: "Books are Found!!", books }); // Send books data
    } catch (error) {
        console.error("Error in getAllBooks: ", error); // Log the error
        res.status(500).json({ message: "Internal Server Error!!" });
    }
}



 async function getBooksByISBN(req, res) {
    try {

        const { ISBN } = req.body;

        if (!ISBN) {
            return res.json({ message: "Please, provide a valid ISBN Code!" });
        }

        const foundBooks = await books.filter(book => book.ISBN == ISBN);
        if (foundBooks.length) {
            return res.json({ message: "Books are Found!!", foundBooks });
        }

        res.json({ message: "No book found with this ISBN Code!" });
    } catch (error) {

        res.status(500).json({ message: "Internal Server Error!!" });

    }
}

 async function getBooksByTitle(req, res) {
    try {

        const { title } = req.body;

        if (!title) {
            return res.json({ message: "Please, provide a valid title!" });
        }

        const foundBooks = await books.filter(book => book.title == title);
        if (foundBooks.length) {
            return res.json({ message: "Books are Found!!", foundBooks });
        }

        res.json({ message: "No book found with this title!" });

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error!!" });
    }
}

 async function getBooksByAuthor(req, res) {
    try {

        const { author } = req.body;

        if (!author) {
            return res.json({ message: "Please, provide a valid author name!" });
        }

        const foundBooks = await books.filter(book => book.author == author);
        if (foundBooks.length) {
            return res.json({ message: "Books are Found!!", foundBooks });
        }

        res.json({ message: "No book found with this author name!" });

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error!!" });
    }
}


module.exports ={getAllBooks,getBooksByISBN,getBooksByTitle,getBooksByAuthor};

