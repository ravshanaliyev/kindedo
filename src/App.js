import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Shop from "./pages/Shop";
import News from "./pages/News";
import Account from "./pages/Account";
import WishList from "./pages/WishList";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Programs />} path="/program" />
        <Route element={<Shop />} path="/shop" />
        <Route element={<News />} path="/news" />
        <Route element={<Account />} path="/account" />
        <Route element={<WishList />} path="/wishlist" />
        <Route element={<Cart />} path="/cart" />
        <Route element={<Login />} path="/login" />
      </Routes>
    </div>
  );
}
export default App;
