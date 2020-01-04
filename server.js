const express = require("express");

const app = express();

app.get("/api/articles", (req, res) => {
  const articles = [
    { id: 1, title: "John", author: "Doe" },
    { id: 2, title: "Steve", author: "Smith" },
    { id: 3, title: "Mary", author: "Swanson" }
  ];

  res.json(articles);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
