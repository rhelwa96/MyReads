import Shelf from "./2.Shelf";
import * as BooksAPI from "../BooksAPI"
import { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updataData } from '../redux/Books';
 import { getAll } from "../BooksAPI";
const Home = () => {
  const books = useSelector(state=>state.books.data) 
  // console.log(books);

  const dispatch=useDispatch()
  // let [books, setBooks] = useState([])
  useEffect(() => {
    // if(books.length===0)
    // {getAll().then((res) => {
    //     dispatch(updataData(res))
    //   })}
    setInterval(() => {
      getAll().then((res) => {
            dispatch(updataData(res))
           })}
    , 500)
    }, [])
  return (  
    <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    <Shelf ShelfCategory="MyReads" books={books.filter((c) =>{
                      return c.shelf.toLowerCase()===("currentlyReading".toLowerCase())})} />         
                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshe lf-books">
                  <ol className="books-grid">
                  <Shelf ShelfCategory="WantToRead" books={books.filter((c) =>c.shelf.toLowerCase()===("wantToRead".toLowerCase()))} />
                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                  <Shelf ShelfCategory="read" books={books?.filter((c) =>c.shelf.toLowerCase()===("read".toLowerCase()))} />
                  </ol>
                </div>
              </div>
            </div>
          </div>
       
        </div>
        <div className="open-search">
            <a href='/search'>Add a book</a>
          </div>

    </div>
  );
}


export default Home;