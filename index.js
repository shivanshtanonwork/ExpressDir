const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("You contacted root path");
});

app.get("/apple", (req, res) => {
  res.send("You contacted apple");
});
app.get("/mango", (req, res) => {
  res.send("You contacted mango");
});

app.get("/:username/:id", (req, res) => {
  let { username, id } = req.params;
  // res.send(`welcome to the page of @${username}.`);
  let htmlStr = `<h1>welcome to the page of @${username}.</h1>`;
  res.send(htmlStr)
})

app.get("/search", (req, res) => {
  let { q } = req.query;
  if (!q) {
    res.send(`<h1>Nothing found</h1>`)
  }
  res.send(`<h1>search results for query: ${q}</h1>`)
})

// Universal path selector using wildcard
// app.get('*splat', (req, res) => {
//   res.send('404 Not Found');
// });

// app.post('/', (req, res) => {
//   res.send("your sent post to root ")
// })
// app.use((req, res) => {
//   console.log("Request Recieved");
//   res.send("<h1>Fruits</h1> <ul><li>Apple</li></ul>");
// });
