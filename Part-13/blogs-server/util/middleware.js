const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === "SequelizeValidationError") {
    return response.status(400).json({
      error: error.errors.map((e) => e.message),
    });
  } else if (error.name === "SequelizeDatabaseError") {
    return response.status(400).json({
      error: "Database error",
    });
  } else if (error.name === "SequelizeUniqueConstraintError") {
    return response.status(400).json({
      error: "Unique constraint violation",
    });
  }

  next(error);
};

module.exports = { errorHandler };
