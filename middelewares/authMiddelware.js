const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    // Check if the 'authorization' header is present
    if (!req.headers["authorization"]) {
      return res.status(401).json({
        success: false,
        message: "No authorization header provided.",
      });
    }

    // Extract the token from the header
    const authHeader = req.headers["authorization"];
    const token = authHeader.split(" ")[1]; // Assumes 'Bearer token'

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token not found in authorization header.",
      });
    }

    // Verify the token
    JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(401).json({
          success: false,
          message: "Authentication failed.",
        });
      } else {
        req.body.userId = decode.userId;
        next();
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      success: false,
      error,
      message: "Authentication failed.",
    });
  }
};
