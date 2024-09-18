const Express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const bookRoutes = require("./routes/books.js");
const authRoutes = require("./routes/auth.js");
const reviewRoutes = require("./routes/review.js");
// import notFoundHandler from "./middleware/not-found.js";

dotenv.config();

const app = Express();
app.use(cors());
// middleware
app.use(Express.json());

// routes
const baseURL = "/api/v1";
app.use(`${baseURL}/books`, bookRoutes);  // Corrected route prefix
app.use(`${baseURL}/reviews`, reviewRoutes);  // Corrected route prefix
app.use(`${baseURL}/auth`, authRoutes);
// error handlers
// app.use(notFoundHandler);

try {
    const port = process.env.PORT || 5050; // Default port if not set
    app.listen(port, () => console.log(`Server running on port ${port}!`));
} catch (error) {
    console.log(error);
}
