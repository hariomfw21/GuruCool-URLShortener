const express = require("express");
const { shortenUrl, redirectUrl } = require("../controllers/urlController");
const { auth } = require("../controllers/authController");
const UrlShorten = express.Router();

// POST /shorten
UrlShorten.post('/shorten',auth, shortenUrl)

// Redirect to the Original URL
UrlShorten.get("/:shortid", redirectUrl);


module.exports = {
  UrlShorten,
};
