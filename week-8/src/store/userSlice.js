import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
export const userLogin = createAsyncThunk('loginUser',async (userCredentialObj,thunkAPI)=>{
        // make post
        // type is user
        let data;
        if (userCredentialObj.type === "user"){
            let response = await axios.post('/users/login',userCredentialObj)
            data = response.data
        }
        // if type is admin
        if (userCredentialObj.type === "admin"){
            let response = await axios.post('/admin/login',userCredentialObj)
            data = response.data
        }
        //console.log(data)
        if (data.message === "Success"){
            // save in local storage of browser
            localStorage.setItem("token",data.token)
            return data.user
        }
        if(data.message === "Invalid username" || data.message === "Invalid password"){
            // it will provide data to rejected state
            return thunkAPI.rejectWithValue(data)
        }
})

const userSlice = createSlice({
    name:"user",
    initialState:{
        userObj:{},
        isSuccess:false,
        isLoading:false,
        isError:false,
        invalidLoginMessage:''
    },
    reducers:{
        clearLoginStatus:(state)=>{
            state.isSuccess = false
            return state;
        }
    },
    extraReducers:{
        [userLogin.fulfilled]: (state,action) => {
            state.userObj = action.payload
            state.isSuccess = true
            state.isLoading = false
            state.invalidLoginMessage = ''
            state.isError = false
        },
        [userLogin.pending]: (state,action) => {
            state.isLoading = true
        },
        [userLogin.rejected]: (state,action) => {
            state.isError = true
            state.isLoading = false
            state.invalidLoginMessage = action.payload.message
        }
    }
})
export const {clearLoginStatus}=userSlice.actions

export default userSlice.reducer
