import axios from 'axios'
import { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom'
import getAxiosWithTokenObj from "../AuthorizesReq/AxiosReqWithToken"
import { decrementCount } from '../store/ProductSlice'
import {clearLoginStatus} from '../store/userSlice'

function Cart(){
    let index=useSelector((state)=>state.product.index)
    
    //console.log(countFromStore)
    //let productId = useSelector((state)=>state.pro._id)
    let product = useSelector((state)=>state.product.product)
    console.log(index)
    console.log(product)
    //console.log(productId);
    let dispatch = useDispatch()
    //let response = await axiosRequestToken.get("/carts/getcount")
    let history = useHistory()
    let axiosRequestToken = getAxiosWithTokenObj()
    let [products,setProducts] = useState([])
    let [temp,setTemp]=useState(0)
    useEffect(async()=>{
    try {
        let response = await axiosRequestToken.get("/carts/getproducts")
        let data = response.data
        if(data.message === "products"){
            setProducts([...data.payload])
            //dispatch(incrementProduct(data.payload))
        }
        else{
            alert(data.message)
            localStorage.clear()
            dispatch(clearLoginStatus())
            // set is success 
            history.push("/login")
        }
    }catch(e){
        console.log("e is",e)
        alert("Somthing went wrong")
    }
},[temp])
const deleteProduct = async (productId)=>{
    console.log(productId)
    // let result = products.find((productObj)=>productObj.productid===productId)
    // console.log("result:",result);
    //const deleteFromCart = async()=>{
        await axios.post(`/carts/deleteFromCart/${productId}`)
    //}
    setTemp(temp+1)
    //deleteFromCart()
    dispatch(decrementCount())
}
    return(
        <div>
            <h1 className="text-center">Your Cart</h1>
            <table className="table table-bordered w-50 mx-auto">
                <thead>
                    <tr>
                        <th>PRODUCT</th>
                        <th>PRICE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((ind)=>{
                            // {
                            //     let count = 0;
                            //     let match = product[ind].price.replace(/[^\d\.]+/,'')
                            //     count = count+parseInt(match)
                            //     console.log(count);
                            // }
                            return(
                                <tr key={ind}>
                                    <td>{ind.productName}</td>
                                    <td>{ind.productPrice}</td>
                                    <td><button className="btn btn-danger" onClick={()=>deleteProduct(ind.productid)}>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Cart