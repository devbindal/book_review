const jwt = require( "jsonwebtoken");

function authenticate(req, res, next) {
    try {
        let tokenHeader = req.headers.authorization;

        // check token integrity
        if (!tokenHeader || !tokenHeader.startsWith("Bearer")) {
            return res.status(401).json({ message: "You're not authorized to do this action!" });
        }

        tokenHeader = tokenHeader.split(' ')[1];
        // console.log(tokenHeader);

        
        const { username } = jwt.verify(tokenHeader, process.env.SECRET_KEY);
        req.user = { username };

        next();
    } catch (error) {
        return res.status(401).json({ message: "You're not authorized to do this action!" });
    }
}

module.exports =  authenticate;