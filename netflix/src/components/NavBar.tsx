import logo from "../assets/logo.png"
import search_icon from "../assets/search_icon.svg"
import bell_icon from "../assets/bell_icon.svg"
import profile_icon from "../assets/profile_img.png"
import dropDown_icon from "../assets/caret_icon.svg"
import { useEffect, useState } from "react"




const NavBar = () => {
  const [isScrolled, setIsScrolled]= useState(false)
  
  useEffect(()=>{
    const handleScroll = () => {
      setIsScrolled(window.scrollY>0)
    }
    window.addEventListener("scroll", handleScroll)
  },[])

  
  return (
    <div
    className={`flex flex-row fixed w-screen z-50 text-white justify-between gap-3 items-center p-3 px-10 transition-colors duration-500 ${
      isScrolled ? "bg-black bg-opacity-90" : "bg-transparent"
    }`}
  >
      <div className="flex flex-row justify-evenly gap-10 items-center">
        <img src={logo} alt="" className="w-30"/>
        <ul className="flex gap-10">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="flex flex-row justify-between gap-5 items-center">
        <img src={search_icon} alt="" className="w-4" />
        <p>Children</p>
        <img src={bell_icon} alt="" className="w-4"/>
        <div className="flex flex-row gap-1 relative group ">
          <img src={profile_icon} alt="" className="  cursor-pointer" />
          <img src={dropDown_icon} alt="" className="w-3 cursor-pointer "/>
          <div className="absolute right-0  top-8 p-3 w-max hidden group-hover:block hover:block">
            <p className="hover:underline cursor-pointer text-[13px]">Sign Out Of Netflix</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default NavBar