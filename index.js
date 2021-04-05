const { ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");
const mongoose = require("mongoose");

const Record = require("./models/Record");
const { MONGODB } = require("./config");

const typeDefs = gql`
  type Record{
    id: ID!
    score: Int!
    level: Int!
    username: String!
    createdAt: String!
  }
  type Query{
    getRecords: [Record]
  }
`;

const resolvers = {
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
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

mongoose.connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB Connected!');
    return server.listen({ port: 5000 })
  })
  .then(res => {
    console.log(`Server running at ${res.url}`);
  });
