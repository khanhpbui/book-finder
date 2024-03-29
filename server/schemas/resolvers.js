const { AuthenticationError } = require("apollo-server-express");
const { User, Book } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    // users: async () => {
    //   return await User.find().populate("books");
    // },
    // user: async (parent, { username }) => {
    //   return await User.findOne({ username }).populate("books");
    // },
    // book: async (parent, { bookId }) => {
    //   return await Book.findOne({ _id: bookId });
    // },
    // books: async (parent, { username }) => {
    //   const params = username ? { username } : {};
    //   return await Book.find(params);
    // },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("books");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      // console.log("hello");
      const user = await User.create({ username, email, password });
      // console.log(user);
      const token = signToken(user);
      // console.log(token);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    saveBook: async (parent, { input }, context) => {
      console.log("hello");
      if (context.user) {
        console.log(context.user)
        return await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { savedBooks: input } },
          { new: true, runValidators: true }
        );
      }
      throw new AuthenticationError("Need to be logged in");
    },
    removeBook: async (parent, { bookId }, context) => {
      console.log("hello");
      if (context.user) {
        return await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: { bookId } } },
          { new: true }
        );
      }
      throw new AuthenticationError("Need to be logged in");
    },
  },
};
module.exports = resolvers;