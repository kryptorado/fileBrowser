const express = require("express");

const router = express.Router();
const fs = require("fs");

let index = 0;
const filePath = "C:\\Users\\dorib\\Desktop\\test"; // REPLACE THIS WITH YOUR OWN PATH

async function traverse(dir) {
  const files = fs.readdirSync(dir);
  const { mtime } = fs.lstatSync(`${dir}`);
  const dirData = {
    id: index.toString(),
    size: 0,
    name: dir,
    isDir: true,
    modDate: mtime,
    childrenCount: 0,
    files: [],
  };

  files.forEach(async (file) => {
    index += 1;

    // File is a folder
    if (fs.lstatSync(`${dir}/${file}`).isDirectory()) {
      const folder = await traverse(`${dir}/${file}`);
      folder.name = file;
      dirData.childrenCount += folder.childrenCount + 1;
      dirData.size += folder.size;
      dirData.files.push(folder);
    } else {
      // eslint-disable-next-line no-shadow
      const { size, mtime } = fs.lstatSync(`${dir}/${file}`);
      const fileData = {
        id: index.toString(),
        size,
        name: file,
        isDir: false,
        modDate: mtime,
        childrenCount: 0,
        files: [],
      };
      dirData.size += fileData.size;
      dirData.childrenCount += 1;
      dirData.files.push(fileData);
    }
  });

  return dirData;
}

// Get and return all the files using filePath as root
router.get("/", async (req, res) => {
  index = 0;
  const data = await traverse(filePath);
  res.json([data]);
});

module.exports = router;
