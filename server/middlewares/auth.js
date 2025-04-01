export const isAuthenticated = (req, res, next) => {
    // check if user is authenticated
    req.isAuthenticated()
        ? next()
        : res.status(403).send('Forbidden')
    ;
};