const  {users} = require( "../data/users.js");
const jwt = require("jsonwebtoken");

async function register(req, res) {
    try {
        
        const {userName,password} = req.body;
        const foundUser =  users.filter(user => user.user == userName);
        if (foundUser.length) {
            return res.json({ message: "This user is already registered!" });
        }
        users.push({username : userName,password: password});
        return res.status(200).json({message : "user registered successfully"});
    } catch (error) {
        console.error("Error in getAllBooks: ", error); // Log the error
        res.status(500).json({ message: "Internal Server Error!!" });
    }
}



 async function login(req, res) {
    try {

        const {userName,password} = req.body;

        const foundUser =  users.filter(user => user.username == userName && user.password == password);

        
        if (!foundUser.length) {
            return res.json({ message: "Invalid Credentials!" });
        }

        const token = jwt.sign({ userName }, process.env.SECRET_KEY);

        return res.json({ message: "User logged in successfully!", token });
    } catch (error) {

        res.status(500).json({ message: "Internal Server Error!!" });

    }
}
module.exports = {register,login}