const adminMiddleware = async(req, res) => {
    try {
        const adminRole = req.user.isAdmin;
        if(!adminRole) {
            return res.status(403).json({ message: "You are not an admin" });
        } 
        res.status(200).json({
            msg: req.user.isAdmin
        });
        next();
    } catch (error) {
        next(error);
    }
}

export default adminMiddleware;