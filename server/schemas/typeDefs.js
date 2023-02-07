const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    password: String!
    savedBooks: [Book]
  }

  type Book {
    _id: ID!
    bookId: String!
    authors: String
    description: String!
    title: String!
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    books(username: String): [Book]
    book(bookId: ID): Book
    me: User
  }

  type Mutation {
    getSingleUser(userId: ID, username: String): User
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook()
  }
`;

module.exports = typeDefs;
