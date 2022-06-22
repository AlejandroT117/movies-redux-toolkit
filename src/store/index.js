import { configureStore } from "@reduxjs/toolkit";
//reducers
import movie from './slices/movies'

export default configureStore({
  reducer: {
    movie
  }
})

