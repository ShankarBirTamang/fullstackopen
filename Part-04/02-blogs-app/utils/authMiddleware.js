const jwt = require("jsonwebtoken");

const tokenExtractor = (request, response, next) => {
  const auth = request.get("authorization");
  if (auth && auth.toLowerCase().startsWith("bearer ")) {
    request.token = auth.substring(7);
  }
  next();
};

const userExtractor = async (request, response, next) => {
  const decodedToken = jwt.verify(request.token, process.env.SECRET);
  console.log("decodedToken is ", decodedToken);
  if (!decodedToken.id) {
    return response.status(401).json({ error: "token invalid" });
  }
  request.user = decodedToken;
  next();
};

module.exports = {
  tokenExtractor,
  userExtractor,
};
