console.log("Starting Notes Server...");
const express = require("express");
const app = express();
const { url } = require("./utils/config");
const { errorHandler, requestLogger } = require("./utils/middleware");
const routes = require("./controller/notes");
const mongoose = require("mongoose");
const cors = require("cors");

//middleware
app.use(express.json());
app.use(cors());
app.use(express.static("dist"));
app.use(requestLogger);

mongoose.set("strictQuery", false);
mongoose.connect(url);
app.use("/api/notes", routes);
// this has to be the last loaded middleware,
app.use(errorHandler);

module.exports = app;
