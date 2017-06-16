var mongoose = require("mongoose");

var schema = mongoose.schema;

var ArticleSchema = new Schema({

  title: {
    type: String,
    required: true
},
  note: {
    type:schema.types.ObjectId,
    ref: "note"
  }
});

var article = mongoose.model("Article", articleSchema);

module.exports = article;
