import { createSlice } from "@reduxjs/toolkit";
import { Await } from "react-router-dom";
import { getAll,update } from "../BooksAPI";

// const asyncFun=async(id, shelf)=> {
// await update(id, shelf)
// }

const booksSlice = createSlice({
  name: "books",
  initialState: {
    data: [] , 
  },
  reducers:{
    updateBook: (state,action)=>{
      const id=action.payload.id;
      const shelf=action.payload.shelf
      update(id, shelf).then(console.log('updated'))
      ;
      },
    updataData: (state, action) => {
      console.log('payload:',action.payload);
      return {
        data:action.payload

      }
    },
    }
//   reducers: {
//     search: (state, action) => {
//         state.value=state.value+1;
//       if (action.payload !== "") {
//         state.searchQuery = action.payload;
//         state.filteredData = state.data.filter((car) =>
//           car.carName.toLowerCase().startsWith(action.payload.toLowerCase())
//         );
//       } else {
//         state.filteredData = state.data;
//       }
//     },
//     like: (state, action) => {
//       LikeCar(action.payload);
//       // console.log("Car is liked");
//     },
//     updatebooks: (state, action) => {
//       state.data = action.payload;
//       // console.log("books Cards are updated");
//     },
//   },
});

export const { updateBook, updataData } = booksSlice.actions;
export default booksSlice.reducer;