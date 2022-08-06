const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

const data = [
  {
    id: "0",
    name: "Start",
    isDir: true,
    files: [
      {
        id: "1",
        name: "Documents",
        isDir: true,
        size: 321,
        files: [
          {
            id: "11",
            name: "Desktop",
            isDir: true,
            files: [
              {
                id: "111",
                name: "Pics",
                isDir: true,
                files: [
                  {
                    id: "1111",
                    name: "cat.png",
                  },
                  {
                    id: "1112",
                    name: "christmas.png",
                  },
                ],
              },
            ],
          },
        ],
      },
      { id: "2", name: "Test", isDir: true },
    ],
  },
];

app.get("/api/files", (req, res) => {
  res.json(data); // Will replace with actual files
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
