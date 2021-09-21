import React, { useState } from "react"
import { useForm } from "react-hook-form"
import axios from 'axios'
//import {useHistory,useRouteMatch} from 'react-router-dom'
function AddProduct(){
    let [file,setFile] = useState(null);
    let {register,handleSubmit, formState: { errors } } = useForm()
    // let history = useHistory()
    // let {path,url} = useRouteMatch()
    //after image selected
    const onFileSelect=(e)=>{
        setFile(e.target.files[0])
    }
    //when form submitted
    const onFormSubmit=async (productObj)=>{
        let formData = new FormData()
        //append image to it
        formData.append('photo',file,file.name)
        //append productObj
        formData.append('productObj',JSON.stringify(productObj))
        //http POST
        let response = await axios.post("/products/addproduct",formData)
        //console.log(formData)
        //console.log("after product creation",response.data);
        alert(response.data.message)
        // navigate to view products
        //history.push(`${path}/view-products`)
    }


    return(
        <div className="row mt-5">
            <h1 className="text-center font">Add Products Here...</h1>
            <form className="col-11 col-sm-8 col-md-6 mx-auto" onSubmit={handleSubmit(onFormSubmit)}>
                {/* priduct id */}
                <div className="form-floating mb-3">
                    <input type="text" 
                        className="form-control" 
                        id="productid" 
                        placeholder="productid" 
                        {...register("productid",{required:true})}/>
                    <label for="productid">Product ID</label>
                </div>
                {errors.productid?.type==='required' && <p className="alert alert-danger">Product ID is required</p>}
                {/* product name */}
                <div className="form-floating mb-3">
                    <input type="text" 
                        className="form-control" 
                        id="productName" 
                        placeholder="productName" 
                        {...register("productName",{required:true})}/>
                    <label for="productName">Product Name</label>
                </div>
                {errors.productName?.type==='required' && <p className="alert alert-danger">Product name is required</p>}
                {/* product description */}
                <div className="form-floating mb-3">
                    <input type="text" 
                        className="form-control" 
                        id="productDescription" 
                        placeholder="productDescription" 
                        {...register("productDescription",{required:true})}/>
                    <label for="productDescription">Product Description</label>
                </div>
                {errors.productDescription?.type==='required' && <p className="alert alert-danger">Product description is required</p>}
                {/* product price */}
                <div className="form-floating mb-3">
                    <input type="text" 
                        className="form-control" 
                        id="productPrice" 
                        placeholder="productPrice" 
                        {...register("productPrice",{required:true})}/>
                    <label for="productPrice">Product Price</label>
                </div>
                {errors.productPrice?.type==='required' && <p className="alert alert-danger">Product price is required</p>}
                {/* product image */}
                <div className="form-floating mb-3">
                    <input type="file" 
                        name="photo"
                        className="form-control" 
                        id=""
                        onChange={onFileSelect}/>
                    <label for="productImage">Product Image</label>
                </div>
                {/* {errors.productImage?.type==='required' && <p className="alert alert-danger">Product image is required</p>} */}
                <div className="col-6 float-end">
                    <button className="btn btn-success">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default AddProduct