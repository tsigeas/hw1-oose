const express = require("express");
const { index, confirm } = require("./server/index.js");
const ShortUrl = require("./server/shortUrl.js");
const db = require("./server/db.js");
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5050;

db.connect();

app.use(express.urlencoded({ extended: false }));

app.get("/", (_req, res) => {
    res.send(index());
  });

app.post("/", async(req, res) => {
    try {
        data = await ShortUrl.create({ long: req.body.long })
        res.send(confirm(data.short, true));
    } catch (err) {
        res.send(confirm("", false));
    }
});

app.get('/:shortId', async (req, res) => {
    const shortUrl = await ShortUrl.findOne({ short: req.params.shortId });
    if (shortUrl == null) return res.sendStatus(404);
    
    res.redirect(shortUrl.long);
  })

app.listen(port, () => {
    console.log(`Express app listening at port: http://localhost:${port}/`);
  });
