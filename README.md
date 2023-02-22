# book-finder


## Description

This application was built using the MERN stack with a React front end, MongoDB database, Node.js/Express.js server, and third party Google Book API. It also implements JSON Web Tokens (JWT) for user authentication. User will be able to sign up for an account, login, search for books, and save book searches to the back end. 

<br><br>
<img src="./client/public/pic1.png" alt="screeenshot" width="550px" height="400px">
<br><br>
<img src="./client/public/pic2.png" alt="screeenshot" width="550px" height="400px">
<br><br>
<img src="./client/public/pic3.png" alt="screeenshot" width="550px" height="400px">
<br><br>
<img src="./client/public/pic4.png" alt="screeenshot" width="550px" height="400px">
<br><br>
Click [HERE](https://google-book-search.herokuapp.com/) to view the deployed application on Heroku.

    
## Table of Contents
    
- [Description](#description)
- [Installation](#installation)
- [Technologies](#technologies)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [License](#license)
- [Questions](#questions)

## Installation
```
npm i
npm run develop
```

## Technologies
- MongoDB
- Mongoose
- Express.js
- React
- Node.js
- Apollo
- GraphQL
- JWT - JSON Web Token

## User Story
```
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
```
## Acceptance Criteria
```
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button 
```

## License
N/A

## Questions
If there are any questions or concerns, please contact me at:<br>
[GitHub](https://github.com/khanhpbui)<br>
[Email](mailto:pkkhanhbui@gmail.com)