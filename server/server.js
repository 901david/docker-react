const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.json({ data: [{ id: 1, name: "some Person" }] });
});

app.listen(PORT, err => {
  if (err) throw err;

  console.log(`Ready for incoming requests on port: ${PORT}`);
});
