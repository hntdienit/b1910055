// import Book from './book.js'
// import Author from './author.js'
import Posts from "./Posts.js";
import Comments from "./Comments.js";
import Users from "./Users.js";
import Likes from "./Likes.js";

const relationship = () => {
  // // Author x Book: One to Many
  // Author.hasMany(Book, { foreignKey: 'authorId', as: 'books' })
  // Book.belongsTo(Author, { foreignKey: 'authorId', as: 'author' })

 /*  Posts x Comments: One to Many */
  Posts.hasMany(Comments, {
    onDelete: "cascade",
  });

  /* Posts x Likes: One to Many */
  Posts.hasMany(Likes, {
    onDelete: "cascade",
  });
  
  /* Users x Posts: One to Many */
  Users.hasMany(Posts, {
    onDelete: "cascade",
  });

  /* Users x Likes: One to Many */
  Users.hasMany(Likes, {
    onDelete: "cascade",
  });
  

};

export default relationship;
