import ViewProduct from './ViewProducts'
import Cart from './Cart'
import {BrowserRouter, Switch, NavLink, Route} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {useParams,useRouteMatch} from 'react-router-dom' //to get data from url
import { useEffect, useState } from 'react'
import getAxiosWithTokenObj from "../AuthorizesReq/AxiosReqWithToken"

function DashBord() {
  let axiosRequestToken = getAxiosWithTokenObj()
//   useEffect(async()=>{
//     try {
//         let response = await axiosRequestToken.get("/carts/getcount")
//         let data = response.data
//         console.log(data)
//         if(data.message === "count"){
//             //setProducts([...products,...data.payload])
//             console.log(data.payload);
//             //dispatch(incrementProduct(data.payload))
//           //console.log("length:",data.length)
//         }
//         else{
//             alert(data.message)
//             localStorage.clear()
//             //dispatch(clearLoginStatus())
//             // set is success 
//             //history.push("/login")
//         }
//     }catch(e){
//         console.log("e is",e)
//         alert("Somthing went wrong")
//     }
// },[])
let [cartCount, setCartCount] = useState(0);
let [products,setProducts] = useState([])
let countFromStore = useSelector((state)=>state.product.count)
useEffect(async()=>{
  try {
      let response = await axiosRequestToken.get("/carts/getproducts")
      let data = response.data
      setCartCount(data.payload.length)
      console.log(data.payload.length);
      if(data.message === "products"){
          setProducts([...products,...data.payload])
      }
      else{
          alert(data.message)
          localStorage.clear()
          //dispatch(clearLoginStatus())
          // set is success 
         // history.push("/login")
      }
  }catch(e){
      console.log("e is",e)
      alert("Somthing went wrong")
  }
},[countFromStore])
console.log("products:",products)
  let count=useSelector((state)=>state.product.index.length)
  let {userObj} = useSelector((state)=>state.user)
  let {username} = useParams()
  let {path,url} = useRouteMatch()
  let linkStyle={
    color: "#ff0000",
    backgroundColor:"white"
  }
  return (
    <div>
      {/* to get data from url(user name from url) */}
        <div className="bg-dark">
          <h3 className="bg-dark text-white text-end" >Welcome,<span>{username}</span><img src={userObj.profileImage} className="bg-dark float-end rounded-circle"   width="30px" alt="" /></h3>
          {/* <img src={userObj.profileImage} className="bg-dark float-end" width="30px" alt="" /> */}
        <h1 className="bg-dark text-white text-center " >Mobile Expert</h1>
        </div>
        {/* routs for products and cart */}
        <BrowserRouter style={{backgroundColor:"#F2F3F4"}}>
          {/* nav-bar */}
            <ul className="nav justify-content-around p-3 bg-dark" style={{marginTop:"-2%"}}>
              <li className="nav-item " style={{fontSize:"25px"}}>
                <NavLink className="nav-link" activeStyle={linkStyle} to={`${url}/view-product`}>Product</NavLink>
              </li>
              <li className="nav-item " style={{fontSize:"25px"}}>
                <NavLink className="nav-link" activeStyle={linkStyle} to={`${url}/cart`}>Cart <span className="badge badge-primary text-success" activeStyle={linkStyle}>{cartCount}</span></NavLink>
                
                {/* <span class="sr-only">unread messages</span> */}
              </li>
            </ul>
          {/* define routers */}
          <Switch>
            <Route path={`${path}/view-product`}>
              <ViewProduct/>
            </Route>
            <Route path={`${path}/cart`}> 
              <Cart/>
            </Route>
          </Switch>
        </BrowserRouter>
  </div>
  );
}

export default DashBord;
