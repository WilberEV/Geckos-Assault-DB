import jwt from 'jsonwebtoken';
import config from './config.js';
export const auth = (req, res, next) => {
    let token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ error: 'NO_TOKEN' });
    }
    token = token.split(' ')[1];
    try {
        req.payload = jwt.verify(token, config.SECRET);
        next();
    }
    catch (e) {
        return next(new Error('INVALID_CREDENTIALS'));
    }
};
//# sourceMappingURL=middlewares.js.map