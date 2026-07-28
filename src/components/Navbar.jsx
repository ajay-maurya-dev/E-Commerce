import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <>
      <nav className="bg-cyan-600 flex">
      <h1 className="">ShopLogo</h1>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </>
  )
}
