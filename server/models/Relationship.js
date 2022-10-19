// import Book from './book.js'
// import Author from './author.js'
import Posts from "./Posts.js";
import Comments from "./Comments.js";
import Users from "./Users.js";

const relationship = () => {
  // // Author x Book: One to Many
  // Author.hasMany(Book, { foreignKey: 'authorId', as: 'books' })
  // Book.belongsTo(Author, { foreignKey: 'authorId', as: 'author' })

  // Posts x Comments: One to Many
  Posts.hasMany(Comments, {
    onDelete: "cascade",
  });

  // Users x Posts: One to Many
  Users.hasMany(Posts, {
    onDelete: "cascade",
  });
};

export default relationship;
