import PropTypes from "prop-types";
import BookStatus from "./4.BookStatus";
const Books =({ListBooks,updateShelf}) =>{
    return(
      <ol className="books-grid">
           {ListBooks.map((book) => (
              <li key={book.id}>
              <div className="book">
                <div className="book-top">
                    <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,  
                      backgroundImage:
                        `url("${book.imageLinks?.smallThumbnail}")`,
                    }}
                  ></div>
              
                  <div className="book-shelf-changer">
                    <BookStatus selectedbook={book.shelf} bookID={book.id} />
                    {/* {console.log(book)} */}
                   
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book?.authors}</div>
              </div>
            </li>
            ))}
    </ol>
      );
}
Books.propTypes = {

};
export default Books;