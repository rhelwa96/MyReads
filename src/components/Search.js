import { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as BooksAPI from '../BooksAPI'
import { updataData } from '../redux/Books';
 import { getAll } from "../BooksAPI";
import Books from './3.Book'
 
const Search =() =>{
  const books = useSelector(state=>state.books.data)
  const dispatch=useDispatch()
  useEffect(() => {
    if(books.length===0)
    {getAll().then((res) => {
        dispatch(updataData(res))
      })}
    }, [])
    const [query, setQuery] = useState("");
    const [ListBooks, setListBooks] = useState([]);
 
    const updateSearch = async (query) => {
        setQuery(query);
      
        if(query!=="")
        {
          try{
            const res = await BooksAPI.search(query.trim());
            // console.log(res.error)
            if( res.error==="empty query"){ setListBooks([])}
            else{
            res.map((searchBook) => {
              const FoundBook=books.find((book) => book.id === searchBook.id ) || null
              if(FoundBook!==null)
              {
                searchBook.shelf=FoundBook.shelf
              }
              else {
                searchBook.shelf="none"
                console.log("Im in")
              }
            })
            setListBooks(res)
          
          }
          } 
          catch(error){
              console.log(error)
            }
        }
        else{
          setListBooks([])
        }
    
    };

    return(
        <div className="search-books">
        <div className="search-books-bar">
          <a
            className="close-search"
            href='/'
          >
            Close
          </a>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              value={query}
              onChange={(event) => updateSearch(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
        {ListBooks  && 
        ListBooks.length>0  &&(    
            <Books ListBooks={ListBooks} />
        )}
          
        </div>
      </div>

    );
}

export default Search;