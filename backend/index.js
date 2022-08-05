const express = require("express");
const Moment = require("moment");

const app = express();

const port = process.env.PORT || 5000;

app.get("/api/files", (req, res) => {
  const files = [
    {
      key: "Documents/photo.png",
      modified: +Moment().subtract(1, "hours"),
    },
  ];
  res.json(files);
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
