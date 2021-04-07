const gql = require("graphql-tag");

module.exports = gql`
  type Record{
    id: ID!
    score: Int!
    level: Int!
    username: String!
    createdAt: String!
  }
  type User{
    id: ID!
    username: String!
    token: String!
    email: String!
    createdAt: String!
  }
  input RegisterInput{
    username: String!
    email: String!
    password: String!
    confirmPassword: String!
  }
  type Query{
    getRecords: [Record]
  }
  type Mutation{
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
  }
`;