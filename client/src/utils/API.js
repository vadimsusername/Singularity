import axios from "axios";

export default {
  // Gets all books
  userLogin: login => {
    console.log(login)
    return axios.post("/api/login", login)
  },
  // Cards
  getCards: data => {
    return axios.get("/api/gameCards/" + data);
  },

  //User
  getUsers: () => {
    return axios.get("/api/users");
  },
  userLogin: login => {
    return axios.get("/api/login", login)
  },
  addUser: user => {
    return axios.post("/api/users", user);
  },

  // Deck
  getDeck: () => {
    return axios.get("/api/decks")
  },
  getOneDeck: id => {
    return axios.get("/api/deck/" + id)
  },
  buildDeck: () => {
    return axios.post("/api/deck")
  }




  // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }
};
