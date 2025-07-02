console.log("Starting Notes Server...");
const express = require("express");
const app = express();
const { url } = require("./utils/config");
const { errorHandler, requestLogger } = require("./utils/middleware");
const routes = require("./controller/notes");
const userRoutes = require("./controller/users");
const loginRoutes = require("./controller/login");
const mongoose = require("mongoose");
const cors = require("cors");

//middleware
app.use(express.json());
app.use(cors());
app.use(express.static("dist"));
app.use(requestLogger);

mongoose.set("strictQuery", false);
mongoose.connect(url);
console.log("NODE_ENV is ", process.env.NODE_ENV);
app.use("/api/notes", routes);
app.use("/api/users", userRoutes);
app.use("/api/login", loginRoutes);
// this has to be the last loaded middleware,
app.use(errorHandler);

module.exports = app;
