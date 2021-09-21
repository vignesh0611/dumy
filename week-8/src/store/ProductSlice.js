import {createSlice} from '@reduxjs/toolkit'
 
let ProductSlice=createSlice({
    name:'product',
    initialState:{
        product:[],
        index:[],
        count:''
      },
      reducers:{
        increment:(state,action)=>{state.index.push(action.payload)},
        incrementProduct:(state,action)=>{state.product.push(action.payload)},
        incrementCount: (state) => {state.count = state.count+1},
        decrementCount:(state)=> {state.count = state.count-1}
      }
    })
    
    // export actions
    export let {increment,incrementProduct,incrementCount,decrementCount} = ProductSlice.actions 
    
    //{console.log(product.index)}
 
export default ProductSlice.reducer