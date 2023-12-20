const shortid = require("shortid");
const { UrlModel } = require("../models/UrlSchema");


const shortenUrl = async (req, res) => {
  try {
    if (!req.body.originalUrl) {
      res.status(400).statusMessage("Bad Request url not provided");
    }

    // Generate short URL using shortid and store in the database

    const url = new UrlModel({
      originalUrl: req.body.originalUrl,
      shortUrl: shortid.generate(),
    });

    await url.save();
    res.json({ originalUrl: url.originalUrl, shortUrl: url.shortUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const redirectUrl = async (req, res) => {
  const shortid = req.params.shortid;
  const redirect = await UrlModel.findOne({ shortUrl: shortid });
  if (redirect) {
    res.redirect(redirect.originalUrl);
  } else {
    res.status(404).json({ error: "URL not found" });
  }
};

module.exports = {
  shortenUrl,
  redirectUrl,
};
