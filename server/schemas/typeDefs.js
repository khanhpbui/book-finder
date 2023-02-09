const { gql } = require("apollo-server-express");
// to show the frontend... dont show password
const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: String!
    authors: [String]
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
    me: User
  }
  input InfoBook {
    bookId: String!
    authors: [String]
    description: String!
    title: String!
    image: String
    link: String
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: InfoBook): User
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
//when to include these????
// users: [User]
// user(username: String!): User
// books(username: String): [Book]
// book(bookId: ID): Book

// Book is just a SCHEMA.. check model...don't need _id??
// queries are info getting back
// mutation to edit the datatbase (update, delete)
