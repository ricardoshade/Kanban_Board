import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

interface DecodedToken extends JwtPayload {
  username: string;
}

// Extend the Request interface to include the user property
interface CustomRequest extends Request {
  user?: DecodedToken;
}

export const authenticateToken = (req: CustomRequest, res: Response, next: NextFunction) => {
  // TODO: verify the token exists and add the user data to the request object
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
    return res.status(401).send('Access denied. No token provided.');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY || '') as DecodedToken;
    req.user = decoded;
    return next();
  } catch (ex) {
    return res.status(400).send('Invalid token.');
  }
};
