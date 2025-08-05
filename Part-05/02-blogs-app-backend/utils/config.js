require("dotenv").config();
const dbUrl = process.env.MONGODB_URL;
const PORT = process.env.PORT;
const nodeEnv = process.env.NODE_ENV;
const dbName =
  nodeEnv === "test" ? process.env.MONGODB_DB_TEST : process.env.MONGODB_DB;
const url = `${dbUrl}/${dbName}?retryWrites=true&w=majority&appName=Cluster0`;
module.exports = { url, nodeEnv, PORT };
