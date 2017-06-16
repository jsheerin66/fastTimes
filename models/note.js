var mongoose = require("mongoose");

var schema = mongoose.schema;

var noteSchema = new schema ({

  title: {
    type: String

  },
  body: {
    type: String
  }
})


var note = mongoose.model("note", noteSchema);

module.exports = note;
