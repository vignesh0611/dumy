import logo from './logo.svg'
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register';
import Login from './components/Login';
import DashBord from './components/userDashBord'
import AdminDashBord from './components/adminDashBord';
import {useDispatch, useSelector} from 'react-redux'
import {MdLocalGroceryStore} from 'react-icons/md'
import { clearLoginStatus } from './store/userSlice';
function App() {
  let{isSuccess}=useSelector(state => state.user)
  let dispatch = useDispatch()
  //logout operation
  const onUserLogout=()=>{
    //remove token from local storage
    localStorage.clear();
    dispatch(clearLoginStatus())
  }
  //style to active link
  let activeLinkStyle={
    color:"#ff0000"
  }
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
  <div className="container-fluid">
    <h1 className="navbar-brand font" href="#"> <MdLocalGroceryStore/> MyStore</h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
        { !isSuccess?
        <>
          <li className="nav-item">
            <NavLink activeStyle={activeLinkStyle} className="nav-link" to="/home">Home<i class="fas fa-home"></i></NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeStyle={activeLinkStyle} className="nav-link" to="/register">Register</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeStyle={activeLinkStyle} className="nav-link" to="/login">Login</NavLink>
          </li>
        </>:
        <li className="nav-item">
          <NavLink activeStyle={activeLinkStyle} className="nav-link" to="/login" onClick={onUserLogout}>Logout</NavLink>
        </li>
        }
      </ul>
    </div>
  </div>
</nav>
<Switch>
  <Route exact path="/">
    <Home/>
  </Route>
  <Route path="/home">
    <Home/>
  </Route>
  <Route path="/register">
    <Register/>
  </Route>
  <Route path="/login">
    <Login/>
  </Route>
  <Route path="/dashbord/:username">
    <DashBord/>
  </Route>
  <Route path="/admindashbord/:username">
    <AdminDashBord/>
  </Route>
</Switch>
    </BrowserRouter>
  );
}

export default App;
