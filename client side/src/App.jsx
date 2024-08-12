import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
} from "react-router-dom";
import MainHome from "./Home/mainHome";
import Products from "./Products/products";
import Product from "./Products/product";
import Navbar from "./components/NavBar/navbar";
import "./App.css"
import CheckoutPage from "./components/CheckoutPage/CheckoutPage";
import "bootstrap/dist/css/bootstrap.min.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Login from "./components/Login/login";
import Signup from "./components/Signup/signup";




const Comps=()=>{
  return (
    <div className="app">
      <Navbar/>
      <Outlet/>
    </div>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Comps />,
    children: [
      {
        path: "/",
        element: <MainHome/>,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/signup",
        element: <Signup/>
      },
    ],
  },
]);
function App() {
  return <div><RouterProvider router={router}/></div>;
}
export default App;
