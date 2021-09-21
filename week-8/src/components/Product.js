import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment} from '../store/ProductSlice'
function Product(){
    let productsInStore=useSelector((state)=>state.product.product)
    console.log(productsInStore)
    let dispatch =useDispatch();
    return(
        <div>
            <h1 className="text-center">Products for You</h1>
            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5" >
                {
                    productsInStore.map((pro,index)=>{
                        return(
                            <div className="cols" key={index}>
                                <div className="card mb-4">
                                    <img src={pro.image} alt="" height="100%" width="100%" className="mx-auto"/>
                                    <div className="card-body">
                                        <div >
                                            <h6 className="text-center">{pro.name}</h6>
                                            <p style={{fontSize:"10px"}}>{pro.description}</p>
                                            <h4>{pro.price}</h4>
                                            <button className="btn btn-success float-end" onClick={()=>dispatch(increment(index))}>Add Cart</button>
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
export default Product