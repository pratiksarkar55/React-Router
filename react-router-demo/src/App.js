import React from "react";
import "./App.css";
import { Route, Routes, useRoutes, useNavigate } from "react-router-dom";
import Home from "./Home";
// import About from './About';
import Navbar from "./Navbar";
import OrderSummary from "./OrderSummary";
import Fallback from "./Fallback";
import Products from "./Products";
import FeaturedProducts from "./FeaturedProducts";
import NewProducts from "./NewProducts";
import UserDetails from "./UserDetails";
import Users from "./Users";
import Admin from "./Admin";
import Profile from "./Profile";
import { AuthProvider } from "./auth";
import Login from "./Login";
import RequireAuth from "./RequireAuth";
const LazyAbout = React.lazy(() => import("./About"));

function App() {
  const navigate = useNavigate();
  // const routes = [{
  //   path:'/',
  //   element:<Home/>,
  //   children:[
  //   {
  //     path:"/about",element:<About />
  //   },
  //   {
  //     path:"*",element:<Fallback />
  //   }
  // ]
  // }];

  //   const routing = useRoutes(routes);
  //  console.log(routing);
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/*" element={<Fallback />}></Route>
          <Route
            path="/about"
            element={
              <React.Suspense fallback={"Loading.."}>
                <LazyAbout />
              </React.Suspense>
            }
          ></Route>
          <Route path="/order-summary" element={<OrderSummary />}></Route>
          <Route
            path="/products"
            element={
              <RequireAuth>
                <Products />
              </RequireAuth>
            }
          >
            <Route index element={<FeaturedProducts />} />
            {/* Error Absolute route path "/featured-products" nested under path "/products" is not valid */}
            <Route
              path="/products/featured-products"
              element={<FeaturedProducts />}
            />
            <Route path="new-products" element={<NewProducts />} />
          </Route>
          <Route path="/users" element={<Users />}>
            <Route path=":id" element={<UserDetails />} />
            <Route path="admin" element={<Admin />} />
          </Route>
          <Route
            path="profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          ></Route>
          <Route path="login" element={<Login />}></Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
