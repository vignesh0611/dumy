import {configureStore} from '@reduxjs/toolkit'
import userSlice from './userSlice'
import ProductSlice from './ProductSlice'
export const Store = configureStore({
    reducer:{
        user:userSlice,
        product:ProductSlice
    }
})