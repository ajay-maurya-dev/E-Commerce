import { Link } from "react-router-dom";



function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          ShopEase
        </h1>
        <div className="flex justify-between items-center gap-8 font-extrabold">
          <Link to="/" className="">Home</Link>
          <Link to="/about" className="">About</Link>
          <Link to="/contact" className="">Contact</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/wishlist">Wishlist</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;