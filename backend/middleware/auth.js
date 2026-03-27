import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
    const token = req.headers.token;

    if (!token) {
        return res.status(401).json({ success: false, message: "Not Authorized" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id; // better than putting in body
        next();
    } catch (error) {
        return res.status(401).json({ success: false, message: error.message });
    }
};

export default authMiddleware;