const express = require("express");
const app = express();

app.get("/", (_req, res) => {
  res.json({ ok: true, msg: "Hello CI/CD!" });
});

const port = process.env.PORT || 3000;
if (require.main === module) {
  app.listen(port, () => console.log(`Server on :${port}`));
}

module.exports = app;
