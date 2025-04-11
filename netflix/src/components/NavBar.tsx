import logo from "../assets/logo.png"
import search_icon from "../assets/search_icon.svg"
import bell_icon from "../assets/bell_icon.svg"
import profile_icon from "../assets/profile_img.png"
import dropDown_icon from "../assets/caret_icon.svg"
import { useEffect, useRef} from "react"
import { logout } from "../firebase"
import { Link } from "react-router-dom"



const NavBar = () => {
  const navRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    window.addEventListener("scroll", ()=>{
      if (window.scrollY >= 80) {
        navRef.current?.classList.add("bg-black", "bg-opacity-90");
      } else {
        navRef.current?.classList.remove("bg-black", "bg-opacity-90");
      }
    });
  }, []);

  
  return (
    <div ref={navRef}
    className="flex flex-row fixed w-screen z-50 text-white justify-between gap-3 items-center p-1 md:p-3 px-3 lg:px-10 transition-colors duration-500">
      <div className="flex flex-row justify-evenly gap-10 items-center">
        <Link to='/'><img src={logo} alt="" className="w-30"/></Link>
        <ul className="hidden md:flex md:gap-4 lg:gap-10">
          <Link to="/">Home</Link>
          <Link to="/tvShows">TV Shows</Link>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
        </ul>
      </div>
      <div className="flex flex-row justify-between gap-3 lg:gap-5 items-center">
        <img src={search_icon} alt="" className="w-4" />
        <p>Children</p>
        <img src={bell_icon} alt="" className="w-4"/>
        <div className="flex flex-row gap-1 relative group">
          <img src={profile_icon} alt="" className="  cursor-pointer" />
          <img src={dropDown_icon} alt="" className="w-3 cursor-pointer "/>
          <div className="absolute right-0  top-8 p-3 w-max hidden group-hover:block hover:block">
            <p onClick={()=>{logout()}} className="hover:underline cursor-pointer text-[13px]">Sign Out Of Netflix</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default NavBar