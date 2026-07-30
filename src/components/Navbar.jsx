import { Link } from "react-router-dom";
import links from "../Data/link.js"


function Navbar() {
  return (
    <nav className="w-160 bg-white shadow-md md:w-359 lg:w-380">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          ShopEase
        </h1>
        <div className="flex justify-between items-center gap-8">
        {links.map((link) => (
          <Link to={link.path} key={link.name} className="Active">{link.name}</Link>
        ))}
          <Link to="/cart"><img src="./Cart.svg" alt="Cart" className="h-10 w-10 rounded-4xl"/></Link>
          </div>
        </div>
    </nav>
  );
}

export default Navbar;