import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const authenticateJWT = (req, res, next) => {
     try {
    const token = req.header('Authorization').split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Access Denied' });
    }

    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decodedData.id;
    req.role = decodedData.role; 

    next();

} catch (error) {
    if (error.name === 'TokenExpiredError') {
        return res.status(401).json({ error: 'Expired Token' });
    } else if (error.name === 'JsonWebTokenError') {
        return res.status(401).json({ error: 'Invalid Token' });
    } else {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
};;
