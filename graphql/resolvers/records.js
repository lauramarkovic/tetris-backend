const Record = require("../../models/Record");
const checkAuth = require("../../util/check-auth");

module.exports = {
  Query: {
    async getRecords() {
      try {
        const records = await Record.find().sort({ score: -1, createdAt: -1 }).limit(10);
        return records;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getUserRecords(_, { username }) {
      try {
        const userRecords = await Record.find({ username: username }).sort({ score: -1 });
        return userRecords;
      } catch (err) {
        throw new Error(err);
      }
    }
  },
  Mutation: {
    async createRecord(_, { score, level }, context) {
      const user = checkAuth(context);

      const newRecord = new Record({
        score,
        level,
        username: user.username,
        createdAt: new Date().toISOString()
      });

      const record = await newRecord.save();

      return record;
    }
  }
};