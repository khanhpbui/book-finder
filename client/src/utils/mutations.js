import { gql } from "@apollo/client";

//line 4 vs 5 do they have to match????
export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        username
      }
    }
  }
`;
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        email
        username
      }
    }
  }
`;
// Need login first?
export const SAVE_BOOK = gql`
    mutation saveBook($input: InfoBook!) {
      saveBook(input: $input) {
        _id
        bookCount
        email
        savedBooks {
          bookId
        }
        username
      }
    }
`;
export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
        _id
        username
        email
        savedBooks {
          bookId
          authors
          image
          description
          title
          link
        }
      }
  
  }
`;
// mutation saveBook($input: infoBook) {
//   saveBook(input: $input) {
//       _id
//       username
//       email
//       savedBooks {
//         bookId
//         authors
//         image
//         description
//         title
//         link
//       }
//     }
//   }