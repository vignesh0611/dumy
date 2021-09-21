import AddProduct from './Addproducts'
import ViewProducts from './ViewProducts'
import {BrowserRouter, Switch, NavLink, Route} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {useParams,useRouteMatch} from 'react-router-dom' //to get data from url
function DashBord() {
  //let count=useSelector((state)=>state.product.index.length)
  let {username} = useParams()
  let {path,url} = useRouteMatch()
  let linkStyle={
    color: "#ff0000",
    backgroundColor:"white"
  }
  return (
    <div>
      {/* to get data from url(user name from url) */}
        <h4 className="bg-dark text-white text-end" >Welcome,<span>{username}</span></h4>
        <h1 className="bg-dark text-white text-center " >Mobile Expert</h1>
        {/* routs for products and cart */}
        <BrowserRouter style={{backgroundColor:"#F2F3F4"}}>
          {/* nav-bar */}
            <ul className="nav justify-content-around p-3 bg-dark" style={{marginTop:"-2%"}}>
              <li className="nav-item " style={{fontSize:"25px"}}>
                <NavLink className="nav-link" activeStyle={linkStyle} to={`${url}/add-product`}>Add Product</NavLink>
              </li>
              <li className="nav-item " style={{fontSize:"25px"}}>
                <NavLink className="nav-link" activeStyle={linkStyle} to={`${url}/view-products`}>View Products</NavLink>
                
                {/* <span class="sr-only">unread messages</span> */}
              </li>
            </ul>
          {/* define routers */}
          <Switch>
            <Route path={`${path}/add-product`}>
              <AddProduct/>
            </Route>
            <Route path={`${path}/view-products`}> 
              <ViewProducts/>
            </Route>
          </Switch>
        </BrowserRouter>
  </div>
  );
}

export default DashBord;
