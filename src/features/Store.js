import { configureStore } from '@reduxjs/toolkit'
import cartslice from './CartSlice'
import  NewProductsSlice  from './NewproductsSlice'


export const store = configureStore({
  reducer: {
    
    cart:cartslice,
    newproducts:NewProductsSlice,
  },
})

