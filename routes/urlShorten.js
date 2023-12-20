const express = require("express");
const { shortenUrl, redirectUrl } = require("../controllers/urlController");
const UrlShorten = express.Router();

// POST /shorten
UrlShorten.post('/shorten', shortenUrl)

// Redirect to the Original URL
UrlShorten.get("/:shortid", redirectUrl);


module.exports = {
  UrlShorten,
};
