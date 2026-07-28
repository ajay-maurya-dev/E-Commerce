import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.pages";
import About from "./pages/About.pages";
import Navbar from "./components/Navbar";


export default function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
