import React from 'react'
import {useState} from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

function Register (){
    let {register,handleSubmit, formState: { errors } } = useForm()
    let [userRegisterStatus,setUserRegisterStatus] = useState("")
    let history = useHistory()

    let [file,setFile]=useState(null)
    const onFileSelect=(e)=>{
        setFile(e.target.files[0])
    }
    const onRegisterFormSubmit = async(userObj) => {
        let formData = new FormData()
        //append image to it
        formData.append('photo',file,file.name)
        //append productObj
        formData.append('userObj',JSON.stringify(userObj))
        //console.log(userObj)
        //http post request (use either then method or async/await method)
        let responseObj = await axios.post("/users/register",formData)
        let payload = responseObj.data
        if(payload.message==="Success"){
            //redirect to login page
            history.push("/login")
        }
        else{
            setUserRegisterStatus("*Username has already taken")
        }
        //console.log("payload is",payload)
    }

    return(
        <div className="row mt-5">
            <h1 className="text-center font">REGISTER PAGE</h1>
            {/* name */}
            <form className="col-11 col-sm-8 col-md-6 mx-auto" onSubmit={handleSubmit(onRegisterFormSubmit)}>
                <div className="form-floating mb-3">
                    <input type="text" 
                        className="form-control" 
                        id="name" 
                        placeholder="Name" 
                        {...register("name",{required:true})}/>
                    <label for="name">Name</label>
                </div>
                {errors.name?.type==='required' && <p className="alert alert-danger">Name is required</p>}
                {/* username */}
                <div className="form-floating mb-3">
                    <input type="text" 
                        className="form-control" 
                        id="username" 
                        placeholder="username" 
                        {...register("username",{required:true,minLength:6})}/>
                    <label for="username">User Name</label>
                </div>
                {errors.username?.type==='required' && <p className="alert alert-danger">Name is required</p>}
                {errors.username?.type==='minLength' && <p className="alert alert-danger">min length is 6</p>}
                <p className="text-danger">{userRegisterStatus}</p>
                {/* email */}
                <div class="form-floating mb-3">
                    <input type="email" 
                        className="form-control" 
                        id="floatingemail" 
                        placeholder="asdf@gmail.com" 
                        {...register("email",{required:true})}/>
                    <label for="email">E-mail</label>
                </div>
                {errors.email?.type==='required' && <p className="alert alert-danger">email is required</p>}

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
                {/* dob */}
                <div class="form-floating mb-3">
                    <input type="date" 
                        className="form-control" 
                        id="dob" 
                        placeholder="dob" 
                        {...register("dob",{required:true})}/>
                    <label for="dob">DOB</label>
                </div>
                {errors.dob?.type==='required' && <p className="alert alert-danger">DOB is required</p>}
                {/* profile image */}
                <div className="form-floating mb-3">
                    <input type="file" 
                        name="photo"
                        className="form-control" 
                        id=""
                        onChange={onFileSelect}/>
                    <label for="productImage">Profile Image</label>
                </div>
                <div className="col-6 float-end">
                    <button className="btn btn-success">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default Register