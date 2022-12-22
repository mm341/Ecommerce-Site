import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';


export const productsFetch2=createAsyncThunk('products2/productsFetch2',async()=>{
    const response=await fetch('https://dummyjson.com/products');
    const data=await response.json();
    return data.products;
    
})

export const productFetch2=createAsyncThunk('products2/productFetch2',async(id)=>{
  const response=await fetch(`https://dummyjson.com/products/${id}`);
  const data=await response.json();
  return data;
})

export const catofProductFetch=createAsyncThunk('products2/catofProductFetch',async(cat)=>{
  const response=await fetch(`https://dummyjson.com/products/category/${cat}`);
  const data=await response.json();
  return data.products;
})

const initialState = {
  products: [],
  categories: {},
  selectProduct: {},
};


export const NewProductsSlice = createSlice({
  name: 'Products2',
  initialState,
  reducers: {
    removeSelectedproduct: (state) => {
      state.selectProduct = {};
      state.products=[];
    },
  },

  extraReducers: { 
   
    [productsFetch2.pending]: () => {
      console.log("Pending");
    },
    [productsFetch2.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, products: payload };
    },
    [productsFetch2.rejected]: () => {
      console.log("Rejected!");
    },
    [productFetch2.pending]: () => {
      console.log("Pending");
    },
    [productFetch2.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, selectProduct: payload };
    },
    [productFetch2.rejected]: () => {
      console.log("Rejected!");
    },
    [catofProductFetch.pending]: () => {
      console.log("Pending");
    },
    [catofProductFetch.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, products: payload };
    },
    [catofProductFetch.rejected]: () => {
      console.log("Rejected!");
    },
  },
})
export const {removeSelectedproduct}=NewProductsSlice.actions 

export default NewProductsSlice.reducer;