const { PORT } = require("./utils/config");
const { info } = require("./utils/logger");
const app = require("./app");

app.listen(PORT, () => {
  info(
    `Blogs Server is running on http://localhost:${PORT}`,
    `\nConnected to MongoDB...`
  );
});
