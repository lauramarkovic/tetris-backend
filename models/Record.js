const { model, Schema } = require("mongoose");

const recordSchema = new Schema({
  score: Number,
  level: Number,
  username: String,
  createdAt: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
});

module.exports = model('Record', recordSchema);