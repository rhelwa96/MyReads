import { useState } from 'react';
import PropTypes from "prop-types";
import { useDispatch } from 'react-redux';
import { updateBook, updataData } from '../redux/Books';
import { getAll, update } from '../BooksAPI';

 const BookStatus =({selectedbook,bookID}) =>{
  var dispatch=useDispatch()


  // {console.log(selectedbook)}
  // console.log('idddd', bookID)
  // const dispatch=useDispatch()
 
    return(
      <select onChange={(e) => {
        // dispatch(updateBook({ id: bookID, shelf: e.target.value }))
       update(bookID,e.target.value).then(
        getAll().then((res) => {
          console.log('say',res);
           dispatch(updataData(res))
        }))

        console.log(e.target.value)
      }}
        defaultValue={selectedbook}>
            <option value="moveto" disabled>
              Move to...
            </option>
            <option value="currentlyReading">
              Currently Reading
            </option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
      </select>
      );
}
BookStatus.propTypes = {
  selectedbook: PropTypes.string.isRequired,
  bookID: PropTypes.string.isRequired
};
export default BookStatus;