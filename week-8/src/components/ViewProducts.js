import axios from "axios"
import { useEffect, useState } from "react"
import getAxiosWithTokenObj from "../AuthorizesReq/AxiosReqWithToken"
import {useSelector,useDispatch} from 'react-redux'
import {clearLoginStatus} from '../store/userSlice'
//import { useHistory } from "react-router-dom"
import {incrementCount} from "../store/ProductSlice"
import { history } from "../AuthorizesReq/customeHistory"
function ViewProducts(){
    //let {clearLoginStatus}= useSelector(state=>state.user)
    let dispatch = useDispatch()
    //let history = useHistory()
    let axiosRequestToken = getAxiosWithTokenObj()
    let [products,setProducts] = useState([])
    useEffect(async()=>{
        // let response = await axiosRequestToken.get("/products/getproducts")
        // let allProducts = response.data
        // setProducts([...allProducts.payload])
        try {
            let response = await axiosRequestToken.get("/products/getproducts")
            let data = response.data
            if(data.message === "products"){
                setProducts([...data.payload])
            }
            else{
                alert(data.message)
                localStorage.clear()
                // set is success 
                history.push("/login")
                dispatch(clearLoginStatus())
            }
        }catch(e){
            console.log("e is",e)
            alert("Somthing went wrong")
        }
    },[])
    const addProduct = (productId)=>{
        console.log(productId)
        let result = products.find((productObj)=>productObj.productid===productId)
        console.log("result:",result);
        const sendToCart = async()=>{
            let response = await axios.post("/carts/addcart",result)
        }
        sendToCart()
        dispatch(incrementCount())
    }

    return(
        <div>
            <h1 style={{fontSize:"100%"}}>View Products</h1>
            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5" >
                {
                    products.map((pro,index)=>{
                        return(
                            <div className="cols" key={index}>
                                <div className="card mb-4">
                                    <img src={pro.image} alt="" height="100%" width="100%" className="mx-auto"/>
                                    <div className="card-body">
                                        <div >
                                            <h6 className="text-center">{pro.productName}</h6>
                                            <p style={{fontSize:"10px"}}>{pro.productDescription}</p>
                                            <h4>{pro.productPrice}</h4>
                                            <button className="btn btn-success float-end" onClick={()=>addProduct(pro.productid)}>Add Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default ViewProducts


//onClick={()=>dispatch(increment(index))}