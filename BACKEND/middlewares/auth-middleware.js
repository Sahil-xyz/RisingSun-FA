import jwt from 'jsonwebtoken'
import { User } from '../models/user-model.js';

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.header("Authorization");
        if (!token) {
            // If you attempt to use an expired token, you'll receive a "401 Unauthorized HTTP" response.
            return res
              .status(401)
              .json({ message: "Unauthorized HTTP, Token not provided" });
          }
        
          // Assuming token is in the format "Bearer <jwtToken>, Removing the "Bearer" prefix"
          const jwtToken = token.replace("Bearer", "").trim();
          console.log(jwtToken);
            // Verifying the token
            const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
            console.log(isVerified);
        
            // getting the complete user details & also we don't want password to be sent
            const userData = await User.findOne({ email: isVerified.email }).select({
              password: 0,
            });
        
            req.token = token;
            req.user = userData;
            req.userID = User._id;
        
            // Move on to the next middleware or route handler
            next();
        }
        catch(error) {
        console.log(error);
    }
}

export default authMiddleware;