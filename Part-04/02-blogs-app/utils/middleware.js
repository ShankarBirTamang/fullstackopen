const logger = require("./logger");

// Middleware for handling errors
const errorHandler = (error, request, response, next) => {
  logger.error(error.message);

  if (error.name === "CastError") {
    return response.status(400).json({
      error: "malformatted id",
    });
  } else if (error.name === "ValidationError") {
    return response.status(400).json({
      error: error.message,
    });
  } else if (error.name === "MongoServerError" && error.code === 11000) {
    return response.status(409).json({
      error: "duplicate key error",
    });
  }

  next(error);
};

const requestLogger = (request, response, next) => {
  logger.info("Method:", request.method);
  logger.info("Path:  ", request.path);
  logger.info("Body:  ", request.body);
  logger.info("---");
  next();
};

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

module.exports = {
  requestLogger,
  unknownEndpoint,
  errorHandler,
};
