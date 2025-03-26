import jwt from 'jsonwebtoken';

export const authenticateJWT = (req, res, next) => {
    // get token from header
    const token = req.header('Authorization')?.replace('Bearer ', '');
    // if no token, return forbidden
    if(!token)
    {
        return res.status(403).json({ message: 'Accesso negato, token mancante' });
    }
    // verify token
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if(err)
        {
            return res.status(403).json({ message: 'Accesso negato, token non valido' });
        }

        req.user = user;
        next();
    });
};