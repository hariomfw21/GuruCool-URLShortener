const mongoose = require("mongoose");

const urlSchema = mongoose.Schema({
  originalUrl: { type: String, required: true },
  shortUrl: { type: String, unique: true, required: true },
  createdAt: { type: Date, default: Date.now },
});

const UrlModel = mongoose.model("Url", urlSchema);

module.exports = {
    UrlModel
}
