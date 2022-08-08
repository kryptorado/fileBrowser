const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

// Route files
const files = require("./files");

// Mount routers
app.use("/api/files", files);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
