

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import './styles/global.scss'
import { Home } from './pages/home'
import { Users } from './pages/users';
import { User } from './pages/user';
import { Products } from './pages/products';
import { Nav } from "./components/navbar/nav";
import { Menu } from "./components/menu/menus";
import { Login } from "./pages/login";
import { Footer } from "./components/footer/footer";
import { Product } from "./pages/product";

function App() {
  const Layout = () => {
    return <div className="main">
      <Nav />
      <div className="contain">
        <div className="menu-container">
          <Menu />
        </div>
        <div className="content-container">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "users", element: <Users /> },
        { path: "users/:id", element: <User /> },
        { path: "orders", element: <Products /> },
        { path: "posts", element: <Users /> },
        { path: "products", element: <Products /> },
        { path: "products/:id", element: <Product /> },
      ]
    },
    {
      path: "login",
      element: <Login />
    }
  ]);

  return <div className="app">
    <RouterProvider router={router} />
  </div>
}

export default App
