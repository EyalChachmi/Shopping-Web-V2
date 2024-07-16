import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
} from "react-router-dom";
import mainHome from "./Home/mainHome";
import Products from "./Products/products";
import Product from "./Products/products";
import Navbar from "./components/NavBar/navbar";
import "./App.css"
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
        element: <mainHome />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
]);
function App() {
  return <div><RouterProvider router={router}/></div>;
}
export default App;
