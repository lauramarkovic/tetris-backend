const Record = require("../../models/Record");

module.exports = {
  Query: {
    async getRecords() {
      try {
        const records = await Record.find();
        return records;
      } catch (err) {
        throw new Error(err);
      }
    }
  }
}