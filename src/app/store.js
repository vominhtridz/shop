import { configureStore } from '@reduxjs/toolkit'
import ProductsReducer from '../features/Products/ProductSlice'
export default configureStore({
  reducer: {
    Products: ProductsReducer
  },
})