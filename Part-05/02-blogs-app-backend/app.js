console.log("Starting Blogs Server...");

const express = require("express");
const mongoose = require("mongoose");
const { url } = require("./utils/config");
const { errorHandler, requestLogger } = require("./utils/middleware");
const routes = require("./controller/blogs");
const userRoutes = require("./controller/users");
const loginRouter = require("./controller/login");
const app = express();
const cors = require("cors");
const { tokenExtractor } = require("./utils/authMiddleware");

//middleware
app.use(express.json());
app.use(cors());
app.use(express.static("dist"));
app.use(requestLogger);

app.use("/api/login", loginRouter);
app.use(tokenExtractor);
// app.use(userExtractor);

mongoose.set("strictQuery", false);
mongoose.connect(url);
console.log("NODE_ENV is ", process.env.NODE_ENV);
app.use("/api/blogs", routes);
app.use("/api/users", userRoutes);

// this has to be the last loaded middleware,
app.use(errorHandler);

module.exports = app;
