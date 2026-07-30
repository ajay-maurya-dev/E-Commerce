import Bag from "../assets/Items Images/Bag Woman.jpg"

export default function HeroSection() {
  return (
    <>
      <header>
        <div className="flex justify-center items-center w-80 md:w-355 mx-20 lg:380 ">
            <img src={Bag}  alt="HeadPhone" className="mx-20 ml-30 my-10 w-50 md:w-96 lg:w-113 z-0 bg-white m-1 lg:mx-40 hover:scale-105 transition-all duration-300"/>
            <h1 className="text-4xl lg:text-6xl mx-10 my-25 font-extrabold lg:tracking-tight leading-tight py-10 text-center w-fit text-fuchsia-600">AESTHETIC Women’s Shoulder Handbag</h1>
        </div>
      </header>
    </>
  )
}
