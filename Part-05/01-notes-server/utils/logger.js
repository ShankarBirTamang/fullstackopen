const { nodeEnv } = require("./config");

const info = (...params) => {
  if (nodeEnv === "test") return;
  console.log(...params);
};
const error = (params) => {
  if (nodeEnv === "test") return;
  console.error(params);
};

module.exports = {
  info,
  error,
};
