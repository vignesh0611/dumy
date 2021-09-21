import React, { useEffect, useState } from "react"
import {useForm} from "react-hook-form"
import {CgLogIn} from 'react-icons/cg'
import {useSelector,useDispatch} from 'react-redux'
import { useHistory } from "react-router-dom"
import {userLogin} from '../store/userSlice'
// import {BiHomeAlt} from 'react-icons/bi'
function Login (){
        let {register,handleSubmit, formState: { errors } } = useForm()
        let {userObj,isSuccess,isLoading,isError,invalidLoginMessage}=useSelector(state=>state.user)
        let dispatch =useDispatch()
        let history = useHistory()
        let [userCredentialObj,setUserCredentialObj] = useState({
            type:'',
            username:'',
            password:''
        }) 
        function onLoginSubmit(userObj){
            //userCredentialObj=userObj
            setUserCredentialObj({...userObj})
            dispatch(userLogin(userObj))
            //console.log(loginObj)
        }
        useEffect(()=>{
            if (isSuccess && userCredentialObj.type === "user"){
                history.push(`/dashbord/${userCredentialObj.username}`)
            }
            if (isSuccess && userCredentialObj.type === "admin"){
                history.push(`/admindashbord/${userCredentialObj.username}`)
            }
        },[isSuccess,userCredentialObj])
    return(
        <div className="row mt-5">

            <h1 className="text-center font">LOGIN PAGE</h1>
            {invalidLoginMessage && <p className="text-danger text-center">*{invalidLoginMessage}</p>}
            <form className="col-11 col-sm-8 col-md-6 mx-auto" onSubmit={handleSubmit(onLoginSubmit)}>
                {/* select admin or user */}
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-2">
                        <div className="form-check">
                            <input type="radio"
                                className="form-check-input"
                                name="select"
                                id="admin"
                                value="admin"
                                {...register("type",{required:true})} />
                            <label className="form-check-label">Admin</label>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="form-check">
                            <input type="radio"
                                className="form-check-input"
                                name="select"
                                id="user"
                                value="user"
                                {...register("type",{required:true})} />
                            <label className="form-check-label">user</label>
                        </div>
                    </div>
                </div>
                {errors.type?.type==='required' && <p className="alert alert-danger">Select type</p>}
                {/* username */}
                <div className="form-floating mb-3">
                    <input type="text" 
                        className="form-control" 
                        id="username" 
                        placeholder="username" 
                        {...register("username",{required:true})}/>
                    <label for="username">User Name</label>
                </div>
                {errors.username?.type==='required' && <p className="alert alert-danger">Name is required</p>}
                {/* password */}
                <div class="form-floating mb-3">
                    <input type="password" 
                        className="form-control" 
                        id="floatingpassword" 
                        placeholder="****" 
                        {...register("password",{required:true})}/>
                    <label for="password">Password</label>
                </div>
                {errors.password?.type==='required' && <p className="alert alert-danger">password is required</p>}
                {/* <button className="btn btn-success"><i class="fas fa-sign-in-alt"></i></button> */}
                <div className="col-6 float-end">
                    <button className="btn btn-success"><CgLogIn/></button>
                </div>
                {/* <button className="btn btn-success"><BiHomeAlt/></button> */}
            </form>
        </div>
    )
}
export default Login