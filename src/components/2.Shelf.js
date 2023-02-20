import Books from "./3.Book";
import PropTypes from "prop-types";


const Shelf =({ShelfCategory,books,updateShelf}) =>{
    return(
      <><Books ListBooks={books}/></>
      );
}
Shelf.propTypes = {
  ShelfCategory: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
};
export default Shelf;