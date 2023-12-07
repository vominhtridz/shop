import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: [],
  },
  reducers: {
    StoreProducts: (state, action)=>{
        state.value.push(action.payload)
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { StoreProducts } = counterSlice.actions

export default counterSlice.reducer