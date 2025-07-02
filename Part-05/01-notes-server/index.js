const { url, PORT } = require("./utils/config");
const { info, error } = require("./utils/logger");
const app = require("./app");

app.listen(PORT, () => {
  info(
    `Notes Server is running on http://localhost:${PORT}`,
    `\nConnected to MongoDB...`
  );
});
